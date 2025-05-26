const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./tasks.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      descripcion TEXT,
      status TEXT DEFAULT 'pendiente',
      fechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP,
      fechaActualizacion DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
});

module.exports = db;
