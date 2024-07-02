const requestIp = require("request-ip");
const axios = require("axios");
require("dotenv").config();

const api_key = process.env.API_KEY;

exports.user_location = async (req, res) => {
    try {
        const clientIp = requestIp.getClientIp(req);

        const ip = "102.88.83.44";
        const geo = await axios.get(`http://ip-api.com/json/${ip}`);
        const { city } = geo.data;

        const weather = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`);

        const { temp_c } = weather.data.current;

        res.status(200).json({
            client_ip: ip,
            location: city,
            greeting: `Hello, Human!, the temperature is ${temp_c} degrees Celsius in ${city}`
        });
    } catch (e) {
        console.error("Error getting user details: ", e);
        res.status(500).json({ error: e.message });
    }
};