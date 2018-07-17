import express = require('express');
import {WelcomeController} from './src/controllers';

const app: express.Application = express();
const port: string|number = process.env.PORT || 3000;

app.use('/welcome', WelcomeController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});