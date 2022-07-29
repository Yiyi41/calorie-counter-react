import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  // func for updating
  const handleUpdate = (index) => {
    console.log("cliqués : " + index);
    console.log(tab[index]);
    // trouver l'élément cliqué grâce à l'index,
    // faire réapparaitre le formulaire

    let newTab = [...tab];
    let elemToUpdate = newTab[index];
    handleClick();

    // les inputs de formulaire sont pré-remplis avec les info initiales de l'élément
    setMeal(elemToUpdate.addMeal);
    setCalorie(elemToUpdate.addCalorie);

    handleChangeMeal();
    handleChangeCalorie();

    // puis modifier l'élément, recupère meal et calorie à jour pour changer l'élement
    setMeal(meal);
    setCalorie(calorie);

    // afficher l'élément modifié
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
              <span className="iconColor" onClick={() => handleUpdate(index)}>
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
