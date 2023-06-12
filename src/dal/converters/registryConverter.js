const Registry = require('../pojos/registryEntity');
const RegistryDto = require('../dtos/registryDTO');

/**
 * Convert a DTO to POJO
 * @param {RegistryDto} registryDto object that comes from user input.
 * @returns @class Entity that has been converted.
 */
const toEntity = (registryDto) => {
  const RegistryEntity = new Registry(

    registryDto.registryId || 0,
    registryDto.temperatura || 0,
    registryDto.presion || 0,
    registryDto.caudal || 0,
    registryDto.velocidad || 0,
    registryDto.cbdEstimado || 0,

  );

  return RegistryEntity;
};

/**
 * Convert a Entity to Dto
 * @param {Registry} registryEntity Entity to save in the DB.
 * @returns @class Object Dto that has been converted.
 */
const toDto = (registryEntity) => {
  const registryDto = new RegistryDto(

    registryEntity.registryId || 0,
    registryEntity.temperatura || 0,
    registryEntity.presion || 0,
    registryEntity.caudal || 0,
    registryEntity.velocidad || 0,
    registryEntity.cbdEstimado || 0,

  );

  return registryDto;
};

module.exports = { toEntity, toDto };
