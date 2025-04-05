import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = () =>{
    if(inputRef.current) {
      alert(`Nuevo producto en el carrito: ${inputRef.current.value} ✔`)
    }
  }
  return (
    <div>
      <input type="text" placeholder="Nombre del producto. Ej: Manzana" ref={inputRef} />
      <button onClick={handleSubmit}>Añadir al carrito</button>
    </div>
  );
};
