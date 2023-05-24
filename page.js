// UNO. Crea un nuevo componente llamado WelcomeMessage que renderice un mensaje de bienvenida en JSX. Luego, utiliza este componente en el componente principal App.

export default function WelcomeMessage() {
  const mensaje = " REACT con BIT";
   let nombre = "Michelle";
   return (
       <p>
           Hola {nombre}, bienvenid@ al curso de: {mensaje}
       </p>
   );
}

  // DOS. Crea un nuevo componente llamado ProductCard que represente una tarjeta de producto con información como el nombre, la descripción y el precio. Utiliza este componente para mostrar al menos tres productos diferentes en el componente principal App.

export default function ProductCard() {
  const productos = [{
    nombre: "Zelda: Bridge of the Wild",
    descripcion: "Zelda: Bridge of the Wild es un juego de acción y aventura donde Link debe rescatar a Zelda y restaurar la paz en Hyrule. Con un vasto mundo abierto, desafiantes rompecabezas y combates intensos, el juego cautiva con su impresionante visual, jugabilidad inmersiva y rica narrativa. Los jugadores se embarcan en una épica aventura para descubrir los secretos de esta tierra mística y enfrentar enemigos formidables. ",
    precio: 525000,
  }, {
    nombre: "GTA 5",
    descripcion: "GTA 5 es un videojuego de mundo abierto que se desarrolla en Los Santos, una ciudad ficticia basada en Los Ángeles. Los jugadores asumen los roles de tres protagonistas y participan en una historia llena de crimen, acción y humor negro. Con un extenso mapa, vehículos personalizables y múltiples actividades, GTA 5 ofrece una experiencia inmersiva donde se puede explorar, robar, luchar y vivir una vida delictiva en un entorno vibrante y dinámico.",
    precio: 678000,
  }, {
    nombre: "Howgards Legacy",
    descripcion: "Howgards Legacy es un juego de rol de fantasía donde los jugadores se sumergen en un mundo mágico lleno de misterios y aventuras. Encarnando a un valiente héroe, explorarán tierras exóticas, resolverán acertijos desafiantes y lucharán contra criaturas temibles. Con una narrativa envolvente, personajes memorables y un sistema de combate estratégico, Howgards Legacy ofrece una experiencia emocionante y llena de sorpresas, donde cada elección tiene un impacto en el destino del protagonista y del reino",
    precio: 181700,
  }];

return (
  <>
    <li>
      <p>
        <strong>Nombre del producto:</strong> {productos[0,0].nombre}
      </p>
      <p>
        <strong>Descripcion:</strong> {productos[0,0].descripcion}
      </p>
      <p>
       <strong>Precio:</strong> {productos[0,0].precio}
      </p>
    </li> 
    <li>
      <p>
        <strong>Nombre del producto:</strong> {productos[0,1].nombre}
      </p>
      <p>
        <strong>Descripcion:</strong> {productos[0,1].descripcion}
      </p>
      <p>
       <strong>Precio:</strong> {productos[0,1].precio}
      </p>
    </li>
    <li>
      <p>
        <strong>Nombre del producto:</strong> {productos[0,2].nombre}
      </p>
      <p>
        <strong>Descripcion:</strong> {productos[0,2].descripcion}
      </p>
      <p>
       <strong>Precio:</strong> {productos[0,2].precio}
      </p>
    </li>
  </>
)
}

// TRES. Agrega propiedades (props) al componente ProductCard para pasar la información del producto desde el componente principal App. Incluye propiedades como el nombre, la descripción y el precio para cada producto y asegúrate de mostrar correctamente esta información en el componente ProductCard.

export default function ProductCard() {
  const productos = [{
    nombre: "Zelda: Bridge of the Wild",
    descripcion: "Zelda: Bridge of the Wild es un juego de acción y aventura donde Link debe rescatar a Zelda y restaurar la paz en Hyrule. Con un vasto mundo abierto, desafiantes rompecabezas y combates intensos, el juego cautiva con su impresionante visual, jugabilidad inmersiva y rica narrativa. Los jugadores se embarcan en una épica aventura para descubrir los secretos de esta tierra mística y enfrentar enemigos formidables. ",
    precio: 525000,
  }, {
    nombre: "GTA 5",
    descripcion: "GTA 5 es un videojuego de mundo abierto que se desarrolla en Los Santos, una ciudad ficticia basada en Los Ángeles. Los jugadores asumen los roles de tres protagonistas y participan en una historia llena de crimen, acción y humor negro. Con un extenso mapa, vehículos personalizables y múltiples actividades, GTA 5 ofrece una experiencia inmersiva donde se puede explorar, robar, luchar y vivir una vida delictiva en un entorno vibrante y dinámico.",
    precio: 678000,
  }, {
    nombre: "Howgards Legacy",
    descripcion: "Howgards Legacy es un juego de rol de fantasía donde los jugadores se sumergen en un mundo mágico lleno de misterios y aventuras. Encarnando a un valiente héroe, explorarán tierras exóticas, resolverán acertijos desafiantes y lucharán contra criaturas temibles. Con una narrativa envolvente, personajes memorables y un sistema de combate estratégico, Howgards Legacy ofrece una experiencia emocionante y llena de sorpresas, donde cada elección tiene un impacto en el destino del protagonista y del reino",
    precio: 181700,
  }];

  return (
    <>
    <ComponenteHijo dato= {productos[0,0].nombre}></ComponenteHijo>
    <ComponenteHijo dato= {productos[0,0].descripcion}></ComponenteHijo>
    <ComponenteHijo dato= {productos[0,0].precio}></ComponenteHijo>

    <ComponenteHijo dato= {productos[0,1].nombre}></ComponenteHijo>
    <ComponenteHijo dato= {productos[0,1].descripcion}></ComponenteHijo>
    <ComponenteHijo dato= {productos[0,1].precio}></ComponenteHijo>

    <ComponenteHijo dato= {productos[0,2].nombre}></ComponenteHijo>
    <ComponenteHijo dato= {productos[0,2].descripcion}></ComponenteHijo>
    <ComponenteHijo dato= {productos[0,2].precio}></ComponenteHijo>
    </>
  )
}  

