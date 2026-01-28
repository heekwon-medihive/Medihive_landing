"use client";

import Image from "next/image";
import { useState } from "react";

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    otherInquiries: "",
    inquiryTypes: {
      product: false,
      clinical: false,
      investments: false,
      others: false,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryTypes: {
        ...prev.inquiryTypes,
        [type]: !prev.inquiryTypes[type as keyof typeof prev.inquiryTypes],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // 여기에 실제 제출 로직을 추가할 수 있습니다
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.");
  };

  return (
    <>
      <section className="contact-page-section">
        {/* Navigation Header */}
        <nav className="nav-header">
          <Logo />
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/#ourvision" className="nav-link">OurVision</a>
            </li>
            <li className="nav-item">
              <a href="/product" className="nav-link">Product</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Contact Content */}
        <div className="contact-page-container">
          {/* Header */}
          <div className="contact-page-header">
            <h1 className="contact-page-title">Contact & Collaboration</h1>
            <p className="contact-page-subtitle">
              We welcome inquiries regarding clinical collaboration, technology discussions, and investment.
            </p>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Inquiry Type */}
            <div className="form-group-full">
              <label className="form-label">Inquiry Type</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.inquiryTypes.product}
                    onChange={() => handleCheckboxChange("product")}
                  />
                  <span>Product</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.inquiryTypes.clinical}
                    onChange={() => handleCheckboxChange("clinical")}
                  />
                  <span>Clinical collaboration</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.inquiryTypes.investments}
                    onChange={() => handleCheckboxChange("investments")}
                  />
                  <span>Investments</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.inquiryTypes.others}
                    onChange={() => handleCheckboxChange("others")}
                  />
                  <span>Others</span>
                </label>
              </div>
            </div>

            {/* Name and Phone */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email and Organization */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization" className="form-label">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="form-input"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Other Inquiries */}
            <div className="form-group-full">
              <label htmlFor="otherInquiries" className="form-label">Other Inquiries</label>
              <textarea
                id="otherInquiries"
                name="otherInquiries"
                className="form-textarea"
                rows={6}
                value={formData.otherInquiries}
                onChange={handleChange}
                placeholder="Please provide any additional details about your inquiry..."
              />
            </div>

            {/* Submit Button */}
            <div className="form-submit">
              <button type="submit" className="submit-button">
                Submit Inquiry
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Direct Contact</h3>
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <span className="contact-info-label">Email</span>
                  <a href="mailto:medihive.official@gmail.com" className="contact-info-value">
                    medihive.official@gmail.com
                  </a>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-label">Address</span>
                  <span className="contact-info-value">
                    서울특별시 성북구 안암로 145, KU R&D센터 632호
                  </span>
                </div>
              </div>
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
