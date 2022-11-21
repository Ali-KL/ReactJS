import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsrs] = useState("");

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsrs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const results = [];

  for (const user of users) {
    results.push(
      <div className="col-sm-6 col-md-4">
        <div className="card h-90 mb-4  " style={{ margin: "auto", maxWidth: 280 }}>
          <div key={user.id} className="card " style={{ width: "18rem" }}>
            <img className="card-img-top" src={require("./colors.jpg")} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.email} </p>
              <a href="a" className="btn btn-primary">
                {user.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <button className="btn btn-primary mt-5 mb-5" onClick={getData}>
        View Users
      </button>

      <div className="container ">
        <div className="row">{results}</div>
      </div>
    </div>
  );
}

export default App;
