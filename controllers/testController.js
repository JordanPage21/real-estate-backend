const testService = require('../services/testService');

const getTest = async(req, res) => {
    try {
        const data = await testService.fetchTestData();
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getTest,
};