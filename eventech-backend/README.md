# Eventech (Event Management) Backend

## Overview
The Event Management backend provides a RESTful API for managing events and attendees. It serves as the data source for the Event Management Frontend.

## Features

* Admin/Organizer Portal to create, update, and delete events.
* Attendee Portal to register for events
* View event details and attendee information

## Prequisites

* Python 3.9.18

## Getting Started

1. Clone this repository: ```git clone https://github.com/ValiantDmello/Eventech.git```
2. Navigate to the project directory: ```cd eventech_backend```
3. Create a virtual environment and activate it: ```python -m venv venv``` <br>
```source venv/bin/activate```
4. Install the required dependencies: ```pip install -r requirements.txt```
5. Apply database migrations: ```python manage.py migrate```
6. Start the development server: ```python manage.py runserver```
7. The API will be available at http://localhost:8000.

## API Documentation
For detailed API documentation, visit the /docs endpoint after running the server (e.g., http://localhost:8000/docs).
