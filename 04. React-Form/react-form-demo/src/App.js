import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    age: "",
    bio: "",
    gender: "f",
    userType: "corporate",
    tac: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setValues((state) => ({
      ...state,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={changeHandler}
              value={values.username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" value={values.password} onChange={changeHandler} />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" value={values.age} onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="bio"></label>
            <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHandler} />
          </div>

          <div><label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="individual-user-type">Individual:</label>
            <input type="radio" name="userType" value="individual" id="individual-user-type" onChange={changeHandler} />
            <label htmlFor="corporate-user-type">Corporate:</label>
            <input type="radio" name="userType" value="corporate" id="corpoarte-user-type" onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="tac">Terms and Conditions:</label>
            <input type="checkbox" name="tac" id="tac" checked={values.tac} onChange={changeHandler} />
          </div>

          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
