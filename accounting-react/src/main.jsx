import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage.jsx'
import FAQPage from '../pages/FAQPage/FAQPage.jsx'
import ContactPage from '../pages/ContactPage/ContactPage.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'
import CareersPage from '../pages/CareersPage/CareersPage.jsx'
import CareerApplyPage from '../pages/CareerApplyPage/CareerApplyPage.jsx'
import BusinessRegistrationPage from '../pages/BusinessRegistrationPage/BusinessRegistrationPage.jsx'
import BookKeepingAndAccountingServices from '../pages/BookKeepingAndAccountingServices/BookKeepingAndAccountingServices.jsx'
import TaxAndRegulationServicesPage from '../pages/TaxAndRegulatoryServicesPage/TaxAndRegulatoryServicesPage.jsx'
import PayrollOutsourcedServicesPage from '../pages/PayrollOutsourcedServicesPage/PayrollOutsourcedServicesPage.jsx'
import BirOneTImeTransactionServicesPage from '../pages/BirOneTimeTransactionServicesPage/BirOneTimeTransactionServicesPage.jsx'
import SpecializedRegistrationServicesPage from '../pages/SpecializedRegistrationServicesPage/SpecializedRegistrationServicesPage.jsx'
import BusinessSupportServicesPage from '../pages/BusinessSupportServicesPage/BusinessSupportServicesPage.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />, // ✅ Layout with ScrollToTop
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutUsPage /> },
      { path: '/faq', element: <FAQPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/careers', element: <CareersPage /> },
      { path: '/careers/apply', element: <CareerApplyPage /> },
      { path: '/services/business-registration', element: <BusinessRegistrationPage /> },
      { path: '/services/bookkeeping-and-accounting', element: <BookKeepingAndAccountingServices /> },
      { path: '/services/tax-and-regulatory-compliance', element: <TaxAndRegulationServicesPage /> },
      { path: '/services/payroll-outsourced', element: <PayrollOutsourcedServicesPage /> },
      { path: '/services/bir-transactions', element: <BirOneTImeTransactionServicesPage /> },
      { path: '/services/specialized-registration', element: <SpecializedRegistrationServicesPage /> },
      { path: '/services/business-support', element: <BusinessSupportServicesPage /> },
    ]
  }
], {
  basename: '/accounting-react', // ✅ keep this for HostGator path
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
