import React from "react";
import "./faq.css";

const FAQs = () => {
    return(
        <div className="faqs">
            <h2>FAQs</h2>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How do I connect the Cyberstick? 
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Connect the Cyberstick to a power source (using the small port at the side) and 
                            then attach it to the HDMI port of your TV or Monitor. A blue comes on indicating
                            that the Cyberstick is powered up. If your TV or Monitor is hung on a wall, 
                            there is an extender cable that comes with the package, attach it to the 
                            Cyberstick on plug it into your device.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How do I use the Cyberstick? 
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        With the remote control that comes with the package, navigate to the settings 
                        section, connect to a WiFi service and you can start streaming contents online.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Can I download other applications that do not come with the Cyberstick?
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Other applications can be downloaded to the Cyberstick, either from the Google
                        playstore or from the browser.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What is the storage capacity of the Cyberstick?
                    </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        The Cyberstick comes with an in-built memory space of 16GB, with a space for 
                        a memory card to be used also (the slot just beside the power port).The 
                        Cyberstick comes with an in-built memory space of 16GB, with a space for a 
                        memory card to be used also (the slot just beside the power port).
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Can I connect other devices to it? 
                    </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        The Cyberstick has a Bluetooth setup with which you can connect your Bluetooth 
                        speaker and any other device.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        What else can the Cyberstick be used for?
                    </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        The Cyberstick has a USB port at the bottom of the device. You can connect a 
                        hard drive to it and be able to see the contents on your TV or Monitor.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs;