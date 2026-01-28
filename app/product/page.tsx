import Image from "next/image";
import Link from "next/link";

// Logo Component
const Logo = () => (
  <div className="logo">
    <Image
      src="/logo.png"
      alt="MediHive Logo"
      width={40}
      height={40}
    />
    <span className="logo-text">MediHive</span>
  </div>
);

export default function ProductPage() {
  return (
    <>
      <section className="product-hero-section">
        {/* Navigation Header */}
        <nav className="nav-header">
          <Logo />
          <ul className="nav-menu">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/ourvision" className="nav-link">Vision</Link>
            </li>
            <li className="nav-item">
              <Link href="/product" className="nav-link">Product</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Hero Container */}
        <div className="product-hero-container">
          {/* Left Content */}
          <div className="product-hero-content">
            <h1 className="product-hero-title">MediHive Coupler</h1>
            <p className="product-hero-subtitle">
              A next-generation medical device<br />
              designed to structurally simplify vascular anastomosis<br />
              and enable reproducible outcomes.
            </p>
          </div>

          {/* Right Image */}
          <div className="product-hero-image">
            <Image
              src="/coupler-img-2.png"
              alt="MediHive Coupler"
              width={900}
              height={500}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* Why a Coupler Section */}
      <section className="why-coupler-section">
        <div className="why-coupler-container">
          <h2 className="why-coupler-title">Why a Coupler?</h2>
          <p className="why-coupler-text">
            Microsurgical anastomosis requires a high level of technical expertise,<br />
            often resulting in significant variability depending on operator experience.<br />
            MediHive Coupler addresses this challenge<br />
            by introducing a structurally guided approach to vessel anastomosis.
          </p>
          <div className="why-coupler-image">
            <Image
              src="/coupler-img-3.png"
              alt="Microsurgical anastomosis procedure"
              width={994}
              height={663}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* Product Concept Section */}
      <section className="product-concept-section">
        <div className="product-concept-container">
          <div className="product-concept-content">
            <h2 className="product-concept-title">Product Concept</h2>
            <p className="product-concept-text">
              MediHive Coupler redefines vascular anastomosis<br />
              from a manual suturing skill into a structured coupling system.<br />
              By reducing procedural complexity, it aims to enable consistent
              and reproducible anastomotic outcomes.
            </p>
          </div>
          <div className="product-concept-image">
            <Image
              src="/coupler-img-4.png"
              alt="MediHive Coupler product concept"
              width={600}
              height={400}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="key-features-section">
        <div className="key-features-container">
          <h2 className="key-features-title">Key Features</h2>
          
          <div className="features-grid">
            {/* Feature Card 1 */}
            <div className="feature-card">
              <h3 className="feature-card-title">Structural guidance</h3>
              <div className="feature-card-image">
                <Image
                  src="/features-img-1.png"
                  alt="Structural guidance"
                  width={456}
                  height={374}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="feature-card-text">
                Guides vessel positioning<br />
                and coupling through<br />
                structural design
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="feature-card">
              <h3 className="feature-card-title">Standardization</h3>
              <div className="feature-card-image">
                <Image
                  src="/features-img-2.png"
                  alt="Standardization"
                  width={456}
                  height={374}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="feature-card-text">
                Aims to reduce outcome<br />
                variability across<br />
                operators
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="feature-card">
              <h3 className="feature-card-title">Workflow-oriented design</h3>
              <div className="feature-card-image">
                <Image
                  src="/features-img-3.png"
                  alt="Workflow-oriented design"
                  width={456}
                  height={374}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="feature-card-text">
                Designed with real<br />
                surgical workflows in<br />
                mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3 className="footer-logo">MediHive</h3>
            <div className="footer-info">
              <p>메디하이브(MediHive) · 대표: 조채은</p>
              <p>사업자등록번호: 367-10-03331</p>
              <p>주소: 서울특별시 성북구 안암로 145, KU R&D센터 632호</p>
            </div>
          </div>
          <div className="footer-right">
            <a href="mailto:medihive.official@gmail.com" className="footer-email">
              medihive.official@gmail.com
            </a>
            <p className="footer-copyright">Copyright ⓒ 2026 MEDIHIVE. ALL RIGHTS RESERVED.</p>
            <p className="footer-links">Privacy Policy & Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
}
