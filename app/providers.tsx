"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { PropsWithChildren, useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

if (typeof window !== "undefined") {
  posthog.init("phc_Cneu9QyCvYOGFH5oRyNZXkaC3ws4lo5KxiFgktJzcc9", {
    api_host: "https://us.i.posthog.com",
  });
}

export function CSPostHogProvider({ children }: PropsWithChildren<{}>) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = getCookieConsentValue();

    if (cookieConsent === "true") {
      setHasConsent(true);
    } else if (cookieConsent === "false") {
      setHasConsent(false);
    }
  }, []);

  useEffect(() => {
    if (hasConsent) {
      posthog.opt_in_capturing();
    } else {
      posthog.opt_out_capturing();
    }
  }, [hasConsent]);

  return (
    <>
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
      <CookieConsent
        style={{
          background: "#f4f0f0",
          border: "1px solid #2d2828",
        }}
        buttonStyle={{
          background: "f4f0f0",
          color: "#2d2828",
          borderRadius: "0.25rem",
          border: "1px solid #2d2828",
        }}
        buttonClasses="hover:scale-105 transition-transform shadow-md bg-off-white"
        buttonText="Accept"
        onAccept={() => setHasConsent(true)}
        enableDeclineButton
        declineButtonStyle={{
          background: "#f4f0f0",
          color: "#2d2828",
          borderRadius: "0.25rem",
          border: "1px solid #2d2828",
        }}
        declineButtonClasses="hover:scale-105 transition-transform shadow-md"
        declineButtonText="Decline"
        onDecline={() => setHasConsent(false)}
      >
        <p className="text-off-black">
          This website uses cookies to enhance the user experience.
        </p>
      </CookieConsent>
    </>
  );
}
