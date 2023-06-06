const { matchedData } = require('express-validator');
const registryService = require('../bll/businessServices/registryService');
const { httpErrorHandler } = require('../handlers/errorHandler');

const createRegistry = async (req, res) => {
  try {
    const registryData = matchedData(req);
    await registryService.newRegistry(registryData);

    res.send({ success: true });
  } catch (err) {
    httpErrorHandler(res, err);
  }
};

// const readRegistry = async (req, res) => {
//     try {
//         const registryId = req.registry.id;
//         const data = await registryService.
//     } catch (err) {

//     }
// }

module.exports = { createRegistry };
