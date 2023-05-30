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
import MarketingAutomation from './Components/SolutionAllPages/MarketingAutomation';
import SalesDistribution from './Components/SolutionAllPages/Sales&Distribution';
import CrmCustomerPortal from './Components/SolutionAllPages/CRM&CustomerPortal';
import BuyingVendorPortal from './Components/SolutionAllPages/Buying&VendorPortal';
import InventoryManagement from './Components/SolutionAllPages/InventoryManagement';
import PointSales from './Components/SolutionAllPages/PointSales';
import ManufacturingOperation from './Components/SolutionAllPages/ManufacturingOperation';
import ProjectAccounting from './Components/SolutionAllPages/ProjectAccounting';
import AccountingAndFinance from './Components/SolutionAllPages/AccountingAndFinance';

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

