module.exports = {
  update
};

function update(req, res) {
  // TODO: Store updated data and emit to clients

  

  res.json({lastUpdated: new Date()});
}