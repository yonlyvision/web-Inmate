
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email, first_name } = request.body;

    if (!email) {
        return response.status(400).json({ error: 'Email is required' });
    }

    const API_KEY = 'gMR8AL6pnobOl8nTLMlwag';
    const FORM_ID = '30fbfdd215';

    try {
        const kitResponse = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: API_KEY,
                email: email,
                first_name: first_name,
            }),
        });

        const data = await kitResponse.json();

        if (!kitResponse.ok) {
            return response.status(kitResponse.status).json(data);
        }

        return response.status(200).json(data);
    } catch (error) {
        console.error('Kit API Error:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}
