-- Crear una base de datos en PostgreSQL
-- CREATE DATABASE 'api-broker';

-- Cambiar a la nueva database
-- \c 'api-broker';

-- Crear una tabla para almacenar los datos del proyecto IoT
CREATE TABLE mediciones (
    id SERIAL PRIMARY KEY,
    tiempo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    temperatura FLOAT,
    presion FLOAT,
    caudal FLOAT,
    velocidad FLOAT,
    cbdEstimado FLOAT
);
