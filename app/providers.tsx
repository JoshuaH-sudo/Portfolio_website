"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { PropsWithChildren, useEffect, useState } from "react";
import Cookies from "js-cookie";

if (typeof window !== "undefined") {
  posthog.init("phc_Cneu9QyCvYOGFH5oRyNZXkaC3ws4lo5KxiFgktJzcc9", {
    api_host: "https://us.i.posthog.com",
  });
}

export function CSPostHogProvider({ children }: PropsWithChildren<{}>) {
  const [hasConsent, setHasConsent] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const handleConsent = (consent: boolean) => {
    Cookies.set("cookieConsent", consent.toString(), { expires: 365 });
    setHasConsent(consent);
    setShowBanner(false);
  };

  const getCookieConsent = async () => {
    const consent = Cookies.get("cookieConsent");
    console.log(consent);

    if (!consent) {
      setShowBanner(true);
      return setHasConsent(false);
    }

    if (consent === "true") {
      setHasConsent(true);
    } else if (consent === "false") {
      setHasConsent(false);
    }
  };

  useEffect(() => {
    getCookieConsent();
  }, []);

  useEffect(() => {
    if (hasConsent && window.location.hostname !== "localhost") {
      console.debug("Opting in to capturing");
      posthog.opt_in_capturing();
    } else {
      console.debug("Opting out of capturing");
      posthog.opt_out_capturing();
    }
  }, [hasConsent]);

  return (
    <>
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
      {showBanner && (
        <div className="bg-off-black dark:bg-off-white fixed right-0 bottom-30 left-0 z-100 flex flex-col items-center justify-between gap-2 py-2 md:py-5 px-20 md:flex-row">
          <p>
            This website uses cookies to enhance the user experience.
          </p>
          <div className="flex gap-2 self-end md:self-center">
            <button
              onClick={() => handleConsent(true)}
              className="border-off-black text-off-white dark:text-off-black mr-2 rounded-md border-2 px-3 py-1"
            >
              Accept
            </button>
            <button
              onClick={() => handleConsent(false)}
              className="border-off-black text-off-white dark:text-off-black rounded-md border-2 px-3 py-1"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
