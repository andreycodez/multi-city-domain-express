import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import HttpStatusCode from './constants/http-status-code-dictionary';

dotenv.config();

const { OK } = HttpStatusCode;
const app = express();
const port = process.env.APP_CONFIG_PORT || 4001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  console.log(req);
  res.status(OK).send({
    data: 'Success!'
  })
})

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
})
