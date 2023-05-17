import React from 'react';
import Home from '../Home';
import { Card} from '@mui/material';
import HappyCustomers from '../HappyCustomers';
import NewFeatures from '../NewFeatures';
import DmsTemplates from '../DmsTamplates';
import Benefits from '../Benefits';
import Pricing from '../Pricing';
import PurchaseConversion from '../PurchaseConversion';
import OurInfo from '../OurInfo.js';
import DmsOtherTemplates from '../DmsOtherTamplates';
import DemoButton from '../DemoButton';
import { Data } from "../Question/Data";
import WhatsAppButton from '../WhatsAppButton';
import Reasons from '../HappyCustomers/reasons';





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
                <DemoButton/>
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
                <DmsTemplates />
            </Card>
            {/* <Card>
                <NewFeatures />
            </Card> */}
 
     
     
       
          
            <Card>
                <OurInfo/>
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