const {Router} = require('express');
const router = Router();

const {getNotes, createNotes, deleteNote, getNote, updateNote} = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNotes);

router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote);
    
    
module.exports = router;