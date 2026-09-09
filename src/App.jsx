import "./App.css";

function App() {
  const menuCategories = [
    {
      title: "Bakehouse",
      subtitle: "Fresh from the oven",
      items: [
        {
          name: "Butter Croissant",
          description: "Classic French pastry with delicate, flaky layers",
          price: "₹180",
        },
        {
          name: "Pain au Chocolat",
          description: "Buttery pastry layered with dark chocolate",
          price: "₹220",
        },
        {
          name: "Almond Croissant",
          description: "Almond cream, toasted almonds and golden pastry",
          price: "₹240",
        },
        {
          name: "Cinnamon Roll",
          description: "Soft cinnamon pastry with a delicate glaze",
          price: "₹210",
        },
        {
          name: "Banana Bread",
          description: "Moist house-baked banana bread",
          price: "₹190",
        },
      ],
    },
    {
      title: "Kitchen",
      subtitle: "Made to linger over",
      items: [
        {
          name: "Penne Arrabbiata",
          description: "Penne, tomato, garlic, chilli and fresh herbs",
          price: "₹380",
        },
        {
          name: "Parmesan & Cream Pasta",
          description: "Creamy parmesan sauce with fresh herbs",
          price: "₹420",
        },
        {
          name: "Balsamic Sweet Potato Sandwich",
          description: "Roasted sweet potato, greens and balsamic glaze",
          price: "₹340",
        },
        {
          name: "Classic Grilled Sandwich",
          description: "Toasted sourdough, cheese and house seasoning",
          price: "₹320",
        },
        {
          name: "House Salad",
          description: "Seasonal greens, vegetables and house dressing",
          price: "₹350",
        },
      ],
    },
    {
      title: "Coffee",
      subtitle: "Slowly, always",
      items: [
        {
          name: "Espresso",
          description: "Rich, concentrated and beautifully balanced",
          price: "₹160",
        },
        {
          name: "Americano",
          description: "Espresso with hot water",
          price: "₹180",
        },
        {
          name: "Cappuccino",
          description: "Espresso, steamed milk and soft foam",
          price: "₹220",
        },
        {
          name: "Spanish Latte",
          description: "Espresso, condensed milk and silky steamed milk",
          price: "₹260",
        },
        {
          name: "Iced Latte",
          description: "Chilled espresso with smooth cold milk",
          price: "₹240",
        },
        {
          name: "Cold Coffee",
          description: "Creamy chilled coffee, house style",
          price: "₹250",
        },
      ],
    },
  ];

  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">SOBREMESA</div>

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

      {/* HERO */}
      <section className="hero">
        <div className="hero-decoration hero-decoration-one"></div>
        <div className="hero-decoration hero-decoration-two"></div>

        <div className="hero-content">
          <p className="eyebrow">CAFÉ • BAKEHOUSE • KITCHEN</p>

          <h1>
            A place
            <br />
            <span>to linger.</span>
          </h1>

          <p className="hero-description">
            Coffee, freshly baked pastries and good food —
            <br />
            made for slow mornings and long conversations.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="primary-button">
              Explore Menu
            </a>

            <a href="#visit" className="secondary-button">
              Find Us
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>EST. 2026</span>
          <span>HYDERABAD</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-small">
          <span>01</span>
          <span>OUR STORY</span>
        </div>

        <div className="about-content">
          <p className="section-label">A LITTLE SOMETHING</p>

          <h2>
            Come for the coffee.
            <br />
            <em>Stay for the feeling.</em>
          </h2>

          <p className="about-text">
            Sobremesa is a café, bakehouse and kitchen created for
            unhurried moments. A warm cup of coffee, something fresh
            from the oven and nowhere else you need to be.
          </p>

          <div className="about-line"></div>

          <p className="about-note">
            Take your time. You're here now.
          </p>
        </div>
      </section>

      {/* MENU */}
      <section className="menu-section" id="menu">
        <div className="menu-intro">
          <p className="section-label">THE MENU</p>

          <h2>
            Something for
            <br />
            <em>every kind of day.</em>
          </h2>

          <p>
            From our oven to your table — thoughtfully made,
            simply served.
          </p>
        </div>

        <div className="menu-divider">
          <span>BAKEHOUSE</span>
          <span>•</span>
          <span>KITCHEN</span>
          <span>•</span>
          <span>COFFEE</span>
        </div>

        {menuCategories.map((category) => (
          <div className="menu-list" key={category.title}>
            <div className="menu-list-header">
              <h3>{category.title}</h3>
              <span>{category.subtitle}</span>
            </div>

            {category.items.map((item) => (
              <div className="menu-item" key={item.name}>
                <div className="menu-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>

                <span className="price">{item.price}</span>
              </div>
            ))}
          </div>
        ))}

        <p className="menu-note">
          * Menu and prices are subject to seasonal changes.
        </p>
      </section>

      {/* SIGNATURES */}
      <section className="signature-section">
        <div className="signature-decoration"></div>

        <div className="signature-content">
          <p className="section-label">THE SOBREMESA WAY</p>

          <h2>
            Made slowly.
            <br />
            <em>Enjoyed fully.</em>
          </h2>

          <p>
            We believe the best moments aren't rushed.
            They're shared over coffee, warm pastries and
            conversations that last a little longer.
          </p>

          <a href="#menu" className="text-link">
            Discover the menu <span>→</span>
          </a>
        </div>
      </section>

      {/* BAKEHOUSE */}
      <section className="bakehouse-section" id="bakehouse">
        <div className="bakehouse-card">
          <div className="bakehouse-number">02</div>

          <p className="section-label">FROM THE BAKEHOUSE</p>

          <h2>
            Fresh every
            <br />
            <em>morning.</em>
          </h2>

          <p>
            Golden croissants, soft cinnamon rolls, delicate
            pastries and breads made with patience.
          </p>

          <div className="bakehouse-details">
            <span>HANDCRAFTED</span>
            <span>•</span>
            <span>FRESH DAILY</span>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="visit-section" id="visit">
        <div className="visit-header">
          <p className="section-label">COME SAY HELLO</p>

          <h2>
            Your table
            <br />
            <em>is waiting.</em>
          </h2>
        </div>

        <div className="visit-grid">
          <div className="visit-card">
            <span className="visit-label">ADDRESS</span>
            <p>
              Jubilee Hills
              <br />
              Hyderabad, Telangana
            </p>
          </div>

          <div className="visit-card">
            <span className="visit-label">HOURS</span>
            <p>
              Monday — Sunday
              <br />
              8:00 AM — 11:00 PM
            </p>
          </div>

          <div className="visit-card">
            <span className="visit-label">CONTACT</span>
            <p>
              +91 00000 00000
              <br />
              hello@sobremesa.com
            </p>
          </div>
        </div>

        <a href="#top" className="visit-button">
          Back to top ↑
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">SOBREMESA</div>

        <p>A place to linger.</p>

        <div className="footer-bottom">
          <span>© 2026 Sobremesa</span>
          <span>Made with intention.</span>
        </div>
      </footer>

    </div>
  );
}

export default App;