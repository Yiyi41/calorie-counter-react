import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdateForm from "./UpdateForm";
import { useState } from "react";

const Tab = ({
  setTab,
  tab,
  total,
  setTotal,
  handleClick,
  setMeal,
  setCalorie,
  handleChangeCalorie,
  handleChangeMeal,
  meal,
  calorie,
}) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateMeal, setUpdateMeal] = useState("");
  const [updateCalorie, setUpdateCalorie] = useState("");
  const [index, setIndex] = useState();

  const handleUpdateMeal = (e) => {
    setUpdateMeal(e.target.value);
  };

  const handleUpdateCalorie = (e) => {
    setUpdateCalorie(e.target.value);
  };

  // func for updating
  const handleUpdate = (e) => {
    e.preventDefault();

    let newTab = [...tab];

    // update
    newTab[index].addCalorie = updateCalorie;
    newTab[index].addMeal = updateMeal;

    setTab(newTab);
    setTotal(total - newTab[index].addCalorie - updateCalorie);
  };

  // func for delete
  const handleDelete = (index) => {
    let newTab = [...tab];
    let elemToUpdate = newTab[index];
    newTab.splice(index, 1);
    setTotal(total - elemToUpdate.addCalorie);
    setTab(newTab);
  };

  return (
    <div>
      {showUpdateForm === true && (
        <UpdateForm
          showUpdateForm={showUpdateForm}
          handleUpdate={handleUpdate}
          handleUpdateMeal={handleUpdateMeal}
          handleUpdateCalorie={handleUpdateCalorie}
          updateMeal={updateMeal}
          updateCalorie={updateCalorie}
        />
      )}

      <div className="tabHead">
        <p>Meals</p>
        <p>Calories</p>
      </div>

      {tab.map((item, index) => {
        return (
          <div className="tab" key={index}>
            <p>{item.addMeal}</p>
            <p>{item.addCalorie}</p>
            <div className="icons">
              <span className="iconColor">
                <FontAwesomeIcon
                  icon="trash"
                  onClick={() => handleDelete(index)}
                />
              </span>
              <span
                className="iconColor"
                onClick={() => {
                  setShowUpdateForm(true);
                  setIndex(index);
                  setUpdateMeal(tab[index].addMeal);
                  setUpdateCalorie(tab[index].addCalorie);
                }}
              >
                <FontAwesomeIcon icon="pen-to-square" />
              </span>
            </div>
          </div>
        );
      })}
      <div className="tabFoot">
        <p>Total : </p>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default Tab;
