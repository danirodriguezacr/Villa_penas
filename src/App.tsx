
import { useState } from "react";
import Paquetes from "./components/Paquetes";
import ProductosAdicionales from "./components/ProductosAdicionales";
import "./App.css";

function App() {
  const [mostrarProductos, setMostrarProductos] = useState(false);

  return (
    <div className="contenedor">
      <header>
        <h1>Villa Peñas</h1>
        <p>Conoce nuestros paquetes y servicios adicionales</p>
      </header>

      <main>
        <Paquetes />

        <section>
          <h2>Productos adicionales</h2>

          <button
            onClick={() => setMostrarProductos(!mostrarProductos)}
          >
            {mostrarProductos
              ? "Ocultar productos"
              : "Ver productos adicionales"}
          </button>

          {mostrarProductos && <ProductosAdicionales />}
        </section>
      </main>

      <footer>
        <p>Villa Peñas - Servicios turísticos</p>
      </footer>
    </div>
  );
}

export default App;
