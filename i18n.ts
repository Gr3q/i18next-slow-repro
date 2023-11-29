import i18next from "i18next";

void i18next
  .init({
    supportedLngs: [
      "en-US"
    ],
    ns: ["misc"],
    load: "all",
    cleanCode: true,
    debug: false,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    returnObjects: false,
    returnNull: false,
    fallbackLng: "en-US",
  });

export default i18next;
