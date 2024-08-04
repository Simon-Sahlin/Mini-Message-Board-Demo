let { messages } = require("../utils/messages");

const getIndex = (req, res) => {
    res.render("index", { messages: messages });
};

const getMessage = (req, res) => {
    // res.send(messages[req.params.messageId]);
    res.render("viewMessage", { message: messages[req.params.messageId] });
}


module.exports = { getIndex, getMessage };