module.exports = class RegistryDto {
  registryId;

  temperatura;

  presion;

  caudal;

  velocidad;

  cbdEstimado;

  constructor(
    registryId,
    temperatura,
    presion,
    caudal,
    velocidad,
    cbdEstimado,
  ) {
    this.registryId = registryId;
    this.temperatura = temperatura;
    this.presion = presion;
    this.caudal = caudal;
    this.velocidad = velocidad;
    this.cbd_estimado = cbdEstimado;
  }
};
