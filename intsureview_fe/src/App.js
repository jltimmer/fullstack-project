import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useState } from "react";
import axios from "axios";

function App() {
  const blankPuppy = {
    name: "",
    isAdoptable: true,
    breed: "",
    color: "",
    weight: 0,
  };
  const [newPuppy, setNewPuppy] = useState(blankPuppy);

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
      // Post the newPuppy to the backend
      axios
        .post("http://localhost:8000/puppies/", {
          ...newPuppy,
          is_adoptable: newPuppy.isAdoptable,
        })
        .then((res) => {
          if (res.status == 201) {
            alert(`Success! ${res.data.name} has been added!`);
          } else if (res.status == 400) {
            alert("Error: failed to submit");
          }

          setNewPuppy(blankPuppy);
        });
    } else {
      alert(
        "Invalid input! \nMake sure you're not using any special characters and try again."
      );
    }
  }

  function validateInputs() {
    return (
      validateStringInput(newPuppy.name) &&
      validateStringInput(newPuppy.breed) &&
      validateStringInput(newPuppy.color) &&
      newPuppy.weight >= 0 &&
      newPuppy.weight <= 1000 &&
      typeof newPuppy.isAdoptable === "boolean"
    );
  }

  function validateStringInput(input) {
    return input.match(/^[\w\- ]+$/) ? true : false;
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
