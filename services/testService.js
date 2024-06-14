const testModel = require('../models/testModel');

const fetchTestData = async() => {
    try {
        return await testModel.getTestData();
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    fetchTestData,
};