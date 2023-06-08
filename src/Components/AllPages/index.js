import React from 'react';
import Home from '../Home';
import { Card} from '@mui/material';
import Technologies from '../Technologies';
import Pricing from '../Pricing';
import PurchaseConversion from '../PurchaseConversion';
import Testimonial from '../Testimonial/index.js';
// import AboutUs from '../AboutUs';
import { Data } from "../Question/Data";
import WhatsAppButton from '../WhatsAppButton';
import Services from '../Services/services';
import Products from '../Products/index';
import Solutions from '../Benefits/solutions';
import TaskManager from '../Products/screen';
import SuccessStoryContainer from '../Success';
import Productline from '../Productline';
import { FAQ } from '../FAQ/faqs';
import USP from '../AboutUs/usp';
import Footer from '../Footer';
import Clients from '../AboutUs/clients';




const AllPages = () => {
    return (
        <>
        <Card>
            <WhatsAppButton/>
        </Card>
            <Card>
                <Home />
            </Card>
            <Card>
                <Productline segment="Smarty Home"/>
            </Card>
            <Card>
            <Solutions segment="Smarty Home" cardCount={12} />
            </Card>
            {/* <Card>
                <AboutUs/>
            </Card> */}
            <Card>
                <Services segment="Smarty Home" />
            </Card>
            <Card>
                <USP segment="Smarty Home"/>
            </Card>            

            {/* <Card>
                <TaskManager/>
            </Card> */}
      
            {/* <Card>
                <Products />
            </Card> */}
      
            <Card>
                <Technologies segment="Smarty Home"/>
            </Card>
            <Card>
                <SuccessStoryContainer segment="Smarty Home"/>
            </Card>   
     
             <Card>
                <FAQ category="About Accxchange"/>
            </Card>

            <Card>
                <Clients segment="Smarty Home"/>
            </Card>
            
            <Card>
                <Testimonial segment="Smarty Home"/>
            </Card>
            <card>
            <Footer segment="Smarty Home"/>
            </card>
               

            {/* <Card>
                <Pricing />
            </Card> */}

            {/* <Card>
                <PurchaseConversion/>
            </Card> */}

        </>
    )
}

export default AllPages;