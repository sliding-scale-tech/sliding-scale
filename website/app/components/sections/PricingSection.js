const blurStyle = {
  filter: 'blur(5px)',
  opacity: 0,
  WebkitTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  msTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
}

function CheckCircleSvg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z" fill="#12B76A"></path>
    </svg>
  )
}

function ArrowSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
      <g clipPath="url(#clip0_pricing_arrow)">
        <path d="M3.33301 8H12.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M10 5.33333L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
      </g>
      <defs>
        <clipPath id="clip0_pricing_arrow">
          <rect width="16" height="16" fill="currentColor"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}

function ChatSvg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}

function BoltSvg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0001 2L4.09356 12.6879C3.74475 13.1064 3.57035 13.3157 3.56768 13.4925C3.56537 13.6461 3.63384 13.7923 3.75336 13.8889C3.89085 14 4.16328 14 4.70814 14H12.0001L11.0001 22L19.9067 11.3121C20.2555 10.8936 20.4299 10.6843 20.4325 10.5075C20.4348 10.3539 20.3664 10.2077 20.2468 10.1111C20.1094 10 19.8369 10 19.2921 10H12.0001L13.0001 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}

function ShareSvg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13M12 8H16V12M15.5 3.5V2M19.4393 4.56066L20.5 3.5M20.5103 8.5H22.0103M3 13.3471C3.65194 13.4478 4.31987 13.5 5 13.5C9.38636 13.5 13.2653 11.3276 15.6197 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}

