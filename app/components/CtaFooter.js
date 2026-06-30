'use client'
import { useState } from 'react'

export default function CtaFooter({ currentPage, pageId = '69eb3a8cb30f30e3f2767eca' }) {
  const isIndex = currentPage === 'index'
  const isMvp = currentPage === 'mvp-development'
  const isAi = currentPage === 'ai-automations'
  const isPricing = currentPage === 'pricing'

  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const form = e.target
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.Name.value,
          email: form.Email.value,
          message: form['Share-project-details'].value,
          timeline: form.Timeline.value,
          budget: form.Budget?.value || '',
        }),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="padding-global">
          <div className="footer-top">
            <div
              id="CTA-Form"
              data-w-id="de3d06bf-cfad-f8e1-b244-7c87f1428f3f"
              style={{filter: 'blur(5px)', opacity: '0', WebkitTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}}
              className="cta-form-card"
            >
              <div className="cta-form-card-top">
                <div className="cta-form-card-heading-wrap">
                  <h2 className="cta-form-card-heading">Have an idea you want to build?</h2>
                  <p className="subheading-text on-cta-card">Let&#x27;s talk about what you&#x27;re building and how we can help</p>
                </div>
              </div>
              <div className="cta-form w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  className="form_form"
                  data-wf-page-id={pageId}
                  data-wf-element-id="de3d06bf-cfad-f8e1-b244-7c87f1428f4a"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="Name" className="brix---input-label">Name</label>
                    <input className="form_input w-input" maxLength="256" name="Name" data-name="Name" placeholder="Your name" type="text" id="Name" required />
                  </div>
                  <div>
                    <label htmlFor="Email" className="brix---input-label">Email</label>
                    <input className="form_input w-input" maxLength="256" name="Email" data-name="Email" placeholder="you@company.com" type="email" id="Email" required />
                  </div>
                  <div id={`w-node-e6a86a55-d182-f743-64f9-0fad22d29c5a-${pageId}`} className="div-block-55">
                    <label htmlFor="Share-project-details" className="brix---input-label">What are you building?</label>
                    <textarea id="Share-project-details" name="Share-project-details" maxLength="5000" data-name="Share project details*" placeholder="Tell us about your idea..." required className={`form_input is-text-area w-node-de3d06bf-cfad-f8e1-b244-7c87f1428f4e-${pageId} w-input`}></textarea>
                  </div>
                  <div className="div-block-56">
                    <label htmlFor="Timeline" className="brix---input-label">Timeline</label>
                    <input className="form_input w-input" maxLength="256" name="Timeline" data-name="Timeline" placeholder="e.g., 2-3 months" type="text" id="Timeline" required />
                  </div>
                  <div className="div-block-57">
                    <label htmlFor="Budget" className="brix---input-label">Budget (optional)</label>
                    <input className="form_input w-input" maxLength="256" name="Budget" data-name="Budget" placeholder="Your budget range" type="text" id="Budget" />
                  </div>
                  <div id={`w-node-de3d06bf-cfad-f8e1-b244-7c87f1428f4f-${pageId}`} className="form-button">
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="submit-button w-button"
                      value={status === 'loading' ? 'Sending...' : 'Start Shipping'}
                      disabled={status === 'loading'}
                    />
                  </div>
                </form>
                <div className="form-success-message w-form-done" style={{ display: status === 'success' ? 'block' : 'none' }}>
                  <div className="form-success-message-inner">
                    <div className="form-success-message-title">Thank you! </div>
                    <div className="subheading-text on-cta-card">Your submission has been received!</div>
                  </div>
                </div>
                <div className="form-error-message w-form-fail" style={{ display: status === 'error' ? 'block' : 'none' }}>
                  <div className="text-block-49">Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
          <section className="footer-dark">
            <div className="container-2">
              <div className="footer-wrapper">
                <a href="/" aria-current={isIndex ? 'page' : undefined} className={`footer-brand w-inline-block${isIndex ? ' w--current' : ''}`}>
                  <img src="/images/d4a2f07d-f866-43be-8f7d-c5a06a741532_removalai_preview.webp" loading="lazy" width="213" alt="" />
                </a>
                <div className="footer-content">
                  <div id={`w-node-_184cf12b-41f7-09e1-bf4d-d891dfbd7ef1-${pageId}`} className="footer-block">
                    <div className="title-small">Services</div>
                    <a href="/mvp-development" aria-current={isMvp ? 'page' : undefined} className={`footer-link-2${isMvp ? ' w--current' : ''}`}>MVP Development</a>
                    <a href="/ai-automations" aria-current={isAi ? 'page' : undefined} className={`footer-link-2${isAi ? ' w--current' : ''}`}>AI Automations</a>
                  </div>
                  <div id={`w-node-_184cf12b-41f7-09e1-bf4d-d891dfbd7ef8-${pageId}`} className="footer-block">
                    <div className="title-small">Company</div>
                    <a href="/pricing" aria-current={isPricing ? 'page' : undefined} className={`footer-link-2${isPricing ? ' w--current' : ''}`}>Pricing</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-copyright-center">Copyright © 2026 SlidingScale.xyz</div>
          </section>
        </div>
      </div>
    </footer>
  )
}
