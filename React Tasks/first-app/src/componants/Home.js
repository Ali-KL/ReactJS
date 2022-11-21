import React from "react";

function Home() {
  return (
    <div>
      
  <div>
  <div className="header">
  <img src={require('../AliCV.png')} alt="Ali" />
  </div>
  <div className="head-title">
    <div>
      <h3>Hi, I am <br /><strong>Ali Kholani</strong></h3>
      <h1>FRONT-END DEVELOPER</h1>
    </div>
  </div>
</div>


  {/* -------------------------Introduction_Section------------------------------- */}
  <div className="about_me_div">
    <article className="about_me_article">
      <b>Who Is </b>
      <h3>Ali Kholani?</h3>
      <p className="about_me_para">
        As a Junior Front-End developer, I do my best to learn more, Get more experiences, And rise higher and higher.
        <br />
        Coding things from scratch is what I enjoy. <br />
        Bringing ideas to life is what I love. <br />
        creating attractive designs is my passion.
      </p>
    </article>
  </div>
  {/* -------------------------Skills_Section------------------------------- */}
  <p className="skills_title">Skills I Have Obtained:</p>
  <div className="skills_cards">
    <div className="skills_card1">
      <h2>bootstrap</h2>
      <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-social-logo.png" alt="bootstrap " />
    </div>
    <div className="skills_card2">
      <h2>Searching Skills</h2>
      <img src="https://teleskola.mt/wp-content/uploads/elementor/thumbs/Search-e532006b8df163cbc89175f082665490-oppc8pdo28j9yyzjdfc0poohnhe7o5yp4i1jlap14w.jpg" alt="Search Skills " />
    </div>
    <div className="skills_card3">
      <h2>SEO</h2>
      <img src="https://www.vinnove.com/wp-content/uploads/2021/12/SEO-article-header-880x470-c.png" alt="SEO " />
    </div>
    <div className="skills_card4">
      <h2>Wireframing</h2>
      <img src="https://ithemes.com/wp-content/uploads/2022/07/What-is-Wireframing-1024x537.png" alt="Wireframing " />
    </div>
    <div className="skills_card5">
      <h2>GitHub</h2>
      <img src="https://abadnet.com.sa/online/wp-content/uploads/2021/09/git-hub.png" alt="Github " />
    </div>
    <div className="skills_card6">
      <h2>HTML</h2>
      <img src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw" alt="HTML " />
    </div>
    <div className="skills_card7">
      <h2>CSS</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png" alt="CSS " />
    </div>
    <div className="skills_card8">
      <h2>A+</h2>
      <img src="https://play-lh.googleusercontent.com/IHwx8LleMkcRmhnDd6uBLrK5wpppa2RklbiYtgfLCqs5bwmm2E7VEZwo6TCaXFpy6Ww" alt="A+ " />
    </div>
  </div>
  {/* -------------------------Hobbies_Section------------------------------- */}
  <p className="hobbies_title">Activities I Enjoy:</p>
  <div className="hobbies_cards">
    <div className="hobbies_card1">
      <h2>Writing Stories</h2>
      <img src="https://www.scribendi.com/images/cms/thumbnails/Writing-Short-Stories_720x370.jpg" alt="Writing Stories " />
    </div>
    <div className="hobbies_card2">
      <h2>Photography</h2>
      <img src="https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg" alt="Photography " />
    </div>
    <div className="hobbies_card3">
      <h2>Swimming</h2>
      <img src="https://resources.fina.org/photo-resources/2022/06/09/82ad1a41-cb1a-4b10-9551-bfc6dcbf1986/GettyImages-1333899980.jpg?width=1200&height=630" alt="Swimming " />
    </div>
    <div className="hobbies_card4">
      <h2>Solving Puzzles</h2>
      <img src="https://healthland.time.com/wp-content/uploads/sites/4/2012/09/bb4691-002.jpg?w=720&h=480&crop=1" alt="Solving Puzzles " />
    </div>
    <div className="hobbies_card5">
      <h2>Gaming</h2>
      <img src="https://media.wired.com/photos/627da1085d49787abdf713b4/master/pass/Pakistani-Gamers-Want-a-Seat-at-the-Table-Culture-shutterstock_1949862841.jpg" alt="Gaming " />
    </div>
    <div className="hobbies_card6">
      <h2>Drawing</h2>
      <img src="https://mymodernmet.com/wp/wp-content/uploads/2022/05/gorams-people-drawing-tutorials-6.jpg" alt="Drawing " />
    </div>
    <div className="hobbies_card7">
      <h2>FootBall</h2>
      <img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg?q=60" alt="FootBall " />
    </div>
    <div className="hobbies_card8">
      <h2>Reading</h2>
      <img src="https://imageio.forbes.com/specials-images/imageserve/60663652dccb5695c574fa98/Growing-evidence-suggests-a-causal-link-between-knowledge-and-comprehension-/960x0.jpg?format=jpg&width=960" alt="Reading " />
    </div>
  </div>
</div>

  );
}

export default Home;
