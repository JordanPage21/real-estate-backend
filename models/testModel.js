const pool = require('../config/db');

const getTestData = async() => {
    try {
        const result = await pool.query('SELECT * FROM temp');
        return result.rows;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    getTestData,
};