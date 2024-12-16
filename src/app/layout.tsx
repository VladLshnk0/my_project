import AnalyticsComponent from "@/components/analytics/AnalyticsComponent";
import type { Metadata } from "next";
import "../globals.css";
import Script from "next/script";
import localFont from "next/font/local";
import ScrollUp from "@/components/homepageComponents/ScrollUp";
import Header from "@/components/header/Header";
import CookiePopup from "./[locale]/privacy/components/CookiePopup";
import Footer from "@/components/footer/Footer";
import { Suspense } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Norsea Atlantic",
  description:
    "Discover NorSea Atlantic: Your strategic partner in a world of possibilities",
};

const todaySansNowPro = localFont({
  src: [
    {
      path: "../../public/fonts/TodaySansNow_Pro_Bold_Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Regular_Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Medium_Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Light_Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Demi.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Demi_Italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Heavy.otf",
      weight: "800",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Heavy_Italic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Ultra.otf",
      weight: "900",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_Ultra_Italic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_XLight.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/TodaySansNow_Pro_XLight_Italic.otf",
      weight: "200",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="https://norseaatlantic.advanz.no/wp-content/uploads/2024/04/Favicon02.png"
        />
        <link
          rel="stylesheet"
          href="https://atlantic.nettstudio.no/api/payload.css?v=1"
        />
        <Script
          type="text/javascript"
          async
          strategy="beforeInteractive"
          src="https://atlantic.nettstudio.no/api/payload.js?v=1"
        ></Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9T31RRNYHM"
        />
        <Script
          async
          type="text/javascript"
          src="https://cdn.weglot.com/weglot.min.js"
          strategy="beforeInteractive"
        />
        <Script
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `if (typeof Weglot !== 'undefined') {Weglot.initialize({api_key: 'wg_1835dd2363efd1811bc11a40ad2753d14', hide_switcher: true});};`,
          }}
        ></Script>
        <Script
          async
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function() {
                function setCookie(name, value, daysToExpire) {
                    var expirationDate = new Date();
                    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
                
                    var cookieValue = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/';
                    document.cookie = cookieValue;
                };
                function getCookie(name) {
                  var cookieName = encodeURIComponent(name) + "=";
                  var cookieArray = document.cookie.split(';');
              
                  for(var i = 0; i < cookieArray.length; i++) {
                      var cookie = cookieArray[i].trim();
                      if (cookie.indexOf(cookieName) === 0) {
                          return decodeURIComponent(cookie.substring(cookieName.length, cookie.length));
                      }
                  }
                  // Return null if cookie not found
                  return null;
              };
          var myDiv = document.getElementById("langswicher");
              if (!Weglot) {
                  return;
              };
              //Create array of options to be added
              var availableLanguages = Array.isArray(Weglot.options.languages) && Weglot.options.languages.length > 0 && Weglot.options.languages
                  .map(function(language) {
                      return language.language_to;
                  })
                  .concat(Weglot.options.language_from);
              //Create and append select list
              var selectList = document.createElement("select");
              myDiv.appendChild(selectList);
              selectList.style = "cursor: pointer; height: 44px; background-color: #002856; color: white; border: 2px solid #00ADBB; padding: 5px;";
              var currentLang = Weglot.getCurrentLang();
              var currentCookeForEqual = getCookie("norseaLang");
              var currentLocalLang = getCookie("currentLang");
              //Create and append the options
              for (var i = 0; i < availableLanguages.length; i++) {
                  var lang = availableLanguages[i];
                  var option = document.createElement("option");
                  option.value = lang;
                  option.text = lang.toUpperCase();
                  if(currentLocalLang){
                    if (lang === currentLocalLang) {
                      option.selected = "selected"; 
                      Weglot.switchTo(currentLocalLang);       
                    };
                  }else if(currentCookeForEqual){
                    if (lang === currentCookeForEqual) {
                    option.selected = "selected"; 
                    Weglot.switchTo(currentCookeForEqual);
                    };
                  }else{
                    if (lang === currentLang) {
                      option.selected = "selected";        
                    };
                  };
                  selectList.appendChild(option);
              }
              selectList.onchange = function(){
                console.log("Language changed to onchange: " + this.value);
                  Weglot.switchTo(this.value);
              };
              Weglot.on("languageChanged", function(lang) {
                console.log("Language changed to: " + lang);
                selectList.value = lang;
                setCookie("currentLang", lang, 365);
              });
          })();`,
          }}
        ></Script>
        <Script
          strategy="lazyOnload"
          async
          dangerouslySetInnerHTML={{
            __html: `if(loadNorSeaWidget){console.log("NorSeaWidget");loadNorSeaWidget();}`,
          }}
        ></Script>
        <Script
          async
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9T31RRNYHM');`,
          }}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("consent", "default", {
                ad_storage: "denied",
                ad_user_data: "denied", 
                ad_personalization: "denied",
                analytics_storage: "denied",
                functionality_storage: "denied",
                personalization_storage: "denied",
                security_storage: "granted",
                wait_for_update: 2000,
              });
              gtag("set", "ads_data_redaction", true);
              gtag("set", "url_passthrough", true);`,
          }}
        ></Script>
        <Script
          id="cookieyes"
          type="text/javascript"
          lang="no"
          strategy="afterInteractive"
          src="https://cdn-cookieyes.com/client_data/74f559ea2f085b6d5d0c41d4/script.js"
        ></Script>
        <Suspense fallback={null}>
          <AnalyticsComponent />
        </Suspense>
      </head>
      <body
        className={todaySansNowPro.className + " bg-bg-color mx-auto relative"}
      >
        <GoogleTagManager gtmId="GTM-KJ4TRQNQ" />
        <ScrollUp />
        <Header />
        {children}
        {/* <CookiePopup /> */}
        <Footer />
      </body>
    </html>
  );
}
