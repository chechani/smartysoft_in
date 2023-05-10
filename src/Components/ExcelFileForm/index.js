import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { Card, Grid, Typography } from "@mui/material";
import WhatsAppButton from "../WhatsAppButton";

function ExcelFileForm() {
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [company_name, setCompany_Name] = useState("");
    const [email, setEmail] = useState("");
    const [mobile_number, setMobile_Number] = useState("");
    const [city, setCity] = useState("");


    useEffect(() => {
        // This section is only needed once per page if manually copying
        if (typeof MauticSDKLoaded === 'undefined') {
            window.MauticSDKLoaded = true;
            const head = document.getElementsByTagName('head')[0];
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://connect.smartysoft.in/index.php/media/js/mautic-form.js?vbee880c0';
            script.onload = function () {
                window.MauticSDK.onLoad();
            };
            head.appendChild(script);
            window.MauticDomain = 'https://connect.smartysoft.in/index.php';
            window.MauticLang = {
                submittingMessage: 'Please wait...',
            };
        } else if (typeof window.MauticSDK !== 'undefined') {
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
                        <Typography sx={{ fontFamily: "lato", fontWeight: "600", fontSize: "35px" }}>Request to Share Your Excel File for Excel to Tally Integration Demonstration</Typography>
                        <Typography sx={{ fontFamily: "lato", fontSize: "18px", mt: 2 }}>We appreciate your interest in our Excel to Tally integration solution. To better showcase the capabilities of our solution, we would like to offer you a personalised demonstration using your own Excel file.
                            If you're willing to share your Excel file with us, our team of experts can show you how our solution can seamlessly import data from Excel into Tally ERP, saving you time and reducing errors in your accounting processes.</Typography>
                        <Typography sx={{ fontFamily: "lato", fontSize: "18px", mt: 2 }}>To start, please complete the form below to submit your Excel file. Our team will review it and contact you to schedule a demonstration at your convenience.</Typography>
                        <Typography sx={{ fontFamily: "lato", fontSize: "18px", mt: 2 }}>We understand that your Excel file may contain sensitive data, so we want to assure you that your file will be kept confidential and secure. Our team will only use your file to demonstrate our Excel-to-Tally integration solution.</Typography>
                        <Typography sx={{ fontFamily: "lato", fontSize: "18px", mt: 2 }}>Thank you again for considering our solution. We look forward to showing you how it can benefit your business.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 3, backgroundColor: "whitesmoke" }}>
                        <Box>
                            <div id="mauticform_wrapper_shareexcelfile" className="mauticform_wrapper">
                                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, fontFamily: "lato" }}>Add Your Excel File</Typography>
                                <form
                                    autoComplete="false"
                                    role="form"
                                    method="post"
                                    action="https://connect.smartysoft.in/form/submit?formId=6"
                                    id="mauticform_shareexcelfile"
                                    data-mautic-form="shareexcelfile"
                                    encType="multipart/form-data"
                                >
                                    <div className="mauticform-error" id="mauticform_shareexcelfile_error"></div>
                                    <div className="mauticform-message" id="mauticform_shareexcelfile_message"></div>
                                    <div className="mauticform-innerform">
                                        <div
                                            className="mauticform-page-wrapper mauticform-page-1"
                                            data-mautic-form-page="1"
                                        >
                                            <div
                                                id="mauticform_shareexcelfile_first_name"
                                                className="mauticform-row mauticform-text mauticform-field-1"
                                            >
                                                <input
                                                    type="text"
                                                    id="mauticform_input_shareexcelfile_first_name"
                                                    name="mauticform[first_name]"
                                                    value={first_name}
                                                    className="mauticform-input"
                                                    onChange={(e) => { setFirst_Name(e.target.value) }}
                                                    placeholder="First Name"
                                                />
                                            </div>

                                            <div
                                                id="mauticform_shareexcelfile_last_name"
                                                className="mauticform-row mauticform-text mauticform-field-2"
                                            >
                                                <input
                                                    type="text"
                                                    id="mauticform_input_shareexcelfile_last_name"
                                                    name="mauticform[last_name]"
                                                    value={last_name}
                                                    className="mauticform-input"
                                                    onChange={(e) => { setLast_Name(e.target.value) }}
                                                    placeholder="Last Name"
                                                />
                                            </div>

                                            <div
                                                id="mauticform_shareexcelfile_company_name"
                                                data-validate="company_name"
                                                data-validation-type="text"
                                                className="mauticform-row mauticform-text mauticform-field-3 mauticform-required">

                                                <input
                                                    id="mauticform_input_shareexcelfile_company_name"
                                                    name="mauticform[company_name]"
                                                    value={company_name}
                                                    className="mauticform-input"
                                                    onChange={(e) => { setCompany_Name(e.target.value) }}
                                                    type="text"
                                                    placeholder="Company Name" />
                                            </div>

                                            <div
                                                id="mauticform_shareexcelfile_email"
                                                className="mauticform-row mauticform-email mauticform-field-4">

                                                <input
                                                    id="mauticform_input_shareexcelfile_email"
                                                    name="mauticform[email]"
                                                    value={email}
                                                    className="mauticform-input"
                                                    type="email"
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div 
                                             id="mauticform_shareexcelfile_mobile_number"
                                             className="mauticform-row mauticform-text mauticform-field-5"
                                             >
                                                <input 
                                                id="mauticform_input_shareexcelfile_mobile_number" 
                                                name="mauticform[mobile_number]" 
                                                value={mobile_number} 
                                                className="mauticform-input"
                                                placeholder="Mobile Number"
                                                onChange={(e) => {setMobile_Number(e.target.value) }}
                                                type="text" />
                        
                                            </div>

                                            <div
                                                id="mauticform_shareexcelfile_city"
                                                className="mauticform-row mauticform-text mauticform-field-5">
                                                <input
                                                    id="mauticform_input_shareexcelfile_city"
                                                    name="mauticform[city]"
                                                    value={city}
                                                    className="mauticform-input"
                                                    type="text"
                                                    onChange={(e) => { setCity(e.target.value) }}
                                                    placeholder="City"
                                                />
                                            </div>

                                            <div
                                                id="mauticform_shareexcelfile_attach_file"
                                                className="mauticform-row mauticform-file mauticform-field-6">

                                                <input
                                                    id="mauticform_input_shareexcelfile_attach_file"
                                                    name="mauticform[attach_file]"
                                                    className="mauticform-input"
                                                    type="file"
                                                />
                                            </div>
                                            <div
                                                id="mauticform_shareexcelfile_submit"
                                                className="mauticform-row mauticform-button-wrapper mauticform-field-7">
                                                <button
                                                    type="submit"
                                                    name="mauticform[submit]"
                                                    id="mauticform_input_shareexcelfile_submit"
                                                    className="mauticform-button btn btn-default"
                                                    style={{ borderRadius: "10px", width: "100px", height: "40px", backgroundColor: "#1976d2", fontSize: "18px", color: "white" }}>
                                                    Submit</button>
                                            </div>
                                            <input type="hidden" name="mauticform[formId]" id="mauticform_shareexcelfile_id" value="6" />
                                            <input type="hidden" name="mauticform[return]" id="mauticform_shareexcelfile_return" value="" />
                                            <input type="hidden" name="mauticform[formName]" id="mauticform_shareexcelfile_name" value="shareexcelfile" />

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

export default ExcelFileForm;




