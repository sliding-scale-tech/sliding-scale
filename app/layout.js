import ScriptLoader from './components/ScriptLoader'
import './globals.css'

export const metadata = {
  title: 'Sliding Scale Technologies',
  description: 'Sliding Scale Technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/webflow.css" />
        <link rel="stylesheet" href="/css/sliding-scale-technologies.webflow.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.webp" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-dark.webp" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/favicon-48.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/webclip-180.webp" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/webclip-192.webp" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/webclip.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);` }} />
      </head>
      <body>
        {children}
        <ScriptLoader />
      </body>
    </html>
  )
}
