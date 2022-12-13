import { useState } from "react";
import Mensaje from "./Mensaje";

function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValidPresupuesto}) {

  const [mensaje, setMensaje] = useState("")

  const handlePresupuesto = (e) => {

    e.preventDefault();

    if(!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("No es un presupuesto valido")

      return
    }

    setMensaje("")
    setIsValidPresupuesto(true)

  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input onChange={(e) => setPresupuesto(Number(e.target.value))} value={presupuesto} className="nuevo-presupuesto" placeholder="Añade tu Presupuesto" type="number"/>
        </div>

        <input type="submit" value="añadir" />
        
      { mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje>}
        
      </form>
    </div>
  )

}

export default NuevoPresupuesto