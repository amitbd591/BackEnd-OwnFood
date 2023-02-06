const CountryModel = require("../../Models/Country/CountryModel");

//! Create Country
exports.CreateCountry = async (req, res) => {
  let result = await CreateCountryService(req, CountryModel);
  res.status(200).json(result);
};

//! Get Country
exports.GetCountry = async (req, res) => {
  let result = await GetCountryService(req, CountryModel);
  res.status(200).json(result);
};
//! Get single Country
exports.GetSingleCountry = async (req, res) => {
  let result = await GetSingleCountryService(req, CountryModel);
  res.status(200).json(result);
};

//! Update Country
exports.UpdateCountry = async (req, res) => {
  let result = await UpdateCountryService(req, CountryModel);
  res.status(200).json(result);
};

//! Delete Country
exports.DeleteCountry = async (req, res) => {
  let result = await DeleteCountryService(req, CountryModel);
  res.status(200).json(result);
};
