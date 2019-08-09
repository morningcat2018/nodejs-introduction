import express from 'express';
import {
    HelloController
} from './controller';

const app: express.Application = express();
const port: number = +process.env.PORT || 5432;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/hello', HelloController);

app.use((err: Error & { status: number }, req, res, next) => {
    res.json({
        status: err.status || -1,
        message: err.message
    })
});

app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
