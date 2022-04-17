const { Router } = require("express");
const { createConfGral, getAllGlobals, getAllGlobalsById, updateGlobal, deleteGlobal } = require('../controllers/createConfGral');

const router = Router();

router.post('/ConfigGral', createConfGral)
router.get('/GetGlobal', getAllGlobals)
router.get('/GetGlobal/:id', getAllGlobalsById)
router.put('/GetGlobal/:id',updateGlobal)
router.delete('/GetGlobal/:id',deleteGlobal)

module.exports=router;