import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRouter from './routes/weather.js';
import aqiRouter from './routes/aqi.js';
import routeRouter from './routes/routes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRouter);
app.use('/api/aqi', aqiRouter);
app.use('/api/routes', routeRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
