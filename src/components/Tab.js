import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tab = ({
  tab,
  total,
  handleClick,
  setMeal,
  setCalorie,
  handleChangeCalorie,
  handleChangeMeal,
  meal,
  calorie,
}) => {
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
                <FontAwesomeIcon icon="trash" />
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
