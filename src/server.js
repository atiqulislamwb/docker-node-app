import app from "./app.js";
import { connectWithDb, uri } from "./mongodb.js";
import { infoLogger, errorLogger } from "./logger.js";

const port = 5000;
app.listen(port, () => {
  if (process.env.ENVIRONMENT !== "TEST") app.use(infoLogger);
  connectWithDb();
  if (process.env.ENVIRONMENT !== "TEST") app.use(errorLogger(uri));

  console.log("Listening to port " + port);
});

// some swagger.json file with

//  "post": {
//     "tags": ["Users"],
//     "summary": "Create new user in system",
//     "description": "Create new user in system",
//     "parameters": [
//       {
//         "name": "user",
//         "in": "body",
//         "description": "User that we want to create",
//         "schema": {
//           "$ref": "#/definitions/User"
//         }
//       }
//     ],
//     "produces": ["application/json"],
//     "responses": {
//       "201": {
//         "description": "New user is created",
//         "schema": {
//           "type": "string"
//         }
//       }
//     }
//   },

// "delete": {
//   "tags": ["Users"],
//   "summary": "Delete user by id",
//   "parameters": [
//     {
//       "name": "id",
//       "in": "path",
//       "description": "Id of the user",
//       "required": true,
//       "type": "string"
//     }
//   ],
//   "responses": {
//     "200": {
//       "description": "Success",
//       "schema": {
//         "type": "string"
//       }
//     }
//   }
// }

// "put": {
//   "tags": ["Users"],
//   "summary": "Updates the user",
//   "parameters": [
//     {
//       "in": "body",
//       "name": "body",
//       "description": "User payload for update",
//       "required": true,
//       "schema": {
//         "$ref": "#/definitions/UserViewModel"
//       }
//     }
//   ],
//   "responses": {
//     "200": {
//       "description": "Success",
//       "schema": {
//         "type": "string"
//       }
//     }
//   }
// }

// paths
// "/users/{id}": {
//   "get": {
//     "tags": ["Users"],
//     "summary": "Get user by id",
//     "parameters": [
//       {
//         "name": "id",
//         "in": "path",
//         "description": "Id of the user",
//         "required": true,
//         "type": "string"
//       }
//     ],
//     "responses": {
//       "200": {
//         "description": "Success",
//         "schema": {
//           "$ref": "#/definitions/UserViewModel"
//         }
//       }
//     }
//   }
// }
