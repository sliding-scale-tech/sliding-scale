'use client'

import MobileMenu from './MobileMenu'

export default function Navbar({ currentPage }) {
  const isIndex = currentPage === 'index'
  const isMvp = currentPage === 'mvp-development'
  const isAi = currentPage === 'ai-automations'
  const isPricing = currentPage === 'pricing'

  return (
    <div className="div-block-47">
      <div className="navbar-logo-left">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar-logo-left-container shadow-three w-nav"
        >
          <div className="navbar-wrapper-3">
            <div className="div-block-2">
              <a
                href="/"
                aria-current={isIndex ? 'page' : undefined}
                className={`navbar-brand-2 w-nav-brand${isIndex ? ' w--current' : ''}`}
              >
                <img
                  width="182"
                  loading="lazy"
                  alt=""
                  src="/images/d4a2f07d-f866-43be-8f7d-c5a06a741532_removalai_preview.webp"
                />
              </a>
            </div>
            <ul role="list" className="nav-menu-two-2 w-list-unstyled">
              <li className="list-item-14">
                <a
                  href="/"
                  aria-current={isIndex ? 'page' : undefined}
                  className={`nav-link-4${isIndex ? ' w--current' : ''}`}
                >
                  Home
                </a>
                <a
                  href="/mvp-development"
                  aria-current={isMvp ? 'page' : undefined}
                  className={`nav-link-4${isMvp ? ' w--current' : ''}`}
                >
                  MVP Development
                </a>
                <a
                  href="/ai-automations"
                  aria-current={isAi ? 'page' : undefined}
                  className={`nav-link-4${isAi ? ' w--current' : ''}`}
                >
                  AI Automations
                </a>
                <a
                  href="/pricing"
                  aria-current={isPricing ? 'page' : undefined}
                  className={`nav-link-4${isPricing ? ' w--current' : ''}`}
                >
                  Pricing
                </a>
              </li>
            </ul>
            <div className="div-block-50">
              <div
                data-w-id="5cef42aa-81f8-d117-2f53-2106a2497157"
                className="div-block-53"
              >
                <img
                  data-w-id="5cef42aa-81f8-d117-2f53-2106a2497158"
                  loading="lazy"
                  alt="menu-icon"
                  src="/images/menu-icon.svg"
                  className="image-28"
                />
              </div>
              <a href="#CTA-Form" className="c2a-button w-inline-block">
                <div className="text-block-5">Start Shipping</div>
                <div className="btn-icon">
                  <img
                    width="8"
                    height="8"
                    alt=""
                    loading="lazy"
                    src="/images/arrow-top-right_1arrow-top-right.png"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu currentPage={currentPage} />
    </div>
  )
}
