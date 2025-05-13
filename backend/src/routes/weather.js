import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  const latitude = 12.97;
  const longitude = 77.59;
  const url = `https://api.open-meteo.com/v1/forecast`
            + `?latitude=${latitude}`
            + `&longitude=${longitude}`
            + `&daily=weathercode,temperature_2m_max,temperature_2m_min`
            + `&timezone=Asia%2FKolkata`;

  try {
    const response = await axios.get(url);
    res.json(response.data.daily);
  } catch (err) {
    console.error('Open-Meteo error:', err.message);
    res.status(500).json({ error: 'Open-Meteo fetch failed' });
  }
});

export default router;
