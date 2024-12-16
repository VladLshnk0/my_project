'use client'
import React, { useEffect } from 'react'

function TextComponent() {

    useEffect(() => {
        const container = document.getElementById('contentContainer');
        if (container) {
            const headers = container.getElementsByTagName('h1');
            for (let i = 0; i < headers.length; i++) {
                headers[i].style.fontSize = '44px';
                headers[i].style.fontWeight = '500';
                headers[i].style.color = '#002856';
            }
            const headers2 = container.getElementsByTagName('h2');
            for (let i = 0; i < headers2.length; i++) {
                headers2[i].style.marginTop = '20px'
                headers2[i].style.fontSize = '24px';
                headers2[i].style.fontWeight = '500';
                headers2[i].style.color = '#002856';
            }
            const headers5 = container.getElementsByTagName('h5');
            for (let i = 0; i < headers5.length; i++) {
                headers5[i].style.marginTop = '20px'
                headers5[i].style.fontSize = '24px';
                headers5[i].style.fontWeight = '500';
                headers5[i].style.color = '#002856';
            }
            const paragraphs = container.getElementsByTagName('p');
            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.marginTop = '20px';
                paragraphs[i].style.fontSize = '18px';
                paragraphs[i].style.color = '#002856';
            }
            const listItems = container.getElementsByTagName('li');
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].style.listStyleType = 'circle';
                listItems[i].style.marginLeft = '20px';
                listItems[i].style.color = '#002856';
            }
            const imageWithCaptions = container.getElementsByTagName('figure');
            for (let i = 0; i < imageWithCaptions.length; i++) {
                imageWithCaptions[i].style.marginTop = '20px';
                imageWithCaptions[i].style.marginBottom = '20px';
            }
            const links = container.getElementsByTagName('a');
            for (let i = 0; i < links.length; i++) {
                links[i].style.color = '#002856';
                links[i].style.textDecoration = 'underline';
                links[i].style.fontWeight = '700';
            }
        }
    }, []);

    return (
        <div className='max-w-[1440px] mx-6 my-16' id="contentContainer">
            <h1 className="cookie-policy-h1">Cookie Policy</h1>
            <p>
                Effective Date: 21-Jun-2024 <br />
                Last Updated: 21-Jun-2024
            </p>

            &nbsp;
            <h5>What are cookies?</h5>
            <div className="cookie-policy-p"><p>This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used, and how to manage the cookie settings.</p> <p>Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.</p></div>

            &nbsp;
            <h5>How do we use cookies?</h5>
            <div className="cookie-policy-p"><p>As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.</p> <p>The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.</p></div>

            &nbsp;
            <h5>Types of Cookies we use</h5>

            <div className="cky-audit-table-element"></div>

            &nbsp;
            <h5 className='mb-5'>Manage cookie preferences</h5>

            <a className="cky-banner-element">Cookie Settings</a> <br />

            <div><p>You can change your cookie preferences any time by clicking the above button. This will let you revisit the cookie consent banner and change your preferences or withdraw your consent right away. </p> <p>In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. Listed below are the links to the support documents on how to manage and delete cookies from the major web browsers.</p> <p>Chrome: <a href="https://support.google.com/accounts/answer/32050" target="_blank">https://support.google.com/accounts/answer/32050</a></p><p>Safari: <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank">https://support.apple.com/en-in/guide/safari/sfri11471/mac</a></p><p>Firefox: <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US" target="_blank">https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US</a></p><p>Internet Explorer: <a href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank">https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc</a></p><p>If you are using any other web browser, please visit your browser’s official support documents.</p></div>


            &nbsp;
            <p className="cookie-policy-p">
                Cookie Policy Generated By  <a target="_blank" href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW">CookieYes - Cookie Policy Generator</a>.
            </p>
        </div>
    )
}

export default TextComponent