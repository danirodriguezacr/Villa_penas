
import type { Paquete } from "../types";

interface Props {
  paquete: Paquete;
}

function DetallePaquete({ paquete }: Props) {
  return (
    <section>
      <h2>Detalle del paquete</h2>

      <h3>{paquete.nombre}</h3>

      <p>{paquete.descripcion}</p>

      <p>
        Precio: ₡{paquete.precioColones.toLocaleString("es-CR")}
      </p>

      <h3>Servicios incluidos</h3>

      {paquete.paquetesServicios.map((item) => (
        <div key={item.id}>
          <h4>{item.servicio.nombre}</h4>
          <p>{item.servicio.descripcion}</p>
        </div>
      ))}
    </section>
  );
}

export default DetallePaquete;