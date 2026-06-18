CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  country TEXT,
  city TEXT,
  lat NUMERIC,
  lng NUMERIC,
  notes TEXT,
  status TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE hunters (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  region TEXT,
  contact TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE deals (
  id SERIAL PRIMARY KEY,
  property_id INTEGER REFERENCES properties(id),
  hunter_id INTEGER REFERENCES hunters(id),
  commission_percent NUMERIC,
  commission_amount NUMERIC,
  status TEXT,
  created_at TIMESTAMP DEFAULT now()
);