// Renders the pricing plan content only — wrapper is in page.js
export default function PricingSection() {
  return (
    <div className="uui-container-large-2">
      <div className="uui-padding-vertical-xhuge-2">
        <div
          data-w-id="1eaa750e-7f06-3cdd-63ca-cc2ce030e563"
          style={blurStyle}
          className="heading-layout"
        >
          <div className="eye-brow">
            <div className="eye-brow-number">006</div>
            <div className="eye-brow-text-wrap">
              <div className="eye-brow-dot"></div>
              <div className="eye-brow-text">pricing plans</div>
            </div>
          </div>
          <div className="heading-wrap">
            <h2 className="heading-style-h2">Simple, Transparent &amp; Affordable</h2>
          </div>
        </div>
        <div className="w-layout-grid uui-pricing01_component">
          <div className="uui-pricing01_content">
            <div className="w-layout-grid uui-pricing01_content-list">
              <div id="w-node-_047a03ea-ef72-2998-e2d4-f53471f854fd-f2767eca" className="uui-pricing01_content-item">
                <div className="uui-pricing01_item-icon-wrapper">
                  <div className="uui-icon-featured-outline-large">
                    <div className="uui-icon-1x1-xsmall w-embed"><ChatSvg /></div>
                  </div>
                </div>
                <div className="uui-pricing01_item-text-wrapper">
                  <div className="div-block-58">
                    <h5 className="uui-heading-xxsmall-2">Clarity Engine</h5>
                    <div className="uui-badge is-primary">
                      <div className="text-block-47">Complimentary</div>
                    </div>
                  </div>
                  <div className="uui-space-xxsmall-2"></div>
                  <div className="uui-text-size-medium-2">1-on-1 Product Discovery with a global product builder</div>
                </div>
              </div>
              <div id="w-node-_047a03ea-ef72-2998-e2d4-f53471f85507-f2767eca" className="uui-pricing01_content-item">
                <div className="uui-pricing01_item-icon-wrapper">
                  <div className="uui-icon-featured-outline-large">
                    <div className="uui-icon-1x1-xsmall w-embed"><BoltSvg /></div>
                  </div>
                </div>
                <div className="uui-pricing01_item-text-wrapper">
                  <div className="div-block-58">
                    <h5 className="uui-heading-xxsmall-2">Conversion-First UX</h5>
                    <div className="uui-badge is-primary">
                      <div className="text-block-48">Complimentary</div>
                    </div>
                  </div>
                  <div className="uui-space-xxsmall-2"></div>
                  <div className="uui-text-size-medium-2">High-performance design built for real users</div>
                </div>
              </div>
              <div id="w-node-_047a03ea-ef72-2998-e2d4-f53471f85511-f2767eca" className="uui-pricing01_content-item">
                <div className="uui-pricing01_item-icon-wrapper">
                  <div className="uui-icon-featured-outline-large">
                    <div className="uui-icon-1x1-xsmall w-embed"><ShareSvg /></div>
                  </div>
                </div>
                <div className="uui-pricing01_item-text-wrapper">
                  <h5 className="uui-heading-xxsmall-2">Bulletproof QA</h5>
                  <div className="uui-space-xxsmall-2"></div>
                  <div className="uui-text-size-medium-2">Pre-launch testing, edge-case handling, and stablization</div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_047a03ea-ef72-2998-e2d4-f53471f8551b-f2767eca" className="uui-pricing01_plan">
            <div className="uui-pricing01_plan-content">
              <div className="uui-pricing01_content-top">
                <div className="uui-pricing01_top-left">
                  <div className="uui-pricing01_plan-name-wrapper">
                    <h2 className="uui-heading-xsmall">Rocket Launch MVP</h2>
                  </div>
                  <div className="uui-pricing01_top-right-price">$10,000</div>
                  <div className="uui-text-size-medium-2 subtitle">A structured, high-velocity execution model designed to take your product from idea to launch in <strong>4 weeks</strong></div>
                </div>
                <div className="uui-pricing01_top-right">
                  <div className="modal-cta-icon-frame">
                    <img src="/images/start-up_18586692.webp" loading="lazy" width="40" alt="" />
                  </div>
                </div>
              </div>
              <div className="uui-pricing01_divider"></div>
              <div className="uui-pricing01_feature-list">
                <div id="w-node-_047a03ea-ef72-2998-e2d4-f53471f85535-f2767eca" className="uui-pricing01_feature">
                  <div className="uui-pricing01_icon-wrapper">
                    <div className="uui-icon-1x1-xsmall w-embed"><CheckCircleSvg /></div>
                  </div>
                  <div className="uui-text-size-medium-2">Launch your app in 4 weeks</div>
                </div>
                <div id="w-node-_047a03ea-ef72-2998-e2d4-f53471f8553a-f2767eca" className="uui-pricing01_feature">
                  <div className="uui-pricing01_icon-wrapper">
                    <div className="uui-icon-1x1-xsmall w-embed"><CheckCircleSvg /></div>
                  </div>
                  <div className="uui-text-size-medium-2">Scalable Core (full-stack development)</div>
                </div>
                <div id="w-node-_047a03ea-ef72-2998-e2d4-f53471f8553f-f2767eca" className="uui-pricing01_feature">
                  <div className="uui-pricing01_icon-wrapper">
                    <div className="uui-icon-1x1-xsmall w-embed"><CheckCircleSvg /></div>
                  </div>
                  <div className="uui-text-size-medium-2">Launch Accelerator</div>
                </div>
                <div id="w-node-_047a03ea-ef72-2998-e2d4-f53471f85544-f2767eca" className="uui-pricing01_feature">
                  <div className="uui-pricing01_icon-wrapper">
                    <div className="uui-icon-1x1-xsmall w-embed"><CheckCircleSvg /></div>
                  </div>
                  <div className="uui-text-size-medium-2">Daily async updates</div>
                </div>
                <div id="w-node-_047a03ea-ef72-2998-e2d4-f53471f85549-f2767eca" className="uui-pricing01_feature">
                  <div className="uui-pricing01_icon-wrapper">
                    <div className="uui-icon-1x1-xsmall w-embed"><CheckCircleSvg /></div>
                  </div>
                  <div className="uui-text-size-medium-2">Weekly demo syncs</div>
                </div>
                <div id="w-node-_047a03ea-ef72-2998-e2d4-f53471f8554e-f2767eca" className="uui-pricing01_feature">
                  <div className="uui-pricing01_icon-wrapper">
                    <div className="uui-icon-1x1-xsmall w-embed"><CheckCircleSvg /></div>
                  </div>
                  <div className="uui-text-size-medium-2">Go-live support</div>
                </div>
              </div>
              <div className="uui-pricing01_divider"></div>
            </div>
            <div className="dots-partern"></div>
            <a href="https://calendar.app.google/PrdZAdEpBpV5YHCKA" target="_blank" className="button-2 w-inline-block">
              <div className="button-inner">
                <div className="button-contact-avt">
                  <img loading="lazy" src="/images/contact-avt.png" alt="avatar" className="button-contact-avt-img" />
                  <img loading="lazy" src="/images/contact-avt-1.png" alt="avatar" className="button-contact-avt-img" />
                </div>
                <div className="button-text-wrap">
                  <div className="button-text">Get Package</div>
                </div>
                <div className="button-icon">
                  <div className="icon-button w-embed"><ArrowSvg /></div>
                </div>
              </div>
              <div className="button-innershadow"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
