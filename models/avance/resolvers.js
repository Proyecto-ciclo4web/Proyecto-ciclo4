import { ModeloAvance } from './avance.js';

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await ModeloAvance.find().populate('proyecto').populate('creadoPor');
      return avances;
    },



    
    Avance: async (parents, args) => {
      const avanceFiltrado = await ModeloAvance.find({ _id: args._id })
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },

    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await ModeloAvance.find({ proyecto: args.idProyecto })
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = ModeloAvance.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      })
      return avanceCreado;
    },

    AgregarObservacion: async (parent, args) => {
      const usuarioEditado = await ModeloAvance.findByIdAndUpdate({_id:args._id},{
        observacion:args.observacion
      })
      return usuarioEditado




  },
},
}
export { resolversAvance };
