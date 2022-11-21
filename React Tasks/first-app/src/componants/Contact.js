import React from 'react'

function Contact() {
  return (
      <div>
          
<div>
  <div className="header">
  <img src={require('../AliCV.png')} alt="Ali" />
  </div>
  <div className="head-title">
    <div>
      <h3>Why Don't You <br /><strong>Get In Touch</strong></h3>
      <h1>With Me!</h1>
    </div>
  </div>
  {/* ----------------------Contact-Me_Section-------------------------- */}
  <div className="cont_info">
    <h3>Mobile:</h3>
    <p>0778082155</p>
    <h3>Email:</h3>
    <p>khoolani.ali@gmail.com</p>
    <h3>Address:</h3>
    <p>Jordan As-Salt</p>
  </div>
  <div className="cont_form">
    <form action="/action_page.php">
      <label htmlFor="fname">Name:</label> <br />
      <input type="text" name="fname" required /><br /><br />
      <label htmlFor="Email">Email:</label><br />
      <input type="email" name="lname" required /><br />
      <br />
      <p><label htmlFor="Message">Send Me A Message:</label></p>
      <textarea id="form_message" name="Message" rows={4} cols={35} required defaultValue={""} />
      <br />
      <button className="form_button">Send</button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Contact