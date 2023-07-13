Movie API Documentation
This documentation provides information about the RESTful API endpoints available in the Movie API.

Base URL
http://localhost:3000/api

Endpoints

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
