# User Registration API Documentation

## Endpoint Overview
- **URL**: /users/register
- **Method**: POST
- **Description**: Registers a new user.

## Request Format
### Headers
```http
Content-Type: application/json
```

### Body
```json
{
    "username": "exampleUser",
    "email": "user@example.com",
    "password": "securePassword123"
}
```

## Response Format
### Success (201 Created)
```json
{
    "message": "User registered successfully!",
    "userId": "123456"
}
```

### Error Responses
- **400 Bad Request**: Missing or invalid fields.
- **409 Conflict**: Email already exists.
- **500 Internal Server Error**: Unexpected error.

## Status Codes
| Code | Description              |
|------|--------------------------|
| 201  | User successfully created |
| 400  | Bad request               |
| 409  | Conflict                  |
| 500  | Internal server error     |


# API Documentation

## Login Endpoint
`POST /users/login`

### Description
Authenticates a user and returns a JWT token

### Request Format
#### Headers
```http
Content-Type: application/json{{

    Response Examples
    Success Response (200 OK)

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "65f2d4a21b88c72f7cda857e",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    }
  ]
}
Validation Error (400 Bad Request)

  "email": "john.doe@example.com",{
   # Authentication Error (401 Unauthorized)
  "message": "Invalid email or password"
}
  "password": "password123"
}

#Validation Rules
email: Must be valid email format
password: Minimum 6 characters
Status Codes
Code	Description
200	Login successful
400	Validation error
401	Invalid credentials
500	Server error
Notes
JWT token expires in 7 days
Password field is not included in response


