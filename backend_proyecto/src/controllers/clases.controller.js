const clasesCtrl = {};
const Clase = require('../models/Clase');

clasesCtrl.getClases = async (req, res) => {
    const clases = await Clase.find();    
    res.json(clases);
};

clasesCtrl.createClases = async (req, res) => {
    const { nombre_clase, codigo, hora_inicio, hora_fin, descripcion} = req.body;
    const newclase = new Clase({
        nombre_clase,
        codigo,
        hora_inicio,
        hora_fin, 
        descripcion
    });
    await newclase.save();
    console.log(newclase)
    res.json({message: 'Clase Saved'});
};

clasesCtrl.getClase = async (req, res) => {
    const clase = await Clase.findById(req.params.id);
    res.json(clase);
}

clasesCtrl.deleteClase = async (req, res) => {
    await clase.findByIdAndDelete(req.params.id)
    res.json('Clase Deleted');
}

clasesCtrl.updateClase = async (req, res) => {
    const { title, content, duration, date, author } = req.body;
    await clase.findByIdAndUpdate(req.params.id, {
        title,
        content,
        duration,
        author
    });
    res.json('clase Updated');
}

module.exports = clasesCtrl;