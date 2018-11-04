import express from 'express';
import bodyParser from 'body-parser';
import routes from '../routes/route';
import morgan from 'morgan';

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(morgan("dev"));
const PORT = process.env.port || 4000;

app.use('/parcels', routes);

app.listen(PORT, () => {
    console.log(`Express app running on port ${PORT}`)
})
export default app;