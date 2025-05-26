const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

module.exports = (io) => {
  router.post("/", (req, res) => {
    const { titulo, descripcion } = req.body;
    if (!titulo || titulo.length > 100) return res.status(400).json({ error: "Título inválido" });

    Task.create({ titulo, descripcion }, (err, task) => {
      if (err) return res.status(500).json({ error: err.message });
      io.emit("newTask", task);
      res.status(201).json(task);
    });
  });

  router.get("/", (req, res) => {
    Task.getAll((err, tasks) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(tasks);
    });
  });

  router.put("/:id", (req, res) => {
    const { status } = req.body;
    Task.updateStatus(req.params.id, status, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.changes === 0) return res.status(404).json({ error: "Tarea no encontrada" });

      io.emit("taskUpdated", { id: parseInt(req.params.id), status });
      res.json({ id: parseInt(req.params.id), status });
    });
  });

  router.delete("/:id", (req, res) => {
    Task.delete(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.changes === 0) return res.status(404).json({ error: "Tarea no encontrada" });

      io.emit("taskDeleted", { id: parseInt(req.params.id) });
      res.json({ id: parseInt(req.params.id) });
    });
  });

  return router;
};
