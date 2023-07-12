const connection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/api/movies", (req, res) => {
  connection.query("SELECT * FROM movies;", (err, rows) => {
    if (err) {
      console.log(err)
    }
    res.status(200).json({
      status: "success",
      results: rows.length,
      data: {
        rows,
      }
    });
  });
});

app.get("/api/movies/:id", (req, res) => {
  connection.query("SELECT * FROM movies WHERE id=?;", [req.params.id], (err, rows) => {
    if (err) {
      console.log(err)
    }
    res.status(200).json({
      status: "success",
      data: {
        rows,
      }
    });
  });
});

app.post("/api/movies", (req, res) => {
  let movie = req.body;
  let movieData = [movie.id, movie.title, movie.release_year, movie.genre];
  connection.query("INSERT INTO movies(id, title, release_year, genre) VALUES (?)", [movieData], (err, rows) => {
    if (err) {
      console.log(err)
    }
    res.status(201).json({
      status: "success",
      data: {
        rows,
      }
    });
  });
});

app.patch("/api/movies", (req, res) => {
  let movie = req.body;
  console.log()
  // let movieData = [movie.id, movie.title, movie.release_year, movie.genre];
  connection.query(`UPDATE movies SET ? WHERE id=${movie.id}`, [movie], (err, rows) => {
    if (err) {
      console.log(err)
    }
    // console.log("here ->", rows);
    res.status(201).json({
      status: "success",
      data: {
        rows,
      }
    });
  });
});

app.delete("/api/movies/:id", (req, res) => {
  connection.query("DELETE FROM movies WHERE id=?;", [req.params.id], (err, rows) => {
    if (err) {
      console.log(err)
    }
    res.status(204).json({
      status: "success",
      data: {
        rows,
      }
    });
  });
});

app.listen(3000, () => console.log("Server Running on Port 3000 ✅"));