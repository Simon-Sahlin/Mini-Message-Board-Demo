let { messages } = require("../utils/messages"); 


const getIndex = (req, res) => {
    res.render("form");
};

const postIndex = (req, res) => {
    if (req.body.message && req.body.username){
        messages.push({
            text: req.body.message,
            user: req.body.username,
            added: new Date()
        });
        res.redirect("/")
    }
    else{
        res.send("Error: Invalid data")
    }
};


module.exports = { getIndex, postIndex };