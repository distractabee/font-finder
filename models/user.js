const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'font_finder_db'
});

// Function to create a new user
async function createUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const connection = await pool.getConnection();
  try {
    await connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    connection.release();
  }
}

// Function to authenticate a user
async function authenticateUser(username, password) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) {
      return false; // User not found
    }
    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    return isPasswordValid;
  } catch (error) {
    console.error('Error authenticating user:', error);
    return false;
  } finally {
    connection.release();
  }
}

module.exports = { createUser, authenticateUser };
