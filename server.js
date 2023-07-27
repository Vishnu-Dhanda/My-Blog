const express = require('express');
const cors = require('cors');
const { Client } = require("@notionhq/client");

const app = express();
app.use(cors());

const NOTION_SECRET = 'secret_1WV0o4tprbP4uMfF2dJpO0qivPLE8YZcoYoVWfIATOq';

app.get('/api/blog', async (req, res) => {
  try {
    const notion = new Client({
      auth: NOTION_SECRET,
    });

    const response = await notion.databases.query({
      database_id: "a71f3fa54e2e41139c903522cf9b8f0e",
    });

    // Send the response data as JSON to the client
    
    console.log(response)
  } catch (error) {
    console.error('Error fetching data from Notion API:', error);
    res.status(500).json({ error: 'Error fetching data from Notion API' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
