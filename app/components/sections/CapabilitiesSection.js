const blurStyle = {
  filter: 'blur(5px)',
  opacity: 0,
  WebkitTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  msTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
}

function CheckSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
      <path d="M3.33334 8.00008L6.66667 11.3334L13.3333 4.66675" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}

function ArrowSvg() {
  return (
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
  )
}

function PhoneSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
      <path d="M20.7415 19.3969L20.1343 20.0363C20.1343 20.0363 18.6908 21.556 14.7508 17.4079C10.8108 13.2598 12.2543 11.7401 12.2543 11.7401L12.6367 11.3375C13.5788 10.3457 13.6676 8.75329 12.8457 7.5908L11.1643 5.21282C10.147 3.774 8.18128 3.58393 7.01527 4.81152L4.92247 7.01485C4.34431 7.62354 3.95687 8.4126 4.00385 9.28792C4.12405 11.5273 5.08095 16.3454 10.4205 21.9669C16.0829 27.9283 21.3958 28.1652 23.5684 27.9508C24.2556 27.883 24.8532 27.5124 25.3348 27.0053L27.2289 25.0112C28.5074 23.6652 28.1469 21.3576 26.5111 20.416L23.9638 18.9498C22.8897 18.3315 21.581 18.5131 20.7415 19.3969Z" fill="currentColor"></path>
      <path d="M17.6793 2.50677C17.7676 1.96158 18.283 1.59175 18.8282 1.68001C18.8619 1.68647 18.9705 1.70677 19.0274 1.71944C19.1411 1.74477 19.2998 1.78378 19.4977 1.84142C19.8934 1.95668 20.4462 2.14655 21.1097 2.45073C22.4381 3.05973 24.2058 4.12508 26.0402 5.95948C27.8746 7.79387 28.94 9.56163 29.549 10.89C29.8532 11.5535 30.043 12.1063 30.1583 12.502C30.2159 12.6999 30.2549 12.8586 30.2803 12.9723C30.293 13.0292 30.3022 13.0749 30.3087 13.1087L30.3163 13.1503C30.4046 13.6954 30.0381 14.2321 29.493 14.3204C28.9493 14.4084 28.4372 14.0404 28.3468 13.4977C28.344 13.4832 28.3363 13.444 28.3281 13.4071C28.3117 13.3333 28.2832 13.2162 28.2381 13.0613C28.1479 12.7515 27.9912 12.2911 27.7309 11.7235C27.2112 10.5898 26.2765 9.02417 24.626 7.37369C22.9755 5.72321 21.41 4.78855 20.2762 4.26877C19.7087 4.00856 19.2482 3.85185 18.9384 3.76162C18.7836 3.71651 18.5889 3.67183 18.515 3.65539C17.9724 3.56496 17.5913 3.0504 17.6793 2.50677Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.981 7.10605C18.1327 6.57502 18.6862 6.26753 19.2172 6.41925L18.9425 7.38078C19.2172 6.41925 19.2172 6.41925 19.2172 6.41925L19.2192 6.4198L19.2212 6.42039L19.2256 6.42169L19.236 6.42478L19.2624 6.43299C19.2825 6.43942 19.3076 6.4478 19.3375 6.45842C19.3974 6.47967 19.4765 6.50989 19.5736 6.55149C19.7679 6.63474 20.0333 6.7633 20.3593 6.95625C21.0119 7.34249 21.9028 7.98406 22.9494 9.03069C23.9961 10.0773 24.6376 10.9682 25.0239 11.6209C25.2168 11.9469 25.3454 12.2123 25.4286 12.4065C25.4703 12.5036 25.5005 12.5828 25.5217 12.6426C25.5323 12.6726 25.5407 12.6977 25.5471 12.7178L25.5554 12.7442L25.5584 12.7545L25.5597 12.7589L25.5603 12.761C25.5603 12.761 25.5609 12.7629 24.5994 13.0376L25.5609 12.7629C25.7126 13.2939 25.4051 13.8474 24.8741 13.9992C24.3476 14.1496 23.799 13.8486 23.6418 13.3258L23.6369 13.3115C23.6298 13.2914 23.615 13.252 23.5904 13.1944C23.541 13.0793 23.4516 12.891 23.3027 12.6395C23.0054 12.1372 22.4685 11.3782 21.5352 10.4449C20.602 9.51163 19.843 8.97469 19.3406 8.6774C19.0892 8.52858 18.9009 8.43912 18.7858 8.38978C18.7282 8.36509 18.6887 8.35038 18.6687 8.34327L18.6543 8.33835C18.1316 8.18118 17.8306 7.63258 17.981 7.10605Z" fill="currentColor"></path>
    </svg>
  )
}

