import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Tab from "./components/Tab";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPenToSquare);

function App() {
  const [showForm, setShowForm] = useState(false);
  let add = { addMeal: "", addCalorie: 0 };
  const [calorie, setCalorie] = useState();
  const [meal, setMeal] = useState("");
  const [tab, setTab] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleChangeMeal = (e) => {
    // let info;
    // info = e.target.value;
    // return info;
    setMeal(e.target.value);
  };

  const handleChangeCalorie = (e) => {
    setCalorie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTab = [...tab];

    let found = newTab.find((elm) => elm.addMeal === meal);

    add = {
      addMeal: meal,
      addCalorie: calorie,
    };

    if (!add.addMeal || !add.addCalorie) {
      alert("nothing to add");
    } else if (found !== undefined) {
      alert("this meal already saved, you can update it");
    } else {
      newTab.push(add);
      setTab(newTab);
      setTotal(total + parseInt(calorie));
      setMeal("");
      setCalorie("");
      setShowForm(false);
      console.log(tab);
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
        <Tab
          tab={tab}
          setTotal={setTotal}
          total={total}
          handleClick={handleClick}
          setMeal={setMeal}
          setCalorie={setCalorie}
          handleChangeMeal={handleChangeMeal}
          handleChangeCalorie={handleChangeCalorie}
          setTab={setTab}
        />
      </div>
    </div>
  );
}

export default App;
