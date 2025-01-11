import express from 'express';
import {shortnerRoutes} from './routes/shortner.routes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

//express router
// app.use(router);
app.use(shortnerRoutes);

app.listen(PORT, () => {
    console.log(`Server Running At http://localhost:${PORT}`);
});