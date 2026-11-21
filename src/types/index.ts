
export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  unidadMedida: string;
  activo: boolean;
}

export interface PaqueteServicio {
  id: number;
  paqueteId: number;
  servicioId: number;
  cantidad: number | null;
  detalle: string | null;
  orden: number;
  servicio: Servicio;
}

export interface Paquete {
  id: number;
  nombre: string;
  descripcion: string;
  precioColones: number;
  activo: boolean;
  paquetesServicios: PaqueteServicio[];
}

export interface ProductoAdicional {
  id: number;
  nombre: string;
  descripcion: string;
  imagenUrl: string;
}

export interface OpcionProductoAdicional {
  id: number;
  productoAdicionalId: number;
  productoAdicional: ProductoAdicional;
  nombre: string;
  descripcion: string;
  unidadMedida: string;
  cantidadIncluida: number;
  cantidadPersonas: number;
  precioVentaColones: number;
}
