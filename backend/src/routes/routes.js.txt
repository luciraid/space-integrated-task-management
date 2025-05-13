import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  const { from, to } = req.query;
  const key = process.env.NAVIC_API_KEY;
  try {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=${key}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Route fetch failed' });
  }
});

export default router;