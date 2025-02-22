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
        <div className="bg-off-black dark:bg-off-white border-off-white dark:border-off-black fixed right-0 bottom-0 left-0 z-100 flex flex-col items-center justify-between gap-2 border-2 px-20 py-2 md:flex-row md:py-5">
          <p className="text-off-white dark:text-off-black text-center">
            This website uses cookies to enhance the user experience.
          </p>
          <div className="flex gap-2 self-end">
            <button
              onClick={() => handleConsent(true)}
              className="border-off-white dark:border-off-black text-off-white dark:text-off-black mr-2 rounded-md border-2 px-3 py-1"
            >
              Accept
            </button>
            <button
              onClick={() => handleConsent(false)}
              className="border-off-white dark:border-off-black text-off-white dark:text-off-black rounded-md border-2 px-3 py-1"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
