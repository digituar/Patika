import './App.css';
// import Header from "./Components/Header";
import User from "./Components/User";

const friends = [
  {
    id: 1,
    name: "Coskun"
  },
  {
    id: 2,
    name: "Tuncay"
  },
  {
    id: 3,
    name: "Suat"
  },
  {
    id: 4,
    name: "Haydar"
  },
  {
    id: 5,
    name: "Mehmet"
  }
];

// const name = "Ozan";
// const surname = "Altun";
// const isLoggeIn = true;

function App() {
    return (
      <>
        {/* <Header />
        <h1>{ isLoggeIn ? `Benim adim ${name}, soyadim ${surname}` : "Giris yapmadiniz"}</h1>
        
        <label htmlFor='myInput'>
          Name
          <input id="myInput" />
        </label> */}

        <User name="Ozan" 
              surname="Altun" 
              isLoggedIn={true} 
              age={44} 
              friends={friends}
              address={
                {
                  title: "Neuwied / RLP",
                  plz: 56566
                } 
              }
        />

      </>
    );
}

export default App;