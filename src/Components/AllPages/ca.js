import React from 'react';
import Home from '../Home';
import { Card} from '@mui/material';
import Technologies from '../Technologies';
import USP from '../AboutUs/usp';
import Pricing from '../Pricing';
import PurchaseConversion from '../PurchaseConversion';
import Testimonial from '../Testimonial/index.js';
import AboutUs from '../AboutUs';
import { Data } from "../Question/Data";
import WhatsAppButton from '../WhatsAppButton';
import Services from '../Services/services';
import Products from '../Products/index';
import Solutions from '../Benefits/solutions';
import TaskManager from '../Products/screen';
import Productline from '../Productline';
// import SuccessStory from '../SuccessStory';


const Chartered = () => {
    return (
        <>
        <Card>
            <WhatsAppButton/>
        </Card>
            <Card>
                <Home />
            </Card>
            <Card>
                <Productline/>
            </Card>
            <Card>
                <Solutions segment="CFO" />
            </Card>
            <Card>
                <AboutUs/>
            </Card>
            <Card>
                <Services />
            </Card>
            <Card>
                <USP />
            </Card>
        
         

           
          

            {/* <Card>
                <TaskManager/>
            </Card> */}
      
            {/* <Card>
                <Products />
            </Card> */}

               
            <Card>
                <Technologies />
            </Card>
            {/* <Card>
                <SuccessStory />
            </Card> */}
     
       
 
     
     
       
          
            {/* <Card>
                <Testimonial/>
            </Card> */}
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

export default Chartered;