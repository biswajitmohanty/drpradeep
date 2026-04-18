import Script from "next/script";
import { env } from "@/lib/env";

export function Analytics() {
  return (
    <>
      {env.plausibleDomain ? (
        <Script
          src="https://plausible.io/js/script.js"
          data-domain={env.plausibleDomain}
          strategy="afterInteractive"
          defer
        />
      ) : null}

      {env.clarityId ? (
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${env.clarityId}");`,
          }}
        />
      ) : null}
    </>
  );
}
