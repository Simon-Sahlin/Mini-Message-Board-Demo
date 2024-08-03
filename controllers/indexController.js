

const getIndex = (req, res) => {
    res.render("index", { message: "Hello World!" });
};


module.exports = { getIndex, getNew };