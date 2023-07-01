function Form({ newPuppy, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label className="col-sm-2 offset-sm-2 col-form-label">
          Puppy's Name
        </label>
        <div className="col-sm-4">
          <input
            className="form-control"
            type="text"
            name="name"
            value={newPuppy["name"]}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-3 offset-sm-2 col-form-label">
          Adoption Available
        </label>
        <div className="col-sm-2">
          <select
            className="form-select"
            name="isAdoptable"
            value={newPuppy["isAdoptable"]}
            onChange={handleInputChange}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 offset-sm-2 col-form-label">Breed</label>
        <div className="col-sm-4">
          <input
            className="form-control"
            type="text"
            name="breed"
            value={newPuppy["breed"]}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 offset-sm-2 col-form-label">Color</label>
        <div className="col-sm-4">
          <input
            className="form-control"
            type="text"
            name="color"
            value={newPuppy["color"]}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 offset-sm-2 col-form-label">
          Weight (lbs)
        </label>
        <div className="col-sm-4">
          <input
            className="form-control"
            type="number"
            name="weight"
            value={newPuppy["weight"]}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
