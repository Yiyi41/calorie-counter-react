import "../App.css";

const Form = ({
  handleChangeMeal,
  handleChangeCalorie,
  handleSubmit,
  meal,
  calorie,
  showForm,
}) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{ opacity: showForm ? "1" : "0" }}
      >
        <input
          className="inputs"
          type="text"
          placeholder="Meal"
          name="meal"
          value={meal}
          onChange={handleChangeMeal}
        />
        <input
          className="inputs"
          type="text"
          placeholder="Calorie"
          name="calorie"
          value={calorie}
          onChange={handleChangeCalorie}
        />
        <div className="submitBtns">
          <input type="submit" value="Save" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default Form;
