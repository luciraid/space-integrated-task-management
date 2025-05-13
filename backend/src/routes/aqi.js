import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  const { city } = req.query;
  const base = process.env.AQI_API_URL;
  try {
    const response = await axios.get(`${base}?city=${city}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'AQI fetch failed' });
  }
});

export default router;