
export interface Sede {
  id: string;
  nombre: string;
  direccion?: string;
}

export interface Equipo {
  id: string;
  activoFijo?: string; // Nuevo campo para el código de activo fijo
  nombre: string;
  tipo: string;
  modelo: string;
  numeroSerie: string;
  fechaAdquisicion: string; // ISO date string YYYY-MM-DD
  costoAdquisicion?: number; // Cost in COP, optional
  sedeId: string | null;
  // especificacionesTecnicas?: string; // Replaced by specific fields
  procesador?: string;
  memoriaRAM?: string;
  discoDuro?: string;
  sistemaOperativo?: string;
  imagenUrl?: string; // Base64 encoded image string
}

export interface ActividadDiaria {
  id: string;
  fecha: string; // ISO date string YYYY-MM-DD
  tipoActividad: string;
  equipoId?: string | null;
  descripcion: string;
  nombreTecnico: string;
}

export enum MaintenanceStatus {
  PROGRAMADO = 'Programado',
  EN_PROGRESO = 'En Progreso',
  COMPLETADO = 'Completado',
  CANCELADO = 'Cancelado',
}

export enum MaintenanceType {
  PREVENTIVO = 'Preventivo',
  CORRECTIVO = 'Correctivo',
}

export interface Mantenimiento {
  id: string;
  equipoId: string;
  titulo: string;
  descripcion: string;
  fechaProgramada: string; // ISO date string YYYY-MM-DD
  fechaCompletado?: string | null; // ISO date string YYYY-MM-DD
  nombreTecnicoAsignado: string;
  estado: MaintenanceStatus;
  tipo: MaintenanceType;
}