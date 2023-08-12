// file name: ask-chatgpt.mjs

import { config } from 'dotenv';
config({ path: './.env.local' });

const axios = require('axios');
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci/completions';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function getCompletion(promptText) {
    try {
        const response = await axios.post(OPENAI_API_ENDPOINT, {
            prompt: promptText,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Es gab einen Fehler beim Abrufen der Antwort von OpenAI:', error);
    }
}

// Testen
getCompletion("Beschreibe Node.js.").then(response => {
    console.log(response);
});

