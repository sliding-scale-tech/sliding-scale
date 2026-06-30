'use client'
import Script from 'next/script'

export default function ScriptLoader() {
  return (
    <Script
      src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js"
      strategy="afterInteractive"
      onLoad={() => {
        const s = document.createElement('script')
        s.src = '/js/webflow.js'
        document.body.appendChild(s)
      }}
    />
  )
}
