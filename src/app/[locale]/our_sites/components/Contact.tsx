'use client';
import { useRef, useState } from "react";
import Image from "next/image";
import type { ContactBlock } from "@/types/OurSitesACF";
import { sendContactForm } from "@/utils/fetchers/sendContactForm";
import ReCAPTCHA from "react-google-recaptcha";
import { checkWithReCaptcha } from "@/utils/fetchers/checkWithReCaptcha";

function Contact({ props, title, base64 }: { props: ContactBlock, title: string, base64: string }) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const [isSubmited, setIsSubmited] = useState(false);
  async function handleCaptchaSubmission(token: string | null) {
    await checkWithReCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState("");
  async function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmited(true);
    if (isVerified) {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      const result = await sendContactForm(data, title);

      if (result) {
        await handlerClick();
        setIsSending(true);
        setMessageSent("Message sent successfully");
        setTimeout(() => {
          setMessageSent("");
          setIsSubmited(false);
          setIsverified(false);
          (e.target as HTMLFormElement)?.reset();
        }, 10000);
      } else {
        setIsSending(false);
        setMessageSent("Message not sent");
        setTimeout(() => {
          setMessageSent("");
          setIsSubmited(false);
          setIsverified(false);
          (e.target as HTMLFormElement)?.reset();
        }, 10000);
      }
    }
  }

  async function handlerClick() {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = `${title.toLowerCase().split(' ').join('_')}.pdf`;
    link.click();
    URL.revokeObjectURL(href);
  }

  // useEffect(() => {
  //   if (formRef.current) {
  //     const data = Object.fromEntries(new FormData(formRef.current));
  //     console.log(data);
  //     if (data.name !== "" && data.email !== "") {
  //       setIsSubmited(true);
  //     }
  //   }
  // });

  return (
    <div className="max-w-[1440px] pl-5 pr-4 w-full flex flex-col gap-5 md:flex-row justify-between mt-8 mb-16">
      <div className="basis-full hidden md:block md:basis-1/2">
        <Image src={props.image} alt="Foto" width={500} height={500} className="object-cover w-full h-full"/>
        {/* <h3 className="hidden text-xl md:text-3xl text-blue font-medium" id={props.content_id.split("#")[1]}>
          {props.title}
        </h3>
        <div className="hidden mt-8 flex-row flex-wrap lg:flex-nowrap lg:flex-col gap-5">
          {contacts && contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-row gap-5 w-full h-44"
            >
              <Image
                src={contact.foto}
                width={175}
                height={175}
                alt="contact"
                className="w-44 h-full object-cover"
              />
              <div
                className="flex flex-col"
                id={contact.content_id.split("#")[1]}
              >
                <h3 className="text-blue text-xl font-medium">
                  {contact.full_name}
                </h3>
                <span className="text-turquoise text-lg font-light">
                  {contact.position}
                </span>
                <span className="mt-8 text-blue text-lg font-light">
                  {contact.email}
                </span>
                <span className="text-blue text-lg font-light">{contact.phone}</span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <form onSubmit={handlerSubmit} ref={formRef} className="basis-full md:basis-1/2 flex flex-col text-blue gap-4 mx-6">
        <h3 className="text-xl md:text-3xl font-medium">{props.title_form}</h3>
        <p>{props.form.text_about_pdf}</p>
        <div>
          <label htmlFor="name">{props.form.first_name_text}</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            className="border border-blue w-full h-8 px-1 bg-white/60"
          />
        </div>
        <div>
          <label htmlFor="name">{'Company'}</label>
          <input
            required
            id="sompany"
            name="company"
            type="text"
            className="border border-blue w-full h-8 px-1 bg-white/60"
          />
        </div>
        <div className="gap-8 flex flex-row">
          <div className="w-[50%]">
            <label htmlFor="email">{props.form.email_text}</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              className="border w-full h-8 px-1 bg-white/60"
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="phone">{props.form.phone_text}</label>
            <input
              required
              id="phone"
              name="phone"
              type="text"
              pattern="\+?[0-9]{8,}"
              className="border border-blue w-full h-8 px-1 bg-white/60"
            />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <input
            id="agreement"
            name="agreement"
            type="checkbox"
            onChange={() => setIsSubmited(true)}
            className="h-8 w-8 cursor-pointer"
          />
          <label htmlFor="agreement" className="text-sm">{props.form.text_agreement}</label>
        </div>
        {isSubmited && (
          <ReCAPTCHA
            sitekey={'6LeWVn0nAAAAADhPOJ8eaf9f5yGaLc2Y80bPVC3M'}
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
        )}
        <div className="flex justify-end items-center gap-4">
          {isSending === true && messageSent !== "" && (
            <span className="text-green-600 animate-pulse">
              {messageSent}
            </span>
          )}
          {isSending === false && messageSent !== "" && (
            <span className="text-red-600 animate-pulse">
              {messageSent}
            </span>
          )}
          <button
            disabled={!isVerified}
            className="w-48 border text-xl border-blue bg-blue text-white flex items-center 
            justify-center py-2 mt-4 transition-colors duration-200 hover:bg-transparent hover:text-blue
            disabled:opacity-50 disabled:cursor-default disabled:hover:bg-blue disabled:hover:text-white"
            type="submit"
          >
            {props.form.text_on_button}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
