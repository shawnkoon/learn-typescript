import { Request, Response, NextFunction } from 'express';
import { Router } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.set(403);
  res.send(`
        <div>
          <div>Unauthorized. Please login first.</div>
          <a href="/login">Back to Login</a>
        </div>`);
}

const router = Router();

router.get('/login', (req: RequestWithBody, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password) {
    if (email !== 'test@test.com') {
      res.send(`
        <div>
          <div>Invalid email. Please use - test@test.com</div>
          <a href="/login">Back to Login</a>
        </div>`);
    }

    if (password !== 'pass') {
      res.send(`
        <div>
          <div>Invalid password. Please use - pass</div>
          <a href="/login">Back to Login</a>
        </div>`);
    }

    req.session = { loggedIn: true };

    res.redirect('/');
  } else {
    res.send('Email or password not found.');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in!</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are NOT logged in!</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome, logged in user!');
});

export { router };
