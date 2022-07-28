import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tab = ({ tab, total }) => {
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
              <span className="iconColor">
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
