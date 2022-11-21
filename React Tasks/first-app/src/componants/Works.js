import React from "react";

function Works() {
  return (
    <div>
        <div className="header">
        <img src={require('../AliCV.png')} alt="Ali" />
        </div>
        <div className="head-title">
          <div>
            <h3>
              Wanna Have
              <br />
              <strong>A Look On</strong>
            </h3>
            <h1>Some Of My Works?</h1>
          </div>
        </div>
        {/* ----------------------Works_Section-------------------------- */}
        <p className="works_title">Works I Have Done:</p>
        <div className="work_cards">
          <div className="work_card1">
          <h2>Wireframe</h2>
          <img src={require('../Images/Wireframe_Photo.png')} alt="Wireframe" />
            <a href="https://github.com/Ali-KL/project1/blob/main/Documentation/1stWireframe.pdf">
              <button className="cards_button">Veiw In Browser</button>
            </a>
          </div>
          <div className="work_card2">
          <h2>Mochup</h2>
          <img src={require('../Images/Mochup_Photo.png')} alt="Mochup" />
            <a href="https://github.com/Ali-KL/project1/blob/main/Documentation/1stMockup.pdf">
              <button className="cards_button">Veiw In Browser</button>
            </a>
          </div>
          <div className="work_card3">
          <h2>BS Flex</h2>
          <img src={require('../Images/BSflex_Photo.png')} alt="BS Flex" />
            <a href="https://github.com/Ali-KL/HTML-CSS-Tasks/blob/main/bootstrap/BS-Flex.html">
              <button className="cards_button">Veiw In Browser</button>
            </a>
          </div>
          <div className="work_card4">
          <h2>BS Table</h2>
          <img src={require('../Images/BStable_Photo.png')} alt="BS Table" />
            <a href="https://github.com/Ali-KL/HTML-CSS-Tasks/blob/main/bootstrap/BS-Table-Colored.html">
              <button className="cards_button">Veiw In Browser</button>
            </a>
          </div>
          <div className="work_card5">
          <h2>Grid</h2>
          <img src={require('../Images/Grid_Photo.png')} alt="Grid" />
            <a href="https://github.com/Ali-KL/HTML-CSS-Tasks/blob/main/GridAddiTasks/Grid-Example.html">
              <button className="cards_button">Veiw In Browser</button>
            </a>
          </div>
          <div className="work_card6">
          <h2>Calculator</h2>
          <img src={require('../Images/Calculator_Photo.png')} alt="Calculator" />

            <a href="https://github.com/Ali-KL/HTML-CSS-Tasks/blob/main/Griday/Grid-Calculator.html">
              <button className="cards_button">Veiw In Browser</button>
            </a>
          </div>
        </div>
      </div>
  );
}

export default Works;
