import React from 'react';
import AllFeatures from './Features';
import Advantages from './Advantages';
import { FAQ } from '../FAQ/faqs';
import Footer from '../Footer';



function CustomerHelpDesk() {
  return (
    <>
<AllFeatures docname="Customer Help Desk"/>
<Advantages docname="Customer Help Desk"/>
<FAQ category="About Accxchange"/>
<Footer segment="Smarty Home"/>
    </>
  );
}

export default CustomerHelpDesk;
