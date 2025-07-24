// to make the file a module and avoid the TypeScript error
export type {};

declare global {
  namespace Express {
    export interface Request {
      user?: JwtPayload & { id: number; email?: string; name?: string };
      /* ************************************************************************* */
      // Add your custom properties here, for example:
      //
      // user?: { ... }
      /* ************************************************************************* */
    }
  }
}
