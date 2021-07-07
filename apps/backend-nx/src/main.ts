import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());

app.get('/', (request, response)=> response.json({message: 'Backend: Hello Silbeck'}));

app.listen(PORT, () => console.log(`--> Server running in http://localhost:${PORT} <--`));

console.log(process.env.TESTE);
