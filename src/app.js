import express from 'express';
import bodyParser from 'body-parser';
import routes from '../routes/route';
import morgan from 'morgan';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 4000;


app.use('/api/v1/', routes);
// catching an error before passing it to the erro handler
app.use((req, res, next) => {
    let err = new Error('this page was not found');
    err.status = 404;
    next(err);
})
// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
})


app.listen(PORT, () => {
    console.log(`Express app running on port ${PORT}`)
})
export default app;