<h1>Movie API Documentation</h1>
<p>This documentation provides information about the RESTful API endpoints available in the Movie API.</p>

<h2>Base URL</h2>

```
http://localhost:3000/api
```

<h3>Endpoints</h3>

Retrieve all movies
URL: /movies
Method: GET
Description: Retrieves a list of all movies.
Response:
Status: 200 OK
Body:
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
