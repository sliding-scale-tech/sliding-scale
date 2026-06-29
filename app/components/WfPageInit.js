export default function WfPageInit({ pageId, siteId }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.setAttribute('data-wf-page','${pageId}');document.documentElement.setAttribute('data-wf-site','${siteId}');`,
      }}
    />
  )
}
