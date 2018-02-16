
var handleDbCallback = function(err, result, response) {
    if (!err) {
        response.status(201).json("success")
    } else {
        response.status(401).json("failure")
    }
};

module.exports = {
  handleDbCallback: handleDbCallback
}
