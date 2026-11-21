

import { useEffect, useState } from "react";
import {
  obtenerPaquetes,
  obtenerDetallePaquete
} from "../services/api";

import type { Paquete } from "../types";
import DetallePaquete from "./DetallePaquete";

function Paquetes() {
  const [paquetes, setPaquetes] = useState<Paquete[]>([]);
  const [detalle, setDetalle] = useState<Paquete | null>(null);

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const [cargandoDetalle, setCargandoDetalle] = useState(false);
  const [errorDetalle, setErrorDetalle] = useState("");

  // Consultar los paquetes
  useEffect(() => {
    const cargarPaquetes = async () => {
      try {
        setCargando(true);
        setError("");

        const datos = await obtenerPaquetes();

        console.log("Paquetes recibidos:", datos);

        setPaquetes(datos);
      } catch (error) {
        console.error("Error al cargar paquetes:", error);
        setError("No se pudieron cargar los paquetes.");
      } finally {
        setCargando(false);
      }
    };

    cargarPaquetes();
  }, []);

  // Consultar el detalle del paquete seleccionado
  const seleccionarPaquete = async (id: number) => {
    console.log("ID del paquete seleccionado:", id);

    try {
      setCargandoDetalle(true);
      setErrorDetalle("");
      setDetalle(null);

      const datos = await obtenerDetallePaquete(id);

      setDetalle(datos);
    } catch (error) {
      console.error("Error al consultar el paquete:", error);
      setErrorDetalle("No se pudo cargar el detalle del paquete.");
    } finally {
      setCargandoDetalle(false);
    }
  };

  if (cargando) {
    return <p>Cargando paquetes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (paquetes.length === 0) {
    return <p>No hay paquetes disponibles.</p>;
  }

  return (
    <section>
      <h2>Paquetes turísticos</h2>

      <p>Selecciona un paquete para consultar sus detalles.</p>

      {paquetes.map((paquete) => (
        <button
          key={paquete.id}
          onClick={() => seleccionarPaquete(paquete.id)}
        >
          Consultar {paquete.nombre}
        </button>
      ))}

      {cargandoDetalle && <p>Cargando detalle...</p>}

      {errorDetalle && <p>{errorDetalle}</p>}

      {detalle && <DetallePaquete paquete={detalle} />}
    </section>
  );
}

export default Paquetes;
