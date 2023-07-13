<h1>Movie API Documentation</h1>
<p>This documentation provides information about the RESTful API endpoints available in the Movie API.</p>

<h2>Base URL</h2>

```
http://localhost:3000/api
```

<h3>Endpoints</h3>

<h4>1. Retrieve All Movies</h4>
<ul>
  <li>URL: /movies</li>
  <li>Method: GET</li>
  <li>Description: Retrieves a list of all movies.</li>
  <li>Response: <br>
Status: 200 OK <br>
Body:
</li>
</ul>

```
{
  "status": "success",
  "results": <number_of_results>,
  "data": {
    "rows": [
      {
        "id": <movie_id>,
        "title": <movie_title>,
        "release_year": <release_year>,
        "genre": <movie_genre>
      },
    ]
  }
}
```

<br><br>

<h4>2. Retrieve a Specific Movie</h4>
<ul>
  <li>URL: /movies</li>
  <li>Method: GET</li>
  <li>Description:  Retrieves information about a specific movie based on its ID.</li>
  <li> Parameters:
    <ul>
    <li>id (required): The ID of the movie.</li>
      </ul>
  </li>
  <li>Response: <br>
Status: 200 OK <br>
Body:
</li>
</ul>

```
{
  "status": "success",
  "data": {
    "rows": [
      {
        "id": <movie_id>,
        "title": <movie_title>,
        "release_year": <release_year>,
        "genre": <movie_genre>
      }
    ]
  }
}
```
<br><br>

<h4>3. Add a new movie</h4>
<ul>
  <li>URL: /movies</li>
  <li>Method: POST</li>
  <li>Description:  Adds a new movie to the database.</li>
  <li>Request Body:

  ```
  {
    "id": <movie_id>,
    "title": <movie_title>,
    "release_year": <release_year>,
    "genre": <movie_genre>
  }
  ```
  
  </li>
  <li>Response: <br>
Status: 201 Created <br>
Body:
</li>
</ul>

```
{
  "status": "success",
  "data": {
    "rows": [
      {
        "id": <movie_id>,
        "title": <movie_title>,
        "release_year": <release_year>,
        "genre": <movie_genre>
      }
    ]
  }
}
```

<br><br>

<h4>4. Update a movie</h4>
<ul>
  <li>URL: /movies</li>
  <li>Method: PATCH</li>
  <li>Description:  Updates an existing movie in the database.</li>
  <li>Request Body:

  ```
  {
    "id": <movie_id>,
    "title": <movie_title>,
    "release_year": <release_year>,
    "genre": <movie_genre>
  }
  ```
  
  </li>
  <li>Response: <br>
Status: 201 Created <br>
Body:
</li>
</ul>

```
{
  "status": "success",
  "data": {
    "rows": [
      {
        "id": <movie_id>,
        "title": <movie_title>,
        "release_year": <release_year>,
        "genre": <movie_genre>
      }
    ]
  }
}
```

<br><br>

<h4>5. Delete a movie</h4>
<ul>
  <li>URL: /movies/:id</li>
  <li>Method: PATCH</li>
  <li>Description:  Updates an existing movie in the database.</li>
  <li> Parameters:
    <ul>
    <li>id (required): The ID of the movie.</li>
      </ul>
  </li>
  <li>Response: 
    <ul>
      <li>Status: 204 No Content</li>
    </ul>
  </li>
