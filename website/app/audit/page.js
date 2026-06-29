import Navbar from '../components/Navbar'
import WfPageInit from '../components/WfPageInit'
import CtaFooter from '../components/CtaFooter'

const PAGE_ID = '6a07fc438ff272d9b437c312'
const SITE_ID = '69eb3a8ab30f30e3f2767ea3'

const blurSlideStyle = {
  filter: 'blur(5px)',
  opacity: 0,
  WebkitTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  msTransform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
}

export default function AuditPage() {
  return (
    <>
      <WfPageInit pageId={PAGE_ID} siteId={SITE_ID} />
      <div className="div-block-66">
        <Navbar currentPage="audit" />
        <div className="main-wrapper">
          <section className="uui-section_pricing01">
            <div className="uui-page-padding-2">
              <div className="uui-container-large-2">
                <div className="uui-padding-vertical-xhuge-2 sep-pricing">
                  <div
                    data-w-id="1eaa750e-7f06-3cdd-63ca-cc2ce030e563"
                    style={blurSlideStyle}
                    className="heading-layout"
                  >
                    <div className="heading-wrap">
                      <h2 className="heading-style-h2">Book a Meeting with Aleem Ansari</h2>
                    </div>
                  </div>
                  <div className="w-layout-grid uui-pricing01_component">
                    <div className="code-embed-2 w-embed">
                      {/* Google Calendar Appointment Scheduling begin */}
                      <iframe
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2-jFMdktW-hNvD5EjWt2rjnmMWRn-DXqtHPDZVk6Kyhxr1uf1CMt96JbBuoL9-wwVy0XhUkNXC?gv=true"
                        style={{ border: 0 }}
                        width="100%"
                        height="600"
                        frameBorder="0"
                      ></iframe>
                      {/* end Google Calendar Appointment Scheduling */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CtaFooter currentPage="audit" pageId={PAGE_ID} />
        </div>
        <img
          src="/images/hero-v17-elements-brix-templates.avif"
          alt="Hero - Elements Webflow Library - BRIX Templates"
          sizes="(max-width: 2880px) 100vw, 2880px"
          srcSet="/images/hero-v17-elements-brix-templates-p-500.avif 500w, /images/hero-v17-elements-brix-templates-p-800.avif 800w, /images/hero-v17-elements-brix-templates-p-1080.avif 1080w, /images/hero-v17-elements-brix-templates.avif 2880w"
          className="brix---bg-image-full-width-2 auditbg"
        />
      </div>
    </>
  )
}
