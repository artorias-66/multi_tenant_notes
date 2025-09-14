// lib/auth.js
import jwt from "jsonwebtoken";

export function signToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "8h" });
}

export function verifyTokenFromHeader(req) {
  const auth = req.headers.authorization || req.headers.Authorization;
  if (!auth) throw new Error("No authorization header");
  const t = auth.split(" ");
  if (t.length !== 2) throw new Error("Bad authorization header");
  const token = t[1];
  return jwt.verify(token, process.env.JWT_SECRET);
}
