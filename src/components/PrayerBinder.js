import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import "../styles/PrayerBinder.css";

const PrayerBinder = () => {

  return (
    <Wrapper className='prayer-binder'>
        <Header className='p-2 mt-4 mb-3'>Prayer Binder & Support</Header>

        <Lead className="jumbotron mb-5">
            <p className="p-4">As iron sharpens iron, so a friend sharpens a friend. ~ Proverbs 27:17, NLT </p>
        </Lead>

        <h2 className='text-center mb-3'>Common Questions / Issues</h2>
        <Accordion className='accordion-flush p-4'>
            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="0">
                <Accordion.Header>GETTING HELP & SUPPORT</Accordion.Header>
                <Accordion.Body>
                <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>SOFTWARE ISSUES</th>
                                <th>HARDWARE ISSUES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DEPARTMENT</td>
                                <td>Prayer Centre Tech Admin Josh Hozjan</td>
                                <td>Crossroads IT Department</td>
                            </tr>
                            <tr>
                                <td>SLACK</td>
                                <td>#prayer-partners</td>
                                <td>#itsupport</td>
                            </tr>
                            <tr>
                                <td>ONLINE HELP</td>
                                <td>jhozjan@crossroads.ca</td>
                                <td>IT Help Desk</td>
                            </tr>
                        </tbody>
                </table>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="1">
                <Accordion.Header>WHAT HAPPENED TO CCA 2.0?</Accordion.Header>
                <Accordion.Body>
                    <p>Much was promised, little was delivered. So, we had the brain trust whip us up a new one. Neat eh?</p>
                </Accordion.Body>
            </Accordion.Item>

            <h3 className='text-center mt-5 mb-3'>Prayer Binder Topics</h3>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="2">
                <Accordion.Header>1A - INTRODUCTION</Accordion.Header>
                <Accordion.Body>
                    <p>Thank you so much for becoming a part of our ministry team. Please let us know that you have received this binder,
                        so that we can set up an appointment to go over the information; unless you have already done this step. 
                    </p>
                    
                    <p>
                    Enclosed, you will find our Resource Binder and ministry forms <Redish>(to be filled out while on the prayer lines)</Redish>.  
                    Please note below, a brief description of the forms which should be scanned and emailed to <a href="mailto:nmcstats@crossroads.ca" style={{color: "#178B96"}}>nmcstats@crossroads.ca</a>
                    after your shift. This enables us to follow-up with our callers; providing necessary resources and assistance.
                    </p>

                    <p>
                        <strong>Binder:</strong> This is information that you can use while taking calls. Included in this binder are resource suggestions,
                        brochures to offer to our callers, model prayers <Redish>(you may find these helpful as prayer prompters)</Redish>, as well as important guidelines to consider when leading someone to the Lord, etc.
                    </p>

                    <p>
                        <strong>Prayer Form:</strong> This is the form that you will use while speaking to callers. Each box represents a prayer call.
                         Please checkmark as many of the categories that apply to the caller’s prayer requests. You may pray for several people with different needs.
                         Please note that at the bottom of each prayer call box you can write the number of <Blueish>‘People Prayed For’</Blueish>. On the opposite side, you will see 
                         <Blueish>“Resources/Referrals Offered”</Blueish>.  This would relate to a follow-up for <Blueish>Salvation/Rededication;</Blueish> or, if you offered a resource to the caller such as our website,
                          a book suggestion, etc.  <Redish>Please note that we offer all resources as suggestions only</Redish>.
                    </p>

                    <p>
                        <strong>Ministry Response Form:</strong> This is for ministry follow-up and will also be returned to our office. Please write the caller’s complete contact details
                         in the <Blueish><strong>Caller Information section</strong></Blueish>.  Repeat this information back to the caller carefully.  <Blueish>Please be very cautious if asking for information from a minor.  
                        They must have permission from a parent/adult caregiver. If unsure, take down the information, but please make sure that you note that the caller is a minor on the form.</Blueish>
                    </p>

                    <p>
                        Below the Caller information section (starting with ‘Salvation’) are the categories that we designate for ministry follow-up.  Please checkmark the correct category.
                    </p>

                    <p>
                         Please also ask the caller if they need a New Testament or booklets/brochures for encouragement.  Checkmark these clearly for the follow-up ministry team.
                    </p>

                    <p>
                        <strong>Salvation/Rededication –</strong> Individuals who give or rededicate their lives to the Lord will receive an encouraging phone call from our <Blueish>Ministry Follow-up Representatives</Blueish>
                         generally within a week.  Another call will be made in 6-8 weeks after the initial call to see how they are progressing.  We also encourage the caller to provide their complete contact
                        information, so that we can send specific letters/emails with brochures or resources; according to their specific needs.  We call the letters the Salvation Series.
                    </p>

                    <p>
                        <strong>Pastoral Callbacks –</strong> There are many callers who will want to speak to the pastoral care team.  As we are a 24/7/365 prayer line, our follow-up pastors cannot possibly handle the volume of callers who require counselling or who may just want to talk.  We can offer some options to these callers:
                    </p>

                    <ul>
                        <li><Blueish>To contact their <Redish>local church </Redish> for counselling/pastoral care</Blueish></li>
                        <li><Blueish>Offer <Redish>counselling connections/other resources</Redish> on the Resources page in section 3 of this binder</Blueish></li>
                        <li><Blueish>Encourage them to connect with our <Redish>Walk of Faith email mentoring program</Redish> for spiritual care.</Blueish></li>
                        <li><Blueish>You may also remind the caller that they may call our prayer lines once a day, if needed, as
                             <Redish>prayer partners are always available to pray for them.</Redish></Blueish></li>
                    </ul>

                    <p>
                        <strong>Suicide Form:</strong> This form is to be used for <Redish><strong>emergencies only</strong></Redish>. It is utilized as a report for the police.
                        These types of calls are rare as many callers may feel suicidal <Redish>(fighting suicidal thoughts)</Redish>; yet are not truly in the process of having a concrete plan to take their lives.  The four key questions on the form will help you make a clearer assessment.  Most of these callers are often individuals who are distressed and seeking encouragement from a compassionate person.  A prayer that invites them to an encounter with our Saviour who cares for them very much, is powerful.
                    </p>

                    <p>
                        Once you have submitted these forms to our office (<a href="mailto:nmcstats@crossroads.ca" style={{color: "#178B96"}}>nmcstats@crossroads.ca</a>) and have been on the prayer lines for a month or so,
                        we ask you to shred any forms you have used, for security purposes.
                    </p>

                    <p>
                        <strong>Volunteer Shifts:</strong> We will schedule you on a day and time of your preference, to ensure that our prayer lines are covered. If for any reason, you cannot fulfil your scheduled shift, then please let us know as soon as possible.
                    </p>

                    <p>
                        At any time, you may contact us for assistance or with questions. We would love to speak with you.  Also, after office hours, we have a Team/Shift Leader that is available to support you.
                        <Redish><strong>Please call 905-332-6400; extension 2373</strong></Redish>. This phone is checked regularly for voicemails. You may also reach the Team/Shift Leader on the Thrio Contact Centre Company Directory.   All contact information can be found in your binder in Section 2.
                    </p>

                    <p>
                    May God bless you as He continues to lead and guide you into the work of the ministry which He has prepared for you.
                    </p>

                    <div className='mt-2'>
                        <p><strong>Gloria Willoughby</strong></p>

                        <p className='m-0'> <Redish>Manager</Redish></p>
                        <p className='m-0'><Blueish>Crossroads Prayer Centre</Blueish></p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="3">
                <Accordion.Header>1B - HEADSET BASIC SETUP INSTRUCTIONS</Accordion.Header>
                <Accordion.Body>
                    <ol>
                        <li>
                            <h6>Your headset should have two parts:</h6>
                            <ul>
                                <li>One part is the headset itself that goes on your head and over your ears.  There is a wire that goes from it the headset.
                                     This thin black wire that has a small circular metal end (called an AUX output).
                                </li>
                                <li> The second part is a small, flat oval controller that has 4 buttons on it.
                                    This also has a wire coming from it that ends in a rectangular piece (called a USB input).
                                </li>
                            </ul>
                        </li>

                        <li>
                        <h6>Connect these 2 parts together before they connect into your computer. </h6>
                            <ul>
                                <li>The small, oval-shaped 4 button controller (that has a wire coming out of) has a small hole at the opposite end.
                                    This is the hole that the wire from your head piece plugs into.  Make sure this plug is snug, but please be gentle, as it is only plastic and can break.
                                </li>
                            </ul>
                        </li>

                        <li>
                        <h6>After your headset’s two parts are connected:</h6>
                            <ul>
                                <li>
                                    You can plug the rectangular end (the USB input) into one of the USB slots on your computer.
                                </li>
                                <li>
                                These are usually found in the front or back of your Desktop computer, or along the sides of your laptop.  
                                <Redish>(Remember to be gentle with the wires as newer technology uses less robust materials!)</Redish>
                                </li>
                            </ul>
                        </li>

                        <li>
                        <h6>When your headset is connected to your computer:</h6>
                            <ul>
                                <li>
                                    leave the small 4 button controller on your desk so you access it easily.
                                </li>
                                <li>
                                    When your headset is connected properly, the mute button (this is the button with a picture of a microphone with a line through it)
                                     on the controller will glow either <Blueish>BLUE</Blueish> or <Redish>ORANGE/RED</Redish>.
                                     <ul>
                                        <li>If it is <Blueish>BLUE;</Blueish> it means your headset is active.</li>
                                        <li>IF it is <Redish>RED</Redish> it means your microphone is muted and callers will not be able to hear you (this is great to use, if you need to cough/sneeze!)</li>
                                     </ul>
                                </li>
                                <li>
                                    When you log into the Prayer Centre website <a href="https://thriocc.tc3.telus.com/lioncc/" style={{color: "#178B96"}}> (https://thriocc.tc3.telus.com/lioncc/)</a> on the Google Chrome web browser,
                                    the website will ask for permission to use your headset and microphone.
                                </li>
                                <li>
                                    You MUST select "Allow",
                                    <ul>
                                        <li>If you do not do this step, the headset will not work.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ol>
                        <h5><Redish>Troubleshooting - Should your headset not work; these are issues you can check:</Redish></h5>
                    <ol>
                        <li>
                            <h6>Is your computer’s sound muted?</h6>
                            <ul>
                                <li>
                                    At the bottom right of your computer taskbar, usually there is a <Blueish>small speaker symbol</Blueish>.  Is that on an acceptable level or is it muted? 
                                    (the speaker symbol may have an x beside it, rather than the sound waves, showing the sound is not working  )
                                </li>
                                <li>
                                    Your headset’s 4 button controller has a <Redish>+ (plus) and – (minus)</Redish> symbol that allows you to put the volume
                                    <Blueish>UP or DOWN</Blueish> without having to touch the computer.
                                    <ul>
                                        <li>
                                            Try selecting the <Redish> + (plus) or – (minus) </Redish> button until your computer shows that you are at MAX volume. See that helps you to hear properly.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h6>Is your browser (ie. Google Chrome) set up to use your headset?</h6>
                            <ul>
                                <li>
                                    When you are logged into the <Redish>Prayer Centre web-page,</Redish> look closely to the top of the page where it has buttons and symbols
                                    that look like an arrow pointing to the right and left (click to go back button/click to go forward button),
                                    as well as the reload page button (an arrow in a circle) and the webpage address bar itself<a href="https://thriocc.tc3.telus.com/lioncc/" style={{color: "#178B96"}} >(https://thriocc.tc3.telus.com/lioncc/)</a>

                                    <ul>
                                        <li>
                                            Between the <Blueish>reload page button</Blueish> and the <Blueish>webpage address bar</Blueish> you should see a little symbol of a padlock .
                                            Please click on it,
                                        </li>
                                        <li>
                                            You will see a drop-down menu that says "Connection is Secure"
                                        </li>
                                        <li>
                                            on that same menu you will see the following:
                                        </li>
                                        <li>
                                            Microphone, Notifications, Sound, extra/
                                        </li>
                                        <li>
                                            The options you want are <Blueish>Microphone</Blueish> and <Blueish>Sound</Blueish>.
                                            <ul>
                                                <li>
                                                    Beside the selections you want, will be a small selection tab that either says 
                                                    <Redish>“ALLOW / ASK / BLOCK / (automatic)"</Redish>
                                                </li>
                                                <li>
                                                    for the Microphone selection, make sure it designates: <Redish>ALLOW</Redish>
                                                </li>
                                                <li>
                                                    for the Sound selection, choose: <Redish>“Automatic".</Redish>
                                                </li>
                                                <li>These settings should be default settings, but occasionally when someone logs in for the first time and the 
                                                    website requests specific permission, people tend to press NO.  This is the reason that the Prayer Line Website may not be allowed to use your microphone.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h6>When the Caller cannot hear my voice/I cannot hear the Caller (or both)</h6>
                            <ul>
                                <li>Look to the bottom right of the <Redish>Taskbar</Redish> and right click the <Redish>small speaker symbol</Redish>
                                    <ul>
                                        <li>
                                            Select <Blueish><strong>OPEN SOUND SETTINGS.</strong></Blueish>  It will open a menu that says SOUND
                                            <ul>
                                                <li>
                                                    Below SOUND it will say <Blueish>INPUT</Blueish> and <Blueish>OUTPUT</Blueish> (both these will have similar styled options that can be selected). 
                                                </li>
                                                <li>
                                                    Check that your <u>headset name</u> is showing in the device selection for <u>both</u> <Blueish>INPUT</Blueish> and <Blueish>OUTPUT</Blueish>.
                                                </li>
                                                <li>
                                                    The headsets name will show as <Redish>“Mpow"</Redish> from the lists given.
                                                </li>
                                                <li>Once you ensure that the headset name <Redish>Mpow</Redish> is selected, your headset should be working!</li>
                                                <li>Read News & Updates (opens in a new tab)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="4">
                <Accordion.Header>2 - CROSSROADS CONTACT INFORMATION</Accordion.Header>
                <Accordion.Body>
                    <p>
                    <strong>Prayer Partner Info:</strong> <Blueish>1-855-856-6868</Blueish> (call to become a Prayer Partner)
                    </p>

                    <p>
                    <strong>Prayer Line:</strong> <Redish>1-866-273-4444</Redish>
                    </p>

                    <p>
                    <strong>Partner Ministry:</strong> <Blueish>1-800-265-3100</Blueish>
                    </p>

                    <ul>
                        <li>
                            <Redish>ONLY</Redish> for partner inquiries: donations, monthly offer, address change, etc.</li>
                        <li>
                            <Redish>DO NOT</Redish> give this number out for general information: someone placing a complaint or wanting to talk to one of the hosts, etc. use business number
                        </li>
                    </ul>

                    <p>
                        <strong>Business Number:</strong> <Redish>905-335-7100</Redish>
                    </p>
                    <ul>
                        <li>
                        Crossroads switchboard
                        </li>
                        <li>
                        There is no 1-800 # to reach the office staff
                        </li>
                    </ul>

                    <h5>
                        <Blueish>Other Inquiries: Submit the request on the Ministry Response Form.</Blueish>
                    </h5>
                    <ul>
                        <li>
                        Include the caller’s name, address, email address and telephone number.  
                        Give this to the Prayer Centre Administrative team with your regular follow-up paperwork.
                        </li>
                    </ul>

                    <p>
                    <strong>Crossroads Website:</strong> <a href="https://www.crossroads.ca" style={{color: "#EC3310"}}>www.crossroads.ca</a>
                    </p>

                    <p>
                        <strong> Crossroads Resources:</strong> <a href="https://www.100huntley.com" style={{color: "#178B96"}}>www.100huntley.com</a>; 
                        <a href="https://www.intothecastle.com" style={{color: "#178B96"}}>www.intothecastle.com</a>;
                        <a href="https://www.yestv.com" style={{color: "#178B96"}}>www.yestv.com</a>
                    </p>

                    <p>
                        <strong>Crossroads Email Address for PRAYER Requests:</strong> <a href="mailto:prayer@crossroads.ca" style={{color: "#EC3310"}}>prayer@crossroads.ca</a>
                    </p>

                    <p>
                        <strong>Mailing Address:</strong>
                    </p>

                        <p className='p-2'>CANADA:</p>
                        <p className='m-0'>Crossroads Christian Communications Inc.</p>
                        <p className='m-0'>PO Box 5100</p>
                        <p className='m-0'>Burlington, ON</p>
                        <p className='m-0'>L7R 4M2</p>
                    <div className='text-center'>
                        <p><strong>Crossroads Prayer Centre: <Redish>905-332-6400</Redish> (auto attendant);</strong></p>
                        <p><strong><Blueish>Gloria Willoughby Ext. 2374</Blueish>  |  <Blueish>Volunteer Ministry Prayer Representatives Ext. 3237</Blueish>  |  <Blueish>Team Leader Ext. 2373</Blueish></strong></p>
                        <p><strong><Redish>Toll Free: 855-856-6868</Redish> | <Redish>Fax: 905-332-6655</Redish></strong></p>
                        <p><strong><Blueish>Please send your statistics to: <a href="mailto:nmcstates@crossroads.ca" style={{color: "#178B96"}}>nmcstates@crossroads.ca</a></Blueish></strong></p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="5">
                <Accordion.Header>3A - SUICIDE PREVENTION / CRISIS RESOURCES</Accordion.Header>
                <Accordion.Body style={{padding: 0}}>
                    <div className="text-center p-3">
                        <h6><Redish><strong>911 - POINTS TO REMEMBER</strong></Redish></h6>
                        <ul style={{listStylePosition: "inside", margin: "auto", maxWidth: "60%"}}>
                            <li>We ask the caller to call <strong>911;</strong> or if they have called <strong>911</strong> </li>
                            <li>We are not a sucide line; we are a prayer line</li>
                            <li>Call <strong>911</strong> if injured and <Redish>he/she</Redish> cannot call</li>
                            <li>Call <strong>911</strong> if caller has caused harm to others and is unable to call</li>
                        </ul>

                        <h6 className="mt-2"><Redish><strong>CRISIS SERVICES CANADA - 24/7 HELP</strong></Redish></h6>
                        <p>Call: 1-833-456 | Text: 45645</p>

                        <h6><Redish><strong>CANADIAN ASSOCIATION FOR SUICIDE PREVENTION</strong></Redish></h6>
                        <p>
                            (Provides link to Crisis Centres across Canada)<br/>
                            Internet: <a href="https://www.suicideprevention.ca" style={{color: "#178B96"}}>www.suicideprevention.ca</a>
                        </p>
                        
                        <h6><Redish><strong>SUICIDE HOTLINES</strong></Redish></h6>
                        <p>(Directory of Services)</p>
                        

                        <h6><Redish><strong>USA - INTERNET</strong></Redish></h6>
                        <p>
                            <a href="https://www.suicidehotlines.com" style={{color: "#178B96"}}>www.suicidehotlines.com</a>
                        </p>

                        <h6><Redish><strong>CANADA/USA</strong></Redish></h6>
                        <p>
                            1-800-273-TALK (8255)<br/>
                            Or call 211
                        </p>
                        
                        <p>
                            USA - <a href="https://www.211.org" style={{color: "#178B96"}}>www.211.org</a> 
                        </p>

                        <p>
                            CANADA - <a href="https://www.211.ca" style={{color: "#178B96"}}>www.211.ca</a> 
                        </p>

                        <p style={{textAlign: "left"}}>
                            <strong>CRISIS CALLS</strong> – The resources in the CRISIS CALLS section of the table below, are for callers in <Redish>CRISIS</Redish> and contain specific instructions to assist you.  Follow the instructions carefully.  Before you begin your shift, you must know how to contact your shift leader/ team support.  
                        </p>
                    </div>
                  

                    <ThreeTable>
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    CRISIS CALLS
                                </th>
                            </tr>
                            
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>SUICIDAL CALLERS</strong>
                                </td>

                                <td>
                                    <p>
                                        *Send suicide reports immediately to: <a href="mailto:nmcstats@crossroads.ca" style={{color: "#178B96"}}>nmcstats@crossroads.ca</a> <br/>
                                        and to Jackie Crawford - <a href="mailto:njcrawford@crossroads.ca" style={{color: "#178B96"}}>jcrawford@crossroads.ca</a>;  <br/>
                                        and Pastor Marc Rudy - <a href="mailto:mrudy@crossroads.ca" style={{color: "#178B96"}}>mrudy@crossroads.ca</a>;<br/>
                                        and Sharon Langendoen-Arndt - <a href="mailto:sarndt@crossroads.ca" style={{color: "#178B96"}}>msarndt@crossroads.ca</a> <br/>
                                        <Redish>*Send to all 4 addresses please, to ensure it will be cared for!</Redish>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <strong>SUICIDAL CALLERS </strong><br/>
                                        Dealing with a suicidal caller can be stressful. 
                                        <Redish>We need to remind them that we are not a suicide hotline, but a prayer line.  We need to ask them if they need to contact 911 from the onset. </Redish>
                                        Please contact the shift leader if you feel support is needed quickly for yourself/for the caller.   
                                    </p>

                                    <p>
                                        <Redish>Reminders:</Redish> <br/>
                                        <Blueish>
                                            · Collect as much information as possible, and do not make it obvious that you are completing a form. <br/>
                                            · Ask the caller for his/her phone number.  If you take the number from the screen note it on the Suicidal Report form.  The caller should not know that you are able to see his/her phone number.  <br/>
                                            <strong>JESUS is your WISDOM and STRENGTH. </strong>
                                        </Blueish>
                                    </p>	
                                </td>

                                <td>
                                    <ol>
                                        <li><Redish><strong>ASSESS</strong></Redish> – <Blueish>Has the caller called 911?</Blueish> Complete the <strong>Suicidal Report</strong> (pink sheet) to assess if caller is suicidal or experiencing suicidal ideation (fighting thoughts) or to assess if caller is at risk e.g. cutting, has weapon, pills, previous attempts etc.  A helpful question is: “Is there anything around you that could cause you harm?”</li>
                                        <li><Redish><strong>CALL 911 - if harm has been done. </strong></Redish> Take as much information as you can within reason and call 911 if serious harm to self or others has been committed. <Blueish>*Contact Your Shift Leader via THRIO/TEXT (see below)</Blueish></li>
                                        <li><Redish><strong>HIGH CONCERNS – see SUICIDE HOTLINE* – </strong></Redish>If you feel caller needs support as soon as possible, <Blueish>please contact Shift Leader <strong>(M – F, 2-10PM)</strong></Blueish> for assistance at <Blueish><strong>905-332-6400 x2373.</strong></Blueish></li>
                                        <li>You may also contact online staff on Telus Call Centre (THRIO) <Redish><strong>Company Directory: Go to QUEUES; type in PLine EN</strong></Redish> in the search box or use the “down” arrow/tab to locate this queue. You will see that specific message board; type your note at the bottom to all staff and press the “send” button, which looks like this: <Redish>`{'>'}`!</Redish><br/>
                                         <Blueish>(a tiny checkmark will show it was read by staff)</Blueish></li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <strong>SUICIDE PREVENTION HOTLINE USA</strong><br/>
                                        <Blueish>*Also for Veterans</Blueish>
                                    </p>
                                </td>
                                <td>
                                    <Redish>*1-800 SUICIDE (784-2433)</Redish> or <Redish>1-800-273-TALK (8255)</Redish> or 
                                    dial <Redish>211</Redish> Internet: <Blueish> <a href="https://www.211.ca" style={{color: "#178B96"}}>www.211.ca</a>  or <a href="https://www.suicideprevention.ca" style={{color: "#178B96"}}>www.suicideprevention.ca</a></Blueish>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <strong> SUICIDE PREVENTION HOTLINE CANADA</strong><br/>
                                        <Blueish>*Veterans in distress</Blueish>
                                    </p>
                                </td>
                                <td>
                                    <Redish>*1-800-273-TALK (8255)</Redish> or Crisis Services Canada: <Redish>1-833-456-4566</Redish>
                                    TEXT: <Redish>45645</Redish> or dial <Redish>211</Redish> | Internet: <a href="https://www.211.ca" style={{color: "#178B96"}}>www.211.ca</a>
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th colSpan="2">
                                OTHER CRISIS INFORMATION
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>
                                    211 GOVERNMENT 24/7 SERVICE
                                    </strong>
                                </td>

                                <td>
                                    211 provides information to deal with life's challenges such as abuse, disabilities, 
                                    mental health, food, homelessness, health care, income support, etc.
                                    Dial <Redish>211 (CANADA or USA)</Redish>or <a href="https://www.211.ca" style={{color: "#178B96"}}>www.211.ca</a> (CANADA); <a href="https://www.211.org" style={{color: "#178B96"}}>www.211.org</a> (USA)
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                    ABORIGINAL/INDIGENOUS COMMUNITY HOPE FOR WELLNESS HELP LINE
                                    </strong>
                                </td>

                                <td>
                                    <Redish>1-855-242-3310 </Redish>– Specifically for Cree, Ojibway, Inuktitut, English and French Peoples of Indigenous Communities
                                    <Blueish>*featured on 100 Huntley Street program on First People’s Voices segment</Blueish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                    ASSAULTED WOMEN’S HELPLINE
                                    </strong>
                                </td>

                                <td>
                                    CANADA <Redish>1-866-863-0511</Redish> | TEXT:  <Redish>#SAFE OR #7233</Redish> <br/>
                                    Internet: <a href="https://www.awhl.org" style={{color: "#178B96"}}>www.awhl.org</a>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <strong>
                                    CHILDHELP NAITONAL CHILD ABUSE 24/7 HOTLINE (MULTI-LINGUAL)
                                    </strong>
                                </td>

                                <td>
                                    <Redish>1-800-422-4453</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                    DOMESTIC VIOLENCE CANADA
                                    </strong>
                                </td>

                                <td>
                                    <Redish>211</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                    DOMESTIC VIOLENCE USA
                                    </strong>
                                </td>

                                <td>
                                    <Redish>211</Redish> or <Redish>1-800-799-7233</Redish> | Internet: <a href="https://www.thehotline.org" style={{color: "#178B96"}}>www.thehotline.org</a>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                        <strong>SALVATION ARMY HOPE HOTLINE (Canada)</strong> 
                                        <Blueish>Caller may request resources for their area  e.g. homelessness, addictions	</Blueish>
                                </td>

                                <td>
                                    <Blueish>Mon – Fri: 9am-4pm:</Blueish> <Redish>1-855-294-HOPE (4673)</Redish> - providing emotional and spiritual 
                                    support during Covid-19 <Blueish>(Leave a message) *Not to be used for suicidal prevention</Blueish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SALVATION ARMY HOPE HOTLINE (USA)</strong> 
                                    <Blueish>Caller may request resources for their area  e.g. homelessness, addictions	</Blueish>
                                </td>

                                <td>
                                    <Redish>1-844-458-HOPE (4673)</Redish> – providing emotional and spiritual support during Covid-19 
                                    <Blueish>(9am-9pm EDT; 7 days a week; leave message); </Blueish>
                                    resource assistance <Redish>*Not to be used for suicidal prevention</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SEX/HUMAN TRAFFICKING HELP HOTLINE CANADA</strong> 
                                </td>
                                <td>
                                    <Redish>1-833-900-1010</Redish> - 24/7 Confidential Help 
                                    Internet: <a href="https://www.canadianhumantraffickinghotline.ca/contact/" style={{color: "#178B96"}}>www.canadianhumantraffickinghotline.ca/contact/</a>
                                    <Blueish>CHAT function on website</Blueish>
                                    <Redish>Also report tips about potential trafficking</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SEX/HUMAN TRAFFICKING HELP HOTLINE USA</strong> 
                                </td>
                                <td>
                               
                                    <Redish>1-800-373-7888 </Redish> | Text: <Redish>233733</Redish>
                                    Internet: <a href="https://www.canadianhumantraffickinghotline.ca/contact/" style={{color: "#178B96"}}>www.canadianhumantraffickinghotline.ca/contact/</a>
                                    <Blueish>CHAT function on website</Blueish>
                                    <Redish>Also report tips about potential trafficking</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SENIOR’S SAFETY LINE CANADA</strong> <Blueish>24/7; OVER 200 LANGUAGES</Blueish>
                                </td>
                                <td>
                                    CANADA <Redish>1-866-299-1011</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SHELTERS/HOMELESSNESS/ADDITIONS HELP IN USA OR CANADA</strong>
                                </td>

                                <td>
                                    SALVATION ARMY - Toronto area: <Redish>416-425-2111 or call Hope Hotlines above.</Redish>
                                    <a href="https://www.salvationarmy.ca" style={{color: "#178B96"}}> www.salvationarmy.ca</a> /
                                    <a href="https://www.salvationarmyusa.org" style={{color: "#178B96"}}> www.salvationarmyusa.org</a> 
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SHELTERS (WOMEN’S) CANADA</strong>
                                </td>

                                <td>
                                    <a href="https://www.sheltersafe.ca" style={{color: "#178B96"}}>www.sheltersafe.ca</a> 
                                    to locate a shelter near you; call <Redish>211</Redish>
                                </td>
                            </tr>
                           
                           <tr>
                                <td>
                                    <strong>VETERANS IN DISTRESS</strong>
                                </td>

                                <td>
                                    See <Blueish>SUICIDE PREVENTION HOTLINE</Blueish>
                                </td>
                           </tr>
                        </tbody>

                       
                    </ThreeTable>

                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="6">
                <Accordion.Header>3B - RESOURCES</Accordion.Header>
                <Accordion.Body>
                    <h6><Redish><strong>FOR A NEW TESTAMENT (Life Application Version)</strong></Redish></h6>

                    <p>Our most important resource!  Should a caller need a Bible, we offer the <Blueish>Life Application New Testament.</Blueish> 
                         Please <Blueish>record the caller’s information clearly on the Ministry Response Form:</Blueish> name, phone number, 
                        full mailing address and email address, so that our follow-up team can contact them.
                    </p>

                    <h6><Redish><strong>FOR A CHURCH SUGGESTION:</strong></Redish></h6>

                    <p>
                        If you have a caller who wishes to have a church <Blueish>suggestion</Blueish>, please <Blueish>record the caller’s information 
                        clearly on the Ministry Response Form:</Blueish> name, phone number, full mailing address and email address, 
                        so that our follow-up team can contact them.<br/>
                        <Redish> ***Please note that we do not give church <strong>referrals</strong>.</Redish> 
                    </p>

                    <ThreeTable>
                        <thead>
                            <tr>
                                <th colSpan="2">
                                100 HUNTLEY STREET
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>
                                    100 HUNTLEY STREET WEBSITE  
                                    <Blueish>For questions about faith…or almost anything! </Blueish>
                                    </strong>
                                </td>

                                <td>
                                    <a href="https://www.100huntley.com" style={{color: "#178B96"}}>www.100huntley.com</a>
                                    – a wide variety of media and other topical resources. 
                                    Use the <Redish><strong>Search</strong></Redish> box on the top right-hand side of the screen or go to the <Redish><strong>Prayer</strong></Redish> subheading; 
                                    then click on <Redish><strong>Resources and Topics</strong></Redish> for a topical index.
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th colSpan="2">
                                211
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>211 GOVERNMENT 24/7 SERVICE</strong>
                                </td>

                                <td>
                                    <p>
                                        <Redish>211</Redish> <Blueish><strong>provides information to deal with life's challenges</strong></Blueish>
                                        such as abuse, disabilities, mental health, food, homelessness, health care, income support, etc. 
                                        Dial <Redish>211</Redish> (CANADA or USA) or <a href="https://www.211.ca" style={{color: "#178B96"}}>www.211.ca</a> (CANADA); <a href="https://www.211.org" style={{color: "#178B96"}}>www.211.org</a>  (USA)
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>811 </strong>                      	
                                </td>

                                <td>
                                    See <Blueish><strong>HEALTH CONCERNS</strong></Blueish> subheading
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>AA (alcoholics anonymous)</strong>
                                </td>
                                <td>
                                    See <Blueish><strong>ADDICTION/RESTORATION SUPPORT</strong></Blueish> subheading
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong> ABUSE</strong>
                                </td>
                                <td>
                                    See also <Redish>211</Redish> and below for more
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>ASSAULTED WOMEN’S HELPLINE</strong>
                                </td>
                                <td>
                                    CANADA <Redish>1-866-863-0511</Redish> | TEXT: <Redish>#SAFE OR #7233</Redish> | <a href="https://www.awhl.org" style={{color: "#178B96"}}>www.awhl.org</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>CHILDHELP NATIONAL CHILD ABUSE 24/7 HOTLINE (MULTI-LINGUAL)</strong>
                                </td>
                                <td>
                                    <Redish>1-800-422-4453</Redish>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>DOMESTIC VIOLENCE</strong>
                                </td>
                                <td>
                                Look under subheading, <Blueish><strong>DOMESTIC VIOLENCE</strong></Blueish>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>SENIOR’S SAFETY LINE CANADA</strong>
                                      24/7; OVER 200 LANGUAGES
                                </td>
                                <td>
                                CANADA <Redish>1-800-422-4453</Redish>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>ADDICTION/RESTORATION SUPPORT</strong>
                                </td>
                                <td>
                                    Please fill out a <Blueish>Ministry Response form</Blueish> if the caller needs assistance finding
                                    support in area in eg. <Blueish>Celebrate Recovery, Freedom Session or Teen Challenge.</Blueish> 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>ADDICTIONS - FOR CANADA AND USA</strong>
                                     <p><Blueish> These are also global groups. Please see websites for details</Blueish></p>
                                </td>
                                <td>
                                    <p>
                                    See <Blueish>SALVATION ARMY</Blueish> or <Blueish>211</Blueish> for local support 
                                    <Redish>AA - Alcoholics Anonymous</Redish> - <a href="https://www.aa.org" style={{color: "#178B96"}}>www.aa.org</a> - <a href="https://www.al-anon.org" style={{color: "#178B96"}}>www.al-anon.org</a> - for family/friends who are concerned about someone with addictions 
                                    <Redish>NA - Narcotics Anonymous (CANADA)</Redish> – <a href="https://www.aa.org" style={{color: "#178B96"}}>www.canaacna.org</a> <Redish>1-855-562-2262 </Redish>
                                    <Redish>NA - Narcotics Anonymous – (USA)</Redish> - <a href="https://www.na.org" style={{color: "#178B96"}}>www.na.org</a> - find meetings and more | For information: 
                                    <a href="https://www.na.org" style={{color: "#178B96"}}>www.na.org</a>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>RESTORATION MINISTRY - FOR ANY HURTS (ABUSES), HANGUPS OR HABITS (ADDICTIONS) </strong>
                                </td>
                                <td>
                                    <p>
                                        <Blueish><strong>CELEBRATE RECOVERY</strong></Blueish> – see group finders on website <br/>
                                        <Redish>CANADA</Redish>: <a href="https://www.celebraterecovery.ca" style={{color: "#178B96"}}>www.celebraterecovery.ca</a> <br/>
                                        <Redish>USA</Redish>:  <a href="https://www.celebraterecovery.com" style={{color: "#178B96"}}>www.celebraterecovery.com</a>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>RESTORATION MINISTRY - as above (deals with “soft addictions; soul issues) </strong>
                                </td>
                                <td>
                                    <p>
                                        <Blueish><strong>FREEDOM SESSION </strong></Blueish> – <a href="https://www.freedomsession.com" style={{color: "#178B96"}}>www.freedomsession.com</a> 
                                        - may be taken in the comfort of your home by video <br/>
                                        <Redish><strong>Contact: </strong> <br/>
                                            Canadian Director:  236-988-3366  <br/>
                                            USA Director:  360-788-3811
                                        </Redish>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>RESTORATION MINISTRY FOR PASTORS	</strong>
                                </td>
                                <td>
                                    <a href="https://www.celebraterecovery.com/cr-pastors" style={{color: "#178B96"}}>www.celebraterecovery.com/cr-pastors</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>SALVATION ARMY</strong>
                                </td>
                                <td>
                                    See <Blueish>SALVATION ARMY</Blueish> subheading
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <strong>TEEN CHALLENGE CANADA or USA</strong>
                                </td>
                                <td>
                                    <a href="https://www.teenchallenge.ca" style={{color: "#178B96"}}>www.teenchallenge.ca</a>
                                    London <Redish>1-877-343-1022</Redish> (Adult programs available)  – 
                                    <a href="https://www.teenchallengeusa.com/centers" style={{color: "#178B96"}}>www.teenchallengeusa.com/centers</a>
                                 
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th colSpan="2">
                                CHRISTIAN GROWTH
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>
                                    100 HUNTLEY STREET WEBSITE  
                                    </strong>
                                </td>

                                <td>
                                See <Blueish>100 HUNTLEY STREET</Blueish> subheading
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                    ALPHA INTERNATIONAL Alpha
                                    </strong>
                                    <Blueish>is a course that creates a space online or in person, where people can have conversation about faith, 
                                    life and God (a great place to bring friends)	</Blueish>
                                </td>

                                <td>
                                    <p>
                                        <a href="https://www.alpha.org" style={{color: "#178B96"}}>www.alpha.org </a> <br/>       
                                        <Redish>Canada - 1-800-743-0899 </Redish> (General Inquiries – PDT) <br/> 
                                        <Redish>USA -  1-800-DO-ALPHA or 1-800-(362-5742)</Redish><br/> 
                                        Other countries:  <br/>
                                        see the link below <a href="https://www.alpha.org/about/national-offices/" style={{color: "#178B96"}}>www.alpha.org/about/national-offices/ </a>
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                    DAILY BIBLE TEACHING	
                                    </strong>
                                </td>

                                <td>
                                <a href="https://www.100words.ca" style={{color: "#178B96"}}>www.100words.ca</a>
                                     – “through the Bible” devotional reading program by our founder,
                                    David Mainse (on our Castle app or may be emailed to caller)
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <strong>
                                    EMAIL MENTORING PROGRAM/WALK OF FAITH	
                                    </strong>
                                </td>

                                <td>
                                    Fill out a <Blueish><strong>Ministry Response Form</strong></Blueish> and provide full name, address, phone number and email address.
                                    <Redish>Note if they are over 18 years of age</Redish>. Please allow a couple weeks for their response.
                                    <Redish>Click on this link to sign up:</Redish> <a href="https://www.thelife.com/crossroads" style={{color: "#178B96"}}>www.thelife.com/crossroads</a> 
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                    MARRIAGE MENTORING
                                    </strong>
                                </td>

                                <td>
                                See <Blueish>FAMILY RELATIONSHIPS</Blueish> subheading
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                    PRECEPT MINISTRIES/ONLINE BIBLE STUDIES (KAY ARTHUR)
                                    </strong>
                                </td>

                                <td>
                                    <Redish>CANADA</Redish> -  <a href="https://www.preceptministries.ca/online-studies" style={{color: "#178B96"}}>www.preceptministries.ca/online-studies</a>
                                    <Redish>USA</Redish> - <a href="https://www.learnthebibleonline.com" style={{color: "#178B96"}}>www.learnthebibleonline.com</a>
                                    <a href="precept.org" style={{color: "#178B96"}}>precept.org</a>
                                   
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                        <strong>SPIRITUAL FREEDOM IN CHRIST </strong> 
                                </td>

                                <td>
                                <Blueish><strong>Pastor Neil Cole</strong></Blueish> – follow-up pastor at Crossroads -  teaching on Freedom in Christ/victory over the darkness 
                                <Redish>YouTube Channel: <u>niteliteonlineficm</u>. </Redish> 
                                <a href="https://www.youtube.com/user/niteliteonlineficm" style={{color: "#178B96"}}>www.youtube.com/user/niteliteonlineficm</a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SPIRITUAL FREEDOM - SOUL CARE	</strong> 
                                </td>

                                <td>
                                     Dr. Rob Reimer’s book: Soul Care:  See on
                                    <a href="https://www.100huntley.com" style={{color: "#178B96"}}>www.100huntley.com</a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>DIVORCE/SEPARATION</strong> 
                                </td>
                                <td>
                                See also information available under <Blueish>FAMILY RELATIONSHIPS</Blueish>  subheading
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>DIVORCE CARE: CANADA or USA	</strong> 
                                </td>
                                <td>
                                    <p>
                                        <a href="https://www.divorcecare.org" style={{color: "#178B96"}}>www.divorcecare.org</a> <br/>
                                        Find (church) s`upport groups-receive daily emails <br/>
                                        Phone: <Redish>1-800-489-7778</Redish> <Blueish>(North America)</Blueish> <br/>
                                        <Redish>919-562-2112</Redish> <Blueish>(International)</Blueish> <br/>
                                    </p>
                                </td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr>
                                <th colSpan="2">
                                DOMESTIC VIOLENCE
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>DOMESTIC VIOLENCE CANADA</strong>
                                </td>
                                <td>
                                    <Redish>211</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>DOMESTIC VIOLENCE USA</strong>
                                </td>
                                <td>
                                    <Redish>211</Redish> or <Redish>1-800-799-7233</Redish> | <a href="https://www.thehotline.org" style={{color: "#178B96"}}>www.thehotline.org</a>
                                </td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr>
                                <th colSpan="2">
                                EMOTIONAL/SPIRITUAL/MENTAL HEALTH/COUNSELLING SUPPORTS
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>EMOTIONAL FREEDOM/HELPFUL QUESTIONNAIRES/TRANSFORMING THOUGHTS</strong>
                                    <Blueish>Change Your Thoughts – Change Your Life!	</Blueish>
                                </td>
                                <td>
                                    <p>
                                        <a href="https://www.drgrantmullen.com" style={{color: "#178B96"}}>www.drgrantmullen.com</a> <br/>
                                        Video clips and information also available on <a href="100huntley.com" style={{color: "#178B96"}}>100huntley.com</a> <br/>
                                        Dr. Grant Mullen is a Christian medical professional and a friend to our ministry
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>FOCUS ON THE FAMILY</strong>
                                </td>
                                <td>
                                See <Blueish>FAMILY/RELATIONSHIPS</Blueish> for counselling options
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                    HOPE FOR THE HEART (HELP-LINE) 
                                    </strong> <br/>
                                    <Blueish>
                                        Talk, pray or just listen (good for callers who need to talk or process emotions) * they can offer counselling suggestions for USA callers only	
                                    </Blueish>
                                </td>
                                <td>
                                    <Blueish>Monday through Friday, 8 a.m.-1:30 a.m. CST;</Blueish> Closed weekends. 
                                    <Redish>1-800-488-HOPE (4673) Línea en español 1-855-867-0824.</Redish>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>HOPE LINE – SALVATION ARMY	</strong>
                                </td>
                                <td>
                                    See <Blueish>SALVATION ARMY</Blueish> subheading
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>RESTORATION MINISTRY FOR EMOTIONAL/SPIRITUAL/MENTAL HEALTH</strong>
                                </td>
                                <td>
                                    See <Blueish>ADDICTIONS/RESTORATION MINISTRY</Blueish> subheading eg. Freedom Session supports mental health issues,
                                    such as anxiety/depression, etc.; Celebrate Recovery does in most areas
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SPIRITUAL FREEDOM IN CHRIST	</strong>
                                </td>
                                <td>
                                    See above in <Blueish>CHRISTIAN GROWTH</Blueish>
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th colSpan="2">
                                FAMILY/RELATIONSHIPS
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>FOCUS ON THE FAMILY CANADA	</strong>
                                    For parenting, relationships, marriage, sexuality, etc. 
                                    Resources for the family*free one-time counselling
                                </td>
                                <td>
                                     <a href="https://www.focusonthefamily.ca/get-help" style={{color: "#178B96"}}>www.focusonthefamily.ca/get-help</a>
                                     or call <Redish>1-800-661-9800</Redish> <br/>
                                    <Blueish>Monday to Friday: 8 a.m.- 4 p.m. PT <br/>
                                    Except Tuesdays: 9 a.m.- 4 p.m. PT</Blueish>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>FOCUS ON THE FAMILY USA	</strong>
                                    For parenting, relationships, marriage, sexuality, etc. 
                                    Resources for the family*free one-time counselling
                                </td>
                                <td>
                                    <a href="https://www.focusonthefamily.com/get-help" style={{color: "#178B96"}}>www.focusonthefamily.com/get-help</a>
                                     or call <Redish>1-800-A-FAMILY</Redish> or <Redish>1-855-771-HELP (4357)</Redish>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>MARRIAGE MENTORING CANADA</strong><br/>
                                    <Blueish>Family Life Canada	</Blueish>
                                </td>
                                <td>
                                    <Redish>1-800-247-3180</Redish> or <a href="https://www.marriagementoringinitiative.com" style={{color: "#178B96"}}>www.marriagementoringinitiative.com</a>
                                </td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr>
                                <th colSpan="2">
                                GRIEF SUPPORT
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>GRIEFSHARE International</strong>
                                </td>

                                <td>                                   
                                    <a href="https://www.griefshare.org" style={{color: "#178B96"}}>www.griefshare.org</a>
                                    Find (church) support groups-receive daily emails 
                                    Phone: <Redish>1-800-395-5755</Redish> <Blueish>(North America)</Blueish>
                                    <Redish>919-562-2112</Redish> <Blueish>(International)</Blueish>
                                </td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr>
                                <th colSpan="2">
                                HEALTH CONCERNS
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>HEALTH LINE (CANADA) –</strong><Blueish>speak to a health professional</Blueish>
                                </td>

                                <td>                                   
                                    Dial <Redish>811</Redish> in all provinces and territories in Canada Dial <Redish>911</Redish>, 
                                    if an emergency Telehealth Ontario:  <Redish>1-866-797-0000</Redish>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>HUMAN TRAFFICKING</strong>
                                </td>

                                <td>                                   
                                    See <Blueish>SEX/HUMAN TRAFFICKING </Blueish>subheading
                                </td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr>
                                <th colSpan="2">
                                MILITARY
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>  	
                                    <strong>CRU MILITARY (INTERNATIONAL) Global Ministry - </strong>
                                    <Blueish>affiliation: Campus Crusade for Christ; helping military find support eg PTSD/community/connection</Blueish>
                                </td>

                                <td>
                                   <p>
                                   CRU Military - P.O. Box 120124, Newport News, VA 23612 <br/>
                                   Phone: <Redish>1-757-928-7200/1-800-444-6006</Redish> | <a href="https://www.crumilitary.org" style={{color: "#178B96"}}>www.crumilitary.org</a>
                                   </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>MILITARY/VETERANS – DISTRESS LINE-CANADA	</strong>
                                </td>
                                <td>                                   
                                    <Redish>1-800-273-TALK (8255)</Redish> or Crisis Services Canada:
                                    <Redish>1-833-456-4566</Redish>; Text: <Redish>45645</Redish> or dial <Redish>211</Redish> | Internet: 
                                    <a href="https://www.211.ca" style={{color: "#178B96"}}>www.211.ca</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>MILITARY/VETERANS – DISTRESS LINE-USA</strong>
                                </td>
                                   
                                <td>                                   
                                    <Redish>1-800-273-TALK (8255)</Redish> or dial <Redish>211</Redish> <Redish>*1-800-SUICIDE (784-2433)</Redish>
                                    or Internet: <a href="https://www.211.org" style={{color: "#178B96"}}>www.211.org</a> or  <a href="https://www.suicidehotlines.com" style={{color: "#178B96"}}>www.suicidehotlines.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>NARCOTICS ANONYMOUS</strong>
                                </td>

                                <td>                                   
                                    See <Blueish>ADDICTION/RESTORATION SUPPORT </Blueish>
                                </td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr>
                                <th colSpan="2">
                                PRISON MINISTRY
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>
                                    PRISONERS: BIBLES AND BIBLE STUDIES
                                    </strong>
                                </td>
                                <td>
                                Crossroads Prison Ministries – <Redish>1-844-677-6658</Redish> – <a href="https://www.cpministries.ca" style={{color: "#178B96"}}>www.cpministries.ca</a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>ALPHA/CELEBRATE RECOVERY</strong>
                                </td>
                                <td>
                                Specific programs for prisoners – see above under <Blueish><strong>CHRISTIAN GROWTH</strong></Blueish>
                                </td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr>
                                <th colSpan="2">
                                SALVATION ARMY
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>
                                    SALVATION ARMY HOPE HOTLINE (CANADA) 	
                                    </strong> <Blueish>Caller may request resources for their area  eg. homelessness, addictions</Blueish>
                                </td>
                                <td>
                                    <Blueish>Mon – Fri: 9am-4pm: </Blueish> <Redish>1-855-294-HOPE (4673)</Redish> - 
                                    providing emotional and spiritual support during Covid-19 
                                    <Blueish>(Leave a message) </Blueish> <Redish>*Not to be used for suicidal prevention</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SALVATION ARMY HOPE HOTLINE (USA) </strong>
                                    <Blueish>Caller may request resources for their area  eg. homelessness, addictions</Blueish>
                                </td>
                                <td>
                                    <Redish>1-844-458-HOPE (4673) </Redish>– providing emotional and spiritual support during Covid-19
                                    <Blueish>(9am-9pm EDT; 7 days a week; leave message)</Blueish>; resource assistance 
                                    <Redish>*Not to be used for suicidal prevention</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SHELTERS/HOMELESSNESS/ADDICTIONS HELP IN USA OR CANADA</strong>
                                </td>
                                <td>
                                    SALVATION ARMY –Toronto area: <Redish>416-425-2111 or call</Redish> 
                                    <Blueish><strong>Hope Hotlines</strong></Blueish> above.
                                    <a href="https://www.salvationarmy.ca" style={{color: "#178B96"}}>www.salvationarmy.ca</a> | <a href="https://www.salvationarmyusa.org" style={{color: "#178B96"}}>www.salvationarmyusa.org</a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SENIORS</strong>
                                </td>
                                <td>
                                    See under <Redish>211</Redish> for local supports or <Blueish><strong>ABUSE</strong></Blueish> subheading
                                </td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr>
                                <th colSpan="2">
                                    SEX/HUMAN TRAFFICKING
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>SEX/HUMAN TRAFFICKING HELP HOTLINE CANADA </strong> 
                                    <a href="https://www.100hs.com" style={{color: "#178B96"}}>www.100hs.com</a>   	
                                </td>
                                <td>
                                    <Redish>1-833-900-1010</Redish> - 24/7 Confidential Help
                                    Internet: <a href="https://www.canadianhumantraffickinghotline.ca/contact/" style={{color: "#178B96"}}>www.canadianhumantraffickinghotline.ca/contact/</a>  
                                    <Blueish>CHAT function on website</Blueish>
                                    <Redish>Also report tips about potential trafficking</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SEX/HUMAN TRAFFICKING HELP HOTLINE USA </strong> 
                                    	
                                </td>
                                <td>
                                    <Redish>1-800-373-7888</Redish> - Text: 233733 
                                    Internet: <a href="https://www.humantraffickinghotline.org/" style={{color: "#178B96"}}>www.humantraffickinghotline.org/</a>  
                                    <Blueish>CHAT function on website</Blueish>
                                    <Redish>Also report tips about potential trafficking</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>SHELTERS</strong>
                                </td>

                                <td>
                                    See also <Redish>211</Redish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>WOMEN’S SHELTERS CANADA</strong>
                                </td>

                                <td>
                                <a href="https://www.sheltersafe.ca" style={{color: "#178B96"}}>www.sheltersafe.ca</a>  
                                to locate a shelter near you; call <Redish>211</Redish>  
                                </td>
                            </tr>
                        </tbody>
                    </ThreeTable>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="7">
                <Accordion.Header>3C - CROSSROADS RESOURCES</Accordion.Header>
                <Accordion.Body>
                    <p>
                        Dear Prayer Partner, <Blueish>CCCI (Crossroads Christian Communications Inc)</Blueish> has so much to offer our callers.
                        As media missionaries, it is our heart and passion to reach people around the globe in ways that they can find a <Redish>personal connection </Redish> to the love of <Redish>JESUS</Redish>.
                        The internet (amongst television and other forms of media) is a powerful vehicle in which we can introduce people of all ages and stages to our Lord.
                        We are so confident that HE is able to meet the need of every single person on this planet!   
                        We also hope that you too can be touched and grow in your daily walk with the Lord and enjoy the great programs and online ministry that we offer.
                        We encourage you to look at the resources below.. and be so very blessed!!!  
                    </p>

                    <ThreeTable>
                        <thead>
                            <tr>
                                <th colSpan="2">
                                CROSSROADS RESOURCES
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>100 HUNTLEY STREET</strong> – Canada’s longest running daily television program with a Christian perspective;
                                    this program tells the amazing stories of people who have had life-changing encounters with God. 
                                    <a href="https://www.100huntley.com" style={{color: "#178B96"}}>www.100huntley.com</a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>CROSSROADS CHRISTIAN COMMUNICATIONS INC.</strong> – Producing faith and values media content to convey the message
                                    of God’s love to people around the world. <a href="https://www.crossroads.ca" style={{color: "#178B96"}}>www.crossroads.ca</a> *features <Redish>“Crossroads Cares”</Redish> missions
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>CASTLE</strong> – <a href="https://www.intothecastle.com" style={{color: "#178B96"}}>www.intothecastle.com</a> -
                                    <Redish>FREE</Redish> phone app and video streaming platform for spiritually curious people with content and community to deepen understanding of faith.
                                    <Blueish>· Great shows for all ages; Bible teaching and an online digital pastor to answer questions</Blueish>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>yesTV</strong> – Canada’s favourite family station <a href="https://www.yestv.com" style={{color: "#178B96"}}>www.yestv.com</a>
                                </td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr>
                                <th colSpan="2">
                                SOME HIGHLIGHTS FROM <a href= "https://www.crossroads.ca" style={{color: "#fff"}}>CROSSROADS.CA</a> MEDIA
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>CONTEXT Beyond The Headlines</strong> - This program creates boundary-breaking media that reveals Christ, 
                                    bringing a Christian perspective to the stories and events that shape us.  
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong> CANADA CARES:  THE OPIOD CRISIS</strong> - The growing number of overdoses and deaths caused by opioids is a 
                                    public health emergency AND a spiritual emergency.    
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>A Better Us</strong> The Journey After “I do” with Ron and Ann Mainse 
                                    <Blueish>(Heart to Heart Marriage & Family Ministries)</Blueish> is a weekly program to help strengthen marriages.
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>See Hear Love</strong> is a web and TV show for women discussing faith, community, life, love,
                                    and relationships from a unique, Canadian, Christian, women’s perspective. 
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>First Peoples Voices</strong> - In their own voices, these segments tell inspiring stories from First Peoples visions of their Creator.    
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>Hey Meisha!</strong> is a biblical teaching variety show for kids, featuring Meisha and
                                    the Good News Kids. Produced by <Blueish>YESTV</Blueish>, this show is available to stream on <Blueish>Castle™</Blueish>.
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>ROCKIDS TV</strong> - TV series teaches children positive life values and the Bible through fun songs, stories and animation.
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>Outside the Box with Sheldon Neil</strong> is setting-up to be Canada’s Christian leading voice in Faith,
                                    Arts and Culture and offers faith-filled and insightful discussion.
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>YOUNG ONCE</strong> is a series that documents a group of young Christians from Southern California on their quest to live counter culturally where alcohol, drugs and sex are off-limits.
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img alt="" src="" />
                                </td>

                                <td>
                                    <strong>DAUGHTERS OF EVE</strong> is a provocative new, docudrama series that journeys into the extraordinary lives of women from the Old and New Testament.
                                </td>
                            </tr>

                        </tbody>
                    </ThreeTable>

                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="8">
                <Accordion.Header>4 - BROCHURES</Accordion.Header>
                <Accordion.Body>
                    <p className='m-3'>
                    <Blueish><u>ADDICTIONS</u></Blueish> - Addictions, regardless of whether it is alcoholism, drugs, pornography or any other vice – 
                    the feeling of being trapped and out-of-control is overwhelming, almost unbearable. Addictions are painful.
                    In the first three gospel accounts in the Bible, Jesus met a man whose life was messed up. So much so,
                    that he was actually out of his mind. After an encounter with Jesus, he was set free, delivered and made whole.
                    Jesus is your hope from anything and everything, He can set you free.   Freedom from Addictions  
                    </p>

                    <ol>
                        <li><Redish>Confession</Redish> – admitting your sin</li>
                        <li><Blueish>Renunciation</Blueish> – by the grace of God I don’t ever want to participate in that sin again</li>
                        <li><Redish>Accountability</Redish> – confess your sins to God and, in humility, to another person as well</li>
                        <li><Blueish>Healing</Blueish> – God will come through for you with His strength to overcome</li>
                    </ol>

                    <p className='m-3'>
                        We are in a spiritual battle. The “thief,” as Jesus refers to our enemy, attacks us at our weakest points.
                        His goal is to destroy our lives, steal our relationships and kill our self-worth.  We need God’s divine power, which is transformational,
                        to win our battles. He is willing to help. “Call unto me and I will answer you” (Jeremiah 33:3).<br />

                        <Redish><strong>Prayer:</strong></Redish> Dear God, please deliver me from the addiction of (specify addiction for which you are seeking freedom).
                        I ask for your divine power to say “no” and to turn the other way. Save me from the tricks of the evil one.
                        I come to you, asking for your strength to win this battle. Please heal my mind, my body and restore my soul.
                        I believe that you can do this. You can set me free. Amen. <br />

                        <Blueish><strong>Scriptures of Promise:</strong></Blueish> “The thief comes only to steal and kill and destroy;
                        I have come that they may have life and have it to the full” (John 10:10). “If we admit our sins … he won’t let us down; he’ll be true to Himself.
                        He’ll forgive our sins and purge us of all wrongdoing” (1 John 1:9).   “He who conceals his sins does not prosper,
                        but whoever confesses and renounces them finds mercy” (Proverbs 28:13).  
                        “… Confess your sins to each other and pray for each other so that you may be healed” (James 5:16).   “ … We take captive every thought to make it obedient to Christ” (2 Corinthians 10:5). <br/>  

                        <strong>Resources:</strong> <a href="https://www.100huntley.com" style={{color: "#178B96"}}> www.100huntley.com;</a> <a href= "https://www.celebraterecovery.ca" style={{color: "#178B96"}}>www.celebraterecovery.ca;</a>  
                         <a href= "https://www.celebraterecovery.com" style={{color: "#178B96"}}>www.celebraterecovery.com;</a> <a href= "https://www.crossroads.ca" style={{color: "#178B96"}}>www.crossroads.ca;</a> <br />
                        
                        <Redish>Prayer Line 1-866-273-4444  </Redish> 
                    </p>

                    

                    <p className='m-3'>
                        <Blueish><u>EMOTIONAL NEEDS</u></Blueish> - “Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well” (3 John 2).
                         Perhaps today you do not sense your “soul is getting along well”. There is hope for you! Jesus loves you! He longs to wrap you in His arms and hold you.
                         He will wipe away your tears, bring you comfort and hope; heal all your torn emotions and bring peace to your innermost being. Our journey to emotional wellbeing begins when we accept God’s gift of His Son,
                        Jesus, as our personal Saviour. This gives us “peace with God” (Romans 5:1). We are then able to enjoy the peace of God that Jesus gives us. In John 14:27, Jesus said, “Peace I leave with you;
                        my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid”. Whatever your emotional needs are at this time,
                        remember that God “heals the broken-hearted and binds up their wounds” (Psalm 147:3).  <br />

                        <Redish><strong>Prayer:</strong></Redish> The Lord’s Prayer as recorded in Matthew 6: 9-13 covers all our emotional needs.  
                        Our Father in heaven, hallowed be your name, Your kingdom come, your will be done, On earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one.   We pray “Our Father in Heaven” because He is all-wise, all-loving and all-powerful. We pray for His will to be done in everything. We pray for our daily necessities, including wholeness for our emotions, 
                        We pray for forgiveness, and practice forgiving others. We pray for deliverance from evil. We conclude with recognizing and giving God glory for who He is. <br />

                        <Blueish><strong>Scriptures of Promise:</strong></Blueish> “Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus” (Philippians 4:6,7).
                        “Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light” (Matthew 11: 28-30).  <br />

                        <strong>Resources:</strong> <a href="https://www.100huntley.com" style={{color: "#178B96"}}> www.100huntley.com;</a>  
                         <a href="https://www.drgrantmullen.com" style={{color: "#178B96"}}>www.drgrantmullen.com</a>  <br/>     

                        Book Suggestion: “Emotionally Free” by Dr Grant Mullen <a href="https://www.crossroads.ca" style={{color: "#178B96"}}>www.crossroads.ca</a>   – <Redish>Prayer Line 1-866-273-4444</Redish>
                    </p>

                    <p className='m-3'>
                        <Blueish><u>FAITH</u></Blueish> - Faith is an absolute necessity in our relationship with God. By faith we accept God’s gift of salvation through Jesus Christ, and by faith God’s wonderful promises to us are fulfilled.
                        Simply put, faith is a sure conviction that something, someone or some situation will turn out well. “Now faith is being sure of what we hope for and certain of what we do not see (Hebrews 11:1)”.
                        <strong>GROWING IN YOUR FAITH</strong> - The Bible likens faith to the tiniest of seeds – a mustard seed. When our faith is directed to God,
                        even a little faith has great power (see Matthew 17:20). By reading the Bible, faith comes. “… faith comes from hearing the message,
                        and the message is heard through the word of Christ”(Romans 10:17). Our faith increases as we allow the truth of God’s Word to transform our mind and renew our thinking.
                        Jesus provides us with the ultimate example of faith by the way He lived. Our faith grows as we grow in Jesus.  <strong>TRIALS</strong> - Our faith does go through periods of testing, but God sustains us in these times by the power of His Holy Spirit. You may have read in the Gospels about Peter’s betrayal of Jesus. What Jesus said to Peter also applies to us when our faith is weak: “I have prayed for you … that your faith may not fail …” (Luke 22:32). Peter’s faith was later strengthened and in turn he has encouraged us: “These have come so that your faith - of greater worth than gold, which perishes even though refined by fire – may be proved genuine and may result in praise, glory and honour when Jesus Christ is revealed” (1 Peter 1:7).<br />   
                    
                        <Redish><strong>Prayer:</strong></Redish> Heavenly Father, I thank you that according to Romans 12:3 you have given each one a “measure of faith”. Today, I ask for a believing heart to trust you more. Help me to receive your Word in faith so that it will transform my mind and increase my faith. In Jesus Name I pray, Amen.<br />   
                        <Blueish><strong>Scriptures of Promise:</strong></Blueish> “And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him” (Hebrews 11:6).   “Now unto Him who is able to do immeasurably more than all we ask or imagine according to His power that is at work within us” (Ephesians 3:20). <br />    
                       
                        <strong>Resources:</strong> <a href="https://www.100huntley.com" style={{color: "#178B96"}}> www.100huntley.com;</a> 
                         <a href="https://www.drgrantmullen.com" style={{color: "#178B96"}}>www.drgrantmullen.com</a>  <br/>     

                        Book Suggestion: “Christ for Real” by Charles Price   <a href="https://www.crossroads.ca" style={{color: "#178B96"}}>www.crossroads.ca</a>   – <Redish>Prayer Line 1-866-273-4444</Redish>
                    </p>

                    <p className='m-3'>
                        <Blueish><u>FINANCES</u></Blueish> - In today’s world, to handle money wisely has become a real challenge. With credit so readily available, the temptation to purchase items we do not need and spend more than we actually make has grown into a national problem. This strain of financial debt is very hard on individuals, marriages and families.   The good news is that recovery from financial difficulty is possible. Freedom starts with the acknowledgment that “all we own and have belongs to God”. When our thinking and lifestyle begins to reflect these changes, our financial situation improves. God will help you to bring control into this area of importance. Each person’s financial situation is different, but in a nutshell, the answer to financial peace lies in giving to God’s work, saving a little and living within your means.   <strong>GIVING</strong> - The Bible talks about the importance of giving “tithes and offerings” (Malachi 3:8-11).  This notion does not make sense when one is struggling financially; however, when we stretch to include giving in our budgets, we find there is enough money to cover our own needs and obligations. Jesus looks at the motives of the heart when giving and not the dollar amount (Mark 12:13-17), and therefore everyone can participate. Since God loves a cheerful giver (2 Corinthians 9:7), giving should always be out of a love for God, not a duty.<br/>
                        <Redish><strong>Prayer:</strong></Redish> Dear God, you know what I have need. Please give me wisdom and strength so that I do not seek to purchase what I cannot afford. Help me in my planning so that I will not be in debt to anyone. May I keep in check what I desire, be content with what I have, and trust you for the rest. <br/>
                        <Blueish><strong>Scriptures of Promise:</strong></Blueish> “Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength” (Mark 12:29-31).   “Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that you will not have room enough for it”(Malachi 3:8-11).   “Do not worry then, saying, ‘What will we eat?’ or ‘What will we drink?’ or ‘What will we wear for clothing?’ For the Gentiles eagerly seek all these things; for your heavenly Father knows that you need all these things. But seek first His kingdom and His righteousness, and all these things will be added to you” (Matthew 6:31-33).<br/>
                        
                        <strong>Resources:</strong> <a href="https://www.100huntley.com" style={{color: "#178B96"}}> www.100huntley.com;</a> 
                        <a href="https://www.drgrantmullen.com" style={{color: "#178B96"}}>www.drgrantmullen.com</a>  <br/>     

                        Book Suggestion: “Christ for Real” by Charles Price   <a href="https://www.crossroads.ca" style={{color: "#178B96"}}>www.crossroads.ca</a>   – <Redish>Prayer Line 1-866-273-4444</Redish>
                    </p>

                    <p className="m-3">
                        <Blueish><u>FORGIVENESS</u></Blueish> - The greatest joy ever known and the greatest love ever experienced is when a person is forgiven and cleansed of sin. “If we confess our sins, He is faithful and just and will forgive us our sins and purify us from all unrighteousness” (1 John 1:9). Forgiveness of sins and the assurance of eternal life is a gift from God. Jesus willingly gave His life as a sacrifice for our sins; He simply invites us to come to Him. He can clean us up and give us a fresh start. “Therefore, if anyone is in Christ, he is a new creation; the old has gone, the new has come!” (2 Corinthians 5:17)   Confessing our sins daily or having a “short account with God” is a good practice. God often warns us that something is wrong through a feeling of conviction. Be sure to act on that feeling! Admit your shortcomings quickly and come back into right relationship with God. His forgiveness is always available to us. Isaiah 53:5 says “…He was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was upon him and by his wounds we are healed”.  
                    </p>

                    <DarkHeader className='mt-5 mb-5'>FORGIVING OTHERS</DarkHeader>

                    <p className='m-3'>
                        God has set quite a standard for us concerning forgiveness. We experience forgiveness as we forgive others. Perhaps you have tried to forgive someone but it seems impossible. Not forgiving will bring about emotional distress and a general overall feeling of unhappiness. God would say to you: “It is mine to avenge; I will repay”, says the Lord” (Romans 12:19). Actually, we are not able to forgive in our own strength. However, the love of God poured into your heart by His Holy Spirit will empower us with God’s ability to forgive others. When we forgive, we do find freedom from the prison of resentment and bitterness.<br />
                        <Redish><strong>Prayer:</strong></Redish> “Dear God, thank you for your gift of Jesus and His death for my sins. I acknowledge that I have sinned and am in desperate need of forgiveness. Please forgive me. In obedience to your word, I choose to forgive those who have sinned against me.  I rejoice today for you have helped me to find freedom through forgiveness”.   <br />
                        <Blueish><strong>Scripture of Promises:</strong></Blueish>  “And when you stand praying, if you hold anything against anyone, forgive him, so that your Father in heaven may forgive you your sins” (Mark 11:25).   “Bear with each other and forgive whatever grievances you may have against one another. Forgive as the Lord forgave you. In whom we have redemption, the forgiveness of sins” (Colossians 3:13.14).   <br />
                        
                        <strong>Resources:</strong> <a href="https://www.100huntley.com" style={{color: "#178B96"}}> www.100huntley.com;</a> Book
                        Suggestion: “Landmines” by Charles Stanley  <a href="https://www.crossroads.ca" style={{color: "#178B96"}}>www.crossroads.ca</a>  
                        – <Redish>Prayer Line 1-866-273-4444</Redish>
                    </p>


                    <p className='m-3'>
                        <Blueish><u>GUIDANCE</u></Blueish> - If you are seeking God’s will concerning a certain aspect of your life or searching for His leading in a decision you need to make,
                        be assured that God has plans to prosper you and not to harm you, to give you a future and a hope! (Jeremiah 29:11) God wants to give you the desires of your heart.
                        He doesn’t intend to make His plan difficult for you – but delightful. As you surrender your life to Him and ask for His leading concerning your future, God promises to direct your steps.
                        <strong>Foundational Components:</strong> There are several ways to find God’s direction. 
                    </p>
                        <ul className='m-4'>
                            <li><Redish>Bible reading</Redish> (seeking God through His Word)</li>
                            <li><Blueish>Prayer</Blueish> (with fasting at times)</li>
                            <li><Redish>Attitude adjustments</Redish> (be positive, God is good and wants only good for us!)</li>
                            <li><Blueish>Sound advice from others </Blueish>(seek out wisdom from someone wise)</li>
                        </ul> 
                    <p className='m-3'>
                    God is already in your future, the great unknown. You can trust Him to lead you step by step and day by day. God does speak to us; our part is to listen for His voice. He wants to lead you.  <br />

                    <Redish><strong>Prayer: </strong></Redish>Dear God, thank you that I can come to you for help when I feel confused or uncertain about my future.  Help me to remember that you desire only what is best for me. I choose today to believe that you will guide me by your Word; therefore my future looks bright, exciting and full of promise. I believe your Word!  <br />

                    <Blueish><strong>Scriptures of Promise:</strong></Blueish> “Take delight in the Lord, and he will give you your heart’s desires” (Psalm 37:3,4).   “The Lord will guide you along the best pathway for your life. He will advise you and watch over you”   (Psalm 32:8).   “The Lord directs the steps of the godly. He delights in every detail of their lives” (Psalm 37:23).    “Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take” (Proverbs 3:5,6).   “Your word is a lamp to guide my feet and a light for my path” (Psalm 119:105).   <br />

                    <strong>Resources:</strong><a href="https://www.100huntley.com" style={{color: "#178B96"}}> www.100huntley.com;</a> Book 
                    Suggestion: “Moving Mountains: Praying with Passion, Confidence and Authority by John Eldredge  <a href="https://www.crossroads.ca" style={{color: "#178B96"}}> www.crossroads.ca</a>
                    – <Redish>Prayer Line 1-866-273-4444</Redish>
                    </p>

                    <p className='m-3'>
                        <Blueish>HEALING BODY, SOUL AND SPIRIT</Blueish> - “Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well” (3 John 2). Through His own suffering and death on a cross, Jesus paid the full price for your healing: physical, mental and emotional. As you ask for God’s provision of healing in your life, you will want to stay in faith and expectation. Faith is “being sure of what we hope for and certain of what we do not see” (Hebrews 11:1). To strengthen your faith, we encourage you to read this whole chapter of Hebrews 11. God heals in many ways; sometimes immediately, at other times gradual and still some through the aid of medicine. Perhaps you have prayed for healing for yourself or your loved one and you have not seen the positive results you have hoped for. Do not grow discouraged. God is still greater than every sickness and disease. Continue in faith, even a little faith has great power (see Matthew 17:20). Perhaps you have emotional wounds which require the healing balm of Christ’s redemptive love applied, talk to your Saviour and allow Him to begin the process of restoring your injured spirit. “He heals the broken hearted and binds up their wounds” (Psalm 147:3). Remember, beyond this life all of us are healed, whole and perfected in heaven!   
                        
                        <br /><Redish><strong>Prayer:</strong></Redish> Heavenly Father, in Jesus Name, I come boldly to your throne of grace to receive healing from (specify condition for which you are seeking healing). I believe that through the sacrifice of Jesus on the Cross you have provided my total healing and I declare that by the stripes of Jesus, I am healed. I also pray, Father, that any doctor who may be attending to me will be filled with your divine wisdom and ability. Lord, may your grace be poured out upon me even now. By faith I believe your promise of Jeremiah 30:17, “For I will restore health to you and heal you of your wounds”. In Jesus Name I pray, Amen. 
                        <br /><Blueish><strong>Scriptures of Promise:</strong></Blueish> “Praise the LORD, my soul, and forget not all his benefits— who forgives all your sins and heals all your diseases” (Psalm 103:2-3).   “Heal me, LORD, and I will be healed; save me and I will be saved, for you are the one I praise” (Jeremiah 17:14).  <br />

                        <strong>Resources:</strong><a href="https://www.100huntley.com" style={{color: "#178B96"}}> www.100huntley.com;</a> Book
                        Suggestion: “When You Need A Miracle” by Linda Shepherd  <a href="https://www.crossroads.ca" style={{color: "#178B96"}}> www.crossroads.ca</a>
                        – <Redish>Prayer Line 1-866-273-4444</Redish>
                    </p>

                    <p className='m-3'>
                        <Blueish><u>HOPE</u></Blueish> - Have you ever felt alone and forgotten – even thought to yourself, “God does not care about me anymore?” Has someone of significance in your life simply walked away? Maybe your dreams have been dashed and your heart crushed? If this describes you today, allow me to encourage you – there is HOPE. God is your hope.   Truth   The Psalmist David has felt the way that you feel. Psalm 42 and 43 give us insight into his despair. He describes his frame of mind as discouraged, downcast and sad.  He says he feels sorrow pouring over him like a waterfall. Even his bones ache. David describes perplexity in his mind. He likens it to a flood of sorrow. He is utterly overwhelmed and in deep despair. At one time or another, we have all felt this way – life has overwhelmed us and our courage to face tomorrow has disappeared. The Psalmist gives us instruction as to what he did when his world collapsed and how he recovered from his hopelessness. He advises, “We put our hope in the Lord. He is our help and our shield. In him our hearts rejoice, for we trust in his holy name. Let your unfailing love surround us, Lord, for our hope is in you alone” (Psalm 33:20-22). David’s rock was God. The Lord was his refuge and his deliverer, He kept HOPING in the Lord.   
                        <br /> <Redish><strong>Prayer:</strong></Redish> Dear God, I have lost my hope for tomorrow and my courage has slipped away. Your Word says that you will never fail me, never abandon me or reject me. Today I choose to hope in your goodness. Please restore, renew and refresh my life. I ask you to become my Rock, my refuge, my salvation, and my deliverer. In you I put my trust!   
                        <br /> <Blueish><strong>Scriptures of Promise:</strong></Blueish> “I prayed to the Lord, and He answered me. He freed me from all my fears” (Psalm 34:4).   “Lead me by your truth and teach me, for you are the God who saves me. All day long I put my hope in you” (Psalm 25:5).   “Why am I discouraged? Why is my heart so sad? I will put my hope in God! I will praise him again— my Savior and my God!” (Psalm 42:11).   “When doubts filled my mind, your comfort gave me renewed hope and cheer” (Psalm 94:19).   “There is hope for your future” says the LORD …” (Jeremiah 31:17). 
                        <br /> <strong>Resources:</strong><a href="https://www.100huntley.com" style={{color: "#178B96"}}> www.100huntley.com;</a> Book
                        Suggestion: “When You Need A Miracle” by Linda Shepherd  <a href="https://www.crossroads.ca" style={{color: "#178B96"}}> www.crossroads.ca</a>
                        – <Redish>Prayer Line 1-866-273-4444</Redish>    
                    </p>

                    <DarkHeader className='mt-5 mb-5'>LOOKING FOR A LOCAL CHURCH</DarkHeader>
                    <p className='m-3'>
                    It is important to attend a church where you grow in God and connect with other people of faith. Our late Crossroads Founder, David Mainse has always said, “The local church is God’s address on earth!” Every church has special characteristics of its own. The key is to find a church that is balanced in the teachings of Christ, ministers in the power of the Spirit of truth and reaches beyond its doors to others. Often God fits us with a particular congregation where we can exercise our own unique giftings for the benefit of the Body of Christ. Choosing a local church is important, so here are a few guidelines.   The church that you attend should embrace the following:  
                    </p>

                    <ul className='m-4'>
                        <li><Redish> God is the Creator and ruler of the universe. He has eternally existed in three persons – the Father, the Son, and the Holy Spirit (the Trinity). These three are co-equal and are one God. </Redish>
                        (Genesis 1:1, Matthew 28:19, 1 Peter 1:2).
                        </li>
                        <li><Blueish>Jesus is the only Son of God</Blueish> (John 3:16-17; Colossians 1:15-17).</li>
                        <li><Redish>Jesus was born of a virgin, died on the cross and rose again</Redish> (Matthew 1:26-38, Luke 23:33-46).</li>
                        <li><Blueish>Salvation from sin is through the blood of Jesus Christ alone</Blueish> (Matthew 26:28; Hebrews 9:22).</li>
                        <li><Redish>The only way to God is through His Son Jesus</Redish> (John 14: 6; Acts 4:12).</li>
                        <li><Blueish>Salvation is a gift from God, through faith, as a result of grace and not by works</Blueish> (Ephesians 2:8-9).</li>
                        <li><Redish>Heaven and hell are literal</Redish> (2 Thessalonians 1:5-9; Matthew 25:41).</li>
                        <li><Blueish>The Bible must be the only foundation for all beliefs </Blueish> (Psalm 119:89, Matthew 24:35).</li>
                    </ul>

                    <p><strong>BEWARE OF:</strong></p>

                    <ul>
                        <li><Redish>Overemphasis on any points of doctrine</Redish></li>
                        <li><Blueish>Isolation or restriction from others such as family members, friends and or other evangelical churches</Blueish></li>
                        <li><Redish>A sense of spiritual elitism and superiority</Redish></li>
                    </ul>

                    <p className='m-2'>
                        You may also want to search out a church that offers the “Alpha” course.
                        This course teaches the foundations of the Christian faith in a small relaxed group setting 
                        <Redish>Phone: 1-800-743-0899.</Redish> 
                        On-line <a href="http://www.alphacanada.org" style={{color: "#178B96"}}>www.alphacanada.org</a>
                        <a href="http://www.alphausa.org" style={{color: "#178B96"}}>www.alphausa.org</a>  
                        
                        <Blueish><strong>Sciptures of Promise:</strong></Blueish> “And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together,
                        as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching” (Hebrews 10:24-25).
                        <a href="https://www.crossroads.ca" style={{color: "#178B96"}}> www.crossroads.ca</a>
                        – <Redish>Prayer Line 1-866-273-4444</Redish>    
                    </p>

                    <p className='m-3'>
                        <Blueish><u>PEACE</u></Blueish> - Everyone is in search of peace. Blaise Pascal says “There is a God-shaped vacuum in the heart of every man which cannot be filled by any created thing, but only by God, the Creator, made known through Jesus”.  When we accept God’s gift of His Son Jesus Christ into our lives, we are on the road to the “peace that passes all understanding” (Philippians 4:6-7).
                        <br/><strong>Peace Stealers</strong>
                    </p>

                    <ul className='m-4'>
                        <li><Redish>Fear</Redish> = <Redish><strong>F</strong></Redish>alse <Redish><strong>E</strong></Redish>vidence &nbsp;
                         <Redish><strong>A</strong></Redish>ppearing <Redish><strong>R</strong></Redish>eal
                        </li>
                        <li><Blueish>Heartache and loss</Blueish></li>
                        <li><Redish>Habitual sin</Redish></li>
                        <li><Blueish>Problems we cannot solve and circumstances beyond our control</Blueish></li>
                        <li><Redish>Overcommiting</Redish></li>
                    </ul>

                    <p className='m-2'>
                    …. just to name a few. So the question remains, HOW do we find peace when life hands us lemons – when circumstances are chronically disappointing, when even our lemons are rotten? First of all, peace comes when we receive forgiveness for our sins; then as we turn each of our unsolvable situations into God’s hands and simply trust Him, we begin to understand the scripture, “Be still and know that I am God” (Psalm 46:10).  God is good and He is faithful.   Prayer   Dear God, I desire to walk in the peace that Jesus died on the cross for me to have. Help me to identify the “peace stealers” in my life and give me the strength, determination and commitment to make a change. I release all my fears, concerns, my schedule and my life over to You.   Scriptures of Promise   “Don’t worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done. Then you will experience God’s peace, which exceeds anything we can understand. His peace will guard your hearts and minds as you live in Christ Jesus” (Philippians 4:6.7).    “Now may the Lord of peace Himself give you His peace at all times and in every situation”   (2 Thessalonians 3:16).   “I am leaving you with a gift—peace of mind and heart. And the peace I give is a gift the world cannot give. So don’t be troubled or afraid” (John 14:27).     
                    
                        <br /> <strong>Resources:</strong> 
                        <a href="https://www.100huntley.com" style={{color: "#178B96"}}> www.100huntley.com;</a> 
                        <a href="https://www.drgrantmullen.com" style={{color: "#178B96"}}> www.drgrantmullen.com;</a> 
                        <a href="https://www.crossroads.ca" style={{color: "#178B96"}}> www.crossroads.ca</a>
                        – <Redish>Prayer Line 1-866-273-4444</Redish> 
                     </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="9">
                <Accordion.Header>5A - HOLY SPIRIT MODULE</Accordion.Header>
                <Accordion.Body>
                    <p className='m-3'>
                        <Blueish><u><strong>MODULE FROM THE PRAYER PARTNER TRAINING MANUAL</strong></u></Blueish> - <Redish><strong>Feb. 28, 2012</strong></Redish>  - <strong>The Work of the Holy Spirit</strong> God desires for believers to receive His gifts. These gifts come to us freely by God’s grace, to empower us to carry on the supernatural aspects of the ministry of Jesus Christ. (John 14:12) This means that ultimately, the Lord Jesus, not the individual, is the one who is acknowledged by the exercise of the gift. Help is to come from the Lord and we are simply His vessels. Acts 1:8 makes it clear that the purpose of the infilling of the Holy Spirit is to empower us to witness and proclaim the gospel boldly. “But you shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth.” (Also see Acts1: 5) Being filled with the Holy Spirit is a step through a doorway into a new realm of Spirit-filled living in which we are able to walk daily. (Eph. 5:18; Gal.5: 25) All those who minister on the telephones should make it their goal to grow continually in their personal walk with God and to covet all of the gifts God desires to give His children. 
                        <br/>
                        <strong>There seem to be two main views concerning the Baptism of the Holy Spirit:</strong> There are those who believe that it refers to the Holy Spirit coming into a person’s heart at the moment of salvation and generally this view is that the work of the Spirit is complete at the point of salvation. Others believe that a person automatically receives the Holy Spirit at the moment of salvation, but they say that the “baptism” of the Holy Spirit is a separate event, which is usually accompanied by the outward evidence of being able to pray in tongues. This subject should not be a dividing issue within the body of Christ. In the spirit of unity, as believers, please do not argue or debate your belief, but instead focus on praying that the Holy Spirit will reveal Himself to the caller and lead them into His truth.

                        <br/>
                        <strong>Speaking in Tongues while Ministering to a Caller:</strong> Please remember that if you personally practise praying in tongues, <strong><u>refrain from doing so on the phones</u></strong>, unless the caller has initiated speaking in tongues first. Many callers will not recognize the gift of tongues and may think you are speaking a foreign language to them. This can be frightening and confuse the caller. Also, you are trying to establish trust in a brief period of time so your conversation must be encouraging and allow the caller to feel safe.   
                    
                        <br/>
                        <strong>Understanding Speaking in Tongues Reference:</strong> “.... for they heard them speak with tongues and magnify God.” (Acts 10:44-46) The purpose of speaking in tongues is to allow the Holy Spirit to pray and minister to God on our behalf and through us. (1 Cor.14: 4,28) It is primarily a relationship gift, as are all of the gifts of the Holy Spirit. It is our spirit speaking directly to God. (1Cor. 14: 2) It is also a gift to assist in worship. (John 4:24) It is also used as a ministry to the Body of Christ, for the edification of the whole assembly (usually accompanied by someone who has the gift of interpretation). (1 Cor.14: 26-29) This gift is only possible because the Holy Spirit empowers and gives the language, while the believer provides the faith and the will to initiate the speaking. Some have questioned why speaking in other tongues should be the evidence of an experience designed to help one give witness for Christ. James tells us that the tongue is the most difficult member of the body to control. Obviously, if the Holy Spirit controls our tongue, He is given access to every area of our life. (James 3:2) In no sense should speaking in other tongues be understood as an experience where you lose control of yourself. (1 Cor. 14:32) 

                        <br />
                        <strong>
                        If the caller wishes to receive the gift of speaking in tongues:
                        </strong>
                   </p>
                   <ul className='m-4'>
                        <li><Redish>Be sure that the person is a believer. If they are not, lead them to salvation.</Redish></li>
                        <li><Blueish>Share some basic Scriptural concepts regarding this experience including its purpose </Blueish>(Acts 1:4-8),
                         <Blueish>nature and its initial evidence.</Blueish> (Acts 2:1-3)
                        </li>
                        <li><Redish>Share the fact that this experience is a gift, which God desires to give to all of His children. It is received by simple faith.</Redish> (Luke 11:9-13)</li>
                        <li><Blueish>Encourage the person to begin praising and worshipping the Lord while expecting the Holy Spirit to provide a new prayer language. As this occurs, encourage the believer to speak in tongues by faith.</Blueish> (Acts. 2:38-39)</li>
                        <li><Redish>If the person receives the gift of speaking in tongues during the call, encourage them to continue using their prayer language daily and to read a book on the experience.</Redish>(Jude 1:20; 1Cor. 14:14-16)</li>
                        <li><Blueish>· If the person does not receive the gift at this time, encourage them to continue to seek the Lord.</Blueish>  (Luke 11:13)</li>
                   </ul>

                    <p>
                        <strong>After ensuring they have accepted Christ, you may <u>lead</u> them in a prayer similar to this: <u>Prayer to Receive the Baptism of the Holy Spirit:</u></strong> “Father, I come before your throne in the mighty name of Jesus. You said that if I would ask for the Holy Spirit, that you would give Him to me. I am now asking. Father, I receive you as my baptizer, the author and finisher of my faith, my comfort and wisdom. By faith I am believing that I have received the baptismof the Holy Spirit and the evidence of speaking in my prayer language. Thank you, Holy Spirit for leading, guiding and comforting me. In the name Jesus.”   
                        <br/>

                        <strong>Using the Gifts in Ministry:</strong> Please remember that God desires to bless His children with good gifts. 1 Corinthians 13 shares with us that we may have a gift or gifts, but the greatest gift is LOVE. We must use LOVE as our guideline and barometer for ministry. (1 Cor. 13:13) Many of the gifts God gives us are used in a corporate setting. (1Cor. 14:1-19) Therefore, we may use a gift, without the caller necessarily knowing we are, and we do not need to make a comment in this regard. These gifts flow out of our relationship with God and are used in our day-to-day relationships with people. A caller may request more information on any one of the gifts. Give a brief explanation of the gift and pray for the caller. Encourage the caller to speak to their pastor about the gifts and the use of them in their church. Encourage the caller to read 1 Cor.12:7-11 and to continue to seek God. 
                            <Redish>If you are uncomfortable, lack understanding or disagree with the teaching of the gifts of the Holy Spirit, rather than continue with the call yourself, please pass the call onto another prayer partner who is able to minister effectively in this particular area. Be cautious to not discourage the caller by expressing your personal opinions on the subject. </Redish>
                    </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="10">
                <Accordion.Header>5B - PLAN OF SALVATION</Accordion.Header>
                <Accordion.Body>
                    <h5><strong>Discover Jesus...<Blueish>THE PLAN OF SALVATION</Blueish></strong></h5>
                    <Banner>
                        <p>Would you like to ... Find peace with god? Learn about God’s ways? Find out how to have a personal relationship with Jesus Christ?</p>
                        <img src={require("../assets/images/5bimage.png")} alt="discover-jesus-tree" />
                    </Banner>
                    <p className='m-3'>
                        <strong>Discover The Gospel of Jesus Christ God Loves You – John 3:16</strong> For God so loved the world that He gave His only begotten Son, that whoever believes in Him would not perish but have everlasting life.   You Are a Sinner – Romans 3:23 For all have sinned and fall short of the glory of God.   Jesus Christ is Your Answer – John 11:25-26 Jesus said to her, “I am the resurrection and the life. He who believes in Me, though he may die, he shall live. And whoever lives and believes in Me shall never die. Do you believe this?”   God’s Grace Is Sufficient – Ephesians 2:8-9 By grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast.   Repentance Is Necessary – 1 John 1:9 If we confess our sins, He is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.   Faith Is the Key to Eternal Life – 1 John 5:13 These things I have written to you who believe in the name of the Son of God, that you may know that you have eternal life.   Peace Is the Result – Romans 5:1-2 Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ, through whom also we have access by faith into this grace in which we stand, and rejoice in hope of the glory of God.   
                    
                        <br />
                        <strong>How Will You Respond?:</strong> Would you like to respond to God’s gift of Salvation? Invite Jesus into your life as your Lord and Saviour, through the following prayer: “Lord Jesus, thank you for dying on the cross for my sins. I open my life and receive you now as my Saviour and Lord. Please forgive my sins. I accept your peace, forgiveness and your gift of eternal life. Amen.”      
                    
                        <br />
                        <strong>A New Beginning:</strong> This is a new beginning in your relationship with our Lord, Jesus Christ. God bless you in making this vital and life changing decision. God wants you to enjoy the many blessings that He has made available to you through His Son Jesus. May God richly bless you in your new venture with Christ. Remember to always put your faith in Him, day by day. He is there to provide guidance, strength, wisdom, provision and help in times of need. If you have not already done so, we encourage you to check out our topical videos on 100huntley.com. Crossroads is happy to help. In fact, that’s the whole reason we exist as a ministry. We would like to send you a letter of encouragement to help you with your walk in the Lord. If you wish to receive this encouragement, please give us your name and address and/or email address and we will mail/email this to you. Also, the daily <strong>100 Huntley Street</strong> telecast and the 24-hour-a-day telephone prayer lines are available for the same reason. God loves you and we love you too!
                    </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="11">
                <Accordion.Header>5C - SALVATION REDEDICATION COACHING</Accordion.Header>
                <Accordion.Body>
                    <h6><Blueish>PRAYER PARTNER COACHING HIGHLIGHTS:</Blueish></h6>
                    <p>
                        <strong>Salvation & Rededication: </strong> One of our primary goals is to gain souls for the Kingdom of God.  We have observed, however, that the names of some callers are showing up repeatedly as a salvation or rededication.  <br/>
                        <strong>Purpose:</strong> The purpose of this Addendum is to highlight a few key points for handling Salvation and Rededication calls that will help to make our Follow-up program more effective.
                    </p>

                    <p className='m-4'><Redish>1. Ask a clear, direct and brief question to confirm the caller’s salvation experience.</Redish></p>

                    <p>The exception is when you know the caller is a believer or the caller identifies him/herself as a “born-again” believer.  Suggestion: “Do you know Jesus Christ as your personal Savior?”</p>

                    <p className='m-4'> <Redish>2. Ask a casual follow-up question when the caller decides to accept Jesus or rededicate his/her life.</Redish></p>

                    <p>This additional question will help the prayer partner determine whether the call is an “initial” Salvation/Rededication decision or a “repeat.”  Suggestion: “May I ask whether you have recently prayed with any of our prayer partners before to receive Jesus as Saviour or to rededicate your life to Him?”</p>
                
                    <p className='m-4'> 3. Record all decisions to follow Jesus as Salvation/Rededication on the Ministry Response Form.</p>

                    <p>Please note specifically if they are a <strong>“first time”</strong> salvation decision or if they have rededicated their lives back to Jesus.  
                        These decisions will receive follow-up calls and the salvation series mailings.  <strong>Note:</strong> If the caller had previously rededicated their life to the Lord within 6 months, 
                        it is not considered to be a “valid” rededication. They may need reassurance of salvation and discipleship <Blueish>(encourage them to speak to a pastor or join our email mentoring program)</Blueish>.
                    </p>

                    <p className='m-4'><Redish>4. Offer Resources; especially our walk of faith email mentoring program</Redish></p>

                    <p>
                        This <strong>Prayer Key</strong> is especially important if the caller indicates that he/she has previously prayed the salvation or rededication prayer over the prayer lines.
                        Encourage the caller to join our email mentoring program noted on the Ministry Response Form or go to the Ministry website for topical teachings on subjects such as salvation.
                        You may also want to offer to mail the “Questions and Answers” booklet and other relevant brochures.<Redish> Completing the Prayer Partner Ministry Response (Beige) Form</Redish>
                    </p>

                    <ol>
                        <li>Give a brief summary on background information that led to the salvation/rededication.</li>
                        <li>Print contact information clearly. (If caller does not wish to provide the contact information, we still record the call as a salvation/rededication and we will include it for ongoing prayer).</li>
                        <li>Except for a P.O. Box address, confirm whether the address includes an apartment or unit number.</li>
                        <li>Obtain an email address (print clearly) and the phone number; noting the best time to call.</li>
                        <li>Confirm all information by reading it back to the caller.</li>
                    </ol>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="12">
                <Accordion.Header>6 - PRAYER PARTNER COACHING HIGHLIGHTS</Accordion.Header>
                <Accordion.Body>
                    <h6 className='m-2'><Blueish><strong>1. PRAYER KEYS (LOVING C.P.R)</strong></Blueish></h6>
                    <SixTable>
                        <thead>
                            <tr>
                                <th></th>
                                <th>GOAL</th>
                                <th>GUIDELINES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>
                                    <strong>LISTENING LOVINGLY & ACTIVELY</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li> To convey to the caller that their need is important to us and to God.</li>
                                        <li>To help the Prayer Partner clearly understand the person’s need, identify the feelings in the need, and determine the Scriptures to share and/or pray.</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Use verbal encouragers (“Uh huh” etc.)</li>
                                        <li>Listen for feelings/emotions behind the content being related.</li>
                                        <li>Listening lovingly does not mean accommodating callers who may want to talk at length about their problem.</li>
                                        <li>Discern, use wisdom, and be polite when it is time to transition to pray or bring the call to an end.</li>
                                    </ul>
                                    <Redish><strong>Suggestions:</strong></Redish> “The Lord is well able to work this out, so let’s go to prayer now.
                                    ” “I need to take another call, so let’s just leave this in the hands of the Lord to work it out. 
                                    We’ll also pray over your request for the next seven days. God bless you!”  

                                </td>
                            </tr>

                            <tr>
                                <td className='text-center'>
                                    <strong>CLARIFYING PRAYER REQUEST</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>To convey to the caller that someone is listening and wants to understand.</li>
                                        <li>To give the caller an opportunity to correct any misunderstanding the Prayer Partner may have about the problem.</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Briefly restate, in your own words, both the content and feelings the caller has expressed to make sure you understand the need.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center'>
                                    <strong>PRAYING WITH SCRIPTURES</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>To share God’s wisdom and to encourage the caller.</li>
                                        <li>To pray the <Redish><strong>WILL</strong></Redish> of God, the <Redish><strong>WORD</strong></Redish> of God, and in <Redish><strong>FAITH</strong></Redish>.
                                         <Blueish>(This is the “WWF” Key)</Blueish></li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Determine by listening to the caller and to the Holy Spirit the Scripture passages and/or Biblical principles that apply to the caller’s situation.</li>
                                        <li>Use the language of the applicable passages in your prayer.</li>
                                        <li>Share the text and reference of at least one applicable Scripture with the caller.</li>
                                        <li>Pray for the specific need.  Don’t pray “all around the world.” Remember to pray for related feelings or emotions.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                 <td className='text-center'>
                                    <strong>OFFERING RESOURCES</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>To equip the caller for continued ministry after the prayer call by offering literature, resources, and suggestions for referrals appropriate to the need.</li>
                                        <li>Please clarify that <Redish><strong>some resources are suggestions; not referrals</strong></Redish></li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Encourage callers to go to the Ministry websites for literature and videos.</li>
                                        <li>Use the <Blueish><strong>RESOURCES</strong></Blueish> List provided.</li>
                                        <li>For Church suggestions, complete a <Redish>Ministry Resource Form (Beige)</Redish> for a follow-up call.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </SixTable>
                    <h6 className='m-2'><Blueish><strong>2. GENERAL MINISTRY KEYS</strong></Blueish></h6>
                    <SixTable>
                        <thead>
                            <tr>
                                <th></th>
                                <th>GOAL</th>
                                <th>GUIDELINES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>
                                    <strong>GIVE A WELCOMING OPEN RESPONSE</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>To represent Crossroads Ministry in a professional manner.</li>
                                        <li>To convey to the caller that we welcome their call.</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            “Good morning/afternoon/night, thank you for calling the Prayer Line.
                                            How may I pray for you?” “Thank you for calling the Prayer Line.  My name is  _____________   . 
                                            How may I pray for you?” (Including your name in the greeting invites the caller to spontaneously give his/her name. 
                                            Refer to the caller by name during your conversation/prayer.)</li>
                                        <li> Avoid greetings or comments that are overly friendly or sound too familiar.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center'>
                                    <strong>CONFIRM THE CALLER’S PERSONAL RELATIONSHIP WITH JESUS</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>To save souls for God’s Kingdom by giving callers the opportunity to receive Jesus as Saviour if they do not yet have a personal relationship with Him.
                                            (Evangelization).</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Unless the caller identifies him/herself as a “born again believer,” ask a clear, direct, and brief question during your conversation to confirm the caller’s salvation experience: “Do you know Jesus Christ as your personal Saviour?”</li>
                                        <li><Redish><strong>NOTE:</strong></Redish> If the call results in a Salvation or Rededication, carefully complete the <Blueish>Ministry Response Form (Beige)</Blueish>, and include a brief description of the caller’s situation to assist with the follow-up.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center'>
                                    <strong>ASK OPEN-ENDED QUESTIONS</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>To prompt the caller to share and give a broader answer that will help the Prayer Partner better discern how to pray, especially if the caller is not saying much.</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Be careful not to pry or probe into the caller’s affairs.</li>
                                        <li>Avoid unnecessary questions so callers don’t feel they are being interrogated.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center'>
                                    <strong>BE PROFRESSIONAL</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>To represent Christ and the Crossroads Ministry in a praiseworthy manner.</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Prayer Partners you are on the “front lines” of the Ministry.</li>
                                        <li>Always display a Christ-like attitude in your remarks and responses.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center'>
                                    <strong>BE ENCOURAGING</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>To uplift the downhearted and encourage them to rejoice in the Lord despite their circumstances.</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Share God’s love, His Word, and His perspective on the problem.</li>
                                        <li>Remember not all callers can be helped.</li>
                                        <li>Limit sharing of personal experiences.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center'>
                                    <strong>CONTROL THE CALL</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>To keep the timeframe reasonable for the nature of the call.</li>
                                        <li>To manage caller expectations.</li>
                                        <li>To be available for other callers.</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Longer timeframes are appropriate for salvation, rededication and suicide calls.</li>
                                        <li>See suggestions under Listening Prayer Key (Page 1) for transitioning to prayer or ending a lengthy call.</li>
                                        <li>Remember that Prayer Partners cannot solve other people’s problems.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </SixTable>

                    <h6 className='m-2'><Blueish><strong>3. MINISTRY BOUNDARIES</strong></Blueish></h6>
                    <p>Ministry Boundaries are practices to be avoided while ministering on the phones.  Observation of the Ministry Boundaries will help Prayer Partners to remain within the scope of the Crossroads Prayer Centre’s mission which is Prayer. (Not Counselling.)  </p>
                    <p className='text-center'><Redish><strong>The Crossroads Prayer Centre Mission Statement</strong></Redish></p>
                    <p className='text-center'><Blueish>“. . . To meet the needs of individuals through prayer, resources, and referral.”</Blueish></p>
                    <SixTable>
                        <thead>
                            <tr>
                                <th></th>
                                <th>GOAL</th>
                                <th>GUIDELINES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>
                                    <strong>TEACHING, PREACHING, COUNSELLING</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>Don’t try to solve the caller’s problems, meet their needs, or change their lives.  Only God can do that!</li>
                                        <li>Don’t preach while you pray.</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li><u>Briefly</u> identify relevant principles and precepts from the Word of God.</li>
                                        <li>Offer resource suggestions.</li>
                                        <li>Encourage callers to meet with their pastor or a professional counselor.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center'>
                                    <strong>SOCIALIZING</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>Do not comment in detail about your own experiences.</li>
                                        <li>Do not fall in the trap of creating a dependency or following (callers looking for a “special” Prayer Partner).</li>
                                        <li>Never contact a caller outside of the Ministry in <strong>ANY</strong> way whatsoever.</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Be mindful that socializing sets up callers to expect the same “service” from other Prayer Partners.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center'>
                                    <strong>CHILD ABUSE</strong>
                                </td>
                                <td>
                                    <ul>
                                        <li>“Duty to report” <Blueish>(unless this is proven to be done maliciously, the prayer partner will not be held liable)</Blueish></li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            If it is suspected that a child is in need of protection (from abuse/neglect), this must be reported, even when it is considered confidential or privileged information. 
                                            <Redish><strong> Please contact the Prayer Centre Shift Leader and the Volunteer Ministry Prayer Representatives</strong></Redish>    
                                        </li>
                                   </ul>
                                </td>
                            </tr>
                        </tbody>
                    </SixTable>

                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="13">
                <Accordion.Header>7 - MODEL PRAYERS</Accordion.Header>
                <Accordion.Body>
                <Blueish><strong><Link to="/modelPrayers"  style={{color: "#178B96"}}>View Model Prayers Page</Link></strong></Blueish>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="14">
                <Accordion.Header> 8 - COACHING CONNECT</Accordion.Header>
                <Accordion.Body>
                    <h5 className='m-2 text-center'><Blueish><strong>COACHING CONNECT</strong></Blueish></h5>
                    <DarkHeader>PRAYING BEFORE YOUR SHIFT</DarkHeader>

                    <p>We are excited to share with you two amazing verses of Scripture that capture the essence of the “Loving CPR” prayer line template and show us how to make our interactions with callers pleasing to the Lord.  </p>
                    <p className='text-center'><Blueish><strong>Colossians 5:5-6 | English Standard Version</strong></Blueish></p>
                    <p className='text-center'><Redish> Walk in wisdom toward outsiders, making the best use of the time. 
                        Let your speech always be gracious, seasoned with salt, so that you may
                        know how you ought to answer each person.
                    </Redish></p>

                    <p>These verses so clearly reflect the heart of our prayer ministry that we are encouraging you to include them in your preparation before each shift.
                          Speak them to yourself and/or include them in your prayer before you start taking calls.
                         Below you will find the updated “Before Starting Your Shift” model prayer that now includes the verses.  
                    </p>

                    <p><Redish><strong><u>MODEL PRAYER</u></strong></Redish></p>
                    <h6><Blueish>BEFORE</Blueish> Starting Your Shift</h6>
                    <p>Heavenly Father, I thank you for giving me the privilege of bringing the needs of others before you in prayer. 
                        I ask for your wisdom as I interact with each caller to make the best use of the time spent on each call. Let my speech always be gracious, seasoned with salt, so that I will know how to respond to each person. I ask for the fresh anointing of your Holy Spirit to minister your love and the Word of your power through me. Thank you for your divine protection and for hiding me in your secret place.  In faith, I put on the full armour of God and apply the blood of Jesus over my total being and over everyone and everything that pertains to me.
                         I believe that ground will be taken for God’s Kingdom today in the authority of Jesus’ Name, Amen. 
                    </p>
                    <p className='text-center'><Blueish>We appreciate your faithful service on the prayer lines.</Blueish></p>
                    <p className='text-center'><Blueish><strong>MAY GOD RICHLY BLESS YOU!</strong></Blueish></p>

                    <DarkHeader>SUPPORTING THE CROSSROADS MANDATE</DarkHeader>
                    <p> Our ministry on the prayer lines can help to position Crossroads/100 Huntley Street, its staff, volunteers and callers to receive God’s commanded blessing of Psalm 133.
                         “…when God’s people live [minister] together in unity…there the Lord bestows his blessing…” Let us do our part, as we ensure that our ministry on the prayer lines remains aligned with the Crossroads mandate. The Crossroads Mandate Crossroads Christian Communications Inc./100 Huntley Street is committed to minister to individuals at all stages of their spiritual journey. Essentially, our mandate is to introduce and encourage growth in the Christian faith. Supporting this mandate means that our style of ministry on the prayer lines may be different from that of other organizations. However, as one prayer partner has said concerning our callers, “God has led them to the Crossroads prayer line for a reason.” 
                        We thank God for the mandate that He has given to Crossroads, and the opportunity that we have to support its fulfillment. Supporting the Mandate As volunteers and staff of the Prayer Centre, please note some ways that we may support the Crossroads mandate through the prayer lines:
                    </p>

                    <ol>
                        <li><Redish><strong>Observe the Prayer Centre Guidelines.</strong></Redish> (See the Coaching Highlights and “3-M” Prayer Centre Guide.) Without sacrificing your unique personality or spiritual maturity, observing the ministry guidelines will position you to flow in the anointing and blessing that result from operating in a spirit of unity.</li>
                        <li><Blueish><strong>Pray the Word and Will of God in Faith.</strong></Blueish> The wisdom and power of God is manifested in the Word of God. Our Model Prayers are designed to help you focus on using this strategy.</li>
                        <li><Redish><strong>Encourage fellowship in a Local Church.</strong></Redish> Our late Founder, David Mainse, had always been passionate about directing callers back to the local church community, and we remain committed to that vision.</li>
                        <li><Blueish><strong>Provide Crossroads-approved resource suggestions. </strong></Blueish>(See the Crossroads Resources List.) You may be familiar with other resources and ministries, especially ones that have helped you personally. However, we encourage you to bear in mind that a caller may not be spiritually at the place to receive the same benefit from those sources.</li>
                        <li><Redish><strong>Trust God’s faithfulness. </strong></Redish>God has started a good work in leading callers to our prayer lines. As we pray His Word into each situation, we can fully rely on His faithfulness to finish what He has started, through the operation of the Holy Spirit. (Philippians 1:6)</li>   
                    </ol>

                    <p className='text-center'><Blueish>It’s great having you on the Crossroads Prayer team. Thank you for your faithful service! </Blueish></p>
                    <DarkHeader>MONITORING YOUR CALL LENGTHS</DarkHeader>
                    <p>
                        We value the <strong>caring heart</strong> from which our prayer partners minister to callers.  We are committed to nurturing this strength. In caring for our callers, it is also important to ensure that the ministry guidelines for call length continues to be observed. In this section, we will review the guidelines for call length, identify some pitfalls of extended calls and provide tips for self-monitoring and observation of ministry parameters. 
                        <br/> <strong>Call Length Guideline:</strong> Using the Loving CPR model, most calls can be completed in 5-10 minutes; the exception is calls related to salvation, rededication, and suicide. Our intent is not to rush callers, but to eliminate the issues that we face with extended calls.
                    </p>
                    <p><Redish><strong><u>Pitfalls of Extended Calls</u></strong></Redish></p>
                        <ul>
                            <li>Deviates from the Ministry’s central mission – to support callers in <strong>PRAYER</strong>.</li>
                            <li>Sets up a double standard – leads some callers to conclude (incorrectly) that other prayer partners are less caring and supportive.</li>
                            <li>Encourages caller dependency and following – repeated hang-ups often result from a caller trying to find a particular prayer partner.</li>
                        </ul>
                    
                    <p><Redish><strong><u>Self-Monitoring Tips</u></strong></Redish></p>
                    <ul>
                        <li>If the time given to prayer is considerably shorter than the duration of the call, there is a strong possibility that too much conversation was involved.</li>
                        <li>Be aware of caller manipulation to guilt prayer partners into extending a call.</li>
                        <li>If most of your calls presently exceed seven <strong>(7)</strong> minutes and you would like help in shortening your call, please contact the Prayer Centre staff for assistance and we will schedule a coaching session with you.</li>
                    </ul>

                    <p><Redish><strong><u>Strategies & Recommendations</u></strong></Redish></p>
                    <ul>
                        <li>If a caller comments that other prayer partners have given them more time on the prayer lines, graciously respond with a statement like, “That’s not our standard practice. How can I pray for you?”</li>
                        <li>Attempts to take control of a call should begin after two to three <strong>(2-3)</strong> minutes of listening. You may say, 
                        “ _____________    , let’s take your requests(s) before the Lord in prayer.”  Or “Your Heavenly Father knows your need(s) before you ask; let’s enter His Presence in prayer now”.  If the caller continues speaking, politely repeat the statement indicating that you must go to prayer now.</li>
                        <li>Remain consistent with your call lengths; whether or not calls are waiting in the <strong>THRIO</strong> Call Centre queue.
                            Please take a moment in the <Blueish>“Wrapup”</Blueish> stage between calls to regroup your strength in the Lord and release the call to His “more than able“care. This allows you to prepare for other calls.  This is especially important after a difficult call.  Allow a moment for Holy Spirit to settle your heart and being; you are HIS and you are BELOVED...always.</li>
                    </ul>

                    <DarkHeader>GIVING ADVICE TO CALLERS</DarkHeader>
                    <p>
                        As you are aware, giving advice to callers is a ministry boundary - a practice to be avoided while ministering on the prayer lines.
                        We have observed that the passion of our Prayer Partners to be helpful has sometimes led to giving advice and sharing personal experiences with callers.
                        Interestingly, callers may be quite receptive, even happy to receive the information.  
                        However, we are mindful that what is shared with a good intention; could potentially have a negative outcome. 
                        The Prayer Partner Training Manual is clear on this guideline.  <Redish>“If you give specific advice or instruction concerning what another person should do with their personal life, you and the Crossroads Ministry could be legally liable.
                    ” Please keep in mind, some specific practices to avoid (DON’Ts):</Redish>
                    </p>

                    <ul>
                        <li>Don’t share information about illnesses or other experiences you or someone else may have had. Each caller’s circumstances are unique and only God knows all the details.</li>
                        <li>Don’t give medical advice or make other health-related suggestions. One cannot know all the details about the situation or the person’s medical history.  It is unwise to share information that may influence a caller’s decision and possibly produce harmful results.</li>
                    </ul>

                    <p>We encourage you to follow the <Blueish><strong><u>Loving CPR</u></strong></Blueish> template when taking calls:</p>
                    <ul>
                        <li><Blueish><u>L</u></Blueish>isten lovingly and actively</li>
                        <li><Blueish><u>C</u></Blueish>larify the request by stating what you will be praying about</li>
                        <li><Blueish><u>P</u></Blueish>ray the Word of God, the Will of God, and in Faith <strong>(WWF)</strong></li>
                        <li><Blueish><u>R</u></Blueish>esource offer – Please remember that offering resources include encouraging callers to visit their professional health care provider.</li>
                    </ul>

                    <h6><Blueish>MAY GOD RICHLY BLESS YOU!</Blueish></h6>

                    <DarkHeader>FEEDBACK FROM CALLERS</DarkHeader>
                    <p>Once more, we would like to thank you for making a significant difference in the lives of so many callers through your kind and compassionate ministry on the prayer lines. We are committed to providing ongoing support to help our prayer partners continue the caring prayer ministry they are accustomed to offering.  With this in mind, we would like to share the following insights and reminders - as learning opportunities - from unfavourable comments we have received from callers in the past.</p>
                    
                    <EightTable>
                        <tbody>
                        <tr>
                            <td>
                                1. Discern the caller’s emotional state and receptiveness
                            </td>
                            <td>
                                You may occasionally encounter callers who are already offended or agitated when they call. The Holy Spirit will help you discern as you listen for clues in the caller’s language, such as blaming, being argumentative, confrontational, or seeking your agreement with their point of view.  A kind, gentle answer turns away wrath: moving quickly into prayer will eliminate further dialogue and potential aggression. 
                            </td>
                        </tr>

                        <tr>
                            <td>2. Keep questions and comments to a minimum</td>
                            <td>Many complaints stem from what callers perceive as insensitive and judgmental responses from a prayer partner. It can be a mistake to probe into an issue, comment or offer your opinion.  This can open the door for callers to become offended.</td>
                        </tr>

                        <tr>
                            <td>3. Take control of the call	</td>
                            <td>It is best not to prolong a call, especially if you begin to sense tension from the caller.  After listening for the first few minutes <strong>(2-3)</strong>, politely transition into prayer.  You may say, “________________ , let’s give this concern over to the Lord.”</td>
                        </tr>

                        <tr>
                            <td>4. Move into prayer quickly	</td>
                            <td>Indicate your desire to pray the will of God in the caller’s situation.  When you pray, it is best to remember to pray Scriptures. The model prayer on Praying the Will of God may be adapted as necessary.  </td>
                        </tr>

                        <tr>
                            <td>5. Offer Resources	</td>
                            <td>If you sense that a caller would be receptive; you may offer resources <strong>(consider</strong>  <a href="https://www.crossroads.ca" style={{color: "#178B96"}}>crossroads.ca</a> <strong>solely, in order to complete the call quickly).</strong>  </td>
                        </tr>
                        </tbody>
                    </EightTable>
                    <DarkHeader>RESOURCE SUGGESTIONS</DarkHeader>
                    <p>Offering resources to callers is an integral part of the spiritual care we provide through the prayer lines.  Over the years, we have noticed that our prayer partners are more mindful to offer resource suggestions.  It is a blessing to see the increase in statistics.  Thank you! Please note a few helpful considerations when offering resources.  </p>
                    <EightTable>
                        <tbody>
                        <tr>
                            <td>
                            1. David Mainse’ 100 Words Blog	
                            </td>

                            <td>
                                David Mainse began a two-year journey through the Bible with his <strong>100Words</strong> devotional blog.
                                The daily email posts with Scripture, commentary and photographs are a great inspiration and resource for spiritual growth. 
                                Please encourage callers with internet service to read and or sign up to receive the blog at  <a href="https://www.100words.ca" style={{color: "#178B96"}}>www.100words.ca </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            2. When to offer resources	
                            </td>

                            <td>
                            We have received comments from prayer partners who thought that resources could only be offered to callers at the end of the call after they had prayed. 
                            Although the offering of resources is the last point of our <strong>“Loving CPR”</strong> template, a resource suggestion can be made at any point during your interaction with the caller.  
                            </td>
                        </tr>
                        <tr>
                            <td>
                            3. How to offer resources	
                            </td>

                            <td>
                            Some prayer partners have asked for input on how to introduce resources (eg. for Christian Counselling), without giving callers a negative impression. We have found that callers are quite receptive to a resource suggestion when it is prefaced by a statement such as, “May I suggest...” or “Have you considered...” These words encourage the caller that you are not telling them what to do; and that you are not making statements that could be interpreted as judgmental.  
                            </td>
                        </tr>
                        <tr>
                            <td>
                            4. Reminders	
                            </td>

                            <td>
                                <ul>
                                    <li>Keep <a href="https://www.100huntley.com" style={{color: "#178B96"}}>www.100huntley.com</a> at the top of your resource list.</li>
                                    <li>Do not forget our email mentoring program!</li>
                                    <li>Check the <strong>Resource List</strong> provided for other sources.</li>
                                    <li>We can mail out literature or brochures to callers without internet access.  Please familiarize yourself with these options.</li>
                                    <li>Record each resource offer/suggestion on your Prayer Form.</li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </EightTable>
                    <p className='text-center'>
                        <Blueish>
                        Your service on the prayer lines is invaluable and we appreciate your faithfulness. <br/>
                            <strong>MAY GOD RICHLY BLESS YOU!</strong>
                        </Blueish>
                    </p>

                    <DarkHeader>MINISTRY FOLLOW-UP PROCESS</DarkHeader>
                    <p>Our Ministry Follow-up Process is one of the amazing ways that we offer additional support and assistance to callers on their spiritual journey. The primary purpose of the process is to respond to calls with the following outcome or need: salvation, rededication, literature/brochure requests, requests for a church suggestion or a potential suicidal caller. </p>

                    <p><Redish><u><strong>Pitfalls of Extended Calls</strong></u></Redish></p>
                    <ul className='m-3'>
                        <li>Pastoral call-backs for reasons other than those stated above, are rarely available.</li>
                        <li>The <strong>Resources</strong> list that we have compiled, will in most instances, contain the information that Prayer Partners need to provide immediate assistance for callers who may need additional supports.</li>
                        <li>For callers who request further spiritual care, please encourage them to connect with a local church, and if appropriate, a Christian counsellor<strong>(please refer to Resources list under the subtitle, Emotional…Counselling Supports)</strong> .</li>
                        <li>Remember to mention <a href="https://www.100huntley.com" style={{color: "#178B96"}}>www.100huntley.com</a>, and <a href="https://www.intothecastle.com" style={{color: "#178B96"}}>www.intothecastle.com</a> which are our primary follow-up connections. These websites feature a wealth of information, testimonies and other resources that will continue to inspire and equip callers of all ages and stages.</li>
                        <li>The Prayer Partner Ministry Response Form is required to initiate the follow-up process for salvation, rededication and church suggestions. The Suicide Report form is required for callers who appear to be intentional about ending their life.  In all cases we require a summary of the caller’s situation to assist us in the follow-up ministry.</li>
                        <li>Please request an email when taking the caller’s contact information, as it gives us an option when we are unable to reach a caller by phone. Please remember to repeat this information back to them.</li>
                    </ul>
                    <p className='text-center'>
                        <Blueish>
                        Thank you for your faithful service on the prayer lines. <br/>
                            <strong>MAY GOD RICHLY BLESS YOU!</strong>
                        </Blueish>
                    </p>

                    <DarkHeader>GENDER/SEXUAL ORIENTATION CONCERNS</DarkHeader>
                    <p><Redish><strong>Clarification is important – WHY are they calling?</strong></Redish>  Initially, it would be important to establish if the caller is simply stating a fact or is specifically requesting prayer for 
                    gender/sexual orientation.  It is our experience that some callers simply want to share this fact but have called for another 
                    reason, therefore, clarification is an important key. <Blueish><strong>Answer with Wisdom</strong></Blueish> – We suggest that you disregard the comment concerning their gender/sexual orientation and ask, “how can I pray for you today”.</p>

                    <p><Redish><strong><u>If the caller has NOT called for prayer concerning gender/sexual orientation</u></strong></Redish></p>
                    <ol className='m-3'>
                        <li>Follow the <strong>Loving CPR</strong> process.</li>
                        <li>Ask the caller if they have a personal relationship with Jesus/belong to a local Church
                            <ul>
                                <li>If the caller does have a personal relationship with Christ and belongs to a local Church, accept that answer and move into prayer for the specific prayer requested. 
                                     God may be taking the caller through a gentle process of healing; so we respect His timing.</li>
                                <li>
                                    If the caller does not have a personal relationship with Jesus, share the plan of salvation found in your resource binder. (Please remember that if the caller accepts Christ, complete a <Blueish><strong>“Ministry Response Form”</strong></Blueish> and 
                                    submit it to the office or <a href="mailto:nmcstats@crossroads.ca" style={{color: "#178B96"}}>nmcstats@crossroads.ca</a>   Also,
                                    If the caller does not have a local Church, complete a <Blueish><strong>“Ministry Response Form”</strong></Blueish>, as noted above.)
                                </li>
                            </ul>
                        </li>
                        <li>
                            Please adhere to the Ministry Boundaries <Redish>(In Coaching Highlights; section 3. Giving Advice or Opinions)</Redish>. 
                            Please review the goal and guidelines for this boundary.  It is crucial to be aware of any legal liability for specific comments, advice or instructions given to a caller.
                            Pray specifically for the caller’s prayer request and end the call.  You may wish to refer to the <Blueish><strong>“Model Prayers”</strong></Blueish> section of this binder to ensure your prayer and the caller’s prayer request are in alignment with the Will and Word of God.
                        </li>
                    </ol>

                    <p><Redish><strong><u>If you discern that the caller is sincerely reaching out for prayer on the topic of gender/sexual orientation</u></strong></Redish></p>
                    <ol>
                        <li>Prior to prayer, discern/gently ask if the caller wishes the Will of God in their life
                            <ul>
                                <li>If the caller agrees, you may wish to use the Model Prayer entitled <Blueish><strong>“General - Praying the Will of God”</strong></Blueish>.   
                                    This will ensure that your prayer and the caller’s request are in alignment with the Will and Word of God.</li>
                            </ul>
                        </li>
                        <li>Offer encouragement and kindness eg. “God loves you and cares for you (John 3:16).”</li>
                        <li>Offer help – “It takes a great deal of courage to admit and face areas of struggle. I would encourage you to speak with a pastor or a Christian counsellor.”
                            <ul>
                                <li>
                                Should the caller not have these resources, offer a pastoral callback for follow-up.
                                 Complete a “Ministry Response Form”; submit to <a href="mailto:nmcstats@crossroads.ca" style={{color: "#178B96"}}>nmcstats@crossroads.ca</a>
                                </li>
                            </ul>
                        </li>
                    </ol>

                    <p><Redish><strong><u>If you discern the caller is insincere and does not wish to pray for God’s Will and starts to argue or becomes aggressive:</u></strong></Redish></p>
                    <ol>
                        <li><Blueish><strong>Do not take the bait</strong></Blueish> – answer with kindness and prepare to end the call</li>
                        <li><Blueish><strong>Suggested remarks</strong></Blueish>: “I am happy to pray God’s Will for you, if you would agree, otherwise, I must end our call” Repeat: “I am happy to pray for God’s will…Goodbye.”</li>
                        <li><Blueish><strong>Hang up immediately</strong></Blueish> – if abusive/rude/profane – protect your mind and heart</li>
                        <li><Blueish><strong>They may be “baiting” you, expecting angry responses from Christians or trying to discredit the ministry.</strong></Blueish> Gentle remarks without arguments may soften hearts!</li>
                    </ol>

                <DarkHeader>DEALING WITH “SEX CALLERS”</DarkHeader>
                <p>
                    <strong>Insight: How the blood of Jesus brought freedom from fear of “sex callers”.</strong> One prayer partner commented that … “Calls from a male with an unknown number sometimes cause me to panic. (I started to wonder if it was a “sex caller”).  I need help in getting past this initial reaction”. This is not uncommon.  Some of our female prayer partners have shared with us that they struggle with receiving calls from a male caller with an unknown number. They may feel apprehensive or start to feel agitated that they could have a “sex caller” on the line. I also experienced the same panic after my first encounter with such a caller. After asking the Lord to help me, He graciously instructed me on how to use the blood of Jesus to “filter out” my fears and any potential “sex callers”. It brought me freedom! 
                </p>

                <p>
                    <strong>Here is how I applied the instruction:</strong> After listening to the prayer request, I ask the caller about his relationship with Jesus. Regardless of the response, I tell the caller that before praying for his prayer request , that I would like us to thank God for the power of the blood of Jesus that cleanses us from all unrighteousness. I then invite him to repeat after me: “Thank you, Father, for the precious blood of Jesus. Thank you that by the power of the Blood I am cleansed, and I am free. In Jesus Name. Amen” At that point I have had some callers hang up. Most often, however, the caller stays on the line. Freed from my fears, I then proceed to pray for the request. Praise God for the power of the blood of Jesus!
                </p>

                <p><Blueish><strong>From a former Crossroads Prayer Partner</strong></Blueish></p>

                <p><Redish>*please note that our staff acknowledges that this concern is not gender-specific.</Redish></p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="15">
                <Accordion.Header> 9 - HELPFUL SUGGESTIONS TO REMEMBER</Accordion.Header>
                <Accordion.Body>
                    <h5 className='text-center'><Blueish><strong>HELPFUL SUGGESTIONS TO REMEMBER</strong></Blueish></h5>
                    <h6><Redish><strong><u>STAND FIRM IN YOUR POSITION IN CHRIST</u></strong></Redish></h6>
                    <ul>
                        <li>Maintain a close relationship with God through daily devotions - prayer and Bible Study.</li>
                        <li>Maintain a healthy relationship with your family.</li>
                        <li>Maintain a strong tie and involvement in your church family.</li>
                        <li>Do not give any occasion to the enemy of your soul.</li>
                        <li>God has called you to be His Light and Salt, not to be everyone’s problem solver or burden bearer.</li>
                    </ul>

                    <h6><Redish><strong><u>GOD EQUIPS US TO MINISTER TO OTHERS</u></strong></Redish></h6>
                    <ul>
                        <li>God alone can change and transform a life.</li>
                        <li>You are his helper by being a <Blueish>GOOD LISTENER.</Blueish></li>
                        <li>Jesus is the answer - direct the needy to Him.</li>
                        <li>Encourage people to attend and fellowship in a faith filled, bible based church.</li>
                        <li>It is strength to recognize your own limitations.</li>
                        <li>Presume nothing - be certain you understand the person’s needs and that your response is also understood.</li>
                        <li>Never use pressure or guilt to achieve your goal.</li>
                        <li>To deny a person their feelings may be read as rejection or lack of understanding.</li>
                        <li>Feelings expressed are often a symptom of the real problems. </li>
                    </ul>

                    <h6><Redish><strong><u>GOD IS FAITHFUL TO HIS WORD & HIS SPIRIT IS AT WORK</u></strong></Redish></h6>
                    <ul>
                        <li>Never force a decision but permit the <strong>WORD of God</strong> and the <strong>HOLY SPIRIT</strong> to do their work.</li>
                        <li>Scripture is sufficient for every need - use it in context.</li>
                        <li>God has promised to bless His WORD - it will never return void when you proclaim it.</li>
                        <li>People seldom follow advice; let your words be few.</li>
                        <li>Prayers of a righteous person are very effective.</li>
                        <li>Do not let the call get out of control - guide the caller to focus on scripture and prayer.</li>
                    </ul>

                    <h6><Redish><strong><u>THE POWER OF LOSS CAN BE THE SOURCE OF A MULTITUDE OF PROBLEMS</u></strong></Redish></h6>
                    <ul>
                        <li>Sin is the loss of wholeness, sickness is the loss of health.</li>
                        <li>All loss usually demands an expression of grief.</li>
                        <li>To suppress grief will only cause it to surface again in negative, self-destructive ways.</li>
                        <li>Jesus Christ remains the answer to all loss.</li>
                        <li>Be careful not to cast aside feelings not worked through yet.</li>
                        <li>To give hope to people in crisis, we can help them recognize the abilities they do have and the support systems already available.</li>
                        <li>Do not fall into the trap of creating a dependency or following.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="16">
                <Accordion.Header> 10A - 3 M CARD</Accordion.Header>  
                <Accordion.Body>
                    <h5 className='text-center'><Blueish><strong>“3M” PRAYER PARTNER CARE GUIDE</strong></Blueish></h5>
                    <SixTable>
                        <thead>
                                <tr>
                                    <th>MAXIMIZE</th>
                                    <th>MINIMIZE</th>
                                    <th>REMOVE</th>
                                </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td className='p-4'><strong>PRAYER</strong></td>
                                <td><strong>CASUAL CONVERSATIONS</strong></td>
                                <td><strong>ADVICE OPINION COUNSELLING</strong></td>
                            </tr>

                            <tr>
                                <td className='p-4'><strong>THE WORD OF GOD</strong></td>
                                <td><strong>COMMENTS</strong></td>
                                <td><strong>PREACHING TEACHING DOCTRINAL VIEWS</strong></td>
                            </tr>
                            
                            <tr>
                                <td className='p-4'><strong>FAITH IN GOD’S POWER</strong></td>
                                <td><strong>SHARING EXPERIENCES STORYTELLING (YOURS & THE CALLER’S)</strong></td>
                                <td><strong>PROBLEM SOLVING PERSUASION</strong></td>
                            </tr>

                            <tr>
                                <td className='p-4'><strong>CARE RESOURCES & REFERRALS</strong></td>
                                <td><strong>QUESTIONING (EXCEPT SUICIDAL CALLERS)</strong></td>
                                <td><strong>JUDGEMENT DEPENDENCY</strong></td>
                            </tr>
                        </tbody>
                    </SixTable>
                    <p className='text-center p-2'><Redish>“So that your faith might not rest in with wisdom of men but in the power of God.” 1 Corinthians 2:5 (ESV)</Redish></p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="17">
                <Accordion.Header> 10B - MINISTRY RESPONSE FORM</Accordion.Header>
                <Accordion.Body>
                    <iframe 
                    src="https://docs.google.com/gview?url=https://brass-lynx-1229.twil.io/assets/MRF.docx&embedded=true"
                    style={{width:"100%", minHeight:"750px"}} ></iframe>
                </Accordion.Body>
            </Accordion.Item>
{/* 
            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="18">
                <Accordion.Header> 10C - PRAYER FORM</Accordion.Header>
                <Accordion.Body>
                </Accordion.Body>
            </Accordion.Item> */}

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="18">
                <Accordion.Header> 10C - SUICIDE REPORT</Accordion.Header>
                <Accordion.Body>
                    <iframe 
                    src="https://docs.google.com/gview?url=https://brass-lynx-1229.twil.io/assets/Suicidal_Intent_Report_Form.doc&embedded=true"
                    style={{width:"100%", minHeight:"750px"}} ></iframe>
                </Accordion.Body>
            </Accordion.Item>

            {/* <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="20">
                <Accordion.Header> 10E - PRAYER PARTNER INFORMATION FORM</Accordion.Header>
                <Accordion.Body>
                </Accordion.Body>
            </Accordion.Item> */}

            <Accordion.Item className="p-1" style={{borderBottom: "0"}} eventKey="19">
                <Accordion.Header> 10D - STATEMENT OF FAITH</Accordion.Header>
                <Accordion.Body>
                    <h5 className='text-center'><Blueish><strong>CROSSROADS CHRISTIAN COMMUNICATIONS INC.</strong></Blueish></h5>
                    <DarkHeader className='text-center'>STATEMENT OF FAITH</DarkHeader>
                    <p>The following is a statement of basis and principles to which Crossroads Ministry adheres. It is not intended to serve as a comprehensive doctrinal statement.</p>
                    <p><strong>We believe</strong> that God has revealed Himself as a trinity in unity, in the persons of the Father, Son and Holy Spirit, eternally existent.</p>
                    <p><strong>We believe</strong> in the divine inspiration and entire trustworthiness of the Bible as originally given and in its supreme authority in all matters.</p>
                    <p><strong>We believe</strong> in the deity of our Lord Jesus Christ, in His virgin birth, sinless life, vicarious and atoning death, bodily resurrection, in His ascension to the Father and in His future personal return in power and glory.</p>
                    <p><strong>We believe</strong> in the universal sinfulness and lost condition of all humanity and their need of redemption through regeneration by the grace of God through faith in Jesus Christ.</p>
                    <p><strong>We believe</strong> that every individual must accept Jesus Christ as his personal Savior and Lord.</p>
                    <p><strong>We believe</strong> in the presence and power of the Holy Spirit in the work of regeneration in His present ministry by whose indwelling the Christian is enabled to live a godly life.</p>
                    <p><strong>We believe</strong> in the one Holy Universal Church which is the Body of Christ, and to which all true believers belong and in its mission to witness concerning its Head, Jesus Christ preaching the gospel to all people.</p>
                
                    <DarkHeader className='text-center'>MINISTRY AGREEMENT AND PLEDGE OF CONFIDENTIALITY</DarkHeader>
                    <p>Crossroads Christian Communications Incorporated is committed to protecting the privacy of its partners and members. All personal information received by Crossroads is handled with strict confidentiality for the purpose of ministry, follow-up, and other donor related services.</p>
                
                    <p>Under no circumstances will I share any information leading to the identity of a caller to anyone outside of the Prayer Centre. In the event of my withdrawal or resignation, I will continue to hold in the strictest confidence all information related to the work of this ministry.</p>

                    <p>I absolve Crossroads of any action by me personally, that deviates from what has been specifically stated in the policies and procedures, training material and/or what has been assigned by the Ministry Division. This includes refraining from counseling, meeting with any caller, prophesying or performing deliverance.</p>
                
                    <p>Under no circumstances will I remove any confidential written material from the Prayer Centre and if working from my home will shred or destroy any information which includes names, phone numbers, addresses etc.</p>

                    <p>I, the undersigned, recognizing the serious and personal nature of this Christian ministry, and committing myself to the disciplines required, do hereby promise and covenant that I have read this document and will work in accordance with the above.</p>
               
                </Accordion.Body>
            </Accordion.Item>

            
        </Accordion>
    </Wrapper>
  )
}
export default PrayerBinder;

const Wrapper = styled.div`
font-family: 'Space Grotesk', sans-serif;
`;

const Header = styled.h1`
  font-weight: 1000;
`;

const Lead = styled.div`
    text-align: center;
    background-color: #FFEAE4;
    color: #FF7234;
    font-weight: bold;
`;

const Blueish = styled.span`
    color: #178B96 !important;
`;

const Redish = styled.span`
    color: #EC3310 !important;
`;

const DarkHeader = styled.h5`
    background-color: #00323B;
    color: white;
    font-weight: bolder;
    padding: 1vw;
`;

const Banner = styled.div`
    background-color: #00323B;
    color: white;
    font-weight: bolder;
    align-items: center;
    display: flex;
 `;

const ThreeTable = styled.table`
    padding: 0;
    margin: 0;
    thead{
        background-color: #00323B;
        color: white;
        font-weight: bolder;
       th {
        padding: 1vw;
       }
    }
    tbody{
        margin: 0;
        tr{
            margin: 0;
        }
        td{
            border: 1px solid #77B3B8;
            width: 50%;
            padding: 1vw;
        }
    }
`;
const SixTable = styled.table`
    padding: 0;
    margin: 0;
    thead{
        background-color: #00323B;
        color: white;
        font-weight: bolder;
       th {
        padding: 1vw;
       }
    }
    tbody{
        margin: 0;
        tr{
            margin: 0;
        }
        td{
            border: 1px solid #77B3B8;
            width: 33%;
            padding: 1vw;
        }
    }
`;

const  EightTable = styled.table`
    tr{
        border: 1px solid #77B3B8;
    }
    td{
        width: 50%;
    }
`;