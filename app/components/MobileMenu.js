'use client'

export default function MobileMenu({ currentPage }) {
  const isMvp = currentPage === 'mvp-development'
  const isAi = currentPage === 'ai-automations'
  const isPricing = currentPage === 'pricing'

  return (
    <>
      <div className="mobile-menu-overlay"></div>
      <div className="div-block-29">
        <div className="div-block-54">
          <div className="div-block-51">
            <div className="div-block-49">
              <p className="paragraph-10">Menu</p>
              <img
                data-w-id="5cef42aa-81f8-d117-2f53-2106a2497165"
                loading="lazy"
                alt="close-icon"
                src="/images/cross-black.svg"
                className="image-9"
              />
            </div>
            <ul role="list" className="list-6">
              <li className="list-item-13">
                <a
                  href="/#home"
                  data-w-id="5cef42aa-81f8-d117-2f53-2106a2497168"
                  className="link-6"
                >
                  Home
                </a>
              </li>
              <li className="list-item-13">
                <a
                  href="/mvp-development"
                  data-w-id="e1a2f651-161c-3997-e5c1-e11a75d6bacb"
                  aria-current={isMvp ? 'page' : undefined}
                  className={`link-6${isMvp ? ' w--current' : ''}`}
                >
                  MVP Development
                </a>
              </li>
              <li className="list-item-13">
                <a
                  href="/ai-automations"
                  data-w-id="aa9554c8-ffe2-b0f6-c425-8ee3275c1b93"
                  aria-current={isAi ? 'page' : undefined}
                  className={`link-6${isAi ? ' w--current' : ''}`}
                >
                  AI Automations
                </a>
              </li>
              <li className="list-item-13">
                <a
                  href="/pricing"
                  data-w-id="4b757dc1-6738-64c4-0e68-a704b19ce79d"
                  aria-current={isPricing ? 'page' : undefined}
                  className={`link-6${isPricing ? ' w--current' : ''}`}
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
