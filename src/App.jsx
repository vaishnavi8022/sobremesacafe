import "./App.css";
import cafeInterior from "./assets/cafe-interior.jpg";
import cafeCounter from "./assets/cafe-counter.jpg";

function App() {
  return (
    <div className="app">

      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="navbar">

        <a href="#" className="logo">
          SOBREMESA
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#bakehouse">Bakehouse</a>
          <a href="#visit">Visit</a>
        </div>

        <a href="#menu" className="nav-button">
          Explore Menu
        </a>

      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <img
          src="/src/assets/cafe-interior.jpg"
          alt="Sobremesa Cafe interior"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="eyebrow">
            CAFÉ • BAKEHOUSE • KITCHEN
          </p>

          <h1>
            A place to
          </h1>

          <p className="hero-description">
            Good food, warm coffee and conversations
            that last a little longer.
          </p>

          <div className="hero-buttons">

            <a href="#menu" className="button light-button">
              Explore Menu
            </a>

            <a href="#visit" className="button transparent-button">
              Find Us
            </a>

          </div>

        </div>

        <div className="scroll-text">
          SCROLL TO DISCOVER ↓
        </div>

      </section>


      {/* =========================
          INTRO
      ========================= */}

      <section className="intro" id="about">

        <div className="intro-text">

          <p className="eyebrow dark">
            WELCOME TO SOBREMESA
          </p>

          <h2>
            Come for the coffee.
            <br />
            <em>Stay for the feeling.</em>
          </h2>

          <p className="body-text">
            Tucked away in Jubilee Hills, Sobremesa is a café,
            bakehouse and kitchen created for slow mornings,
            long lunches and everything in between.
          </p>

          <p className="body-text">
            Step inside, find your favourite corner and let
            the afternoon take its time.
          </p>

          <a href="#menu" className="dark-link">
            Discover Sobremesa →
          </a>

        </div>

        <div className="intro-image">

          <img
            src="/src/assets/cafe-counter.jpg"
            alt="Sobremesa cafe counter"
          />

        </div>

      </section>


     {/* =========================
    MENU
========================= */}

<section className="menu-section" id="menu">

  <div className="section-heading">

    <p className="eyebrow dark">
      FROM OUR KITCHEN
    </p>

    <h2>
      Something for
      <br />
      <em>every mood.</em>
    </h2>

    <p className="body-text">
      Freshly baked pastries, comforting plates
      and coffee worth slowing down for.
    </p>

  </div>


  {/* MENU CATEGORIES */}

  <div className="menu-category-title">

    <span>BAKEHOUSE</span>

    <span>•</span>

    <span>KITCHEN</span>

    <span>•</span>

    <span>COFFEE</span>

  </div>


  {/* =========================
      BAKEHOUSE MENU
  ========================= */}

  <div className="menu-list">

    <div className="menu-list-header">
      <p>THE BAKEHOUSE</p>
      <span>FRESHLY BAKED</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Walnut Brownie</h3>
        <p>A rich, Fudge gluten-free brownie packed with crunchy walnuts</p>
      </div>
      <span className="price">269</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Milk Chocolate Brownie</h3>
        <p>A rich, fudge gluten-free brownie with rich milk chocolate ganache.</p>
      </div>
      <span className="price">269</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Italian Ricotta Brownie</h3>
        <p>A rich fudgy gluten-free brownie with ricotta cheese</p>
      </div>
      <span className="price">269</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Devil Chocolate Cake Pastry</h3>
        <p>Devil chocolate sponge, sao palme 36% milk chocolate mousse and soft ganache, chocolaty nutty crunchy..</p>
      </div>
      <span className="price">399</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Banana Bread</h3>
        <p>Moist homemade banana bread with a delicate sweetness.</p>
      </div>
      <span className="price">₹190</span>
    </div>

  </div>


  {/* =========================
      KITCHEN MENU
  ========================= */}

  <div className="menu-list">

    <div className="menu-list-header">
      <p>THE KITCHEN</p>
      <span>FROM OUR STOVE</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Penne Arrabbiata</h3>
        <p>Al dente penne tossed in a rich tomato and chilli sauce.</p>
      </div>
      <span className="price">₹380</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Parmesan & Cream Pasta</h3>
        <p>Creamy pasta finished with parmesan and cracked pepper.</p>
      </div>
      <span className="price">₹420</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Balsamic Sweet Potato Sandwich</h3>
        <p>Roasted sweet potato, greens and balsamic dressing.</p>
      </div>
      <span className="price">₹340</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Classic Grilled Sandwich</h3>
        <p>Golden toasted bread with a warm, comforting filling.</p>
      </div>
      <span className="price">₹320</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>House Salad</h3>
        <p>Fresh seasonal greens, vegetables and our house dressing.</p>
      </div>
      <span className="price">₹350</span>
    </div>

  </div>


  {/* =========================
      COFFEE MENU
  ========================= */}

  <div className="menu-list">

    <div className="menu-list-header">
      <p>THE COFFEE BAR</p>
      <span>BREWED WITH CARE</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Espresso</h3>
        <p>Rich, bold and beautifully balanced.</p>
      </div>
      <span className="price">₹160</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Americano</h3>
        <p>Espresso softened with hot water for a clean finish.</p>
      </div>
      <span className="price">₹180</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Cappuccino</h3>
        <p>Espresso with silky steamed milk and soft foam.</p>
      </div>
      <span className="price">₹220</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Spanish Latte</h3>
        <p>Espresso, steamed milk and condensed milk.</p>
      </div>
      <span className="price">₹260</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Iced Latte</h3>
        <p>Chilled espresso and milk served over ice.</p>
      </div>
      <span className="price">₹240</span>
    </div>

    <div className="menu-item">
      <div>
        <h3>Cold Coffee</h3>
        <p>Creamy, chilled and perfect for slow afternoons.</p>
      </div>
      <span className="price">₹250</span>
    </div>

  </div>


  <p className="menu-note">
    Prices are inclusive of applicable taxes. Please ask our team about
    seasonal specials and today's offerings.
  </p>

</section>

     


      {/* =========================
          SIGNATURES
      ========================= */}

      <section className="signatures">

        <div className="signature-image">

          <img
            src="/src/assets/cafe-counter.jpg"
            alt="Sobremesa bakery counter"
          />

        </div>


        <div className="signature-content">

          <p className="eyebrow dark">
            A FEW FAVOURITES
          </p>

          <h2>
            Made for
            <br />
            <em>slow afternoons.</em>
          </h2>

          <div className="food-list">

            <div className="food-item">
              <span>Penne Arrabbiata</span>
              <span>•••</span>
            </div>

            <div className="food-item">
              <span>Parmesan & Cream Pasta</span>
              <span>•••</span>
            </div>

            <div className="food-item">
              <span>Balsamic Sweet Potato Sandwich</span>
              <span>•••</span>
            </div>

            <div className="food-item">
              <span>Spanish Latte</span>
              <span>•••</span>
            </div>

            <div className="food-item">
              <span>Butter Croissant</span>
              <span>•••</span>
            </div>

          </div>

          <a href="#menu" className="outline-button">
            View Full Menu
          </a>

        </div>

      </section>


      {/* =========================
          BAKEHOUSE
      ========================= */}

      <section className="bakehouse" id="bakehouse">

        <div className="bakehouse-content">

          <p className="eyebrow">
            THE BAKEHOUSE
          </p>

          <h2>
            Fresh from
            <br />
            <em>the oven.</em>
          </h2>

          <p>
            Golden croissants, flaky pastries and little
            moments of sweetness baked fresh for you.
          </p>

          <div className="bakery-tags">

            <span>Croissants</span>
            <span>•</span>
            <span>Pain au Chocolat</span>
            <span>•</span>
            <span>Cakes</span>

          </div>

        </div>

      </section>


      {/* =========================
          VISIT
      ========================= */}

      <section className="visit" id="visit">

        <div className="visit-content">

          <p className="eyebrow dark">
            COME SAY HELLO
          </p>

          <h2>
            Find us in
            <br />
            <em>Jubilee Hills.</em>
          </h2>

          <p className="body-text">
            8-2-293/82/A/593, Road Number 31,
            Aditya Enclave, Venkatagiri,
            Jubilee Hills, Hyderabad.
          </p>

          <div className="visit-info">

            <div>
              <small>OPEN DAILY</small>
              <p>10:00 AM – 10:30 PM</p>
            </div>

            <div>
              <small>CALL US</small>
              <p>+91 78427 76820</p>
            </div>

          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Sobremesa+Cafe+Jubilee+Hills+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="button dark-button"
          >
            Get Directions
          </a>

        </div>


        <div className="visit-image">

          <img
            src="/src/assets/cafe-interior.jpg"
            alt="Inside Sobremesa Cafe"
          />

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <div className="footer-logo">
          SOBREMESA
        </div>

        <p className="footer-tagline">
          CAFÉ • BAKEHOUSE • KITCHEN
        </p>

        <div className="footer-links">

          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#bakehouse">Bakehouse</a>
          <a href="#visit">Visit</a>

        </div>

        <p className="copyright">
          © 2026 Sobremesa • Portfolio Website Concept
        </p>

      </footer>

    </div>
  );
}

export default App;