import Navbar from '../components/Navbar'
import WfPageInit from '../components/WfPageInit'
import CtaFooter from '../components/CtaFooter'

const PAGE_ID = '6a07fc1317bd02cd95716c69'
const SITE_ID = '69eb3a8ab30f30e3f2767ea3'

const blurSlideStyle = {
  filter: 'blur(5px)',
  opacity: 0,
  WebkitTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  msTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
}

const heroSlideStyle = {
  WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  opacity: 0,
}

export default function MvpDevelopmentPage() {
  return (
    <>
      <WfPageInit pageId={PAGE_ID} siteId={SITE_ID} />
      <div>
        <Navbar currentPage="mvp-development" />
        <div className="main-wrapper">
          {/* Hero */}
          <div className="brix---section-hero-primary">
            <div className="brix---container-default-5 w-container">
              <div className="w-layout-grid brix---grid-hero-v1">
                <div
                  data-w-id="48e60878-eb8d-5de4-97c3-170cc605be29"
                  style={heroSlideStyle}
                >
                  <div className="brix---color-neutral-813">
                    <h1 className="brix---heading-h1-size-4">Turn your Idea into a Launchable MVP</h1>
                  </div>
                  <div className="brix---mg-bottom-40px-3">
                    <div className="brix---color-neutral-814">
                      <p className="brix---paragraph-default-5">Most startups fail because they build too much too early. We help founders focus on the core problem, build the right MVP, and launch fast.</p>
                    </div>
                  </div>
                  <div className="w-layout-grid grid-21 mvp-box">
                    <a href="#CTA-Form" className="c2a-button mvp-hero-cta w-inline-block">
                      <div className="text-block-5">Start Your MVP</div>
                      <div className="btn-icon">
                        <img width="8" height="8" alt="" loading="lazy" src="/images/arrow-top-right_1arrow-top-right.png" />
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  data-w-id="48e60878-eb8d-5de4-97c3-170cc605be37"
                  style={heroSlideStyle}
                  className="div-block-65"
                >
                  <img
                    src="/images/brix-templates-hero-image.avif"
                    srcSet="/images/brix-templates-hero-image-p-500.avif 500w, /images/brix-templates-hero-image.avif 1348w"
                    width="531"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 48vw, (max-width: 991px) 47vw, 462px"
                    alt="Hero Image - Elements Webflow Library - BRIX Templates"
                  />
                </div>
              </div>
            </div>
            <div
              data-w-id="48e60878-eb8d-5de4-97c3-170cc605be39"
              style={{ opacity: 0 }}
              className="brix---floating-image-hero-v1---2"
            >
              <img src="/images/blob-brix-templates.svg" alt="" className="brix---opacity-20" />
            </div>
            <div
              data-w-id="48e60878-eb8d-5de4-97c3-170cc605be3b"
              style={{ opacity: 0 }}
              className="brix---floating-image-hero-v1---1"
            >
              <img src="/images/blob-brix-templates.svg" alt="" data-w-id="48e60878-eb8d-5de4-97c3-170cc605be3c" className="brix---opacity-10" />
            </div>
            <img
              src="/images/hero-v17-elements-brix-templates.avif"
              alt="Hero - Elements Webflow Library - BRIX Templates"
              sizes="100vw"
              srcSet="/images/hero-v17-elements-brix-templates-p-500.avif 500w, /images/hero-v17-elements-brix-templates-p-800.avif 800w, /images/hero-v17-elements-brix-templates-p-1080.avif 1080w, /images/hero-v17-elements-brix-templates.avif 2880w"
              className="brix---bg-image-full-width-2"
            />
          </div>

          {/* The Common Problem */}
          <section id="process-section" className="section-2">
            <div className="padding-global">
              <div className="container-medium">
                <div className="process-layout">
                  <div
                    data-w-id="02a10f6d-de87-ba24-a513-59ccc16b67f3"
                    style={blurSlideStyle}
                    className="heading-layout"
                  >
                    <div className="heading-wrap">
                      <h2 className="heading-style-h2">The Common Problem</h2>
                      <p className="subheading-text">Why Most Startups Waste Time &amp; Money Early On</p>
                    </div>
                  </div>
                  <div className="tab-content-wrapper">
                    <div className="tab-colomn-wrapper">
                      <div className="tab-colomn-wrap">
                        <img loading="lazy" src="/images/Tab-Icons-1.svg" alt="" className="tab-icon" />
                        <h3 className="tab-title">Big Vision, Bigger Build</h3>
                        <div className="tab-description">Excited founders often rush into building too many features too early.</div>
                      </div>
                      <div className="tab-colomn-wrap _02">
                        <img loading="lazy" src="/images/Tab-Icons-2.svg" alt="" className="tab-icon" />
                        <h3 className="tab-title">MVP vs Version 1.0</h3>
                        <div className="tab-description">Many mistake an MVP for a fully finished product instead of a simple test.</div>
                      </div>
                    </div>
                    <div id="w-node-b9623ef0-6b3b-9c36-83d3-1b388a2caf16-95716c69" className="tab-image-wrapper">
                      <div data-w-id="b9623ef0-6b3b-9c36-83d3-1b388a2caf17" className="third-tab-content-wrapper">
                        <div className="third-tan-subtitle">COMPLEXITY SLOWS GROWTH</div>
                        <h2 className="third-tab-image-title">Overbuilt products <span className="design-text">waste time, money, </span>and become harder to improve quickly</h2>
                        <img loading="lazy" src="/images/Third-Tab-Icon.svg" alt="" className="third-tab-icon _01" />
                        <img loading="lazy" src="/images/Third-Tab-Icon-3.svg" alt="" className="third-tab-icon _02" />
                        <img loading="lazy" src="/images/Third-Tab-Icon-2.svg" alt="" className="third-tab-icon _03" />
                        <img loading="lazy" src="/images/Third-Tab-Icon-4.svg" alt="" className="third-tab-icon _04" />
                      </div>
                    </div>
                    <div className="tab-colomn-wrapper">
                      <div className="tab-colomn-wrap">
                        <img loading="lazy" src="/images/Tab-Icon-3.svg" alt="" className="tab-icon" />
                        <h3 className="tab-title">The Costly Time Trap</h3>
                        <div className="tab-description">Months of development and heavy spending can lead to features users never wanted.</div>
                      </div>
                      <div className="tab-colomn-wrap _02">
                        <img loading="lazy" src="/images/Tab-Icon-4.svg" alt="" className="tab-icon" />
                        <h3 className="tab-title">Build to Validate, Not Perfect</h3>
                        <div className="tab-description">An MVP should focus only on testing the core idea and user demand.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How We Work */}
          <section id="process-section" className="section-2">
            <div className="padding-global">
              <div className="container-medium">
                <div className="process-layout">
                  <div
                    data-w-id="de3d06bf-cfad-f8e1-b244-7c87f1428a5a"
                    style={blurSlideStyle}
                    className="heading-layout"
                  >
                    <div className="heading-wrap">
                      <h2 className="heading-style-h2">How We Work</h2>
                      <p className="subheading-text">A structured approach to building the right thing</p>
                    </div>
                  </div>
                  <div
                    data-w-id="de3d06bf-cfad-f8e1-b244-7c87f1428a67"
                    style={blurSlideStyle}
                    className="process-main"
                  >
                    <section className="rt-component-section-4">
                      <div className="w-layout-blockcontainer rt-component-container-3 w-container">
                        <div className="rt-team-two-work-process-block">
                          <div className="rt-team-two-process-block-left">
                            <h1 className="rt-sticky rt-tab-sticky-off rttext-black">The Process</h1>
                          </div>
                          <div className="rt-service-process-2">
                            <div data-w-id="12b14d5f-fbc1-102d-db4f-256b20bfbf48" className="rt-service-process-step-2 rt-team-two">
                              <div className="rt-service-step-number-block-2">
                                <div className="rt-service-step-number-2">01</div>
                                <div className="rt-service-step-process-3"></div>
                              </div>
                              <div className="rt-service-step-info">
                                <h3 className="rt-category-cards-text-3">clarity Engine</h3>
                                <p className="rt-body-font-color-2">1-on-1 product discovery with a global product builder.</p>
                              </div>
                            </div>
                            <div data-w-id="12b14d5f-fbc1-102d-db4f-256b20bfbf52" className="rt-service-process-step-2">
                              <div className="rt-service-step-number-block-2">
                                <div className="rt-service-step-number-2">02</div>
                                <div className="rt-service-step-process-3"></div>
                              </div>
                              <div className="rt-service-step-info">
                                <h3 className="rt-category-cards-text-3">Conversion-First UX</h3>
                                <p className="rt-body-font-color-2">High-performance design built for real users.</p>
                              </div>
                            </div>
                            <div data-w-id="12b14d5f-fbc1-102d-db4f-256b20bfbf5c" className="rt-service-process-step-2">
                              <div className="rt-service-step-number-block-2">
                                <div className="rt-service-step-number-2">03</div>
                                <div className="rt-service-step-process-3"></div>
                              </div>
                              <div className="rt-service-step-info">
                                <h3 className="rt-category-cards-text-3">Bulletproof QA</h3>
                                <p className="rt-body-font-color-2">Rigorous pre-launch testing, edge-case handling</p>
                              </div>
                            </div>
                            <div data-w-id="12b14d5f-fbc1-102d-db4f-256b20bfbf66" className="rt-service-process-step-2 rt-team-two-no-border">
                              <div className="rt-service-step-number-block-2">
                                <div className="rt-service-step-number-2">04</div>
                                <div className="rt-service-step-process-3"></div>
                              </div>
                              <div className="rt-service-step-info">
                                <h3 className="rt-category-cards-text-3">Momentum Support</h3>
                                <p className="rt-body-font-color-2">Active maintanence and Go-live support</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why This Approach Works */}
          <section id="service-section" className="section-2">
            <div className="padding-global">
              <div className="container-base">
                <div className="capabilities-layout">
                  <div
                    data-w-id="de3d06bf-cfad-f8e1-b244-7c87f14289e8"
                    style={blurSlideStyle}
                    className="heading-layout"
                  >
                    <div className="heading-wrap">
                      <h2 className="heading-style-h2">Why This Approach Works</h2>
                    </div>
                  </div>
                  <div
                    data-w-id="de3d06bf-cfad-f8e1-b244-7c87f14289f3"
                    style={blurSlideStyle}
                    className="capabilities-bottom"
                  >
                    <div className="f-section-large">
                      <div className="f-container-regular">
                        <div className="w-layout-grid f-grid-two-column">
                          <div id="w-node-_803f1935-d319-f03f-bf78-e2a5b920d094-95716c69" className="f-feature-card-large">
                            <div className="f-feature-icon-round-2">
                              <img src="/images/mvp_15886865.avif" loading="lazy" width="40" alt="" />
                            </div>
                            <h5 className="f-h5-heading">Launch in Weeks, Not Months</h5>
                            <p className="f-paragraph-large">Get to market quickly and start learning from real users instead of building in the dark.</p>
                          </div>
                          <div className="f-feature-card-large">
                            <div className="f-feature-icon-round-2">
                              <img src="/images/trash_16880865.avif" loading="lazy" width="32" alt="" />
                            </div>
                            <h5 className="f-h5-heading">Avoid Wasted Development</h5>
                            <p className="f-paragraph-large">Don&#x27;t spend months building features no one needs. Test your core idea first.</p>
                          </div>
                          <div className="f-feature-card-large">
                            <div className="f-feature-icon-round-2">
                              <img src="/images/automation_12538649.avif" loading="lazy" width="37" alt="" />
                            </div>
                            <h5 className="f-h5-heading">Structured Product Thinking</h5>
                            <p className="f-paragraph-large">We help you think through what actually matters at this stage of your journey.</p>
                          </div>
                          <div className="f-feature-card-large">
                            <div className="f-feature-icon-round-2">
                              <img src="/images/setting_9298276.avif" loading="lazy" width="42" alt="" />
                            </div>
                            <h5 className="f-h5-heading">Technical Foundation</h5>
                            <p className="f-paragraph-large">Built right from the start, with room to scale when you&#x27;re ready.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="capabilities-grid">
                      <div id="w-node-de3d06bf-cfad-f8e1-b244-7c87f1428a27-95716c69" className="modal-cta capabilities">
                        <div className="modal-cta-top left">
                          <div className="modal-cta-icon-wrap">
                            <div className="modal-cta-icon-frame">
                              <div className="modal-cta-icon w-embed">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                  <path d="M20.7415 19.3969L20.1343 20.0363C20.1343 20.0363 18.6908 21.556 14.7508 17.4079C10.8108 13.2598 12.2543 11.7401 12.2543 11.7401L12.6367 11.3375C13.5788 10.3457 13.6676 8.75329 12.8457 7.5908L11.1643 5.21282C10.147 3.774 8.18128 3.58393 7.01527 4.81152L4.92247 7.01485C4.34431 7.62354 3.95687 8.4126 4.00385 9.28792C4.12405 11.5273 5.08095 16.3454 10.4205 21.9669C16.0829 27.9283 21.3958 28.1652 23.5684 27.9508C24.2556 27.883 24.8532 27.5124 25.3348 27.0053L27.2289 25.0112C28.5074 23.6652 28.1469 21.3576 26.5111 20.416L23.9638 18.9498C22.8897 18.3315 21.581 18.5131 20.7415 19.3969Z" fill="currentColor"></path>
                                  <path d="M17.6793 2.50677C17.7676 1.96158 18.283 1.59175 18.8282 1.68001C18.8619 1.68647 18.9705 1.70677 19.0274 1.71944C19.1411 1.74477 19.2998 1.78378 19.4977 1.84142C19.8934 1.95668 20.4462 2.14655 21.1097 2.45073C22.4381 3.05973 24.2058 4.12508 26.0402 5.95948C27.8746 7.79387 28.94 9.56163 29.549 10.89C29.8532 11.5535 30.043 12.1063 30.1583 12.502C30.2159 12.6999 30.2549 12.8586 30.2803 12.9723C30.293 13.0292 30.3022 13.0749 30.3087 13.1087L30.3163 13.1503C30.4046 13.6954 30.0381 14.2321 29.493 14.3204C28.9493 14.4084 28.4372 14.0404 28.3468 13.4977C28.344 13.4832 28.3363 13.444 28.3281 13.4071C28.3117 13.3333 28.2832 13.2162 28.2381 13.0613C28.1479 12.7515 27.9912 12.2911 27.7309 11.7235C27.2112 10.5898 26.2765 9.02417 24.626 7.37369C22.9755 5.72321 21.41 4.78855 20.2762 4.26877C19.7087 4.00856 19.2482 3.85185 18.9384 3.76162C18.7836 3.71651 18.5889 3.67183 18.515 3.65539C17.9724 3.56496 17.5913 3.0504 17.6793 2.50677Z" fill="currentColor"></path>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M17.981 7.10605C18.1327 6.57502 18.6862 6.26753 19.2172 6.41925L18.9425 7.38078C19.2172 6.41925 19.2172 6.41925 19.2172 6.41925L19.2192 6.4198L19.2212 6.42039L19.2256 6.42169L19.236 6.42478L19.2624 6.43299C19.2825 6.43942 19.3076 6.4478 19.3375 6.45842C19.3974 6.47967 19.4765 6.50989 19.5736 6.55149C19.7679 6.63474 20.0333 6.7633 20.3593 6.95625C21.0119 7.34249 21.9028 7.98406 22.9494 9.03069C23.9961 10.0773 24.6376 10.9682 25.0239 11.6209C25.2168 11.9469 25.3454 12.2123 25.4286 12.4065C25.4703 12.5036 25.5005 12.5828 25.5217 12.6426C25.5323 12.6726 25.5407 12.6977 25.5471 12.7178L25.5554 12.7442L25.5584 12.7545L25.5597 12.7589L25.5603 12.761C25.5603 12.761 25.5609 12.7629 24.5994 13.0376L25.5609 12.7629C25.7126 13.2939 25.4051 13.8474 24.8741 13.9992C24.3476 14.1496 23.799 13.8486 23.6418 13.3258L23.6369 13.3115C23.6298 13.2914 23.615 13.252 23.5904 13.1944C23.541 13.0793 23.4516 12.891 23.3027 12.6395C23.0054 12.1372 22.4685 11.3782 21.5352 10.4449C20.602 9.51163 19.843 8.97469 19.3406 8.6774C19.0892 8.52858 18.9009 8.43912 18.7858 8.38978C18.7282 8.36509 18.6887 8.35038 18.6687 8.34327L18.6543 8.33835C18.1316 8.18118 17.8306 7.63258 17.981 7.10605Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="modal-cta-content">
                            <div className="modal-cta-title">Not sure which MVP to develop first?</div>
                            <p className="modal-cta-desc">Book a free 30-minute AI strategy session. We&#x27;ll analyze your current workflows and identify the highest-ROI devlopment opportunities for your MVP.</p>
                          </div>
                        </div>
                        <a href="https://calendar.app.google/PrdZAdEpBpV5YHCKA" target="_blank" className="button-2 w-inline-block">
                          <div className="button-inner">
                            <div className="button-contact-avt">
                              <img loading="lazy" src="/images/contact-avt.png" alt="avatar" className="button-contact-avt-img" />
                              <img loading="lazy" src="/images/contact-avt-1.png" alt="avatar" className="button-contact-avt-img" />
                            </div>
                            <div className="button-text-wrap">
                              <div className="button-text">Schedule a Session</div>
                            </div>
                            <div className="button-icon">
                              <div className="icon-button w-embed">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                  <g clipPath="url(#clip0_6234_2207)">
                                    <path d="M3.33301 8H12.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 5.33333L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_6234_2207">
                                      <rect width="16" height="16" fill="currentColor"></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="button-innershadow"></div>
                        </a>
                        <div className="dots-partern"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CtaFooter currentPage="mvp-development" pageId={PAGE_ID} />
        </div>
      </div>
    </>
  )
}
