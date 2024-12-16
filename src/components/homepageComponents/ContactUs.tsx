"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ContactBlockACF } from "@/types/acf";
import { sendContactForm } from "@/utils/fetchers/sendContactForm";
import ReCAPTCHA from "react-google-recaptcha";
import { checkWithReCaptcha } from "@/utils/fetchers/checkWithReCaptcha";

function ContactUs({ props, base64 }: { props: ContactBlockACF, base64: string }) {
  const [checked, setChecked] = useState<boolean[]>(
    Array(props.options.length).fill(false)
  );
  const [subject, setSubject] = useState<string>("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const [isSubmited, setIsSubmited] = useState(false);
  async function handleCaptchaSubmission(token: string | null) {
    await checkWithReCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  const [isHovered, setIsHovered] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState("");
  async function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsSubmited(true);
    if (isVerified) {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      const result = await sendContactForm(data, subject);

      console.log(result);

      if (result) {
        await handlerClick();
        setIsSending(true);
        setMessageSent("Message sent successfully");
        setTimeout(() => {
          setMessageSent("");
          setIsSubmited(false);
          setIsverified(false);
          setChecked(Array(props.options.length).fill(false));
          (e.target as HTMLFormElement)?.reset();
        }, 10000);
      } else {
        setIsSending(false);
        setMessageSent("Message not sent");
        setTimeout(() => {
          setMessageSent("");
          setIsSubmited(false);
          setIsverified(false);
          setChecked(Array(props.options.length).fill(false));
          (e.target as HTMLFormElement)?.reset();
        }, 10000);
      }
    }
  }

  function handleChangeChecked(options: boolean[], subject: string) {
    setChecked(options);
    setSubject(subject);
  }

  useEffect(() => {
    if (formRef.current) {
      const data = Object.fromEntries(new FormData(formRef.current));
      console.log(data);
      if (data.name !== "" && data.email !== "") {
        setIsSubmited(true);
      }
    }
  }, [checked]);

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
    link.download = `NorseaAtlantic.pdf`;
    link.click();
    URL.revokeObjectURL(href);
  }

  return (
    <div
      className="w-full overflow-hidden relative h-[980px] md:h-[780px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={props.content_id.split("#")[1]}
    >
      <Image
        src={props.background_image}
        alt={""}
        width={3600}
        height={700}
        className={
          isHovered
            ? " object-fill scale-100 h-full w-full transition-all duration-[6000ms] delay-75"
            : " object-fill scale-150 w-full h-full transition-all duration-[6000ms] delay-75"
        }
      />
      <div className="absolute top-0 left-0 z-10 bg-blue/50 w-full h-full flex justify-center py-8 md:py-0">
        <div className="h-full w-full max-w-[1440px] pl-6 pr-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          <div className="flex basis-0 md:basis-1/2 flex-col gap-6 md:gap-12">
            <div>
              <h2 className="text-white text-2xl md:text-4xl font-medium">
                {props.title}
              </h2>
              <div className="text-white text-base font-normal">
                {props.description}
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <span className="text-white text-base font-normal">
                {props.address}
              </span>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              handlerSubmit(e);
            }}
            className="flex flex-col basis-0 gap-4 md:gap-8 md:basis-1/2"
          >
            <div></div>
            <div className="gap-4 md:gap-8 flex flex-col md:flex-row">
              <div className="basis-full">
                <label htmlFor="company" className="text-white">
                  {props.form.company_text}
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="border border-white w-full h-8 px-2 bg-white/60"
                />
              </div>
              {/* <div className="basis-full md:basis-1/2">
                  <label htmlFor="position" className="text-white">
                    {props.form.position_text}
                  </label>
                  <input
                    required
                    type="text"
                    name="position"
                    id="position"
                    className="border border-white w-full h-8 px-2 bg-white/60"
                  />
                </div> */}
            </div>
            <div className="gap-4 md:gap-8 flex flex-col md:flex-row">
              <div className="basis-full md:basis-1/2">
                <label htmlFor="name" className="text-white">
                  {props.form.first_name_text}
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="border border-white w-full h-8 px-2 bg-white/60"
                />
              </div>
              <div className="basis-full md:basis-1/2">
                <label htmlFor="email" className="text-white">
                  {props.form.email_text}
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  className="border border-white w-full h-8 px-2 bg-white/60"
                />
              </div>
            </div>

            {/* <div className="gap-4 md:gap-8 flex flex-col md:flex-row">
                <div className="basis-full md:basis-1/2">
                  <label htmlFor="email" className="text-white">
                    {props.form.email_text}
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    className="border border-white w-full h-8 px-2 bg-white/60"
                  />
                </div>
                <div className="basis-full md:basis-1/2">
                  <label htmlFor="phone" className="text-white">
                    {props.form.phone_text}
                  </label>
                  <input
                    required
                    type="text"
                    pattern="\+?[0-9]{8,}"
                    name="phone"
                    id="phone"
                    className="border border-white w-full h-8 px-2 bg-white/60"
                  />
                </div>
              </div> */}
            <div>
              <label htmlFor="message" className="text-white">
                {props.form.message_text}
              </label>
              <textarea
                required
                name="message"
                id="message"
                className="border border-white w-full h-24 px-2 bg-white/60"
              />
            </div>
            <div className="text-sm text-white">
              {props.text_before_options}
            </div>
            <div className="grid md:grid-cols-2 gap-2 md:gap-4">
              {props.options.map((option, index) => (
                <div
                  key={option.option_name}
                  className="flex flex-row items-center cursor-pointer"
                  onClick={() =>
                    handleChangeChecked(
                      checked.map((_, i) => i === index),
                      option.option_name
                    )
                  }
                >
                  <div className="w-4 h-4 border shrink-0 border-white p-[1px] mr-2">
                    {checked[index] && (
                      <div className="w-full h-full bg-turquoise"></div>
                    )}
                  </div>
                  <label
                    htmlFor="option1"
                    className="flex items-center text-white"
                  >
                    {option.option_name}
                  </label>
                </div>
              ))}
            </div>
            {isSubmited && (
              <ReCAPTCHA
                sitekey={"6LeWVn0nAAAAADhPOJ8eaf9f5yGaLc2Y80bPVC3M"}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
              />
            )}
            <div className="flex gap-2 mt-4 items-center self-start">
              <button
                disabled={!isVerified}
                className="w-48 text-xl border border-turquoise flex items-center justify-center py-2 text-white
                  disabled:opacity-50 disabled:cursor-default disabled:hover:bg-turquoise disabled:hover:text-white transition-colors duration-200 bg-turquoise hover:bg-transparent hover:text-turquoise"
                type="submit"
              >
                {props.form.text_on_button}
              </button>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
