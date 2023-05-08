import { makeStyles } from "@material-ui/core";
import Homepage from "../Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "../Pages/CoinPage";
import Header from "./Components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";
// import Footer from "./Components/Footer";
// function App() {
//   return (
//     <div className="App">
//       <h1>Project</h1>
//       <Navbar />
//       <Home />
//       <Footer />
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
