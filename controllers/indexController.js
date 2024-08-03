let { messages } = require("../utils/messages");

const getIndex = (req, res) => {
    res.render("index", { messages: messages });
};


module.exports = { getIndex };