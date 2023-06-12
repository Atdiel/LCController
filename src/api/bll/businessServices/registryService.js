const registryModel = require('../../../dal/models/registryModel');

const newRegistry = (registryData) => new Promise((resolve, reject) => {
  (async () => {
    try {
      await registryModel.add(registryData);
      resolve();
    } catch (err) {
      const error = [err];
      reject(error);
    }
  })();
});

// const registryByDate = () => new Promise((resolve, reject) => {
//   (async () => {
//     try {
//       const registry = await registryModel.findOne({ registryId });
//       if (!registry) {
//         const error = [null, "Registry doesn't exists", 404];
//         reject(error);
//       }

//       const registryList = await registryModel.din; '';
//     } catch (err) {
//       const error = [err];
//       reject(error);
//     }
//   })();
// });

module.exports = { newRegistry };
