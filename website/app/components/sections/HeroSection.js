export default function HeroSection() {
  return (
    <section id="home" className="section">
      <div className="w-layout-blockcontainer container-main w-container">
        <h1
          data-w-id="d638d698-cafd-1e27-051e-4a0325787c27"
          style={{ opacity: 0 }}
          className="hero-heading-h1"
        >
          Turn ideas into<br /> <span className="italic-span typing-text">launchable products</span>
        </h1>
        <p
          data-w-id="d638d698-cafd-1e27-051e-4a0325787c2b"
          style={{ opacity: 0 }}
          className="para-txt"
        >
          We build focused MVPs that get you to market fast and create intelligent automations that scale your operations. Launch faster, validate smarter, automate better.
        </p>
        <div className="w-layout-grid grid-21">
          <div className="getstarted-btn">
            <a
              href="#CTA-Form"
              data-w-id="d638d698-cafd-1e27-051e-4a0325787c2f"
              className="button w-inline-block"
            >
              <div className="text-block-6">Get Started</div>
              <div className="arrow-div">
                <img
                  src="https://cdn.prod.website-files.com/69eb390989bb2011ed3bbbff/69eb390c89bb2011ed3bbcb3_arrow-top-right.png"
                  loading="lazy"
                  alt="arrow-top"
                  className="arrow-img"
                />
              </div>
            </a>
          </div>
          <div className="avatar-wrapper">
            <div className="avatar-block">
              <img src="/images/ermek.webp" loading="lazy" width="40" alt="avatar-1" className="avatar-img" />
              <img src="/images/testimonial-avt.png" loading="lazy" width="40" alt="avatar-2" className="avatar-img" />
              <img src="/images/x1xllikg31n39xrrccou.avif" loading="lazy" width="40" height="Auto" alt="avatar-3" className="avatar-img" />
              <img src="/images/brian.webp" loading="lazy" width="40" height="Auto" alt="avatar-4" className="avatar-img" />
            </div>
            <div className="rating-div">
              <img loading="lazy" src="/images/star-icon.svg" alt="star-icon" className="star-icon" />
              <img loading="lazy" src="/images/star-icon.svg" alt="star-icon" className="star-icon" />
              <img loading="lazy" src="/images/star-icon.svg" alt="star-icon" className="star-icon" />
              <img loading="lazy" src="/images/star-icon.svg" alt="star-icon" className="star-icon" />
              <img loading="lazy" src="/images/star-half-icon.svg" alt="star-icon" className="star-half-icon" />
              <p className="trusted-text">Trusted by clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
