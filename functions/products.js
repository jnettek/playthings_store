// 

const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');

const AIRTABLE_ENDPOINT = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/${process.env.AIRTABLE_TABLE}`;

exports.handler = async (event, context, cb) => {
    try {
        const { data } = await axios.get(AIRTABLE_ENDPOINT, {
            headers: {
                'Authorization': `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            params: {
                maxRecords: 200
            }
        });

        const products = data.records.map((product) => {
            const { id, fields } = product;
            const { name, featured, price, colors, company, description, category, shipping, images } = fields;
            const { url } = images[0];
            return {
                id,
                featured,
                price,
                company,
                description,
                category,
                shipping,
                image: url,
            };
        });

        return {
            statusCode: 200,
            body: JSON.stringify(products),
        };

    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: 'There was an error',
        };
    }
};
