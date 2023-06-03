import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Navbar';
import Footer from './Components/Footer';
import AllPages from './Components/AllPages';
import Healthcare from './Components/AllPages/healthcare';
import Ca from './Components/AllPages/ca';
import Engineering from './Components/AllPages/engineering';
import Auto from './Components/AllPages/auto';
import Realestate from './Components/AllPages/realestate';
import Distribution from './Components/AllPages/distribution';
import Registration from './Components/Registration';
import ThankYou from './Components/ThankYou/ThankYou';
import Benefits from './Components/Benefits';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import HappyCustomers from './Components/HappyCustomers';
import ExcelFileForm from './Components/ExcelFileForm';
import SchaduleDemo from './Components/ScheduleDemo';
import PageContactDetail from './Components/ContactUs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Aboutus from './Components/AboutUs';
import ScheduleDemoThanksPage from './Components/ScheduleDemoThanksPage';
import ExcelfileThanksPage from './Components/ExcelfileThanksPage';
import DemoButton from './Components/DemoButton';
import KeyFeatures from './Components/Features/keyfeatures';
import Technologies from './Components/Technologies';
import Accounting from './Components/SolutionAllPages/Accounting';
import AssetManagement from './Components/SolutionAllPages/AssetManagement';
import Businessintelligence from './Components/SolutionAllPages/BusinessIntelligence';
import BuyingAndVendorPortal from './Components/SolutionAllPages/Buying&VendorPortal';
import CRMAndCustomerPortal from './Components/SolutionAllPages/CRM&CustomerPortal';
import CustomerHelpDesk from './Components/SolutionAllPages/CustomerHelpDesk';
import DocumentAutomation from './Components/SolutionAllPages/DocumentAutomation';
import Ecommerce from './Components/SolutionAllPages/Ecommerce';
import ExpenseTravelManagement from './Components/SolutionAllPages/ExpenseTravelManagement';
import FleetManagement from './Components/SolutionAllPages/FleetManagement';
import HumanResources from './Components/SolutionAllPages/HumanResources';
import InventoryManagement from './Components/SolutionAllPages/InventoryManagement';
import KnowledgeManagement from './Components/SolutionAllPages/KnowledgeManagement';
import MaintenanceManagement from './Components/SolutionAllPages/MaintenanceManagement';
import ManufacturingOperation from './Components/SolutionAllPages/ManufacturingOperation';
import MarketingAutomation from './Components/SolutionAllPages/MarketingAutomation';
import MeetingAgenda from './Components/SolutionAllPages/MeetingAgenda';
import PointSales from './Components/SolutionAllPages/PointSales';
import ProjectAccounting from './Components/SolutionAllPages/ProjectAccounting';
import ProjectAndTaskManagement from './Components/SolutionAllPages/ProjectAndTaskManagement';
import QualityManagement from './Components/SolutionAllPages/QualityManagement';
import SalesAndDistribution from './Components/SolutionAllPages/Sales&Distribution';
import TimeRecordingAndBilling from './Components/SolutionAllPages/TimeRecordingAndBilling';
import WebsiteBuilder from './Components/SolutionAllPages/WebsiteBuilder';
import Productline from './Components/Productline/index'



function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<AllPages/>} exact/>
        <Route path='/registration' element={<Registration/>}/> 
        <Route path='/benefits' element={<Benefits/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/happycustomers' element={<HappyCustomers/>}/>
        <Route path='/excelfileform' element={<ExcelFileForm/>}/>
        <Route path ='/thankyou' element={<ThankYou/>}/>
        <Route path ='/scheduledemo' element={<SchaduleDemo/>}/>
        <Route path ='/contactus' element={<PageContactDetail/>}/>
        <Route path ='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path ='/aboutus' element={<Aboutus/>}/>
        <Route path="/scheduledemothanks" element={<ScheduleDemoThanksPage/>}/>
        <Route path="/excelfilethanks" element={<ExcelfileThanksPage/>}/>
        <Route path="/keyfeatures" element={<KeyFeatures/>}/>
        <Route path="/technologies" element={<Technologies/>}/>
   

{/* Solution All Pages */}
        <Route path="/healthcare" element={<Healthcare/>}/>
        <Route path="/engineering" element={<Engineering/>}/>
        <Route path="/ca" element={<Ca/>}/>
        <Route path="/distribution" element={<Distribution/>}/>
        <Route path="/realestate" element={<Realestate/>}/>
        <Route path="/auto" element={<Auto/>}/>
        <Route path="/accounting" element={<Accounting/>}/>
        <Route path="/marketing" element={<MarketingAutomation/>}/>
        <Route path="/salesdistribution" element={<SalesAndDistribution/>}/>
        <Route path="/crmcustomerportal" element={<CRMAndCustomerPortal/>}/>
        <Route path="/buyingvendorportal" element={<BuyingAndVendorPortal/>}/>
        <Route path="/inventorymanagement" element={<InventoryManagement/>}/>
        <Route path="/pointsales" element={<PointSales/>}/>
        <Route path="/manufacturingoperation" element={<ManufacturingOperation/>}/>
        <Route path="/projectaccounting" element={<ProjectAccounting/>}/>
        <Route path="/qualitymanagement" element={<QualityManagement/>}/>
        <Route path="/projectandtaskmanagement" element={<ProjectAndTaskManagement/>}/>
        <Route path="/timerecordingandbilling" element={<TimeRecordingAndBilling/>}/>
        <Route path="/assetmanagement" element={<AssetManagement/>}/>
        <Route path="/customerhelpdesk" element={<CustomerHelpDesk/>}/>
        <Route path="/maintenancemanagement" element={<MaintenanceManagement/>}/>
        <Route path="/humanresourcesmanagement" element={<HumanResources/>}/>
        <Route path="/websitebuilder" element={<WebsiteBuilder/>}/>
        <Route path="/ecommerce" element={<Ecommerce/>}/>
        <Route path="/businessintelligence" element={<Businessintelligence/>}/>
        <Route path="/expensetravelmanagement" element={<ExpenseTravelManagement/>}/>
        <Route path="/meetingagendataskexecution" element={<MeetingAgenda/>}/>
        <Route path="/knowledgemanagement" element={<KnowledgeManagement/>}/>
        <Route path="/documentautomation" element={<DocumentAutomation/>}/>
        <Route path="/fleetmanagement" element={<FleetManagement/>}/>

        {/* <Route path="/services" element={<Services/>}/> */}
        <Route path="/demobutton" element={<DemoButton/>}/>
        <Route path='*' element={<AllPages/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

