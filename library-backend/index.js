import express from 'express';
import pg from 'pg';
import cors from 'cors';
import * as dotenv from 'dotenv';

// Setting up the server.
const app = express();
const port = 3001;

// Setting up middleware.
app.use(cors());
app.use(express.json());
dotenv.config(); // Setting up dotenv.

// Connecting to the DB.
const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});
db.connect()

// Login route.
app.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await db.query("SELECT * FROM staff WHERE email = $1", [username]);
    const user = result.rows[0];
    
    if (user) {
      if (user.password === password) {
        return res.status(200).json({ message: 'Login Successful' });
      } else {
        console.log("Incorrect Password");
        return res.status(400).json({ message: 'Login Failed, Please Try Again!' });
      }
    } else {
      console.log("User does not exist.");
      return res.status(400).json({ message: 'User does not exist, Please enter a valid user!' });
    }
  } catch (err) {
    console.log("Error accessing the server: ", err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to get all authors
app.get("/authors", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM authors");
    res.status(200).json(result.rows);
  } catch (err) {
    console.log("Error retrieving authors: ", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to get all books
app.get("/books", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM books");
    res.status(200).json(result.rows);
  } catch (err) {
    console.log("Error retrieving books: ", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to get all members.
app.get("/members", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM members");
    res.status(200).json(result.rows);
  } catch (err) {
    console.log("Error retrieving members: ", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to get all staff memebers.
app.get("/staff", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM staff");
    res.status(200).json(result.rows);
  } catch (err) {
    console.log("Error retrieving staff: ", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
