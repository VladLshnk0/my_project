"use client";
import { useEffect, useRef, useState } from "react";
import { FormBlockContactUsACF } from "@/types/ContactUsACF";
import { sendContactForm } from "@/utils/fetchers/sendContactForm";
import ReCAPTCHA from "react-google-recaptcha";
import { checkWithReCaptcha } from "@/utils/fetchers/checkWithReCaptcha";
import Link from "next/link";

function Form({ props, base64 }: { props: FormBlockContactUsACF, base64: string }) {
  
  const [checked, setChecked] = useState<boolean[]>(Array(props.options.length).fill(false));
  const [subject, setSubject] = useState<string>("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const [isSubmited, setIsSubmited] = useState(false);
  async function handleCaptchaSubmission(token: string | null) {
    await checkWithReCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState("");
  async function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsSubmited(true);
    if (isVerified) {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      const result = await sendContactForm(data, subject);
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
      if (data.name !== '' && data.email !== '') {
        setIsSubmited(true);
      }
    }
  });

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
    <div className="bg-white flex flex-col gap-4 md:flex-row p-4 md:p-10">
      <div className="md:basis-1/2">
        <h2
          className="text-3xl text-blue font-medium mb-8"
          id={props.content_id.split("#")[1]}
        >
          {props.title}
        </h2>
        {props.paragraphs.map((paragraph, index) => (
          <div
            key={index}
            id={paragraph.content_id.split("#")[1]}
            className="text-blue mb-4 md:mb-8"
          >
            {paragraph.paragraph.includes("@") ? (
              <div>
                <div>
                  {paragraph.paragraph.split(" ").slice(0, -1).join(" ")}
                </div>
                <Link href={`mailto:${paragraph.paragraph.split(" ")[
                      paragraph.paragraph.split(" ").length - 1
                    ]}`} className="text-turquoise hover:underline">
                  {
                    paragraph.paragraph.split(" ")[
                      paragraph.paragraph.split(" ").length - 1
                    ]
                  }
                </Link>
              </div>
            ) : (
              <p>{paragraph.paragraph}</p>
            )}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e)=>{e.preventDefault();handlerSubmit(e)}}
        ref={formRef}
        className="md:basis-1/2 flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row w-full gap-4">
          {/* <input
            className="border border-blue p-2 w-full"
            type="text"
            name="position"
            placeholder={props.form.position}
          /> */}
          <input
            className="border border-blue p-2 w-full"
            type="text"
            name="company"
            placeholder={props.form.company_name}
          />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <input
            className="border border-blue p-2 w-full"
            type="text"
            name="name"
            required
            placeholder={props.form.first_name}
          />
          <input
            className="border border-blue p-2 w-full"
            required
            type="email"
            name="email"
            placeholder={props.form.email}
          />
        </div>
        {/* <div className="flex flex-col md:flex-row w-full gap-4">
          <input
            className="border border-blue p-2 w-full"
            required
            type="email"
            name="email"
            placeholder={props.form.email}
          />
          <input
            className="border border-blue p-2 w-full"
            required
            type="text"
            name="phone"
            pattern="\+?[0-9]{8,}"
            placeholder={props.form.phone}
          />
        </div> */}
        <textarea
          className="border border-blue p-2 h-24"
          name="message"
          placeholder={props.form.message}
        />
        <div className="text-sm text-blue ">{props.text_before_options}</div>
        <div className="grid grid-cols-2 gap-4">
          {props.options.map((option, index) => (
            <div
            key={option.option_name}
            className="flex flex-row items-center cursor-pointer"
            onClick={() =>
              handleChangeChecked(checked.map((_, i) => i === index), option.option_name)
            }
          >
            <div className="w-4 h-4 border shrink-0 border-blue p-[1px] mr-2">
              {checked[index] && (
                <div className="w-full h-full bg-turquoise"></div>
              )}
            </div>
            <label htmlFor="option1" className="flex items-center text-blue">
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
        <div className="flex gap-4 items-center self-start mt-4">
          <button
            disabled={!isVerified}
            type="submit"
            className="border-blue border-2 w-[200px] hover:text-blue bg-blue hover:bg-transparent text-white py-2 
            transition-colors duration-200 disabled:opacity-50 disabled:cursor-default disabled:hover:bg-blue disabled:hover:text-white"
          >
            {props.form.button_text}
          </button>
          {isSending === true && messageSent !== "" && (
            <span className="text-green-600 animate-pulse">{messageSent}</span>
          )}
          {isSending === false && messageSent !== "" && (
            <span className="text-red-600 animate-pulse">{messageSent}</span>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
