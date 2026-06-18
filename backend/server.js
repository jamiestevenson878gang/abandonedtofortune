const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory sample data (replace with DB in production)
let properties = [
  {
    id: 1,
    title: 'Empty Victorian in Manchester',
    country: 'UK',
    city: 'Manchester',
    lat: 53.4808,
    lng: -2.2426,
    notes: 'No recent sales, boarded windows',
    status: 'new'
  },
  {
    id: 2,
    title: 'Derelict villa in Tenerife',
    country: 'Spain',
    city: 'Tenerife',
    lat: 28.2916,
    lng: -16.6291,
    notes: 'Long-term empty, overgrown garden',
    status: 'new'
  }
];

let hunters = [
  { id: 1, name: 'Coastal Villa Buyer', region: 'Spain', contact: 'buyer1@example.com' },
  { id: 2, name: 'US Rehab Investor', region: 'USA', contact: 'buyer2@example.com' }
];

let deals = [];

// Routes
app.get('/api/health', (req, res) => res.json({ ok: true }));

app.get('/api/properties', (req, res) => {
  // Simple filtering by country or city
  const { country, city } = req.query;
  let results = properties;
  if (country) results = results.filter(p => p.country.toLowerCase() === country.toLowerCase());
  if (city) results = results.filter(p => p.city.toLowerCase() === city.toLowerCase());
  res.json(results);
});

app.post('/api/properties', (req, res) => {
  const prop = req.body;
  prop.id = properties.length + 1;
  properties.push(prop);
  res.status(201).json(prop);
});

app.get('/api/hunters', (req, res) => res.json(hunters));
app.post('/api/hunters', (req, res) => {
  const h = req.body;
  h.id = hunters.length + 1;
  hunters.push(h);
  res.status(201).json(h);
});

app.post('/api/deals', (req, res) => {
  const d = req.body;
  d.id = deals.length + 1;
  d.created_at = new Date().toISOString();
  deals.push(d);
  res.status(201).json(d);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
