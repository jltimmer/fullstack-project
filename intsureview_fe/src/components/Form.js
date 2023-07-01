function Form({ newPuppy, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>
          Puppy's Name
          <input
            type="text"
            name="name"
            value={newPuppy["name"]}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="mb-3">
        <label>
          Adoption Available
          <select
            name="isAdoptable"
            value={newPuppy["isAdoptable"]}
            onChange={handleInputChange}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
      </div>
      <div className="mb-3">
        <label>
          Breed
          <input
            type="text"
            name="breed"
            value={newPuppy["breed"]}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="mb-3">
        <label>
          Color
          <input
            type="text"
            name="color"
            value={newPuppy["color"]}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="mb-3">
        <label>
          Weight (lbs)
          <input
            type="number"
            name="weight"
            value={newPuppy["weight"]}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
