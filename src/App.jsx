import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h2>Foodi</h2>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Services</li>
            <li>Offers</li>
          </ul>

          <ul>
            <li>🔍</li>
            <li>📞Contact</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="left">
            <h1>
              Dive into Delights Of Delectable <span>Food</span>
            </h1>
            <p>
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <div className="btns">
              <button id="Order">Order Now</button>
              <button id="video">Watch video</button>
            </div>
          </div>
          <div className="right">
            <img src="./hero.png" alt="" />
          </div>
        </div>
      </main>
      <section>
        <h1>Popular categories</h1>
        <div className="container">
          <div id="cards">
            <div className="card-categroies">
              <div className="img-frame">
                <img
                  src="https://img.pikbest.com/origin/09/17/77/71vpIkbEsTIN8.png!sw800"
                  alt=""
                />
              </div>
              <h3>Main Dish</h3>
              <span>(86 dishes)</span>
            </div>
            <div className="card-categroies">
              <div className="img-frame">
                <img
                  src="https://img.pikbest.com/origin/09/17/77/71vpIkbEsTIN8.png!sw800"
                  alt=""
                />
              </div>
              <h3>Main Dish</h3>
              <span>(86 dishes)</span>
            </div>
            <div className="card-categroies">
              <div className="img-frame">
                <img
                  src="https://img.pikbest.com/origin/09/17/77/71vpIkbEsTIN8.png!sw800"
                  alt=""
                />
              </div>
              <h3>Main Dish</h3>
              <span>(86 dishes)</span>
            </div>
            <div className="card-categroies">
              <div className="img-frame">
                <img
                  src="https://img.pikbest.com/origin/09/17/77/71vpIkbEsTIN8.png!sw800"
                  alt=""
                />
              </div>
              <h3>Main Dish</h3>
              <span>(86 dishes)</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section-nav">
            <h2>Standout Dishes <br/> From Our Menu</h2>
            <span id="section-nav-btn">
              <button>prev</button>
              <button>next</button>
            </span>
          </div>
          <div className="menu-cards">
            <div className="menu-card">
            <span id="like">❤️</span>

              <img src="./salad.png" alt="" />
              <h3 className="menu-card-name">Fattoush salad</h3>
              <span className="menu-card-description">Description of the item</span>
              <span id="price">$24.00</span>
            </div>
            
            <div className="menu-card">
            <span id="like">❤️</span>

              <img src="./salad.png" alt="" />
              <h3 className="menu-card-name">Fattoush salad</h3>
              <span className="menu-card-description">Description of the item</span>
              <span id="price">$24.00</span>
            </div>
            <div className="menu-card">
            <span id="like">❤️</span>
              <img src="./salad.png" alt="" />
              <h3 className="menu-card-name">Fattoush salad</h3>
              <span className="menu-card-description">Description of the item</span>
              <span id="price">$24.00</span>
            </div>
          </div>
        </div>
      </section>
      <section id="section-4">
        <div className="container">
          <img src="./hero2.png" width={400} alt=""/>

        <div id="img-frame-2">

        </div>

          <div className="section-info">
            <h2>
              What Our Customers Say About Us
            </h2>
            <p>
              “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container"></div>
      </section>
      <article>
        <div className="contianer"></div>
      </article>
      <footer>
  <div className="container footer-content">
    <div className="footer-left">
      <h2>Foodi</h2>
      <p>Your daily dose of delicious food delivered fresh to your doorstep.</p>
    </div>
    <div className="footer-links">
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Services</li>
        <li>Offers</li>
      </ul>
      <ul>
        <li>Contact</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <span>© 2023 Dscode | All rights reserved</span>
  </div>
</footer>

    </>
  );
}

export default App;
