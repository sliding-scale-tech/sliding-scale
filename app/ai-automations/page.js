import Navbar from '../components/Navbar'
import WfPageInit from '../components/WfPageInit'
import CtaFooter from '../components/CtaFooter'

const PAGE_ID = '6a07fc31e0eca343db2bf58f'
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

const counterTrainStyle = {
  WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
}

export default function AiAutomationsPage() {
  return (
    <>
      <WfPageInit pageId={PAGE_ID} siteId={SITE_ID} />
      <div>
        <Navbar currentPage="ai-automations" />
        <div className="main-wrapper">
          {/* Hero */}
          <div className="brix---section-hero-small">
            <div className="brix---container-default-6 w-container">
              <div className="w-layout-grid brix---grid-hero-v16">
                <div
                  data-w-id="f719fd85-41d8-8398-c15e-35ff2af76fc4"
                  style={heroSlideStyle}
                >
                  <div className="brix---color-neutral-817">
                    <h1 className="brix---heading-h1-size-5">Automation Operations, Scale Without Friction</h1>
                  </div>
                  <div className="brix---mg-bottom-40px-4">
                    <div className="brix---color-neutral-817">
                      <p className="brix---paragraph-default-6">Building AI-powered automations and internal tools that let you handle more volume without hiring proportionally.</p>
                    </div>
                  </div>
                  <div className="w-layout-grid grid-21 mvp-box">
                    <a href="#CTA-Form" className="c2a-button mvp-hero-cta w-inline-block">
                      <div className="text-block-5">Explore Automation</div>
                      <div className="btn-icon">
                        <img width="8" height="8" alt="" loading="lazy" src="/images/arrow-top-right_1arrow-top-right.png" />
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  data-w-id="f719fd85-41d8-8398-c15e-35ff2af76fd6"
                  style={heroSlideStyle}
                >
                  <img
                    src="/images/Untitled-10.avif"
                    alt=""
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 49vw, (max-width: 991px) 47vw, 462px"
                    srcSet="/images/Untitled-10-p-500.avif 500w, /images/Untitled-10.avif 1279w"
                  />
                </div>
              </div>
            </div>
            <div
              data-w-id="f719fd85-41d8-8398-c15e-35ff2af76fd8"
              style={{ opacity: 0 }}
              className="brix---floating-image-hero-v1---4"
            >
              <img src="/images/blob-brix-templates.svg" alt="" className="brix---opacity-20-2" />
            </div>
            <div
              data-w-id="f719fd85-41d8-8398-c15e-35ff2af76fda"
              style={{ opacity: 0 }}
              className="brix---floating-image-hero-v1---3"
            >
              <img src="/images/blob-brix-templates.svg" alt="" className="brix---opacity-10-2" />
            </div>
            <img
              src="/images/hero-v17-elements-brix-templates.avif"
              alt="Hero - Elements Webflow Library - BRIX Templates"
              sizes="(max-width: 2880px) 100vw, 2880px"
              srcSet="/images/hero-v17-elements-brix-templates-p-500.avif 500w, /images/hero-v17-elements-brix-templates-p-800.avif 800w, /images/hero-v17-elements-brix-templates-p-1080.avif 1080w, /images/hero-v17-elements-brix-templates.avif 2880w"
              className="brix---bg-image-full-width-2"
            />
          </div>

          {/* The Operational Challenge */}
          <section className="section-4 features">
            <div className="w-layout-blockcontainer container w-container">
              <div
                data-w-id="ddc7c815-6595-ab67-3629-36e76af60e90"
                style={blurSlideStyle}
                className="heading-layout"
              >
                <div className="heading-wrap">
                  <h2 className="heading-style-h2">The Operational Challenge</h2>
                  <p className="subheading-text">Why Growing Businesses Get Buried in Repetitive Work</p>
                </div>
              </div>
              <div className="control-content-wrapper">
                <div data-w-id="25df2ac4-6ee5-dd11-3743-0bbbe42011a3" style={{ opacity: 0 }} className="control-content-wrap">
                  <div className="control-top-content-wrapper">
                    <h3 className="feature-title">Manual Work Slows Growth</h3>
                    <div className="control-description">Teams spend hours handling repetitive tasks, reports, and disconnected systems manually.</div>
                  </div>
                  <div className="control-image-wrapper">
                    <img
                      src="/images/7df9ce96-8b37-4dac-bc30-517f83a18092_removalai_preview.avif"
                      loading="lazy"
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
                      srcSet="/images/59dde7001424fd840a024d353e2aed2e_7df9ce96-8b37-4dac-bc30-517f83a18092_removalai_preview-p-500.avif 500w, /images/7df9ce96-8b37-4dac-bc30-517f83a18092_removalai_preview.avif 1402w"
                      alt=""
                      className="control-image"
                    />
                  </div>
                </div>
                <div data-w-id="4820734b-029f-da33-bcd2-e0102b5de6ba" style={{ opacity: 0 }} className="control-content-wrap">
                  <div className="control-top-content-wrapper">
                    <h3 className="feature-title">Inefficiencies Become Expensive</h3>
                    <div className="control-description">As operations scale, businesses often need more staff just to maintain workflows.</div>
                  </div>
                  <div className="control-image-wrapper">
                    <img
                      src="/images/ChatGPT-Image-May-18-2026-07_59_35-PM-Photoroom.avif"
                      loading="lazy"
                      width="324"
                      sizes="(max-width: 479px) 100vw, 324px"
                      alt=""
                      srcSet="/images/ChatGPT-Image-May-18-2026-07_59_35-PM-Photoroom-p-500.avif 500w, /images/ChatGPT-Image-May-18-2026-07_59_35-PM-Photoroom.avif 1276w"
                      className="control-image"
                    />
                  </div>
                </div>
                <div data-w-id="9aea8e1f-1690-87f8-b531-dc3d31f945ea" style={{ opacity: 0 }} className="control-content-wrap">
                  <div className="control-top-content-wrapper">
                    <h3 className="feature-title">Custom AI Automation Solves It</h3>
                    <div className="control-description">Tailored automation eliminates repetitive work and fits your exact operational needs.</div>
                  </div>
                  <div className="control-image-wrapper">
                    <img
                      src="/images/ChatGPT-Image-May-18-2026-08_01_27-PM-Photoroom.avif"
                      loading="lazy"
                      width="321"
                      sizes="(max-width: 479px) 100vw, 321px"
                      alt=""
                      srcSet="/images/ChatGPT-Image-May-18-2026-08_01_27-PM-Photoroom-p-500.avif 500w, /images/ChatGPT-Image-May-18-2026-08_01_27-PM-Photoroom.avif 1254w"
                      className="control-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We Build */}
          <section className="uui-section_layout87">
            <div
              data-w-id="3b3bb152-4130-999d-817d-99102dbfafab"
              style={blurSlideStyle}
              className="heading-layout"
            >
              <div className="heading-wrap">
                <h2 className="heading-style-h2">What We Build</h2>
                <p className="subheading-text">Custom automation solutions for your unique workflows</p>
              </div>
            </div>
            <div className="brix---section-4">
              <div className="brix---container-default-7 w-container">
                <div
                  data-w-id="88a818cc-85ca-2027-fe7a-f0f6c9c444d3"
                  style={heroSlideStyle}
                  className="w-layout-grid brix---grid-2-columns-2"
                >
                  <div className="brix---card---icon-left---content-right">
                    <img src="/images/icon-brix-template-Mobile.svg" alt="Phone - Elements Webflow Library - BRIX Templates" className="brix---square-icon-2" />
                    <div className="brix---card-left-text-wrapper">
                      <div className="brix---mg-bottom-8px-2">
                        <div className="brix---color-neutral-818">
                          <h3 className="brix---heading-h3-size-4">Internal Tools Development</h3>
                        </div>
                      </div>
                      <div className="brix---paragraph-default-7">
                        <div className="brix---color-neutral-819">
                          <p className="brix---mg-bottom-3">Custom internal dashboards, admin panels, and operational tools that make your team&#x27;s life easier.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="brix---card---icon-left---content-right">
                    <img src="/images/icon-brix-template-Desktop.svg" alt="Desktop - Elements Webflow Library - BRIX Templates" className="brix---square-icon-2" />
                    <div className="brix---card-left-text-wrapper">
                      <div className="brix---mg-bottom-8px-2">
                        <div className="brix---color-neutral-818">
                          <h3 className="brix---heading-h3-size-4">AI-powered Automation</h3>
                        </div>
                      </div>
                      <div className="brix---paragraph-default-7">
                        <div className="brix---color-neutral-819">
                          <p className="brix---mg-bottom-3">Leverage AI to automate repetitive tasks, from data entry to customer support routing to content generation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="brix---card---icon-left---content-right">
                    <img src="/images/icon-brix-template-Gear.svg" alt="Gear - Elements Webflow Library - BRIX Templates" className="brix---square-icon-2" />
                    <div className="brix---card-left-text-wrapper">
                      <div className="brix---mg-bottom-8px-2">
                        <div className="brix---color-neutral-818">
                          <h3 className="brix---heading-h3-size-4">System Integration</h3>
                        </div>
                      </div>
                      <div className="brix---paragraph-default-7">
                        <div className="brix---color-neutral-819">
                          <p className="brix---mg-bottom-3">Connect your tools and systems so data flows automatically where it needs to go.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="brix---card---icon-left---content-right">
                    <img src="/images/icon-brix-template-Users.svg" alt="Users - Elements Webflow Library - BRIX Templates" className="brix---square-icon-2" />
                    <div className="brix---card-left-text-wrapper">
                      <div className="brix---mg-bottom-8px-2">
                        <div className="brix---color-neutral-818">
                          <h3 className="brix---heading-h3-size-4">Operational Analysis</h3>
                        </div>
                      </div>
                      <div className="brix---paragraph-default-7">
                        <div className="brix---color-neutral-819">
                          <p className="brix---mg-bottom-3">Build dashboards and reporting systems that give you visibility into what&#x27;s actually happening in your business.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Impact */}
          <section className="uui-section_layout87 impact-bg">
            <div
              data-w-id="6216a58b-7182-5bb1-fbec-d83802530d25"
              style={blurSlideStyle}
              className="heading-layout"
            >
              <div className="heading-wrap">
                <h2 className="heading-style-h2">The Impact</h2>
                <p className="subheading-text">Game-changing results of our automation services</p>
              </div>
            </div>
            <div className="brix---section-6">
              <div className="brix---container-default-7 w-container">
                <div className="brix---mg-bottom-48px-4">
                  <div
                    data-w-id="f4fb701c-a708-5a6d-3e79-5e49a6e54089"
                    style={heroSlideStyle}
                    className="w-layout-grid brix---grid-image-center-icons-sides"
                  >
                    <div className="w-layout-grid brix---grid-1-column-gap-row-80px">
                      <div id="w-node-f4fb701c-a708-5a6d-3e79-5e49a6e5408b-db2bf58f">
                        <div>
                          <div className="brix---mg-bottom-24px-2">
                            <img
                              src="/images/ChatGPT-Image-May-16-2026-03_44_51-PM.webp"
                              alt=""
                              sizes="(max-width: 479px) 100vw, (max-width: 991px) 23vw, 223px"
                              srcSet="/images/ChatGPT-Image-May-16-2026-03_44_51-PM-p-500.webp 500w, /images/ChatGPT-Image-May-16-2026-03_44_51-PM-p-800.webp 800w, /images/ChatGPT-Image-May-16-2026-03_44_51-PM-p-1080.webp 1080w, /images/ChatGPT-Image-May-16-2026-03_44_51-PM.webp 1282w"
                              className="brix---square-icon-56px"
                            />
                          </div>
                          <div className="brix---mg-bottom-16px-3">
                            <div className="brix---color-neutral-822">
                              <h3 className="brix---heading-h3-size-5">Save Time &amp; Money</h3>
                            </div>
                          </div>
                          <div className="brix---paragraph-default-7">
                            <div className="brix---color-neutral-820">
                              <p className="brix---mg-bottom-4">Automate tasks that would otherwise require hiring additional headcount or burning hours of manual work.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="w-node-f4fb701c-a708-5a6d-3e79-5e49a6e54097-db2bf58f">
                        <div>
                          <div className="brix---mg-bottom-24px-2">
                            <img
                              src="/images/ChatGPT-Image-May-16-2026-03_49_07-PM.webp"
                              alt=""
                              sizes="(max-width: 479px) 100vw, (max-width: 991px) 23vw, 223px"
                              srcSet="/images/ChatGPT-Image-May-16-2026-03_49_07-PM-p-500.webp 500w, /images/ChatGPT-Image-May-16-2026-03_49_07-PM-p-800.webp 800w, /images/ChatGPT-Image-May-16-2026-03_49_07-PM.webp 1254w"
                              className="brix---square-icon-56px"
                            />
                          </div>
                          <div className="brix---mg-bottom-16px-3">
                            <div className="brix---color-neutral-822">
                              <h3 className="brix---heading-h3-size-5">Reduce Human Error</h3>
                            </div>
                          </div>
                          <div className="brix---paragraph-default-7">
                            <div className="brix---color-neutral-820">
                              <p className="brix---mg-bottom-4">Automated systems don&#x27;t make typos or forget steps. They run consistently every time.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img src="/images/iphone-content-v9-brix-templates.avif" alt="iPhone - Elements Webflow Library - BRIX Templates" />
                    <div className="w-layout-grid brix---grid-1-column-gap-row-80px">
                      <div id="w-node-f4fb701c-a708-5a6d-3e79-5e49a6e540a5-db2bf58f">
                        <div>
                          <div className="brix---mg-bottom-24px-2">
                            <img src="/images/icon-brix-template-Users.svg" alt="Users - Elements Webflow Library - BRIX Templates" className="brix---square-icon-56px" />
                          </div>
                          <div className="brix---mg-bottom-16px-3">
                            <div className="brix---color-neutral-822">
                              <h3 className="brix---heading-h3-size-5">Scale Without Growing Complexity</h3>
                            </div>
                          </div>
                          <div className="brix---paragraph-default-7">
                            <div className="brix---color-neutral-820">
                              <p className="brix---mg-bottom-4">Handle more volume and more customers without proportionally increasing your operational burden.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="w-node-f4fb701c-a708-5a6d-3e79-5e49a6e540b1-db2bf58f">
                        <div>
                          <div className="brix---mg-bottom-24px-2">
                            <img src="/images/icon-brix-template-Gear.svg" alt="Gear - Elements Webflow Library - BRIX Templates" className="brix---square-icon-56px" />
                          </div>
                          <div className="brix---mg-bottom-16px-3">
                            <div className="brix---color-neutral-822">
                              <h3 className="brix---heading-h3-size-5">Focus on What Matters</h3>
                            </div>
                          </div>
                          <div className="brix---paragraph-default-7">
                            <div className="brix---color-neutral-820">
                              <p className="brix---mg-bottom-4">Free up your team to work on high-value problems instead of repetitive operational tasks.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Results */}
          <section className="uui-section_layout87">
            <div
              data-w-id="6eefeab6-a8a9-230f-bd1e-ec99228b98e9"
              style={blurSlideStyle}
              className="heading-layout"
            >
              <div className="heading-wrap">
                <h2 className="heading-style-h2">The Results</h2>
                <p className="subheading-text">Game-changing results of our automation services</p>
              </div>
            </div>
            <section className="rt-component-section-5">
              <div className="w-layout-blockcontainer rt-component-container-4 w-container">
                <div className="w-layout-vflex rt-home-three-who-we-are-wrap">
                  <div className="rt-home-three-who-we-are-counter-grid">
                    {/* Counter 1: 32-100x */}
                    <div className="w-layout-vflex rt-home-three-work-card">
                      <div className="w-layout-hflex rt-home-three-work-card-top-wrap">
                        <div data-w-id="a96d142e-95e8-778a-2676-44599706f31f" className="w-layout-vflex rt-counter-box">
                          <div className="w-layout-hflex rt-counter-number-wrap">
                            <div className="w-layout-vflex rt-counter rt-home-three-work-countar-text">
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-11">0</div>
                                <div className="text-block-44">3</div>
                                <div className="text-block-43">2</div>
                              </div>
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-42">1</div>
                                <div>0</div>
                                <div>0</div>
                              </div>
                            </div>
                            <div className="w-layout-vflex rt-counter rt-home-three-work-countar-text">
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-11">3</div>
                                <div>2</div>
                                <div>1</div>
                              </div>
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-15">0</div>
                                <div className="text-block-16">0</div>
                                <div className="text-block-17">0</div>
                              </div>
                            </div>
                            <div className="rt-home-three-work-countar-text">-</div>
                            <div className="w-layout-vflex rt-counter rt-home-three-work-countar-text">
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-11">0</div>
                                <div className="text-block-18">0</div>
                                <div className="text-block-19">1</div>
                              </div>
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-20">2</div>
                                <div className="text-block-21">0</div>
                                <div className="text-block-22">0</div>
                              </div>
                            </div>
                            <div className="w-layout-vflex rt-counter rt-home-three-work-countar-text">
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-10">0</div>
                                <div>1</div>
                              </div>
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-32">0</div>
                                <div>0</div>
                              </div>
                            </div>
                            <div className="rt-home-three-work-countar-text">x</div>
                          </div>
                        </div>
                        <div className="rt-home-three-work-card-counter-line"></div>
                      </div>
                      <div className="rt-category-cards-text-4">Faster Process of Repititive Tasks </div>
                    </div>

                    {/* Counter 2: 89% */}
                    <div className="w-layout-vflex rt-home-three-work-card">
                      <div className="w-layout-hflex rt-home-three-work-card-top-wrap">
                        <div data-w-id="a96d142e-95e8-778a-2676-44599706f346" className="w-layout-vflex rt-counter-box">
                          <div className="w-layout-hflex rt-counter-number-wrap">
                            <div className="w-layout-vflex rt-counter rt-home-three-work-countar-text">
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-9">0</div>
                                <div className="text-block-41">1</div>
                                <div className="text-block-40">2</div>
                                <div className="text-block-39">3</div>
                                <div className="text-block-38">4</div>
                                <div className="text-block-37">5</div>
                                <div className="text-block-36">6</div>
                                <div className="text-block-35">7</div>
                                <div className="text-block-34">8</div>
                              </div>
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-33">9</div>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                                <div>7</div>
                                <div>8</div>
                              </div>
                            </div>
                            <div className="w-layout-vflex rt-counter rt-home-three-work-countar-text">
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-8">0</div>
                                <div className="text-block-31">1</div>
                                <div className="text-block-30">2</div>
                                <div className="text-block-29">3</div>
                                <div className="text-block-28">4</div>
                              </div>
                              <div style={counterTrainStyle} className="w-layout-vflex rt-counter-train">
                                <div className="text-block-23">9</div>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                              </div>
                            </div>
                            <div className="rt-home-three-work-countar-text">%</div>
                          </div>
                        </div>
                        <div className="rt-home-three-work-card-counter-line"></div>
                      </div>
                      <div className="rt-category-cards-text-4">Reduction in Manual Hours</div>
                    </div>

                    {/* Counter 3: Hours */}
                    <div className="w-layout-vflex rt-home-three-work-card">
                      <div className="w-layout-hflex rt-home-three-work-card-top-wrap">
                        <div data-w-id="a96d142e-95e8-778a-2676-44599706f38f" className="w-layout-vflex rt-counter-box">
                          <div className="w-layout-hflex rt-counter-number-wrap">
                            <div className="rt-home-three-work-countar-text">Hours</div>
                          </div>
                        </div>
                        <div className="rt-home-three-work-card-counter-line"></div>
                      </div>
                      <div className="rt-category-cards-text-4">Saved per Team Member every Week</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* Schedule CTA */}
          <section id="service-section" className="section-2">
            <div className="padding-global">
              <div className="container-base">
                <div className="capabilities-layout">
                  <div
                    data-w-id="de3d06bf-cfad-f8e1-b244-7c87f14289f3"
                    style={blurSlideStyle}
                    className="capabilities-bottom"
                  >
                    <div className="capabilities-grid">
                      <div id="w-node-de3d06bf-cfad-f8e1-b244-7c87f1428a27-db2bf58f" className="modal-cta capabilities">
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
                            <div className="modal-cta-title">Not sure what to automate first?</div>
                            <p className="modal-cta-desc">Book a free 30-minute AI strategy session. We&#x27;ll analyze your current workflows and identify the highest-ROI automation opportunities for your business.</p>
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

          <CtaFooter currentPage="ai-automations" pageId={PAGE_ID} />
        </div>
      </div>
    </>
  )
}
