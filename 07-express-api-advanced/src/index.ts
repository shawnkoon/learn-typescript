// Lib
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

// App
import './controllers/LoginController';
import './controllers/RootController';
import { AppRouter } from './AppRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['somekeyvaluexD'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Server is listening at http://localhost:3000 🚀');
});
