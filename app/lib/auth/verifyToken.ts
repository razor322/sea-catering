import { jwtVerify } from "jose";

// utils/token.ts
export async function verifyToken(token: string): Promise<{
  valid: boolean;
  payload: { userId: string; role: string } | null;
}> {
  try {
    const decoded = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET!)
    );
    return {
      valid: true,
      payload: decoded.payload as { userId: string; role: string },
    };
  } catch {
    return { valid: false, payload: null };
  }
}
