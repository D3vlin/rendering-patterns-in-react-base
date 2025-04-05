import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState("")
  return (
    <div>
      <input type="text" value={value} placeholder="Ingresa el código del cupón. Ej: 10OFF" onChange={(e) => setValue(e.target.value)} />
      <p>Cupón de descuento <b>{value}</b></p>
    </div>
  );
};