const ComponenteHijo = (props) => {
  return(
    <li>
      <p>
      {props.dato}
      </p>
    </li>
);
}

  // CUATRO. Crea una lista de productos en el componente principal App utilizando un array de objetos que contenga la información de cada producto. Luego, utiliza el método map para renderizar múltiples instancias del componente ProductCard con los datos de cada producto.

export default function ProductCard () {
const productos = [{
  nombre: "Zelda: Bridge of the Wild",
  descripcion: "Zelda: Bridge of the Wild es un juego de acción y aventura donde Link debe rescatar a Zelda y restaurar la paz en Hyrule. Con un vasto mundo abierto, desafiantes rompecabezas y combates intensos, el juego cautiva con su impresionante visual, jugabilidad inmersiva y rica narrativa. Los jugadores se embarcan en una épica aventura para descubrir los secretos de esta tierra mística y enfrentar enemigos formidables. ",
  precio: 525000,
}, {
  nombre: "GTA 5",
  descripcion: "GTA 5 es un videojuego de mundo abierto que se desarrolla en Los Santos, una ciudad ficticia basada en Los Ángeles. Los jugadores asumen los roles de tres protagonistas y participan en una historia llena de crimen, acción y humor negro. Con un extenso mapa, vehículos personalizables y múltiples actividades, GTA 5 ofrece una experiencia inmersiva donde se puede explorar, robar, luchar y vivir una vida delictiva en un entorno vibrante y dinámico.",
  precio: 678000,
}, {
  nombre: "Howgards Legacy",
  descripcion: "Howgards Legacy es un juego de rol de fantasía donde los jugadores se sumergen en un mundo mágico lleno de misterios y aventuras. Encarnando a un valiente héroe, explorarán tierras exóticas, resolverán acertijos desafiantes y lucharán contra criaturas temibles. Con una narrativa envolvente, personajes memorables y un sistema de combate estratégico, Howgards Legacy ofrece una experiencia emocionante y llena de sorpresas, donde cada elección tiene un impacto en el destino del protagonista y del reino",
  precio: 181700,
}];

return (
  <>
    {productos.map(productos => {
      return <ComponenteHijo nombre={productos.nombre} descripcion={productos.descripcion} precio ={productos.precio}></ComponenteHijo>
    })}
  </>
);
}
const ComponenteHijo = (props) => {
return(
  <li>
    <p>{props.nombre}</p>
    <p>{props.descripcion}</p>
    <p>{props.precio}</p>
  </li>
);
}

// CINCO. En este ejercicio final, crea un componente llamado ProductList que reciba una lista de productos como prop (props) y utilice el método map para renderizar dinámicamente múltiples instancias del componente ProductCard con los datos de cada producto. Utiliza este componente en el componente principal App y asegúrate de pasar la lista de productos como prop.

export default function ProductCard() {
  const productos = [{
      nombre: "Zelda: Bridge of the Wild",
    descripcion: "Zelda: Bridge of the Wild es un juego de acción y aventura donde Link debe rescatar a Zelda y restaurar la paz en Hyrule. Con un vasto mundo abierto, desafiantes rompecabezas y combates intensos, el juego cautiva con su impresionante visual, jugabilidad inmersiva y rica narrativa. Los jugadores se embarcan en una épica aventura para descubrir los secretos de esta tierra mística y enfrentar enemigos formidables. ",
    precio: 525000,
  }, {
    nombre: "GTA 5",
    descripcion: "GTA 5 es un videojuego de mundo abierto que se desarrolla en Los Santos, una ciudad ficticia basada en Los Ángeles. Los jugadores asumen los roles de tres protagonistas y participan en una historia llena de crimen, acción y humor negro. Con un extenso mapa, vehículos personalizables y múltiples actividades, GTA 5 ofrece una experiencia inmersiva donde se puede explorar, robar, luchar y vivir una vida delictiva en un entorno vibrante y dinámico.",
    precio: 678000,
  }, {
    nombre: "Howgards Legacy",
    descripcion: "Howgards Legacy es un juego de rol de fantasía donde los jugadores se sumergen en un mundo mágico lleno de misterios y aventuras. Encarnando a un valiente héroe, explorarán tierras exóticas, resolverán acertijos desafiantes y lucharán contra criaturas temibles. Con una narrativa envolvente, personajes memorables y un sistema de combate estratégico, Howgards Legacy ofrece una experiencia emocionante y llena de sorpresas, donde cada elección tiene un impacto en el destino del protagonista y del reino",
    precio: 181700,
  }];
      
  return (
      <ul>
          {productos.map((elemento) => {
              return <ProductList nombre={elemento.nombre} descripcion={elemento.descripcion} precio={elemento.precio}></ProductList>
          })}
      </ul>
  )
}

function ProductList(listadoProductos) {
  return (
      <>
          <p><strong>Nompre del producto:</strong> {listadoProductos.nombre}</p>
          <p><strong>Descripción:</strong> {listadoProductos.descripcion}</p>
          <p><strong>Precio:</strong> {listadoProductos.precio}</p>
      </>
  )
}