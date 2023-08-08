import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Tab from "./components/Tab";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faPenToSquare);

function App() {
  const [showForm, setShowForm] = useState(false);
  const [styleForModal, setStyleForModal] = useState(false);

  let add = { addMeal: "", addCalorie: 0 };
  const [calorie, setCalorie] = useState("");
  const [meal, setMeal] = useState("");
  const [tab, setTab] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    setShowForm(true);
    setStyleForModal(true);
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

    let found = newTab.find(
      (elm) => elm.addMeal.toLowerCase() === meal.toLowerCase()
    );

    add = {
      addMeal: meal,
      addCalorie: calorie,
    };

    // quand les inputs ne sont pas remplis
    if (!add.addMeal || !add.addCalorie) {
      alert("nothing to add");

      // vérifi si ce repas existe déjà
    } else if (found !== undefined) {
      // si found exist, je veux juste changer la valeur de calorie, mais pas le nom de repas

      alert("this meal already saved, you can update it");
    } else {
      newTab.push(add);
      setTab(newTab);
      setTotal(total + parseInt(calorie));
      setMeal("");
      setCalorie("");
      setShowForm(false);
      // console.log(tab);
    }
  };

  return (
    <div style={{ opacity: showForm ? "0.7" : "1" }} className="App">
      <div className="content">
        <h1 className="title">Calorie Counter</h1>

        {showForm === true && (
          <Form
            showForm={showForm}
            handleChangeMeal={handleChangeMeal}
            handleChangeCalorie={handleChangeCalorie}
            handleSubmit={handleSubmit}
            meal={meal}
            calorie={calorie}
          />
        )}
        <Tab tab={tab} setTotal={setTotal} total={total} setTab={setTab} />
        <button className="btn" onClick={handleClick}>
          Add Meal
        </button>
      </div>
    </div>
  );
}

export default App;
