import React from 'react';
import Home from '../Home';
import { Card} from '@mui/material';
import HappyCustomers from '../HappyCustomers';
import Technologies from '../Technologies';
import Benefits from '../Benefits';
import Pricing from '../Pricing';
import PurchaseConversion from '../PurchaseConversion';
import Testimonial from '../Testimonial/index.js';
import AboutUs from '../AboutUs';
import { Data } from "../Question/Data";
import WhatsAppButton from '../WhatsAppButton';
import Reasons from '../HappyCustomers/reasons';
import Products from '../Products/index';
import Solutions from '../Benefits/solutions';







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
                <AboutUs/>
            </Card>

            <Card>
                <Solutions />
            </Card>
      
            <Card>
                <Products />
            </Card>
            <Card>
                <HappyCustomers />
            </Card>
     
            <Card>
                <Reasons />
            </Card>
            <Card>
                <Benefits />
            </Card>
       
            <Card>
                <Technologies />
            </Card>
     
 
     
     
       
          
            <Card>
                <Testimonial/>
            </Card>
            {/* <Card>
                <Pricing />
            </Card> */}
        
            {/* <Card>
                <Data/>
            </Card> */}
            {/* <Card>
                <PurchaseConversion/>
            </Card> */}

        </>
    )
}

export default AllPages;