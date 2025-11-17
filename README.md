# OC Project 6: JustStreamIt

This project is carried out as part of the OpenClassrooms training program. 
JustStreamIt is a frontend application that displays movie data retrieved from a local API.

## Tech stack
- HTML
- CSS
- Vanilla JavaScript
- Local REST API
- Live Server for local development

## Features
- Display the overall best-rated movie
- Display best-rated movies filtered by category (Action, Sci-fi, etc.)
- Interactive dropdown menu allowing dynamic category filtering
- Modal window showing detailed movie information
- "See more"/"See less” system using a CSS-only checkbox solution

## Installation
1. Clone the API:
```bash
git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git
```

2. Create/Activate virtual environnement:
```bash
cd ocmovies-api-en-fr
python -m venv env

# On Windows:
.\env\Scripts\activate

# On macOS / Linux:
source env/bin/activate
```

3. Start API server:
```bash
python manage.py runserver
```

4. Clone this repository:
```bash
git clone https://github.com/anselmlys/OC_P6_JustStreamIt.git
```

5. Launch the frontend:

Use Live Server (VS Code extension):
- Right-click index.html
- Select "Open with Live Server"

## API usage
Base URL: http://127.0.0.1:8000/api/v1/

Endpoints used:
- /titles/ -list of all movies
- /genres/ -list of all categories
- /titles/{id} -detailed movie information
- Pagination: ?page= and ?page_size=
- Filtering: ?genre=...
- Sorting: ?sort_by=-imdb_score

For more information regarding the API: https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

## Known issues
- Some movie posters provided by the API return 404 errors. Those posters are replaced using onerror handler.

## Design
The design of this page is based on the following Figma model:
https://www.figma.com/design/6KzVM5R2pOBX637RcVWjJ7/Maquettes-JustStreamIt?node-id=0-1&p=f&t=zJgKN4KsCThnjkA9-0

## Notes
This app is designed for educational purposes only.

## Author
Anselmlys