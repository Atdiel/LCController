const registryModel = require('../../../dal/models/registryModel');

const newRegistry = (registryData) => new Promise((resolve, reject) => {
  (async () => {
    try {
      await registryModel.add(registryData);
      resolve();
    } catch (err) {
      const error = [err];
      console.log(err);
      reject(error);
    }
  })();
});

// const myRegistry =  (registryId) => {
//     return new Promise(async (resolve, reject) => {
//         'use strict';
//         try {
//             const registry = await registryModel.findOne({registryId: registryId});
//             if(!registry) {
//                 reject([null, "Registry doesn't exists", 404])
//             }

//             const registryList = await registryModel.din

//         } catch (err) {

//         }
//     })
// }

module.exports = { newRegistry };
