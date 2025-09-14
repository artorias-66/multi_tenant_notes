// pages/api/notes/index.js
import { connectDB } from "@/lib/db";
import Note from "@/models/Note";
import Tenant from "@/models/Tenant";
import { withAuth } from "@/lib/withAuth";

async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") return res.status(200).end();
  await connectDB();
  const { method } = req;
  const tenantId = req.user.tenantId;

  if (method === "GET") {
    // List all notes for tenant
    const notes = await Note.find({ tenant: tenantId }).sort({ createdAt: -1 });
    return res.json({ notes });
  }

  if (method === "POST") {
    // Only members or admins can create notes; withAuth ensures roles are fine
    // Enforce plan limit
    const tenant = await Tenant.findById(tenantId);
    const count = await Note.countDocuments({ tenant: tenantId });
    if (tenant.plan === "FREE" && count >= 3) {
      return res.status(403).json({ error: "PLAN_LIMIT", message: "Free plan limit reached" });
    }
    const { title = "", content = "" } = req.body || {};
    const note = await Note.create({ title, content, tenant: tenantId, author: req.user.userId });
    return res.status(201).json({ note });
  }

  return res.status(405).end();
}

export default withAuth(handler); // both ADMIN and MEMBER allowed
