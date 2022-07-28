import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Tab from "./components/Tab";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPenToSquare);

function App() {
  const [showForm, setShowForm] = useState(false);
  let add = { addMeal: "", addCalorie: "" };
  const [calorie, setCalorie] = useState();
  const [meal, setMeal] = useState("");
  const [tab, setTab] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleChangeMeal = (e) => {
    setMeal(e.target.value);
  };

  const handleChangeCalorie = (e) => {
    setCalorie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTab = [...tab];
    add = { addMeal: meal, addCalorie: calorie };

    if (!add.addMeal || !add.addCalorie) {
      alert("nothing to add");
    } else {
      newTab.push(add);
      setTab(newTab);
      setTotal(total + parseInt(calorie));
      setMeal("");
      setCalorie("");
      setShowForm(false);
    }
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Calorie Counter</h1>
        <button className="btn" onClick={handleClick}>
          Add Meal
        </button>
        {showForm === true && (
          <Form
            setShowForm={setShowForm}
            handleChangeMeal={handleChangeMeal}
            handleChangeCalorie={handleChangeCalorie}
            handleSubmit={handleSubmit}
            meal={meal}
            calorie={calorie}
          />
        )}
        <Tab tab={tab} total={total} />
      </div>
    </div>
  );
}

export default App;
