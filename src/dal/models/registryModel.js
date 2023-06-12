const { toEntity, toDto } = require('../converters/registryConverter');
const { store, search } = require('../daos/registryDao');

const add = async (registryObject) => {
  const registryEntity = toEntity(registryObject);

  await store(registryEntity);
};

const findOne = async (object) => {
  const objectKey = Object.keys(object)[0];
  const objectValue = object[objectKey];
  const searchResult = await search(objectKey, objectValue);
  if (searchResult !== undefined) {
    const registryDto = toDto(searchResult);
    return registryDto;
  }
  return searchResult;
};


// const findByDate = async ()
module.exports = { add, findOne };
