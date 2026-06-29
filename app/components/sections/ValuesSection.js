const blurStyle = {
  filter: 'blur(5px)',
  opacity: 0,
  WebkitTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  msTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
}

export default function ValuesSection() {
  return (
    <section id="values-section" className="section-2 value">
      <div className="padding-global">
        <div className="container-medium">
          <div className="value-layout">
            <div
              data-w-id="de3d06bf-cfad-f8e1-b244-7c87f14289af"
              style={blurStyle}
              className="heading-layout"
            >
              <div className="eye-brow">
                <div className="eye-brow-number">002</div>
                <div className="eye-brow-text-wrap">
                  <div className="eye-brow-dot"></div>
                  <div className="eye-brow-text">values</div>
                </div>
              </div>
              <div className="heading-wrap">
                <h2 className="heading-style-h2">Why Choose Us?</h2>
                <p className="subheading-text">We build AI-powered automation systems that eliminate manual work, reduce costs, and multiply your business performance.</p>
              </div>
            </div>
            <div
              data-w-id="de3d06bf-cfad-f8e1-b244-7c87f14289bc"
              style={blurStyle}
              className="value-bottom"
            >
              <div className="value-card">
                <div className="value-card-top">
                  <img src="placeholder.svg" loading="lazy" alt="" />
                  <img src="/images/trophy_8419057.avif" loading="lazy" width="146" alt="" className="image-32" />
                </div>
                <div className="value-card-bottom">
                  <div className="value-card-title">Business-First AI Strategy</div>
                  <div className="value-card-desc">We design solutions aligned with your business goals.</div>
                </div>
              </div>
              <div className="value-card">
                <div className="value-card-top">
                  <img src="/images/practice_4234488.avif" loading="lazy" width="146" alt="" className="image-33" />
                </div>
                <div className="value-card-bottom">
                  <div className="value-card-title">End-to-End Implementation</div>
                  <div className="value-card-desc">From strategy to development, followed by deployment.</div>
                </div>
              </div>
              <div className="value-card">
                <div className="value-card-top">
                  <img src="/images/asset-management_17181038.avif" loading="lazy" width="146" alt="" />
                </div>
                <div className="value-card-bottom">
                  <div className="value-card-title">Custom-Built Automation</div>
                  <div className="value-card-desc">No templates. Every workflow is tailored to your unique operations.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
