import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
export class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button>Log In</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email !== 'test@test.com') {
      res.send(`
        <div>
          <div>Invalid email. Please use - test@test.com</div>
          <a href="/auth/login">Back to Login</a>
        </div>`);
      return;
    }

    if (password !== 'pass') {
      res.send(`
        <div>
          <div>Invalid password. Please use - pass</div>
          <a href="/auth/login">Back to Login</a>
        </div>`);
      return;
    }

    req.session = { loggedIn: true };

    res.redirect('/');
  }

  @get('/logout')
  getLogOut(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect('/');
  }
}
