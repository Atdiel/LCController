require('dotenv').config();
const express = require('express');
const cors = require('cors');

const temperaturaRoute = require('./api/routes/temperaturaRoute');
const presionRoute = require('./api/routes/presionRoute');
const velocidadRoute = require('./api/routes/velocidadRoute');
const caudalRoute = require('./api/routes/caudalRoute');


const app = express();

app.use(cors());
app.use(express.json());

/**
 * se usa el puerto definido en .env (default 3000)
 */
const port = process.env.PORT || 3000;

/**
 * usamos ./routes/index.js para manejar endpoints
 */
app.use('/api/v1', temperaturaRoute);
app.use('/api/v1', presionRoute);
app.use('/api/v1', velocidadRoute);
app.use('/api/v1', caudalRoute);

app.listen(port, () => {
  console.log(`Corriendo servidor en puerto: ${port}`);
});
