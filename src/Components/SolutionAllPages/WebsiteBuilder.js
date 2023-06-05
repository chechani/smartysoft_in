import React from 'react';
import AllFeatures from './Features';
import Advantages from './Advantages';
import { FAQ } from '../FAQ/faqs';
import Footer from '../Footer';


function WebsiteBuilder() {
  return (
    <>
<AllFeatures docname="Website Builder"/>
<Advantages docname="Website Builder"/>
<FAQ category="About Accxchange"/>
<Footer segment="Smarty Home"/>
    </>
  );
}

export default WebsiteBuilder;
