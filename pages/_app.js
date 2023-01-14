import "tailwindcss/tailwind.css";
import "../styles/globals.css";

// Font awesome configuration
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Importing all the icons we need
import {
  fab,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFlask,
  faBullseye,
  faBiohazard,
  faRocket,
  faBraille,
  faMicroscope,
  faTemperatureLow,
  faCog,
  faPhoneVolume,
  faEnvelope,
  faSearchLocation,
  faArrowsAltH,
  faBars,
  faCheck,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faFlask,
  faBullseye,
  faBiohazard,
  faRocket,
  faBraille,
  faMicroscope,
  faTemperatureLow,
  faCog,
  faPhoneVolume,
  faEnvelope,
  faSearchLocation,
  faArrowsAltH,
  faBars,
  faCheck,
  faGithub,
  faSpinner,
  faYoutube,
  faLinkedin
);

import Layout from "../components/layout/layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="text-sm">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
