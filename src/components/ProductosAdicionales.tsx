
import { useEffect, useState } from "react";
import { obtenerProductosAdicionales } from "../services/api";
import type { OpcionProductoAdicional } from "../types";

function ProductosAdicionales() {
  const [productos, setProductos] = useState<OpcionProductoAdicional[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setCargando(true);
        setError("");

        const datos = await obtenerProductosAdicionales();
        setProductos(datos);
      } catch (error) {
        console.error("Error al cargar productos:", error);
        setError("No se pudieron cargar los productos adicionales.");
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  // Agrupar las opciones por producto adicional
  const productosAgrupados = productos.reduce((grupos, producto) => {
    const id = producto.productoAdicionalId;

    if (!grupos[id]) {
      grupos[id] = [];
    }

    grupos[id].push(producto);

    return grupos;
  }, {} as Record<number, OpcionProductoAdicional[]>);

  if (cargando) {
    return <p>Cargando productos adicionales...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (productos.length === 0) {
    return <p>No hay productos adicionales disponibles.</p>;
  }

  return (
    <section>
      <h2>Productos adicionales</h2>

      {Object.entries(productosAgrupados).map(([id, opciones]) => (
        <div className="producto" key={id}>
          <h3>{opciones[0].productoAdicional.nombre}</h3>

          <p>{opciones[0].productoAdicional.descripcion}</p>

          {opciones.map((opcion) => (
            <div className="opcion-producto" key={opcion.id}>
              <h4>{opcion.nombre}</h4>

              <p>{opcion.descripcion}</p>

              <p>
                Precio: ₡
                {opcion.precioVentaColones.toLocaleString("es-CR")}
              </p>

              <p>Personas: {opcion.cantidadPersonas}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default ProductosAdicionales;
