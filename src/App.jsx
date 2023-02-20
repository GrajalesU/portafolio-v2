import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";

import spanish from "./utils/es.json";
import english from "./utils/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: english,
    },
    es: {
      translation: spanish,
    },
  },
  lng: "en",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});


function App() {
  return (
    <>
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}

export default App;
