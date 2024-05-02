export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      access?: boolean;
    };
  }
}
