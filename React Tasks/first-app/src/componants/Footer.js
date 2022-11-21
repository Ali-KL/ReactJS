
// rce


import React, { Component } from "react";

export class Footer extends Component {
  
  constructor() {
    super()
    this.state = {
      name: 'Ahmad'
    }
  }


  changeName() {
    
    this.setState({

      name: 'Samer'
  })
  }

  render() {
    return (
      <div>
        <div>
          <div className="footer">
            <p>
              Coded By: <span className="footer_span">{this.state.name}</span>
            </p>
            <button onClick={() => this.changeName()}>Change Name</button>

            <div className="social_links">
              <a href="https://www.facebook.com/alloush.kl.5">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.linkedin.com/in/ali-kholani-01a604244/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/Ali-KL">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
