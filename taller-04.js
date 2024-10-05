const express = require("express");
const app = express();
app.use(express.json()); 


let users = [
    { id: 1, name: "Robin Restrepo", carrera: "Psicología", hobbies: ["leer", "música"], team: "Equipo A", experiencia: 5, faction: "Alpha" },
    { id: 2, name: "Juan Pérez", carrera: "Ingeniería", hobbies: ["deportes", "cocina"], team: "Equipo A", experiencia: 3, faction: "Beta" },
    { id: 3, name: "Ana Gómez", carrera: "Medicina", hobbies: ["arte", "música"], team: "Equipo B", experiencia: 8, faction: "Alpha" }
];


app.get("/users/hobby", (req, res) => {
    const { hobby } = req.query; 
    const usersWithHobby = users.filter(user => user.hobbies.includes(hobby));
    res.json(usersWithHobby);
});


app.get("/users/exists/:id", (req, res) => {
    const { id } = req.params;
    const userExists = users.some(user => user.id === parseInt(id));
    res.json({ exists: userExists });
});


app.get("/users/team-experience", (req, res) => {
    const { team } = req.query; 
    if (!team) {
        return res.status(400).json({ error: "Debe proporcionar un equipo (team) en la consulta." });
    }
    const teamUsers = users.filter(user => user.team.toLowerCase() === team.toLowerCase());
    if (teamUsers.length === 0) {
        return res.status(404).json({ message: `No se encontraron usuarios en el equipo ${team}` });
    }
    const totalExperience = teamUsers.reduce((acc, user) => acc + (Number(user.experiencia) || 0), 0);
    res.json({ totalExperience });
});


app.get("/users/by-faction", (req, res) => {
    const { faction } = req.query;
    const factionUsers = users.filter(user => user.faction === faction);
    res.json(factionUsers);
});


app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length ? users[users.length - 1].id + 1 : 1; 
    users.push(newUser);
    res.status(201).json(newUser);
});


app.listen(3000, () => {
    console.log("Servidor ejecutándose en http://localhost:3000");
});