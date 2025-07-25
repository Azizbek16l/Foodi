import './App.css'

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
          <h1>Dive into Delights Of Delectable <span>Food</span></h1>
          <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
          <div className="btns">
            <button id='Order'>Order Now</button>
            <button id='video'>Watch video</button>
          </div>
        </div>
        <div className='right'><img src="./hero.png" alt=""/></div>
      </div>      
    </main>
    <section>
      <h1>Popular categories</h1>
      <div className="container">
        <div id="cards">
          <div className='card-categroies'>
           <div className='img-frame'>
            <img src="https://img.pikbest.com/origin/09/17/77/71vpIkbEsTIN8.png!sw800" alt=""/>
           </div>
            <h3>Main Dish</h3>
            <span>(86 dishes)</span>
          </div>
          <div className='card-categroies'>
           <div className='img-frame'>
            <img src="https://img.pikbest.com/origin/09/17/77/71vpIkbEsTIN8.png!sw800" alt=""/>
           </div>
            <h3>Main Dish</h3>
            <span>(86 dishes)</span>
          </div>
          <div className='card-categroies'>
           <div className='img-frame'>
            <img src="https://img.pikbest.com/origin/09/17/77/71vpIkbEsTIN8.png!sw800" alt=""/>
           </div>
            <h3>Main Dish</h3>
            <span>(86 dishes)</span>
          </div>
          <div className='card-categroies'>
           <div className='img-frame'>
            <img src="https://img.pikbest.com/origin/09/17/77/71vpIkbEsTIN8.png!sw800" alt=""/>
           </div>
            <h3>Main Dish</h3>
            <span>(86 dishes)</span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container"></div>      
    </section>
    <section>
      <div className="container"></div>
    </section>
    <section>
      <div className="container"></div>
    </section>
    <article>
      <div className="contianer"></div>
    </article>
    <footer>
      <div className="container"></div>
    </footer>
    </>
  )
}

export default App