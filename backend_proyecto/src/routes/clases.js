const {Router} = require('express');
const router = Router();

const {getClases, createClases, deleteClase, getClase, updateClase} = require('../controllers/clases.controller');

router.route('/')
    .get(getClases)
    .post(createClases);

router.route('/:id')
    .get(getClase)
    .delete(deleteClase)
    .put(updateClase);
    
    
module.exports = router;