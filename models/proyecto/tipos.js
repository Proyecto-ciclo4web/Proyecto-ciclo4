import { gql } from 'apollo-server-express';

const tiposProyecto = gql`
  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }

  type Query {

    Proyectos: [Proyecto]
    Proyecto (_id:String!):Proyecto
    FiltrarProyectosLider(lider:String!):[Proyecto]
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      lider: String!
      objetivos: [crearObjetivo]
    ): Proyecto

  CambiarEstadoProyecto (            
  id:String!
  estado:Enum_EstadoProyecto!) : Proyecto

  CambiarFaseProyecto (
  id:String!
  fase:Enum_FaseProyecto!) : Proyecto

  actualizarProyecto(
    _id:String!
    nombre:String!
    objetivos:crearObjetivo
    presupuesto:Float!
    ):Proyecto
  }
  



`;

  {/*
    elim de tipo proyecto -se crean autom..
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto 
  */}

export { tiposProyecto };
