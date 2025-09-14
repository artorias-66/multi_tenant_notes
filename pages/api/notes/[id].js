// pages/api/notes/[id].js
import { connectDB } from "@/lib/db";
import Note from "@/models/Note";
import { withAuth } from "@/lib/withAuth";

async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") return res.status(200).end();
  await connectDB();
  const { id } = req.query;
  const tenantId = req.user.tenantId;

  const note = await Note.findOne({ _id: id, tenant: tenantId });
  if (!note) return res.status(404).json({ error: "Not found" });

  if (req.method === "GET") {
    return res.json({ note });
  }

  if (req.method === "PUT") {
    const { title, content } = req.body || {};
    const updated = await Note.findOneAndUpdate({ _id: id, tenant: tenantId }, { title, content }, { new: true });
    return res.json({ note: updated });
  }

  if (req.method === "DELETE") {
    await Note.deleteOne({ _id: id, tenant: tenantId });
    return res.json({ ok: true });
  }

  return res.status(405).end();
}

export default withAuth(handler); // members + admins allowed
