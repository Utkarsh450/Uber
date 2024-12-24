# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their full name, email, and password. Upon successful registration, a JWT token and user details are returned.

## Request Body
The request body must be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}

Response
Success (201 Created)
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "_id": "USER_ID_HERE",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

Error (400 Bad Request)
{
  "errors": [
    {
      "msg": "Fullname must be at least 3 characters long",
      "param": "fullname",
      "location": "body"
    },
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

Validation
The following validations are applied to the request body:

fullname.firstname must be at least 3 characters long.
fullname.lastname must be at least 3 characters long.
email must be a valid email address.
password must be at least 6 characters long.
Status Codes
201 Created: The user was successfully registered.
400 Bad Request: The request body contains invalid data

