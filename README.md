>>>Work Completed

Created Django project structure (tasktracker) and app folders (tasks, accounts).

Designed frontend pages:

Login and Register page with modern responsive UI.

Dashboard layout with sidebar and task analytics section.

Added Django REST API endpoints for user authentication:

/api/login/

/api/register/

/api/logout/

Connected frontend forms with these APIs using JavaScript fetch() calls.

Integrated Bootstrap styling for responsive design.

Set up CORS and REST Framework in settings.py.

>>> Work Not Completed / Issues Faced

Database Connection:
Tried connecting Django to MongoDB using Djongo, but it caused errors due to Python 3.13 compatibility issues.
(Djongo currently supports up to Python 3.11.)

Accounts App Error:
The accounts app could not be created initially because Django tried to load it before it existed, leading to an import error.

Login Not Fully Functional:
The frontend successfully sends login requests, but the backend fails to respond because the database setup was incomplete.

Analytics Section:
The dashboard layout includes a placeholder for analytics (like completed vs pending tasks), but the actual analytics logic is not yet implemented.

>>> Challenges Faced

Djongo incompatibility with Python 3.13 prevented MongoDB connection.

Time constraints caused partial completion of account setup and CRUD task logic.

First time working with full-stack integration (frontend ↔ backend ↔ database).

>>> Future Work

Recreate virtual environment using Python 3.11 for MongoDB support.

Complete the accounts app (user registration, login).

Implement task CRUD operations and analytics charts.

Deploy the working version online.
