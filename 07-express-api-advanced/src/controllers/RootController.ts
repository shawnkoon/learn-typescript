import { Request, Response, NextFunction } from 'express';
import { controller, get, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.set(403);
  res.send(`
        <div>
          <div>Unauthorized. Please login first.</div>
          <a href="/auth/login">Back to Login</a>
        </div>`);
  return;
}

@controller()
export class RootController {
  @get('/')
  getRoot(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <div>You are logged in!</div>
        <a href="/auth/logout">Logout</a>
      </div>
    `);
    } else {
      res.send(`
      <div>
        <div>You are NOT logged in!</div>
        <a href="/auth/login">Login</a>
      </div>
    `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send('Welcome, logged in user!');
  }
}
