const Registry = require('../pojos/registryEntity');
const RegistryDto = require('../dtos/registryDTO');

/**
 * Convert a DTO to POJO
 * @param {RegistryDto} registryDto object that comes from user input.
 * @returns @class Entity that has been converted.
 */
const toEntity = (registryDto) => {
  const RegistryEntity = new Registry(
    registryDto.registryId,
    registryDto.temperatura,
    registryDto.presion,
    registryDto.caudal,
    registryDto.velocidad,
    registryDto.cbdEstimado,
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
    registryEntity.registryId,
    registryEntity.temperatura,
    registryEntity.presion,
    registryEntity.caudal,
    registryEntity.velocidad,
    registryEntity.cbdEstimado,
  );

  return registryDto;
};

module.exports = { toEntity, toDto };
