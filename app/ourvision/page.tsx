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

export default function VisionPage() {
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
        <div className="product-hero-container" style={{ justifyContent: 'center' }}>
          {/* Center Content */}
          <div className="product-hero-content" style={{ maxWidth: '900px', alignItems: 'center', textAlign: 'center' }}>
            <h1 className="product-hero-title" style={{ fontSize: '72px' }}>Vision</h1>
            <p className="product-hero-subtitle" style={{ fontSize: '32px', lineHeight: '150%', marginTop: '30px', maxWidth: '800px' }}>
              Redefining vascular anastomosis<br />
              from individual skill to reproducible system
            </p>
            <p className="product-hero-subtitle" style={{ fontSize: '20px', marginTop: '40px', maxWidth: '750px' }}>
              MediHive envisions a future where critical surgical procedures<br />
              are guided by structure, not limited by individual variability.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Details Section */}
      <section className="vision-details-section">
        <div className="vision-details-container">
          <div className="vision-details-content">
            <p className="vision-intro-text">
              MediHive aims to transform vascular anastomosis<br />
              from a manual suturing skill into a structured, reproducible system.
            </p>
            <p className="vision-intro-text">
              By introducing structural guidance into surgical workflows,
            </p>
            
            <div className="vision-goals">
              <p className="vision-goals-title">we seek to enable:</p>
              <ul className="vision-goals-list">
                <li>More consistent surgical outcomes</li>
                <li>Reduced procedural complexity</li>
                <li>Lower dependence on individual experience</li>
              </ul>
            </div>

            <p className="vision-conclusion">
              Our vision is not to replace surgeons,<br />
              but to support them with systems designed for real clinical environments.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem We See Section */}
      <section className="problem-section">
        <div className="problem-container">
          <div className="problem-content">
            <h2 className="problem-title">The Problem We See</h2>
            
            <div className="problem-text">
              <p className="problem-paragraph">
                <span className="problem-first-letter">M</span>icrosurgical anastomosis remains
                one of the most technically demanding steps
                in reconstructive and vascular surgery.
              </p>
              <p className="problem-paragraph problem-highlight">
                Despite advances in surgical tools, the outcome still heavily
                depends on the individual surgeon's experience,
              </p>
              <p className="problem-paragraph">
                leading to variability in efficiency, reproducibility, and training burden.
              </p>
            </div>
          </div>

          <div className="problem-image">
            <Image
              src="/vision-img-1.png"
              alt="Microsurgical procedure"
              width={480}
              height={320}
              style={{ objectFit: 'cover' }}
            />
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
