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
    <h1 className="cookie-policy-h1">Retningslinjer for informasjonskapsler</h1>
    <p>
        Ikrafttredelsesdato: 21-jun-2024 <br />
        Sist oppdatert: 21-jun-2024
    </p>

    &nbsp;
    <h5>Hva er informasjonskapsler?</h5>
    <div className="cookie-policy-p">
        <p>Denne retningslinjen forklarer hva informasjonskapsler er og hvordan vi bruker dem, hvilke typer informasjonskapsler vi bruker, det vil si informasjonen vi samler inn med informasjonskapsler og hvordan denne informasjonen brukes, og hvordan du kan administrere innstillingene for informasjonskapsler.</p>
        <p>Informasjonskapsler er små tekstfiler som brukes til å lagre små mengder informasjon. De lagres på enheten din når nettstedet lastes inn i nettleseren din. Disse informasjonskapslene hjelper oss med å få nettstedet til å fungere riktig, gjøre det sikrere, gi bedre brukeropplevelse, samt forstå hvordan nettstedet fungerer og analysere hva som fungerer og hva som må forbedres.</p>
    </div>

    &nbsp;
    <h5>Hvordan bruker vi informasjonskapsler?</h5>
    <div className="cookie-policy-p">
        <p>Som de fleste nettjenester bruker vårt nettsted førsteparts- og tredjeparts informasjonskapsler til flere formål. Førsteparts informasjonskapsler er hovedsakelig nødvendige for at nettstedet skal fungere riktig, og de samler ikke inn noen av dine personlig identifiserbare data.</p>
        <p>Tredjeparts informasjonskapsler som brukes på nettstedet vårt, er hovedsakelig for å forstå hvordan nettstedet fungerer, hvordan du samhandler med nettstedet vårt, holde våre tjenester sikre, gi annonser som er relevante for deg, og alt i alt gi deg en bedre og forbedret brukeropplevelse og hjelpe til med å fremskynde fremtidige interaksjoner med nettstedet vårt.</p>
    </div>

    &nbsp;
    <h5>Typer informasjonskapsler vi bruker</h5>

    <div className="cky-audit-table-element"></div>

    &nbsp;
    <h5 className='mb-5'>Administrer informasjonskapselinnstillinger</h5>

    <a className="cky-banner-element">Innstillinger for informasjonskapsler</a> <br />

    <div>
        <p>Du kan endre dine preferanser for informasjonskapsler når som helst ved å klikke på knappen ovenfor. Dette lar deg se gjennom banneret for samtykke til informasjonskapsler og endre dine preferanser eller trekke tilbake ditt samtykke med en gang.</p>
        <p>I tillegg tilbyr ulike nettlesere forskjellige metoder for å blokkere og slette informasjonskapsler som brukes av nettsteder. Du kan endre innstillingene i nettleseren din for å blokkere/slette informasjonskapsler. Nedenfor er lenker til supportdokumenter om hvordan du administrerer og sletter informasjonskapsler fra de største nettleserne.</p>
        <p>Chrome: <a href="https://support.google.com/accounts/answer/32050" target="_blank">https://support.google.com/accounts/answer/32050</a></p>
        <p>Safari: <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank">https://support.apple.com/en-in/guide/safari/sfri11471/mac</a></p>
        <p>Firefox: <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US" target="_blank">https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US</a></p>
        <p>Internet Explorer: <a href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank">https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc</a></p>
        <p>Hvis du bruker en annen nettleser, vennligst besøk nettleserens offisielle supportsider.</p>
    </div>

    &nbsp;
    <p className="cookie-policy-p">
        Retningslinjer for informasjonskapsler generert av <a target="_blank" href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW">CookieYes - Generator for retningslinjer for informasjonskapsler</a>.
    </p>
</div>

    )
}

export default TextComponent