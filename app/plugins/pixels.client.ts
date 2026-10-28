// @ts-nocheck
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  let pixelsInitialized = false
  
  const initPixels = () => {
    if (pixelsInitialized) return
    pixelsInitialized = true

    // 1. Meta (Facebook) Pixel
    if (config.public.metaPixelId) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      fbq('init', config.public.metaPixelId);
      fbq('track', 'PageView');
    }

    // 2. Google Analytics (gtag.js)
    if (config.public.googleAnalyticsId) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.googleAnalyticsId}`
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      function gtag(){ window.dataLayer.push(arguments) }
      gtag('js', new Date())
      gtag('config', config.public.googleAnalyticsId)
    }

    // 3. Google Tag Manager
    if (config.public.googleTagManagerId) {
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',config.public.googleTagManagerId);

      const noscript = document.createElement('noscript')
      const iframe = document.createElement('iframe')
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${config.public.googleTagManagerId}`
      iframe.height = '0'
      iframe.width = '0'
      iframe.style.display = 'none'
      iframe.style.visibility = 'hidden'
      noscript.appendChild(iframe)
      document.body.appendChild(noscript)
    }

    // 4. LinkedIn Insight Tag
    if (config.public.linkedInPixelId) {
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(config.public.linkedInPixelId);
      
      (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
    }
  }

  // Vérifier le consentement au chargement (côté client uniquement)
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    if (localStorage.getItem('escen_cookie_consent') === 'accepted') {
      initPixels()
    }

    // Écouter le consentement donné en temps réel depuis le CookieBanner
    window.addEventListener('cookies-accepted', () => {
      initPixels()
    })
  }

  // Suivi automatique lors des changements de page (pour les SPA)
  nuxtApp.hook('page:finish', () => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      if (localStorage.getItem('escen_cookie_consent') === 'accepted') {
        if (config.public.metaPixelId && typeof window.fbq !== 'undefined') {
          window.fbq('track', 'PageView');
        }
      }
    }
  })
})
