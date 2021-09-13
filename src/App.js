import React, { useState } from "react";

function App() {
  const [Users, setUsers] = useState([
    {
      precio: 500,
      id: 1,
      title: "Café",
      stock: 0,
      thumbnailUrl: "https://picsum.photos/id/0/600",
      cantidad: 1,
    },
    {
      precio: 300,
      id: 2,
      title: "Pizza",
      stock: 18,
      thumbnailUrl: "https://picsum.photos/id/10/600",
      cantidad: 1,
    },
    {
      precio: 100,
      id: 3,
      title: "Agua",
      stock: 14,
      thumbnailUrl: "https://picsum.photos/id/20/600",
      cantidad: 1,
    },
    {
      precio: 50,
      id: 4,
      title: "Sandía",
      stock: 14,
      thumbnailUrl: "https://picsum.photos/id/30/600",
      cantidad: 1,
    },
    {
      precio: 10,
      id: 5,
      title: "Mango",
      stock: 12,
      thumbnailUrl: "https://picsum.photos/id/40/600",
      cantidad: 1,
    },
    {
      precio: 150,
      id: 6,
      title: "Caguama",
      stock: 9,
      thumbnailUrl: "https://picsum.photos/id/50/600",
      cantidad: 1,
    },
  ]);
  return (
    <div>
      {Users.map((u) => (
        <div class="card">
          <figure></figure>
          <div class="contenido-card">
            <h2 id="art" key={"tittle"}>
              {" "}
              {u.title}
            </h2>
            <p className="description"></p>
            <h4 id="prec" key={"precio"}>
              {u.precio}
            </h4>
            <h3 id="stck" key={"stock"}>
              {u.stock}
            </h3>
            <button className="button"> agregar al carrito </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
