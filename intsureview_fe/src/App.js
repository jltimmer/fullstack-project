import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [newPuppy, setNewPuppy] = useState({
    name: "",
    isAdoptable: true,
    breed: "",
    color: "",
    weight: 0,
  });

  function handleInputChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    // Convert isAdopable from string to boolean
    if (name === "isAdoptable") {
      value = value === "true";
    }
    setNewPuppy({ ...newPuppy, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(newPuppy);
  }

  return (
    <div className="App">
      <Header />
      <Form
        newPuppy={newPuppy}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
