import React, { useEffect, useState } from 'react';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/properties`)
      .then(r => r.json())
      .then(setProperties)
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Abandoned to Fortune</h1>
        <p>Find abandoned properties. Pitch to buyers. Earn commission.</p>
      </header>

      <main>
        <section className="list">
          <h2>Properties</h2>
          {properties.length === 0 && <p>Loading...</p>}
          <ul>
            {properties.map(p => (
              <li key={p.id}>
                <strong>{p.title}</strong>
                <div>{p.city}, {p.country}</div>
                <div>{p.notes}</div>
              </li>
            ))}
          </ul>
        </section>

        <aside className="controls">
          <h3>Add Property (demo)</h3>
          <p>Use the backend API to POST /api/properties</p>
        </aside>
      </main>

      <footer>
        <small>Prototype • Build and iterate</small>
      </footer>
    </div>
  );
}

export default App;
