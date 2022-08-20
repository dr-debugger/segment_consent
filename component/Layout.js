import React, { useEffect } from "react";
import Segment from "./Segment";
import Script from "next/script";

const Layout = ({ children }) => {
  const scriptCallback = () => {
    window.consentManagerConfig = function (exports) {
      return {
        container: "#target-container",
        writeKey: "FWT2VAOOkiYOAdHGL5hrYkO14l53iGTq",
        bannerContent:
          "We use cookies (and other similar technologies) to collect data to improve your experience on our site.",
        bannerSubContent: "Click here to choose your preferences",
        preferencesDialogTitle: "Website Data Collection Preferences",
        preferencesDialogContent:
          "We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.",
        cancelDialogTitle: "Are you sure you want to cancel?",
        cancelDialogContent:
          "Your preferences have not been saved. By continuing to use our website, you are agreeing to our Website Data Collection Policy",
        closeBehavior: "accept",
        bannerBackgroundColor: "#00829A",
      };
    };
  };
  useEffect(() => {
    scriptCallback();
  }, []);
  return (
    <>
      <Script src="https://unpkg.com/@segment/consent-manager@5.3.0/standalone/consent-manager.js" />
      <div>
        <div>{children}</div>
        <Segment />
        <div id="target-container"></div>
      </div>
    </>
  );
};

export default Layout;
