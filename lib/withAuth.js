// lib/withAuth.js
import { verifyTokenFromHeader } from "./auth";

export function withAuth(handler, { roles = [] } = {}) {
  return async (req, res) => {
    try {
      const payload = verifyTokenFromHeader(req);
      req.user = payload; // { userId, role, tenantId, tenantSlug }
      if (roles.length && !roles.includes(payload.role)) {
        return res.status(403).json({ error: "Forbidden" });
      }
      return handler(req, res);
    } catch (err) {
      return res.status(401).json({ error: err.message || "Unauthorized" });
    }
  };
}
