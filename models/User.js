// models/User.js
import mongoose from "mongoose";
import "./Tenant.js"; // ensure Tenant is registered before User (for populate)

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["ADMIN", "MEMBER"], required: true },
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);
