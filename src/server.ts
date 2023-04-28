import express, {json} from 'express';
import router from './routes/router'


const dotenv = require('dotenv');
const app = express();
// const port = 3000;
const port = Number(process.env.PORT)

app.use(json())
app.use('/', router)


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});