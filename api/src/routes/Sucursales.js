const { Router } = require("express");
const { createSucursales, getAllSucursales, getAllSucursalesById, updateSucursales } = require("../controllers/createSucursales");

const router = Router();

router.post('/Sucursal', createSucursales);
router.get('/Sucursal', getAllSucursales);
router.get('/Sucursal/:id',getAllSucursalesById);
router.put('/Sucursal/:id',updateSucursales);

module.exports = router;