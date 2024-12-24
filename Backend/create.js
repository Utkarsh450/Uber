const fs = require('fs');
const path = require('path');

// Define the content for notes.md
const content = `
# User Registration API Documentation

## Endpoint Overview
- **URL**: /users/register
- **Method**: POST
- **Description**: Registers a new user.

## Request Format
### Headers
\`\`\`http
Content-Type: application/json
\`\`\`

### Body
\`\`\`json
{
    "username": "exampleUser",
    "email": "user@example.com",
    "password": "securePassword123"
}
\`\`\`

## Response Format
### Success (201 Created)
\`\`\`json
{
    "message": "User registered successfully!",
    "userId": "123456"
}
\`\`\`

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
`;

// Path to Backend folder
const folderPath = path.join(__dirname, 'Backend');
const filePath = path.join(folderPath, 'notes.md');

// Ensure Backend folder exists
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

// Write content to notes.md
fs.writeFileSync(filePath, content, 'utf8');
console.log('notes.md created successfully in the Backend folder.');
