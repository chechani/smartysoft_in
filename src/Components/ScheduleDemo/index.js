import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import './ScheduleDemo.css';

import { Button, Card, Grid, Typography } from "@mui/material";
import WhatsAppButton from "../WhatsAppButton";

function SchaduleDemo() {
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [company_name, setCompany_Name] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [product, setProduct] = useState("");
    const [mobile_number, setMobile_Number]= useState("");

    useEffect(() => {
        if (typeof MauticSDKLoaded == 'undefined') {
            var MauticSDKLoaded = true;
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://connect.smartysoft.in/index.php/media/js/mautic-form.js?vbee880c0';
            script.onload = function () {
                window.MauticSDK.onLoad();
            };
            head.appendChild(script);
            var MauticDomain = 'https://connect.smartysoft.in/index.php';
            var MauticLang = {
                'submittingMessage': "Please wait..."
            };
        } else if (typeof MauticSDK != 'undefined') {
            window.MauticSDK.onLoad();
        }
    }, []);

    return (
        <Box sx={{
            backgroundColor: "white",
            maxWidth: "100%",
            width: "auto",
            mt: 12,
            ml: 5,
            mr: 5,
            p: 3,
            mb: 8,
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
        }}>
        <WhatsAppButton/>
            <Grid container spacing={5} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h4" sx={{ fontFamily: "lato", fontWeight: "600" }}>Request a Demo for Excel to Tally Software</Typography>
                        <Typography variant="h6" sx={{ fontFamily: "lato", mt: 3 }} >We are excited to show you how our software can simplify your data import process, saving you time and reducing the risk of errors. Our software allows you to transfer data directly from Excel to Tally, eliminating the need for manual data entry and streamlining the data transfer process.</Typography>
                        <Typography variant="h6" sx={{ fontFamily: "lato", mt: 2 }}>We will be in touch with you shortly to schedule a demo at your convenience. During the demo, we will walk you through the features of our software, answer any questions you may have</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} mb>
                    <Card sx={{ p: 3, backgroundColor: "whitesmoke" }}>
                        <div id="mauticform_wrapper_demorequest" className="mauticform_wrapper">
                            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 5, fontFamily: "lato" }}>Fill below Form to Schedule a Personalised Demo</Typography>


                            <form autocomplete="false" role="form" method="post" action="https://connect.smartysoft.in/form/submit?formId=8" id="mauticform_demorequestexceltotally" data-mautic-form="demorequestexceltotally" enctype="multipart/form-data">
                                <div className="mauticform-error" id="mauticform_demorequestexceltotally_error"></div>
                                <div className="mauticform-message" id="mauticform_demorequestexceltotally_message"></div>
                                <div className="mauticform-innerform">

                                    <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">

                                        <div id="mauticform_demorequestexceltotally_first_name" className="mauticform-row mauticform-text mauticform-field-1">
                                            <input id="mauticform_input_demorequestexceltotally_first_name" name="mauticform[first_name]"
                                                placeholder="First Name"
                                                onChange={(e) => { setFirst_Name(e.target.value) }}
                                                value={first_name} className="mauticform-input" type="text" />
                                            <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                        </div>

                                        <div id="mauticform_demorequestexceltotally_last_name" className="mauticform-row mauticform-text mauticform-field-2">
                                            <input id="mauticform_input_demorequestexceltotally_last_name" name="mauticform[last_name]"
                                                onChange={(e) => { setLast_Name(e.target.value) }}
                                                placeholder="Last Name"
                                                value={last_name} className="mauticform-input" type="text" />
                                            <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                        </div>

                                        <div id="mauticform_demorequestexceltotally_company_name" data-validate="company_name" data-validation-type="text" className="mauticform-row mauticform-text mauticform-field-3 mauticform-required">
                                            <input id="mauticform_input_demorequestexceltotally_company_name" name="mauticform[company_name]"
                                                onChange={(e) => { setCompany_Name(e.target.value) }}
                                                placeholder="Company Name"
                                                value={company_name} className="mauticform-input" type="text" />
                                            <span className="mauticform-errormsg" style={{ display: 'none' }}>This is required.</span>
                                        </div>
                                    </div>
                                </div>
                                <div id="mauticform_demorequestexceltotally_email" className="mauticform-row mauticform-email mauticform-field-4">
                                    <input id="mauticform_input_demorequestexceltotally_email" name="mauticform[email]"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        placeholder="Email"
                                        value={email} className="mauticform-input" type="email" />
                                    <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                </div>
                                <div 
                                id="mauticform_demorequestexceltotally_mobile_number"
                                className="mauticform-row mauticform-text mauticform-field-5"
                                >
                                    <input 
                                    id="mauticform_input_demorequestexceltotally_mobile_number" 
                                    name="mauticform[mobile_number]"
                                    value={mobile_number}
                                    placeholder="Mobile Number"
                                    onChange={(e) => { setMobile_Number(e.target.value) }} 
                                    className="mauticform-input" 
                                    type="text" />
                                </div>
                                <div id="mauticform_demorequestexceltotally_date_preference" className="mauticform-row mauticform-date mauticform-field-5">
                                    <input id="mauticform_input_demorequestexceltotally_date_preference" name="mauticform[date_preference]"
                                        onChange={(e) => { setDate(e.target.value) }}
                                        placeholder="Date"
                                        value={date} className="mauticform-input" type="date" />
                                    <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                </div>

                                <input id="mauticform_input_demorequestexceltotally_product" name="mauticform[product]" value="Excel to Tally" className="mauticform-hidden" type="hidden" />
                                <div id="mauticform_demorequestexceltotally_submit" className="mauticform-row mauticform-button-wrapper mauticform-field-7">
                                    <button
                                        type="submit"
                                        name="mauticform[submit]"
                                        id="mauticform_input_demorequestexceltotally_submit"
                                        className="mauticform-button btn btn-default"
                                        style={{ borderRadius: "10px", width: "100px", height: "40px", backgroundColor: "#1976d2", fontSize: "18px", color: "white" }}>
                                        Submit</button>
                                </div>
                                <input type="hidden" name="mauticform[formId]" id="mauticform_demorequestexceltotally_id" value="8" />
                                <input type="hidden" name="mauticform[return]" id="mauticform_demorequestexceltotally_return" value="" />
                                <input type="hidden" name="mauticform[formName]" id="mauticform_demorequestexceltotally_name" value="demorequestexceltotally" />
                            </form>
                        </div>
                    </Card>
                </Grid>
            </Grid>

        </Box>

    );
}


export default SchaduleDemo;