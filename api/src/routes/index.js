const { Router } = require('express');
const { axios } = require("axios");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const configgral = require('./ConfigGral.js')

// const getglobal = require('./getAllGlobals.js')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/',configgral)
// router.use('/',getglobal)

module.exports = router;
