import { InscriptionModel } from './inscripcion.js';

const resolverInscripciones = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find();
      return inscripciones;
    },

    Inscripcion: async (parent, args) => {

      const inscripcion = await InscriptionModel.find({proyecto : args.proyecto}).populate('estudiante').populate('proyecto');
      return inscripcion;
    },
    Inscripcion1: async (parent, args) => {

      const inscripcion = await InscriptionModel.findOne({_id : args._id}).populate('estudiante').populate('proyecto');
      return inscripcion;
    },
    InscripcionEstudiante: async (parent, args) => {
      const inscripcionEst = await InscriptionModel.find({estudiante : args.estudiante, estado: "ACEPTADO"}).populate('proyecto').populate('estudiante')
      return inscripcionEst;
    },
    verObjetivosIns: async (parent, args) => {
      const verObjetivos = await InscriptionModel.findOne({proyecto: args.proyecto}).populate('proyecto')
      return verObjetivos
    },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await InscriptionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(args.id, {
        estado: 'ACEPTADO',
        fechaIngreso: Date.now(),
      });
      return inscripcionAprobada;
    },



  },
};

export { resolverInscripciones };
