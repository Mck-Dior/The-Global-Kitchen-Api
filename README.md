# Global Kitchen API
**Name:** Divine Chinecherem Nnamdi  
**Matricule:**  LMUI-24SWE287
**Course:** Programming in Javascript

This is a RESTful API for managing recipes in a digital cookbook. 
You can create, read, update, and delete recipes using this API.


## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)
- dotenv (for environment variables)

## Installation & Setup

1. Clone the repository:
```bash
git clone repository url

2. Install dependencies:
npm install

3. Create a .env file in the root directory and add:
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/global_kitchen

4. Start the server:
npm run dev

5. Testing the API
You can test the API using any REST client. Recommended applications:
- Postman – send GET, POST, PATCH, DELETE requests
- MongoDB Compass – view data visually
- Mongo Shell – run commands like db.recipes.find().pretty() , if you prefer the terminal.

6: Add API endpoints 

   1. Create a recipe (POST)

URL: http://localhost:5000/recipes 
Method: POST  
Body: JSON with recipe fields: title, ingredients, instructions, cookingTime, difficulty, category

   2. Get all recipes (GET)
URL: http://localhost:5000/recipes
Method: GET

   3. Update a recipe (PATCH)
URL: http://localhost:5000/recipes/:id
Replace :id with the _id of the recipe.
Method: PATCH
Body: JSON with fields to update (for example, cookingTime or instructions)

  4. Delete a recipe (DELETE)
URL: http://localhost:5000/recipes/:id
Replace :id with the _id of the recipe.
Method: DELETE
