// Import necessary modules
const axios = require('axios');
const mysql = require('mysql');

// Function to fetch font data from an external API
async function fetchFonts() {
  try {
    const response = await axios.get('https://api.example.com/fonts');
    return response.data;
  } catch (error) {
    console.error('Error fetching fonts:', error);
    return [];
  }
}

// Function to save font data to a MySQL database
function saveFontsToDatabase(fonts) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'font_finder_db'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
  });

  const sql = 'INSERT INTO fonts (name, category) VALUES (?, ?)';
  fonts.forEach((font) => {
    connection.query(sql, [font.name, font.category], (err, result) => {
      if (err) {
        console.error('Error inserting font into database:', err);
        return;
      }
      console.log('Font inserted into database:', result);
    });
  });

  connection.end();
}

// Example usage
async function main() {
  const fonts = await fetchFonts();
  saveFontsToDatabase(fonts);
}

main();