export default function CapabilitiesSection() {
  return (
    <section id="service-section" className="section-2">
      <div className="padding-global">
        <div className="container-base">
          <div className="capabilities-layout">
            <div
              data-w-id="de3d06bf-cfad-f8e1-b244-7c87f14289e8"
              style={blurStyle}
              className="heading-layout"
            >
              <div className="eye-brow">
                <div className="eye-brow-number">003</div>
                <div className="eye-brow-text-wrap">
                  <div className="eye-brow-dot"></div>
                  <div className="eye-brow-text">Capabilities</div>
                </div>
              </div>
              <div className="heading-wrap">
                <h2 className="heading-style-h2">How We Help</h2>
              </div>
            </div>
            <div
              data-w-id="de3d06bf-cfad-f8e1-b244-7c87f14289f3"
              style={blurStyle}
              className="capabilities-bottom"
            >
              <div className="f-section-large">
                <div className="f-container-regular">
                  <div className="w-layout-grid f-grid-two-column">
                    <div id="w-node-_803f1935-d319-f03f-bf78-e2a5b920d094-f2767eca" className="f-feature-card-large">
                      <div className="f-feature-icon-round-2">
                        <img src="/images/mvp_15886865.avif" loading="lazy" width="40" alt="" />
                      </div>
                      <h5 className="f-h5-heading">MVP Development</h5>
                      <p className="f-paragraph-large">For founders who want to turn ideas into real products quickly</p>
                      <div className="capabilities-card-content-item">
                        <div className="capabilities-check-icon w-embed"><CheckSvg /></div>
                        <div className="capabilities-card-content-text">Idea refinement and validation</div>
                      </div>
                      <div className="capabilities-card-content-item">
                        <div className="capabilities-check-icon w-embed"><CheckSvg /></div>
                        <div className="capabilities-card-content-text">Product strategy and scoping</div>
                      </div>
                      <div className="capabilities-card-content-item">
                        <div className="capabilities-check-icon w-embed"><CheckSvg /></div>
                        <div className="capabilities-card-content-text">Focused MVP development</div>
                      </div>
                      <div className="capabilities-card-content-item">
                        <div className="capabilities-check-icon w-embed"><CheckSvg /></div>
                        <div className="capabilities-card-content-text">Rapid launch and iteration</div>
                      </div>
                    </div>
                    <div className="f-feature-card-large">
                      <div className="f-feature-icon-round-2">
                        <img src="/images/automation_12538649.avif" loading="lazy" width="37" alt="" />
                      </div>
                      <h5 className="f-h5-heading">AI Internal Automation</h5>
                      <p className="f-paragraph-large">For Companies that want to automate workflows and scale operations</p>
                      <div className="capabilities-card-content-item">
                        <div className="capabilities-check-icon w-embed"><CheckSvg /></div>
                        <div className="capabilities-card-content-text">Internal tool development</div>
                      </div>
                      <div className="capabilities-card-content-item">
                        <div className="capabilities-check-icon w-embed"><CheckSvg /></div>
                        <div className="capabilities-card-content-text">AI powered workflow automation</div>
                      </div>
                      <div className="capabilities-card-content-item">
                        <div className="capabilities-check-icon w-embed"><CheckSvg /></div>
                        <div className="capabilities-card-content-text">Operational efficiency optimization</div>
                      </div>
                      <div className="capabilities-card-content-item">
                        <div className="capabilities-check-icon w-embed"><CheckSvg /></div>
                        <div className="capabilities-card-content-text">System integration and scaling</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="capabilities-grid">
                <div id="w-node-de3d06bf-cfad-f8e1-b244-7c87f1428a27-f2767eca" className="modal-cta capabilities">
                  <div className="modal-cta-top left">
                    <div className="modal-cta-icon-wrap">
                      <div className="modal-cta-icon-frame">
                        <div className="modal-cta-icon w-embed">
                          <PhoneSvg />
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
                        <div className="icon-button w-embed"><ArrowSvg /></div>
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
  )
}
