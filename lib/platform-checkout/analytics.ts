/** Keep the existing marketing analytics outside billing and identity forms. */
export function siteAnalyticsBootstrap(id: string): string {
  if (!/^GTM-[A-Z0-9]+$/.test(id)) throw new TypeError('analytics_id_invalid');
  return `(function(w,d,s,l,i){if(/^\\/checkout\\/saas(?:\\/|$)/.test(w.location.pathname))return;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`;
}
