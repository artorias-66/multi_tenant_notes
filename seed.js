// seed.js
import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Tenant from "./models/Tenant.js";
import User from "./models/User.js";
import Note from "./models/Note.js";
import { connectDB } from "./lib/db.js";

async function main() {
  await connectDB();

  // Clean - optional
  await Note.deleteMany({});
  await User.deleteMany({});
  await Tenant.deleteMany({});

  const acme = await Tenant.create({ name: "Acme", slug: "acme", plan: "FREE" });
  const globex = await Tenant.create({ name: "Globex", slug: "globex", plan: "FREE" });

  const pw = "password";
  const hash = await bcrypt.hash(pw, 10);

  await User.create({ email: "admin@acme.test", password: hash, role: "ADMIN", tenant: acme._id });
  await User.create({ email: "user@acme.test", password: hash, role: "MEMBER", tenant: acme._id });

  await User.create({ email: "admin@globex.test", password: hash, role: "ADMIN", tenant: globex._id });
  await User.create({ email: "user@globex.test", password: hash, role: "MEMBER", tenant: globex._id });

  // optional seed notes
  await Note.create({ title: "Hello Acme", content: "First note", tenant: acme._id });
  await Note.create({ title: "Hello Globex", content: "First note", tenant: globex._id });

  console.log("✅ Seeded Acme and Globex with test users (password: password)");
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
