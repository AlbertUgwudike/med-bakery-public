import express = require('express');
import cors = require('cors');
import path = require('path');
import questionRouter from './routes/questions';
import userRouter from './routes/users';
import productRouter from './routes/products';
import ecgRouter from './routes/ecgs';
import devRouter from './routes/dev';
import { connectToDatabase } from "./services/database.service"
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

connectToDatabase(process.env.URI_MEDBAKERY).then(() => {

    const port = process.env.PORT || 3001;
    const app = express();

    app.use(cors());
    app.use(express.json());

    // for deployment: ensure paths point to html file in build folder -------

    app.use(express.static(__dirname + "/../../client/build"))
    app.get('/*', function (req, res) {
        res.sendFile(path.resolve(__dirname + "/../../client/build/index.html"));
    });
    
    // -----------------------------------------------------------------------

    app.use('/questions', questionRouter); 
    app.use('/users', userRouter);
    app.use('/products', productRouter)
    app.use('/ecgs/', ecgRouter);
    app.use('/dev', devRouter)

    app.listen(port, () => {
        console.log("Server is go at port " + port + "!");
    });
})

.catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
});
