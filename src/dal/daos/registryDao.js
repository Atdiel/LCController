const { getConnection } = require('../config/postgres');

const store = async (registryEntity) => {
  const con = await getConnection();

  const { temperatura } = registryEntity;
  const { presion } = registryEntity;
  const { caudal } = registryEntity;
  const { velocidad } = registryEntity;
  const { cbdEstimado } = registryEntity;

  await con.query(
    'INSERT INTO mediciones (temperatura, presion, caudal, velocidad, cbdEstimado) VALUES ($1, $2, $3, $4, $5);',
    [temperatura, presion, caudal, velocidad, cbdEstimado],
  );
};

const search = async (keyToSearch, valueToSearch) => {
  const con = await getConnection();
  const query = `SELECT * FROM mediciones WHERE ${keyToSearch} = ?;`;
  const searchResult = await con.query(query, [valueToSearch]);
  return searchResult[0];
};

module.exports = { store, search };
