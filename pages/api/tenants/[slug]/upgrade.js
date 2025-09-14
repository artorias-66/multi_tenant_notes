// pages/api/tenants/[slug]/upgrade.js
import { connectDB } from "@/lib/db";
import Tenant from "@/models/Tenant";
import { withAuth } from "@/lib/withAuth";

async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method !== "POST") return res.status(405).end();

  const { slug } = req.query;
  await connectDB();

  // Ensure admin belongs to same tenant
  if (req.user.tenantSlug !== slug) return res.status(403).json({ error: "Forbidden" });

  const t = await Tenant.findOneAndUpdate({ slug }, { plan: "PRO" }, { new: true });
  if (!t) return res.status(404).json({ error: "Not found" });
  return res.json({ ok: true, plan: t.plan });
}

export default withAuth(handler, { roles: ["ADMIN"] });
