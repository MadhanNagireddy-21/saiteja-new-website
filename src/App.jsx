
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Quotation from "./pages/Quotation";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import MobileApplicationDevelopment from "./pages/MobileApplicationDevelopment";
import WebApplicationDevelopment from "./pages/WebApplicationDevelopment";
import ITConsulting from "./pages/ITConsulting";
import DigitalTransformation from "./pages/DigitalTransformation";
import HRMSSolutions from "./pages/HRMSSolutions";
import CloudDevOpsSolutions from "./pages/CloudDevOpsSolutions";

import Terms from "./pages/Terms";
import AdminJobs from "./pages/AdminJobs";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route
            path="/services/custom-software-development"
            element={<CustomSoftwareDevelopment />}
          />

          <Route
            path="/services/website-development"
            element={<WebsiteDevelopment />}
          />

          <Route
            path="/services/mobile-application-development"
            element={<MobileApplicationDevelopment />}
          />

          <Route
            path="/services/web-application-development"
            element={<WebApplicationDevelopment />}
          />

          <Route
            path="/services/it-consulting"
            element={<ITConsulting />}
          />

          <Route
            path="/services/digital-transformation"
            element={<DigitalTransformation />}
          />

          <Route
            path="/services/hrms-solutions"
            element={<HRMSSolutions />}
          />

          <Route
            path="/services/cloud-devops-solutions"
            element={<CloudDevOpsSolutions />}
          />

          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />

          <Route path="/admin/jobs" element={<AdminJobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
