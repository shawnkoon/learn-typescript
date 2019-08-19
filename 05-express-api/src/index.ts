import express from 'express';
import { router } from './routes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['somekeyvaluexD'] }));
app.use(router);

app.listen(3000, () => {
  console.log('Server is listening at http://localhost:3000 🚀');
});
