const express = require('express');

const server = express();

server.use(express.json());

server.listen(3000);

const projects = [];

server.post('/projects', (req, res) => {

  const project = req.body;

  projects.push(project);

  return res.json(projects);

});

server.get('/projects', (req, res) => {

  return res.json(projects);

});

server.get('/projects/:id',(req, res) => {

  const { id } = req.params;

  return res.json(projects[id]);
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;

  const returnProject= req.body;
  projects[id] = returnProject;

  return res.json(projects);

});

server.delete('/projects/:id', (req, res) => {

  const { id } = req.params;

  projects[id].delete;

  return res.json({"message": "Projecto deletado com sucesso!!"});

});

