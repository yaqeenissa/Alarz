import React, { useState } from "react";
import {
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Search,
  Menu,
  X,
  Star,
} from "lucide-react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const text = {
    ar: {
      companyName: "شركة الأرز",
      tagline: "جودة فلسطينية أصيلة",
      products: "المنتجات",
      about: "من نحن",
      contact: "اتصل بنا",
      search: "ابحث عن منتج",
      categories: "الفئات",
      all: "الكل",
      oils: "زيوت",
      pickles: "مخللات",
      sauces: "صلصات",
      spices: "توابل",
      addToCart: "أضف للسلة",
      viewDetails: "عرض التفاصيل",
      phone: "+970 9 2322777",
      phone2: "+970 9 2326222",
      note: "اطلب الرقم 972 بدلا من 970 عند الاتصال من الدول غير العربية",
      email: "info@alarz.ps",
      address: "فلسطين",
      copyright: "© 2024 شركة الأرز. جميع الحقوق محفوظة.",
      quality: "جودة عالية",
      naturalProducts: "منتجات طبيعية 100%",
      fastDelivery: "توصيل سريع",
    },
    en: {
      companyName: "Al-Arz Company",
      tagline: "Authentic Palestinian Quality",
      products: "Products",
      about: "About Us",
      contact: "Contact",
      search: "Search for a product",
      categories: "Categories",
      all: "All",
      oils: "Oils",
      pickles: "Pickles",
      sauces: "Sauces",
      spices: "Spices",
      addToCart: "Add to Cart",
      viewDetails: "View Details",
      phone: "+970 9 2322777",
      phone2: "+970 9 2326222",
      note: "Use 972 instead of 970 when calling from non-Arab countries",
      email: "info@alarz.ps",
      address: "Palestine",
      copyright: "© 2024 Al-Arz Company. All rights reserved.",
      quality: "High Quality",
      naturalProducts: "100% Natural Products",
      fastDelivery: "Fast Delivery",
    },
  };

  const products = [
    {
      id: 1,
      name: { ar: "زيت زيتون بكر ممتاز", en: "Extra Virgin Olive Oil" },
      category: "oils",
      price: "45.00",
      image: "🫒",
      rating: 5,
    },
    {
      id: 2,
      name: { ar: "مخلل خيار", en: "Pickled Cucumbers" },
      category: "pickles",
      price: "12.00",
      image: "🥒",
      rating: 4.5,
    },
    {
      id: 3,
      name: { ar: "صلصة طماطم", en: "Tomato Sauce" },
      category: "sauces",
      price: "8.00",
      image: "🍅",
      rating: 4,
    },
    {
      id: 4,
      name: { ar: "زعتر فلسطيني", en: "Palestinian Zaatar" },
      category: "spices",
      price: "15.00",
      image: "🌿",
      rating: 5,
    },
    {
      id: 5,
      name: { ar: "زيت سمسم", en: "Sesame Oil" },
      category: "oils",
      price: "35.00",
      image: "🫘",
      rating: 4.5,
    },
    {
      id: 6,
      name: { ar: "مخلل زيتون", en: "Pickled Olives" },
      category: "pickles",
      price: "18.00",
      image: "🫒",
      rating: 5,
    },
    {
      id: 7,
      name: { ar: "صلصة حارة", en: "Hot Sauce" },
      category: "sauces",
      price: "10.00",
      image: "🌶️",
      rating: 4,
    },
    {
      id: 8,
      name: { ar: "سماق", en: "Sumac" },
      category: "spices",
      price: "12.00",
      image: "🌺",
      rating: 4.5,
    },
  ];

  const t = text[language];
  const isRTL = language === "ar";

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={`app ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <div className="logo-icon">🌲</div>
              <div>
                <h1 className="logo-title">{t.companyName}</h1>
                <p className="logo-subtitle">{t.tagline}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              <a href="#products" className="nav-link">
                {t.products}
              </a>
              <a href="#about" className="nav-link">
                {t.about}
              </a>
              <a href="#contact" className="nav-link">
                {t.contact}
              </a>
            </nav>

            {/* Actions */}
            <div className="header-actions">
              <button
                onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                className="lang-toggle"
              >
                {language === "ar" ? "EN" : "ع"}
              </button>
              <div className="cart-icon">
                <ShoppingCart className="icon" />
                {cart.length > 0 && (
                  <span className="cart-badge">{cart.length}</span>
                )}
              </div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="menu-toggle"
              >
                {menuOpen ? <X className="icon" /> : <Menu className="icon" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="nav-mobile">
              <nav className="nav-mobile-content">
                <a href="#products" className="nav-link">
                  {t.products}
                </a>
                <a href="#about" className="nav-link">
                  {t.about}
                </a>
                <a href="#contact" className="nav-link">
                  {t.contact}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2 className="hero-title">{t.naturalProducts}</h2>
          <p className="hero-subtitle">
            {t.quality} • {t.fastDelivery}
          </p>
          <div className="hero-features">
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <div className="feature-text">{t.naturalProducts}</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <div className="feature-text">{t.quality}</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <div className="feature-text">{t.fastDelivery}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <h2 className="section-title">{t.products}</h2>

          {/* Search and Filter */}
          <div className="filters">
            <div className="search-box">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder={t.search}
                className="search-input"
              />
            </div>

            {/* Category Filter */}
            <div className="category-filters">
              {["all", "oils", "pickles", "sauces", "spices"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-btn ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                >
                  {t[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <div className="product-info">
                  <h3 className="product-name">{product.name[language]}</h3>
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`star ${i < product.rating ? "filled" : ""}`}
                      />
                    ))}
                  </div>
                  <div className="product-details">
                    <span className="product-price">${product.price}</span>
                    <span className="product-category">
                      {t[product.category]}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="add-to-cart-btn"
                  >
                    <ShoppingCart className="btn-icon" />
                    {t.addToCart}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">{t.contact}</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone className="icon" />
              </div>
              <div>
                <h3 className="contact-title">{t.phone}</h3>
                <p className="contact-text">{t.phone}</p>
                <p className="contact-text">{t.phone2}</p>
                <p className="contact-note">{t.note}</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <Mail className="icon" />
              </div>
              <div>
                <h3 className="contact-title">{t.email}</h3>
                <p className="contact-text">{t.email}</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <MapPin className="icon" />
              </div>
              <div>
                <h3 className="contact-title">{t.address}</h3>
                <p className="contact-text">{t.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>{t.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
