import "./styles.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false
  }
];

export default function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1> First React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const hasPizza = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {hasPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {hasPizza} creative dishes to choose
            from. All from our stone even, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza, i) => (
              <Pizza key={(pizza.id = i + 1)} pizzaObj={pizza}></Pizza>
            ))}
          </ul>
        </>
      ) : (
        <p>No Pizzas are Available</p>
      )}
    </main>
  );
}
function Pizza(props) {
  const { name, ingredients, photoName, price, soldOut } = props.pizzaObj;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : `$${price}`}</span>
      </div>
    </li>
  );
}
function Footer() {
  const currTime = new Date().getHours().toLocaleString();
  const isOpen = currTime < 22 && currTime > 9;
  return (
    <footer>
      {isOpen ? (
        <Order></Order>
      ) : (
        <p className="footer">
          We're Happy to Welcome you in between 10:00 - 22:00.
        </p>
      )}
    </footer>
  );
}
function Order() {
  return (
    <div className="order">
      <p className="footer">
        We are Open Until 22:00. Visit Us or Order Online
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}
