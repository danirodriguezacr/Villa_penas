
import type {
  Paquete,
  OpcionProductoAdicional
} from "../types";

// Dirección principal de la API
const API_URL = "https://villa-penas-production.up.railway.app";

// Obtener los paquetes y sus servicios
export const obtenerPaquetes = async (): Promise<Paquete[]> => {
  const respuesta = await fetch(`${API_URL}/public/paquetes`);

  if (!respuesta.ok) {
    throw new Error("No se pudieron cargar los paquetes");
  }

  return await respuesta.json();
};

// Obtener las opciones de productos adicionales
export const obtenerProductosAdicionales = async (): Promise<OpcionProductoAdicional[]> => {
  const respuesta = await fetch(
    `${API_URL}/public/opciones-productos-adicionales`
  );

  if (!respuesta.ok) {
    throw new Error("No se pudieron cargar los productos adicionales");
  }

  return await respuesta.json();
};

// Obtener el detalle de un paquete por su ID
export const obtenerDetallePaquete = async (id: number): Promise<Paquete> => {
  const respuesta = await fetch(`${API_URL}/public/paquetes/${id}`);

  if (!respuesta.ok) {
    throw new Error("No se pudo cargar el detalle del paquete");
  }

  return await respuesta.json();
};
