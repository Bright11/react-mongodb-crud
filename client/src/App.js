import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import ShowStudent from "./componets/showstudent/ShowStudent";
import styles from "./styles";
import CreateStudent from "./componets/createstudent/CreateStudent";
import Header from "./componets/createstudent/Header";
function App() {
  return (
    <div className="myApp">
      <Header />
      <div className="contenteholder">
        <ShowStudent />
        <CreateStudent />
      </div>
    </div>
  );
}

export default App;
