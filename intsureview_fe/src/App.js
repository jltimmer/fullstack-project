import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
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
    setNewPuppy({ ...newPuppy, [e.target.name]: e.target.value });
  }

  function handleSelectionChange(e) {
    // Convert isAdopable from string to boolean
    const value = e.target.value === "true";

    setNewPuppy({ ...newPuppy, isAdoptable: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateInputs()) {
      console.log(newPuppy);
    } else {
      alert("One or more inputs are invalid. Please try again.");
    }
  }

  function validateInputs() {
    return (
      newPuppy.name &&
      newPuppy.breed &&
      newPuppy.color &&
      newPuppy.weight >= 0 &&
      newPuppy.weight <= 1000 &&
      typeof newPuppy.isAdoptable === "boolean"
    );
  }

  return (
    <div className="App">
      <Header />
      <Form
        newPuppy={newPuppy}
        handleInputChange={handleInputChange}
        handleSelectionChange={handleSelectionChange}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default App;
