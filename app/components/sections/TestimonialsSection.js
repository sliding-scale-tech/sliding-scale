const blurStyle = {
  filter: 'blur(5px)',
  opacity: 0,
  WebkitTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  msTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
}

function QuoteSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
      <path d="M9.81413 0L5.5316 13.9182H10.0818V24H0V15.1673L5.35316 0H9.81413ZM24.5353 0L20.2528 13.9182H24.803V24H14.7212V15.1673L20.0743 0H24.5353Z" fill="currentColor"></path>
    </svg>
  )
}

function PlaySvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
      <g clipPath="url(#clip0_6234_3199)">
        <path d="M6 3.99979V19.9998C5.99995 20.1777 6.04737 20.3524 6.13738 20.5059C6.22739 20.6594 6.35672 20.7861 6.51202 20.8729C6.66733 20.9598 6.84299 21.0036 7.02088 20.9999C7.19878 20.9961 7.37245 20.945 7.524 20.8518L20.524 12.8518C20.6696 12.7623 20.7898 12.637 20.8733 12.4879C20.9567 12.3387 21.0005 12.1707 21.0005 11.9998C21.0005 11.8289 20.9567 11.6609 20.8733 11.5117C20.7898 11.3626 20.6696 11.2373 20.524 11.1478L7.524 3.14779C7.37245 3.05456 7.19878 3.00345 7.02088 2.99973C6.84299 2.99601 6.66733 3.03983 6.51202 3.12665C6.35672 3.21348 6.22739 3.34017 6.13738 3.49366C6.04737 3.64714 5.99995 3.82186 6 3.99979Z" fill="currentColor"></path>
      </g>
      <defs>
        <clipPath id="clip0_6234_3199">
          <rect width="24" height="24" fill="currentColor"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials-section" className="section-2 testimonial">
      <div className="testimonial-layout">
        <div className="padding-global">
          <div className="container-base">
            <div
              data-w-id="de3d06bf-cfad-f8e1-b244-7c87f1428c6d"
              style={blurStyle}
              className="heading-layout"
            >
              <div className="eye-brow">
                <div className="eye-brow-number">005</div>
                <div className="eye-brow-text-wrap">
                  <div className="eye-brow-dot"></div>
                  <div className="eye-brow-text">testimonial</div>
                </div>
              </div>
              <div className="heading-wrap">
                <h2 className="heading-style-h2">What They&#x27;re Saying</h2>
              </div>
            </div>
          </div>
        </div>

        <div
          data-w-id="de3d06bf-cfad-f8e1-b244-7c87f1428c78"
          style={blurStyle}
          className="testimonial-main padding-global"
        >
          {/* Row 1 */}
          <div className="testimonial-row">
            {/* Card 1 — video modal 7gt5d3 */}
            <div className="testimonial-card video">
              <div className="testimonial-card video">
                <div className="testimonial-default video-2">
                  <div className="testimonial-default-top video-19">
                    <img
                      sizes="100vw"
                      srcSet="/images/testimonial-p-500.png 500w, /images/testimonial.png 632w"
                      alt="avatar"
                      loading="lazy"
                      src="/images/testimonial.png"
                      className="testimonial-default-avatar video-4"
                    />
                    <div className="testimonial-default-title video-21">
                      <div className="testimonial-default-name video-6">David Lee</div>
                      <div className="testimonial-default-info video-23">Founder, Atodio Studio</div>
                    </div>
                    <div className="testimonial-default-icon video-24 w-embed"><QuoteSvg /></div>
                  </div>
                  <p className="testimonial-default-text video-9">We were spending hours on repetitive tasks. Their automation system saved us 30+ hours per week and dramatically improved our sales performance.</p>
                </div>
                <div className="testimonial-video video-10">
                  <a
                    href="#"
                    data-video-id="7gt5d3"
                    className="testimonial-video-link video-27 w-inline-block"
                  >
                    <div className="testimonial-video-btn-icon video-28 w-embed w-iframe w-script">
                      <PlaySvg />
                    </div>
                  </a>
                  <div className="testimonial-video-info video-13">
                    <img
                      sizes="(max-width: 2172px) 100vw, 2172px"
                      srcSet="/images/Untitled-6-1-p-500.webp 500w, /images/Untitled-6-1-p-800.webp 800w, /images/Untitled-6-1-p-1080.webp 1080w, /images/Untitled-6-1-p-1600.webp 1600w, /images/Untitled-6-1-p-2000.webp 2000w, /images/Untitled-6-1.webp 2172w"
                      alt=""
                      loading="lazy"
                      src="/images/Untitled-6-1.webp"
                      className="testimonial-video-logo video-30"
                    />
                    <div className="testimonial-video-title video-31">Crafting Scalable Legacy Building App</div>
                  </div>
                  <img
                    sizes="(max-width: 964px) 100vw, 964px"
                    srcSet="/images/ChatGPT-Image-May-14-2026-06_33_40-PM-p-500.webp 500w, /images/ChatGPT-Image-May-14-2026-06_33_40-PM-p-800.webp 800w, /images/ChatGPT-Image-May-14-2026-06_33_40-PM.webp 964w"
                    alt=""
                    loading="lazy"
                    src="/images/ChatGPT-Image-May-14-2026-06_33_40-PM.webp"
                    className="testimonial-video-thumbnail video-32"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 — Brian Holtz */}
            <div className="testimonial-card">
              <div className="testimonial-default">
                <div className="testimonial-default-top">
                  <img src="/images/brian.webp" loading="lazy" alt="" className="testimonial-default-avatar" />
                  <div className="testimonial-default-title">
                    <div className="testimonial-default-name">Brian Holtz</div>
                    <div className="testimonial-default-info">The Drew School</div>
                  </div>
                  <div className="testimonial-default-icon w-embed"><QuoteSvg /></div>
                </div>
                <p className="testimonial-default-text"><em>&quot;Fantastic data engineering team! Will work with again.&quot;</em></p>
              </div>
              <div className="testimonial-video">
                <a href="#" target="_blank" className="testimonial-video-link w-inline-block">
                  <div className="testimonial-video-btn-icon w-embed"><PlaySvg /></div>
                </a>
                <div className="testimonial-video-info">
                  <img src="/images/logo-3.png" loading="lazy" alt="logo" className="testimonial-video-logo" />
                  <div className="testimonial-video-title">How Puno Automated 80% of Lead Handling</div>
                </div>
                <img src="/images/testimonial-avt-2.png" loading="lazy" alt="avatar" className="testimonial-video-thumbnail" />
              </div>
            </div>

            {/* Card 3 — Megan M. */}
            <div className="testimonial-card">
              <div className="testimonial-default">
                <div className="testimonial-default-top">
                  <img src="/images/download-1.webp" loading="lazy" alt="" className="testimonial-default-avatar" />
                  <div className="testimonial-default-title">
                    <div className="testimonial-default-name">Megan M.</div>
                    <div className="testimonial-default-info">Bubble App Template Management</div>
                  </div>
                  <div className="testimonial-default-icon w-embed"><QuoteSvg /></div>
                </div>
                <p className="testimonial-default-text"><em>&quot;Aleem is the Bubble Dev unicorn every founder dreams of hiring. He exceeded every expectation in skill, partnership, communication, and innovation. I hired Aleem to build the MVP&quot;</em></p>
              </div>
              <div className="testimonial-video">
                <a href="#" target="_blank" className="testimonial-video-link w-inline-block">
                  <div className="testimonial-video-btn-icon w-embed"><PlaySvg /></div>
                </a>
                <div className="testimonial-video-info">
                  <img src="/images/logo-3.png" loading="lazy" alt="logo" className="testimonial-video-logo" />
                  <div className="testimonial-video-title">How Puno Automated 80% of Lead Handling</div>
                </div>
                <img src="/images/testimonial-avt-3.png" loading="lazy" alt="avatar" className="testimonial-video-thumbnail" />
              </div>
            </div>
          </div>

          {/* Row 2 — center */}
          <div className="testimonial-row center">
            {/* Card 1 — Jackie */}
            <div className="testimonial-card">
              <div className="testimonial-default">
                <div className="testimonial-default-top">
                  <img src="/images/jacqueline.webp" loading="lazy" alt="" className="testimonial-default-avatar" />
                  <div className="testimonial-default-title">
                    <div className="testimonial-default-name">Jackie</div>
                    <div className="testimonial-default-info">Founder, Abundant Cuisine</div>
                  </div>
                  <div className="testimonial-default-icon w-embed"><QuoteSvg /></div>
                </div>
                <p className="testimonial-default-text"><em>&quot;Working with Sliding Scale was a game changer for our business. They understood our vision and delivered beyond our expectations. The team&#x27;s dedication and expertise helped us launch smoothly and scale effectively.&quot;</em></p>
              </div>
              <div className="testimonial-video">
                <a href="#" target="_blank" className="testimonial-video-link w-inline-block">
                  <div className="testimonial-video-btn-icon w-embed"><PlaySvg /></div>
                </a>
                <div className="testimonial-video-info">
                  <img src="/images/logo-3.png" loading="lazy" alt="logo" className="testimonial-video-logo" />
                  <div className="testimonial-video-title">How Puno Automated 80% of Lead Handling</div>
                </div>
                <img src="/images/testimonial-avt-3.png" loading="lazy" alt="avatar" className="testimonial-video-thumbnail" />
              </div>
            </div>

            {/* Card 2 — video modal p2noey */}
            <div className="testimonial-card video">
              <div className="testimonial-card video">
                <div className="testimonial-default video-2">
                  <div className="testimonial-default-top video-19">
                    <img
                      sizes="100vw"
                      srcSet="/images/testimonial-p-500.png 500w, /images/testimonial.png 632w"
                      alt="avatar"
                      loading="lazy"
                      src="/images/testimonial.png"
                      className="testimonial-default-avatar video-4"
                    />
                    <div className="testimonial-default-title video-21">
                      <div className="testimonial-default-name video-6">David Lee</div>
                      <div className="testimonial-default-info video-23">Founder, Atodio Studio</div>
                    </div>
                    <div className="testimonial-default-icon video-24 w-embed"><QuoteSvg /></div>
                  </div>
                  <p className="testimonial-default-text video-9">We were spending hours on repetitive tasks. Their automation system saved us 30+ hours per week and dramatically improved our sales performance.</p>
                </div>
                <div className="testimonial-video video-10">
                  <a
                    href="https://youtube.com/shorts/hmAv7MG6w_Y?si=XCcd_MnNG4LWoam8"
                    target="_blank"
                    data-video-id="p2noey"
                    className="testimonial-video-link video-27 w-inline-block"
                  >
                    <div className="testimonial-video-btn-icon video-28 w-embed w-iframe w-script">
                      <PlaySvg />
                    </div>
                  </a>
                  <div className="testimonial-video-info video-13 nextclean-box">
                    <img
                      sizes="(max-width: 873px) 100vw, 873px"
                      srcSet="/images/d9aebce3be924d02cd896b41dadbc664_LOGO-p-500.webp 500w, /images/d9aebce3be924d02cd896b41dadbc664_LOGO-p-800.webp 800w, /images/LOGO.webp 873w"
                      alt=""
                      loading="lazy"
                      src="/images/LOGO.webp"
                      className="testimonial-video-logo video-30 nextclean-logo"
                    />
                    <div className="testimonial-video-title video-31">Building a Two-sided Marketplace for Cleaning Services</div>
                  </div>
                  <img
                    sizes="(max-width: 607px) 100vw, 607px"
                    srcSet="/images/alex-p-500.webp 500w, /images/alex.webp 607w"
                    alt=""
                    loading="lazy"
                    src="/images/alex.webp"
                    className="testimonial-video-thumbnail video-32"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 — Hayyan N. */}
            <div className="testimonial-card">
              <div className="testimonial-default">
                <div className="testimonial-default-top">
                  <img src="/images/x1xllikg31n39xrrccou.avif" loading="lazy" alt="" className="testimonial-default-avatar" />
                  <div className="testimonial-default-title">
                    <div className="testimonial-default-name">Hayyan N.</div>
                    <div className="testimonial-default-info">Digitorm</div>
                  </div>
                  <div className="testimonial-default-icon w-embed"><QuoteSvg /></div>
                </div>
                <p className="testimonial-default-text"><em>&quot;Faarid &amp; the Sliding Scale team are unicorns in the startup space. They didn&#x27;t just execute screens - they helped shape the product itself. Polished, dev-ready deliverables. Hoping to work with them on development for this project as well!&quot;</em></p>
              </div>
              <div className="testimonial-video">
                <a href="#" target="_blank" className="testimonial-video-link w-inline-block">
                  <div className="testimonial-video-btn-icon w-embed"><PlaySvg /></div>
                </a>
                <div className="testimonial-video-info">
                  <img src="/images/logo-3.png" loading="lazy" alt="logo" className="testimonial-video-logo" />
                  <div className="testimonial-video-title">How Puno Automated 80% of Lead Handling</div>
                </div>
                <img src="/images/testimonial-avt-3.png" loading="lazy" alt="avatar" className="testimonial-video-thumbnail" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="testimonial-row">
            {/* Card 1 — video modal 6ymkln */}
            <div className="testimonial-card video">
              <div className="testimonial-card video">
                <div className="testimonial-default video-2">
                  <div className="testimonial-default-top video-19">
                    <img
                      sizes="100vw"
                      srcSet="/images/testimonial-p-500.png 500w, /images/testimonial.png 632w"
                      alt="avatar"
                      loading="lazy"
                      src="/images/testimonial.png"
                      className="testimonial-default-avatar video-4"
                    />
                    <div className="testimonial-default-title video-21">
                      <div className="testimonial-default-name video-6">David Lee</div>
                      <div className="testimonial-default-info video-23">Founder, Atodio Studio</div>
                    </div>
                    <div className="testimonial-default-icon video-24 w-embed"><QuoteSvg /></div>
                  </div>
                  <p className="testimonial-default-text video-9">We were spending hours on repetitive tasks. Their automation system saved us 30+ hours per week and dramatically improved our sales performance.</p>
                </div>
                <div className="testimonial-video video-10">
                  <a
                    href="#"
                    data-video-id="6ymkln"
                    className="testimonial-video-link video-27 w-inline-block"
                  >
                    <div className="testimonial-video-btn-icon video-28 w-embed w-iframe w-script">
                      <PlaySvg />
                    </div>
                  </a>
                  <div className="testimonial-video-info video-13">
                    <img src="/images/c2bm.webp" loading="lazy" alt="" className="testimonial-video-logo video-30 c2bm-logo" />
                    <div className="testimonial-video-title video-31 c2bm-box">Developing a Centralized <br />Workforce Management Platform</div>
                  </div>
                  <img src="/images/chae.webp" loading="lazy" alt="" className="testimonial-video-thumbnail video-32" />
                </div>
              </div>
            </div>

            {/* Card 2 — Ermek Bakyt */}
            <div className="testimonial-card">
              <div className="testimonial-default">
                <div className="testimonial-default-top">
                  <img src="/images/ermek.webp" loading="lazy" alt="" className="testimonial-default-avatar" />
                  <div className="testimonial-default-title">
                    <div className="testimonial-default-name">Ermek Bakyt</div>
                    <div className="testimonial-default-info">Founder, Symphonizehire.com</div>
                  </div>
                  <div className="testimonial-default-icon w-embed"><QuoteSvg /></div>
                </div>
                <p className="testimonial-default-text"><em>&quot;On my first call with Faarid, all I had was my ideas and a stranger in front of me. Throughout the project, Faarid treated my project as if it was his and gave a genuine care and world class expertise to transform the idea into a product!&quot;</em></p>
              </div>
              <div className="testimonial-video">
                <a href="#" target="_blank" className="testimonial-video-link w-inline-block">
                  <div className="testimonial-video-btn-icon w-embed"><PlaySvg /></div>
                </a>
                <div className="testimonial-video-info">
                  <img src="/images/logo-3.png" loading="lazy" alt="logo" className="testimonial-video-logo" />
                  <div className="testimonial-video-title">How Puno Automated 80% of Lead Handling</div>
                </div>
                <img src="/images/testimonial-avt-5.png" loading="lazy" alt="avatar" className="testimonial-video-thumbnail" />
              </div>
            </div>

            {/* Card 3 — Alex Rocha */}
            <div className="testimonial-card">
              <div className="testimonial-default">
                <div className="testimonial-default-top">
                  <img
                    sizes="(max-width: 1080px) 100vw, 1080px"
                    srcSet="/images/24cc98383780dfa13717d467b24ac734_Untitled-3-p-500.webp 500w, /images/24cc98383780dfa13717d467b24ac734_Untitled-3-p-800.webp 800w, /images/Untitled-3.webp 1080w"
                    alt=""
                    loading="lazy"
                    src="/images/Untitled-3.webp"
                    className="testimonial-default-avatar"
                  />
                  <div className="testimonial-default-title">
                    <div className="testimonial-default-name">Alex Rocha</div>
                    <div className="testimonial-default-info">NextClean</div>
                  </div>
                  <div className="testimonial-default-icon w-embed"><QuoteSvg /></div>
                </div>
                <p className="testimonial-default-text">&quot;Working with Sliding Scales team has been wonderful, great trustworthy professionals who listens and really try to capture the vision of the product. Great communication throughout, prompt and reliable. Definitely recommend.&quot;</p>
              </div>
              <div className="testimonial-video">
                <a href="#" target="_blank" className="testimonial-video-link w-inline-block">
                  <div className="testimonial-video-btn-icon w-embed"><PlaySvg /></div>
                </a>
                <div className="testimonial-video-info">
                  <img src="/images/logo-3.png" loading="lazy" alt="logo" className="testimonial-video-logo" />
                  <div className="testimonial-video-title">How Puno Automated 80% of Lead Handling</div>
                </div>
                <img src="/images/testimonial-avt-3.png" loading="lazy" alt="avatar" className="testimonial-video-thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
