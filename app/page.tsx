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

// Clock Icon for Reduced anastomosis time
const ClockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8V16L21 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Chart Icon for Lower operator dependency
const ChartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 28H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 22V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 22V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 22V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 22V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="6" r="3" fill="white"/>
  </svg>
);

// Refresh/Reproducible Icon
const ReproducibleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 16C4 9.37258 9.37258 4 16 4C20.4183 4 24.2647 6.33779 26.4 9.86667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 16C28 22.6274 22.6274 28 16 28C11.5817 28 7.73528 25.6622 5.6 22.1333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 10H27V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 22H5V27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// Arrow Icon
const ArrowDownIcon = () => (
  <svg width="90" height="70" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="arrowGradient" x1="45" y1="70" x2="45" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FEAE2E"/>
        <stop offset="100%" stopColor="rgba(254, 211, 46, 0)"/>
      </linearGradient>
    </defs>
    <path d="M45 70L10 20H80L45 70Z" fill="url(#arrowGradient)"/>
    <path d="M45 50L20 10H70L45 50Z" fill="url(#arrowGradient)" fillOpacity="0.5"/>
  </svg>
);

export default function Home() {
  return (
    <>
    <section className="hero-section">
      {/* Navigation Header */}
      <nav className="nav-header">
        <Logo />
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/ourvision" className="nav-link">Vision</a>
          </li>
          <li className="nav-item">
            <a href="/product" className="nav-link">Product</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Main Container */}
      <div className="hero-container">
        {/* Content */}
        <div className="hero-content">
          {/* Text */}
          <div className="hero-text">
            <h1 className="hero-title">
              미세접합 수술을 위한<br />
              차세대 혈관 접합 Coupler
            </h1>
            <p className="hero-subtitle">
              수술자의 숙련도에 의존하던 혈관 문합을<br />
              더 빠르고, 더 단순하며, 더 재현 가능하게 만듭니다.
            </p>
          </div>

          {/* Icon Set */}
          <div className="icon-set">
            <div className="icon-badge">
              <div className="icon-badge-icon">
                <ClockIcon />
              </div>
              <span className="icon-badge-text">Reduced<br />anastomosis time</span>
            </div>
            <div className="icon-badge">
              <div className="icon-badge-icon">
                <ChartIcon />
              </div>
              <span className="icon-badge-text">Lower operator<br />dependency</span>
            </div>
            <div className="icon-badge">
              <div className="icon-badge-icon">
                <ReproducibleIcon />
              </div>
              <span className="icon-badge-text">Reproducible<br />outcomes</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button className="btn-outline">기술자료요청</button>
            <Link href="/contact">
              <button className="btn-filled">협업 문의</button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <Image
            src="/image1.png"
            alt="혈관 접합 Coupler"
            width={750}
            height={568}
            priority
          />
        </div>
      </div>

      {/* Scroll Down */}
      <div className="scroll-down">
        SCROLL DOWN
      </div>
    </section>

    {/* Clinical Background Section */}
    <section className="clinical-section">
      <div className="clinical-header">
        <span className="clinical-label">Clinical Background</span>
        <h2 className="clinical-title">미세혈관 문합의 임상적 중요성</h2>
      </div>

      <div className="clinical-cards">
        <div className="clinical-card">
          <div className="clinical-card-icon">
            <Image src="/icon-clock.png" alt="시간 아이콘" width={60} height={60} />
          </div>
          <div className="clinical-card-content">
            <h3 className="clinical-card-title">긴 수술 시간</h3>
            <p className="clinical-card-desc">환자와 의료진 모두에게 부담</p>
          </div>
        </div>

        <div className="clinical-card">
          <div className="clinical-card-icon">
            <Image src="/icon-stethoscope.png" alt="청진기 아이콘" width={60} height={60} />
          </div>
          <div className="clinical-card-content">
            <h3 className="clinical-card-title">높은 숙련도 의존</h3>
            <p className="clinical-card-desc">경험 많은 외과의만 집도 가능</p>
          </div>
        </div>

        <div className="clinical-card">
          <div className="clinical-card-icon">
            <Image src="/icon-analytics.png" alt="분석 아이콘" width={60} height={60} />
          </div>
          <div className="clinical-card-content">
            <h3 className="clinical-card-title">결과 편차</h3>
            <p className="clinical-card-desc">의사마다, 컨디션마다 달라지는 결과</p>
          </div>
        </div>
      </div>

      <div className="clinical-arrow">
        <ArrowDownIcon />
        <p className="clinical-conclusion">이 문제를 구조적으로 해결할 필요성</p>
      </div>
    </section>

    {/* Product Concept Section */}
    <section className="product-section">
      <div className="product-header">
        <span className="product-label">Product Concept</span>
        <h2 className="product-title">
          혈관 문합 과정을 구조적으로 단순화하여
          일관된 문합 결과를 가능하게 하는 의료기기
          MediHive Coupler.
        </h2>
      </div>

      <div className="product-cards">
        <div className="product-card">
          <Image
            src="/product-img-1.jpg"
            alt="Structural guidance"
            fill
            className="product-card-bg"
          />
          <div className="product-card-label">
            <span>#Structural guidance</span>
          </div>
        </div>

        <div className="product-card">
          <Image
            src="/product-img-2.jpg"
            alt="Standardization"
            fill
            className="product-card-bg"
          />
          <div className="product-card-label">
            <span>#Standardization</span>
          </div>
        </div>

        <div className="product-card">
          <Image
            src="/product-img-3.jpg"
            alt="Workflow-oriented design"
            fill
            className="product-card-bg"
          />
          <div className="product-card-label">
            <span>#Workflow-oriented design</span>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="works-section">
      <h2 className="works-title">How It Works</h2>
      <div className="works-list">
        <div className="works-card">
          <div className="works-card-image">
            <Image
              src="/work-img-1.png"
              alt="Vessel positioning"
              fill
              sizes="320px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span className="works-card-text">Vessel positioning</span>
        </div>

        <div className="works-arrow">
          <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11H28M28 11L18 2M28 11L18 20" stroke="#CCCCCC" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="works-card">
          <div className="works-card-image">
            <Image
              src="/work-img-2.png"
              alt="Coupling mechanism"
              fill
              sizes="320px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span className="works-card-text">Coupling mechanism</span>
        </div>

        <div className="works-arrow">
          <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11H28M28 11L18 2M28 11L18 20" stroke="#CCCCCC" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="works-card">
          <div className="works-card-image">
            <Image
              src="/work-img-3.png"
              alt="Stable anastomosis"
              fill
              sizes="320px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span className="works-card-text">Stable anastomosis</span>
        </div>
      </div>
    </section>

    {/* Differentiation Snapshot Section */}
    <section className="diff-section">
      <h2 className="diff-title">Differentiation Snapshot</h2>
      <div className="diff-graph">
        {/* Left Side - Manual suturing */}
        <div className="diff-left">
          <div className="diff-left-title">
            <span>Manual suturing</span>
          </div>
          <div className="diff-bar-container-left">
            <div className="diff-bar-bg-left">
              <div className="diff-bar-left" style={{ width: '143px' }}>
                <span>30min</span>
              </div>
            </div>
          </div>
          <div className="diff-bar-container-left">
            <div className="diff-bar-bg-left">
              <div className="diff-bar-left" style={{ width: '166px' }}>
                <span>36%</span>
              </div>
            </div>
          </div>
          <div className="diff-bar-container-left">
            <div className="diff-bar-bg-left">
              <div className="diff-bar-left" style={{ width: '294px' }}>
                <span>70</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center - Labels */}
        <div className="diff-center">
          <div className="diff-center-title">
            <span>VS</span>
          </div>
          <div className="diff-labels">
            <div className="diff-label">
              <span>Time</span>
            </div>
            <div className="diff-label">
              <span>Vairability</span>
            </div>
            <div className="diff-label">
              <span>Training burden</span>
            </div>
          </div>
        </div>

        {/* Right Side - Coupler */}
        <div className="diff-right">
          <div className="diff-right-title">
            <span>Coupler</span>
          </div>
          <div className="diff-bar-container-right">
            <div className="diff-bar-bg-right">
              <div className="diff-bar-right" style={{ width: '143px' }}>
                <span>10min</span>
              </div>
            </div>
          </div>
          <div className="diff-bar-container-right">
            <div className="diff-bar-bg-right">
              <div className="diff-bar-right" style={{ width: '100px' }}>
                <span>12%</span>
              </div>
            </div>
          </div>
          <div className="diff-bar-container-right">
            <div className="diff-bar-bg-right">
              <div className="diff-bar-right" style={{ width: '107px' }}>
                <span>25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Use-case / Application Section */}
    <section className="usecase-section">
      <h2 className="usecase-title">Use-case / Application</h2>
      <div className="usecase-list">
        <div className="usecase-card">
          <Image
            src="/case-img-1.jpg"
            alt="Reconstructive microsurgery"
            fill
            sizes="400px"
            style={{ objectFit: 'cover' }}
          />
          <div className="usecase-card-overlay"></div>
          <span className="usecase-card-text">Reconstructive<br />microsurgery</span>
        </div>

        <div className="usecase-card">
          <Image
            src="/case-img-2.jpg"
            alt="Free flap procedures"
            fill
            sizes="400px"
            style={{ objectFit: 'cover' }}
          />
          <div className="usecase-card-overlay"></div>
          <span className="usecase-card-text">Free flap procedures</span>
        </div>

        <div className="usecase-card">
          <Image
            src="/case-img-3.jpg"
            alt="Other vascular anastomosis scenarios"
            fill
            sizes="400px"
            style={{ objectFit: 'cover' }}
          />
          <div className="usecase-card-overlay"></div>
          <span className="usecase-card-text">Other vascular<br />anastomosis<br />scenarios</span>
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
