import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import './Registration.css';
import { Card, Grid, Typography } from "@mui/material";
import WhatsAppButton from "../WhatsAppButton";

function Registration() {
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [company_name, setCompany_Name] = useState("");
    const [mobile_number, setMobile_Number] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        /** This section is only needed once per page if manually copying **/
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
                'submittingMessage': 'Please wait...',
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
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: "600" }}>Request a Demo for Excel to Tally Software</Typography>

                        <Typography variant="h6" sx={{ mt: 3 }} >Our Excel to Tally integration offers a seamless way to import data from Excel into Tally ERP. With this integration, you can save time and improve accuracy by avoiding manual data entry,</Typography>
                        <Typography variant="h6" sx={{ mt: 2 }}> reducing errors and streamlining your accounting processes.
                            To receive the download link for our solution, please fill out the form below with your information, and we'll send you the link via email shortly. You will also receive updates on any new features and releases related to our integration.
                            Thank you for considering our Excel to Tally integration solution. We look forward to hearing how it can benefit your business</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 3, backgroundColor: "whitesmoke" }}>
                        <Box>
                            <div id="mauticform_wrapper_downloadingexceltotally" className="mauticform_wrapper">
                                <form
                                    autoComplete="false"
                                    role="form"
                                    method="post"
                                    action="https://connect.smartysoft.in/form/submit?formId=9"
                                    id="mauticform_downloadingexceltotally"
                                    data-mautic-form="downloadingexceltotally"
                                    encType="multipart/form-data"
                                >
                                    <div className="mauticform-error" id="mauticform_downloadingexceltotally_error"></div>
                                    <div className="mauticform-message" id="mauticform_downloadingexceltotally_message"></div>
                                    <div className="mauticform-innerform">
                                        <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                                            <div id="mauticform_downloadingexceltotally_first_name" className="mauticform-row mauticform-text mauticform-field-1">
                                                <input id="mauticform_input_downloadingexceltotally_first_name"
                                                    name="mauticform[first_name]"
                                                    value={first_name}
                                                    placeholder="First Name"
                                                    className="mauticform-input" type="text"
                                                    onChange={(e) => setFirst_Name(e.target.value)}
                                                />
                                                <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                            </div>

                                            <div id="mauticform_downloadingexceltotally_last_name" className="mauticform-row mauticform-text mauticform-field-2">
                                                <input id="mauticform_input_downloadingexceltotally_last_name" name="mauticform[last_name]"
                                                    value={last_name}
                                                    className="mauticform-input"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    onChange={(e) => setLast_Name(e.target.value)} />
                                                <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                            </div>

                                            <div
                                                id="mauticform_downloadingexceltotally_company_name"
                                                data-validate="company_name"
                                                data-validation-type="text"
                                                className="mauticform-row mauticform-text mauticform-field-3 mauticform-required"
                                            >
                                                <input
                                                    id="mauticform_input_downloadingexceltotally_company_name"
                                                    name="mauticform[company_name]"
                                                    value={company_name}
                                                    placeholder="Company Name"
                                                    onChange={(e) => setCompany_Name(e.target.value)}
                                                    className="mauticform-input"
                                                    type="text"
                                                />
                                            </div>

                                            <div
                                                id="mauticform_downloadingexceltotally_mobile_number"
                                                className="mauticform-row mauticform-number mauticform-field-4">
                                                <input id="mauticform_input_downloadingexceltotally_mobile_number"
                                                placeholder="Mobile Number"
                                                    name="mauticform[mobile_number]" 
                                                    value={mobile_number}
                                                    onChange={(e) => setMobile_Number(e.target.value)}
                                                    className="mauticform-input" 
                                                    type="text" />
                                            </div>



                                            <div
                                                id="mauticform_downloadingexceltotally_email"
                                                className="mauticform-row mauticform-email mauticform-field-4"
                                            >
                                                <input
                                                    id="mauticform_input_downloadingexceltotally_email"
                                                    name="mauticform[email]"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="mauticform-input"
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                                <span className="mauticform-errormsg" style={{ display: "none" }}></span>
                                            </div>

                                            <div
                                                id="mauticform_downloadingexceltotally_submit"
                                                className="mauticform-row mauticform-button-wrapper mauticform-field-5"
                                            >
                                                <button
                                                    type="submit"
                                                    name="mauticform[submit]"
                                                    id="mauticform_input_downloadingexceltotally_submit"
                                                    className="mauticform-button btn btn-default"
                                                    style={{ borderRadius: "10px", width: "100px", height: "40px", backgroundColor: "#1976d2", fontSize: "18px", color: "white" }}>
                                                    Submit</button>
                                            </div>

                                            <input
                                                type="hidden"
                                                name="mauticform[formId]"
                                                id="mauticform_downloadingexceltotally_id"
                                                value="9"
                                            />
                                            <input
                                                type="hidden"
                                                name="mauticform[return]"
                                                id="mauticform_downloadingexceltotally_return"
                                                value=""
                                            />
                                            <input
                                                type="hidden"
                                                name="mauticform[formName]"
                                                id="mauticform_downloadingexceltotally_name"
                                                value="downloadingexceltotally"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Box>
                    </Card>
                </Grid>
            </Grid>

        </Box>

    );
}

export default Registration;




