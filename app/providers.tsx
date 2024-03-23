// app/providers.js
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { PropsWithChildren, useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

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
    if (hasConsent && typeof window !== "undefined") {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "", {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      });
    }
  }, [hasConsent]);

  return (
    <>
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
      <CookieConsent
        enableDeclineButton
        style={{ background: "#75B9BE" }}
        buttonStyle={{
          background: "#9BCFCC",
          color: "#2D2828",
          borderRadius: "0.25rem",
        }}
        declineButtonStyle={{
          background: "#9BCFCC",
          color: "#2D2828",
          borderRadius: "0.25rem",
        }}
        declineButtonClasses="hover:scale-105 transition-transform w-28 shadow-md"
        buttonClasses="hover:scale-105 transition-transform w-28 shadow-md"
        onAccept={() => setHasConsent(true)}
        onDecline={() => setHasConsent(false)}
      >
        <p className="text-offBlack">
          This website uses cookies to enhance the user experience.
        </p>
      </CookieConsent>
    </>
  );
}
