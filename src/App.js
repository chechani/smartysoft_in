import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Navbar';
import Footer from './Components/Footer';
import AllPages from './Components/AllPages';
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
import Products from './Components/Products';
import DemoButton from './Components/DemoButton';
import MarketingAutomation from './Components/SolutionAllPages/MarketingAutomation/MarketingAutomation';
import SalesDistribution from './Components/SolutionAllPages/Sales&Distribution/Sales&Distribution';
import CrmCustomerPortal from './Components/SolutionAllPages/CRM&CustomerPortal/CRM&CustomerPortal';
import BuyingVendorPortal from './Components/SolutionAllPages/Buying&VendorPortal/Buying&VendorPortal';
import InventoryManagement from './Components/SolutionAllPages/InventoryManagement/InventoryManagement';
import PointSales from './Components/SolutionAllPages/PointSales/PointSales';
import ManufacturingOperation from './Components/SolutionAllPages/ManufacturingOperation/ManufacturingOperation';
import ProjectAccounting from './Components/SolutionAllPages/ProjectAccounting/ProjectAccounting';
import AccountingAndFinance from './Components/SolutionAllPages/AccountingAndFinance/AccountingAndFinance';
import QualityManagement from './Components/SolutionAllPages/QualityManagement/QualityManagement';
import ProjectAndTaskManagement from './Components/SolutionAllPages/ProjectAndTaskManagement/ProjectAndTaskManagement';
import TimeRecordingAndBilling from './Components/SolutionAllPages/TimeRecordingAndBilling/TimeRecordingAndBilling';
import AssetManagement from './Components/SolutionAllPages/AssetManagement/AssetManagement';
import CustomerHelpDesk from './Components/SolutionAllPages/CustomerHelpDesk/CustomerHelpDesk';
import MaintenanceManagement from './Components/SolutionAllPages/MaintenanceManagement/MaintenanceManagement';
import HumanResourcesManagement from './Components/SolutionAllPages/HumanResourcesManagement/HumanResourcesManagement';
import WebsiteBuilder from './Components/SolutionAllPages/WebsiteBuilder/WebsiteBuilder';
import Ecommerce from './Components/SolutionAllPages/Ecommerce/Ecommerce';
import BusinessIntelligence from './Components/SolutionAllPages/BusinessIntelligence/BusinessIntelligence';
import ExpenseTravelManagement from './Components/SolutionAllPages/ExpenseTravelManagement/ExpenseTravelManagement';
import MeetingAgendaTaskExecution from './Components/SolutionAllPages/MeetingAgendaTaskExecution/MeetingAgendaTaskExecution';
import KnowledgeManagement from './Components/SolutionAllPages/KnowledgeManagement/KnowledgeManagement';
import DocumentAutomationManagement from './Components/SolutionAllPages/DocumentAutomation/DocumentAutomation';
import FleetManagement from './Components/SolutionAllPages/FleetManagement/FleetManagement';


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


{/* Solution All Pages */}
        <Route path="/accounting" element={<AccountingAndFinance/>}/>
        <Route path="/marketing" element={<MarketingAutomation/>}/>
        <Route path="/salesdistribution" element={<SalesDistribution/>}/>
        <Route path="/crmcustomerportal" element={<CrmCustomerPortal/>}/>
        <Route path="/buyingvendorportal" element={<BuyingVendorPortal/>}/>
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
        <Route path="/humanresourcesmanagement" element={<HumanResourcesManagement/>}/>
        <Route path="/websitebuilder" element={<WebsiteBuilder/>}/>
        <Route path="/ecommerce" element={<Ecommerce/>}/>
        <Route path="/businessintelligence" element={<BusinessIntelligence/>}/>
        <Route path="/expensetravelmanagement" element={<ExpenseTravelManagement/>}/>
        <Route path="/meetingagendataskexecution" element={<MeetingAgendaTaskExecution/>}/>
        <Route path="/knowledgemanagement" element={<KnowledgeManagement/>}/>
        <Route path="/documentautomation" element={<DocumentAutomationManagement/>}/>
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

