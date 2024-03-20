import SculptureModel from "../models/SculptureModel.js"

//GET SCULPTURES
export const getAllSculptures = async (request, response) =>{

    try{
        const sculptures = await SculptureModel.find();
        response.status(200).json(sculptures) 
      }
      
    catch(error){
        response.status(500).json({message: error.message})
    }
}

//DELETE 

export const deleteSculpture = async (req, res) => {
    const sculptureId  = req.params.id; // Asumiendo que el ID se pasa como parámetro en la URL
   
    try {
       const deletedSculpture = await SculptureModel.findByIdAndDelete(sculptureId);
        
          res.status(201).json({ message: `Sculpture with ID ${sculptureId} deleted successfully`, sculpture: deletedSculpture });

        } 
    
    catch (error) {
       res.status(500).json({ message: 'Error al intentar eliminar la escultura', error });
    }
   };

// POST (INSERT)

export const addNewSculpture = async (req, response) =>{

  try{
    const newSculpture = await SculptureModel.create(req.body); //instertMany
    response.status(201).json(newSculpture)
  }

  catch(error){
    response.status(500).json({message: error.message})
}
}

//UPDATE  (PUT)
export const editSculpture = async (req, response) =>{

  const sculptureId  = req.params.id;

  try{

    const editedSculpture = await SculptureModel.findByIdAndUpdate(sculptureId, req.body, { new: true });  // aqui  podria usar findByPk(id) que encuente mi primary key que es el id
    response.status(200).json({ message: `Sculpture with ID ${sculptureId} updated successfully: `, sculpture: editedSculpture })  // la clausula where es importante porque sino eliminariamos o borrariamos toda la base de datos.
  }

  catch(error){
    response.status(500).json({message: error.message})
  }
}
 
//GET ONE SCULPTURE

export const getOneSculpture = async (req, res) => {
  const sculptureId  = req.params.id;

  try{
    const oneSculpture = await SculptureModel.findById(sculptureId);
    res.status(200).json(oneSculpture);
  }

  catch(error){
    res.status(500).json({message: error.message})
  }
}


