const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const _ = require("lodash");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = 3000;

// JSON DB init
const adapter = new FileSync("db.json");
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({
  nextSongId: 2,
  playlist: {
    lastUpdated: Date.now(),
    songs: [
      {
        id: 1,
        title: "Frozen",
        artist: "Madonna",
        cover: "https://www.lololyrics.com/img/cover/free/7442.jpeg",
        url: 'https://www.youtube.com/watch?v=XS088Opj9o0',
      },
    ],
  },
}).write();

// parse application/json
app.use(bodyParser.json());

/***********************************************
 *                 API ROUTES
 **********************************************/

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/playlist", (req, res) => {
  console.log("Get playlist info");
  const playlist = db.get("playlist").value();
  playlist.songs = playlist.songs.map((song) => _.pick(song, ["id", "title"]));

  return res.json(playlist);
});

app.post("/playlist/song", (req, res) => {
  const song = req.body;

  // Input validation
  if (!song || !song.title || !song.artist || !song.url) {
    res.status(400).send("Invalid Song Data");
    return;
  }

  const nextId = db.get("nextSongId").value();
  song.id = nextId;
  song.heart = false;

  console.log("Add song to playlist", song);

  db.get("playlist.songs").push(song).write();
  db.set("nextSongId", nextId + 1).write();
  db.set("playlist.lastUpdated", Date.now()).write();

  res.json({song});
});

app.post("/song/:id/heart", (req, res) => {
  const heartStatus = req.body.heartStatus;
  if (heartStatus == undefined || typeof heartStatus !== "boolean") {
    res.status(400).send('Invalid heart status');
    return
  }


  let id;
  try {
    id = parseInt(req.params.id);
  } catch (err) {
    res.status(400).send("Invalid song Id");
    return;
  }

  const song = db.get('playlist.songs').find({ id }).assign({ heart: heartStatus }).write();

  res.json(song)
});

app.get("/song/:id", (req, res) => {
  let id;
  try {
    id = parseInt(req.params.id);
  } catch (err) {
    res.status(400).send("Invalid song Id");
    return;
  }

  console.log("Get song with id", id);

  const song = db.get("playlist.songs").find({ id }).value();
  res.json(song);
});


/***********************************************
 *               SERVER INIT
 **********************************************/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
