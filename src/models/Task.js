const db = require("../db/database");

const Task = {
  getAll: (callback) => {
    db.all("SELECT * FROM tasks", [], callback);
  },

  create: (task, callback) => {
    const { titulo, descripcion } = task;
    const now = new Date().toISOString();
    db.run(
      `INSERT INTO tasks (titulo, descripcion, fechaCreacion, fechaActualizacion) VALUES (?, ?, ?, ?)`,
      [titulo, descripcion, now, now],
      function (err) {
        if (err) return callback(err);
        callback(null, { id: this.lastID, ...task, status: "pendiente", fechaCreacion: now, fechaActualizacion: now });
      }
    );
  },

  updateStatus: (id, status, callback) => {
    const now = new Date().toISOString();
    db.run(
      `UPDATE tasks SET status = ?, fechaActualizacion = ? WHERE id = ?`,
      [status, now, id],
      function (err) {
        callback(err, this);
      }
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM tasks WHERE id = ?`, [id], function (err) {
      callback(err, this);
    });
  }
};

module.exports = Task;
