import { ProjectModel } from './proyecto.js';

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ProjectModel.find().populate('avances').populate('inscripciones').populate('lider');
      return proyectos;
    },

    Proyecto: async (parent, args) => {
      const proyectos = await ProjectModel.find({proyecto:args._id});
      return proyectos;
    }
    
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },

    CambiarEstadoProyecto: async (parent, args) => {
      const CambiarEstado =await ProjectModel.findByIdAndUpdate({_id : args.id},{estado:args.estado})

  
    },
    CambiarFaseProyecto: async (parent, args) => {
      const CambiarFase =await ProjectModel.findByIdAndUpdate({_id : args.id},{fase:args.fase})
    }
  },

};

export { resolversProyecto };
