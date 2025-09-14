// pages/api/auth/register.js
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Tenant from "@/models/Tenant";
import User from "@/models/User";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method !== "POST") return res.status(405).end();
  await connectDB();
  const { email, password, role = "MEMBER", tenantSlug, tenantName } = req.body || {};
  if (!email || !password || !tenantSlug || !tenantName) return res.status(400).json({ error: "Missing fields" });

  const tenant = await Tenant.findOneAndUpdate(
    { slug: tenantSlug.toLowerCase() },
    { slug: tenantSlug.toLowerCase(), name: tenantName },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) return res.status(400).json({ error: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({
    email: email.toLowerCase(),
    password: hashed,
    role: role.toUpperCase(),
    tenant: tenant._id
  });

  return res.status(201).json({ ok: true, userId: user._id });
}
