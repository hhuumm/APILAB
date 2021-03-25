
const Country = require('../../models/country');
module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};
function index(req, res) {
	Country.find({}, function(err, countries) {
	  res.status(200).json(countries)
	});
}
function update(req, res) {
  Country.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(function(Country) {
    res.status(200).json(Country);
  });
}
function deleteOne(req, res) {
  Country.findByIdAndRemove(req.params.id).then(function(Country) {
    res.status(200).json(Country);
  });
}
function show(req, res) {
  Country.findById(req.params.id).then(function(Country) {
    res.status(200).json(Country);
  });
}
function create(req, res) {
  Country.create(req.body).then(function(Country) {
    res.status(201).json(Country);
  });
}
// function index(req, res) {
//   Country.find({}).then(function(countries) {
//     res.status(200).json(countries);
//   });
// }