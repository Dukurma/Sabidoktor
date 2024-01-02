const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

class SabiDoktor {
 constructor() {
  this.openaiApiKey = process.env.OPENAI_API_KEY;
 }

 async processMessage(message) {
  try {
   const response = await this.generateOpenAIResponse(message);

   return `User: ${message}\n SabiDoktor: ${response}`;
  } catch (error) {
   console.error('Error processing message:', error.message);
   return 'Error processing message';
  }
 }

 async generateOpenAIResponse(prompt) {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  try {
    const payload = {
      messages: [{
        role: "user",
        content: prompt
      }],
      model: "gpt-3.5-turbo"
    };

    console.log("Request payload:", payload); // Add this line for logging

    const response = await axios.post(apiUrl, payload, {
      headers: {
        'Authorization': `Bearer ${this.openaiApiKey}`
      }
    });

    console.log("OpenAI API response:", response.data); // Log the API response

    return (response.data.choices[0] && response.data.choices[0].text.trim()) || 'No response from SabiDoktor';
  } catch (error) {
    console.error('Error generating response from OpenAI:', error.response ? error.response.data : error.message);
    return 'Error generating response from OpenAI';
  }
}

}

const sabiDoktor = new SabiDoktor();

app.post('/webhook', async (req, res) => {
 const { message } = req.body;
 const response = await sabiDoktor.processMessage(message);
 res.json({ response });
});

app.listen(port, () => {
 console.log(`SabiDoktor Server listening at http://localhost:${port}`);
});
