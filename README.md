# Global Kitchen API
**Name:** Divine Chinecherem Nnamdi  
**Matricule:**  LMUI-24SWE287
**Course:** Programming in Javascript
**Email:** mckdior@gmail.com
**Respository link:** https://github.com/Mck-Dior/The-Global-Kitchen-Api.git
This is a RESTful API for managing recipes in a digital cookbook. 


## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Configuration:** dotenv

## Features

- **Create Recipes** – Users can add new recipes to the cookbook by providing all required fields such as title, ingredients, instructions, cooking time, difficulty, and category.  
- **Read Recipes** – Retrieve all recipes or filter by category to quickly find the type of recipe needed.  
- **Update Recipes** – Modify existing recipes partially (example: update cooking time or instructions) without affecting other fields.  
- **Delete Recipes** – Remove unwanted or outdated recipes from the collection safely.  
- **Category Filtering** – Users can filter recipes by category (example: African, Asian, Dessert) to easily browse the cookbook.  
- **Schema Validation** – Mongoose schema ensures data integrity by validating required fields, correct types, and allowed values before saving to the database.  
- **Global Error Handling** – Any errors, such as missing recipe IDs or invalid input, are handled gracefully and return meaningful JSON responses instead of crashing the server.  
- **Environment Configuration** – Sensitive information like MongoDB URI and server PORT are stored in a `.env` file to keep them secure.  
- **Non-Blocking I/O** – All database operations are asynchronous using `async/await`, ensuring the server remains responsive even under heavy load.  



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
