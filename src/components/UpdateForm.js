const UpdateForm = ({
  handleUpdate,
  handleUpdateMeal,
  handleUpdateCalorie,
  updateMeal,
  updateCalorie,
}) => {
  return (
    <div>
      <form onSubmit={handleUpdate} className="form">
        <input
          className="inputs"
          type="text"
          placeholder="UpdateMeal"
          name="updateMeal"
          value={updateMeal}
          onChange={handleUpdateMeal}
        />
        <input
          className="inputs"
          type="text"
          placeholder="UpdateCalorie"
          name="calorie"
          value={updateCalorie}
          onChange={handleUpdateCalorie}
        />
        <div className="submitBtns">
          <input type="submit" value="Update" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
