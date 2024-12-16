"use server";
import { Resend } from "resend";
import Mailjet from "node-mailjet";
import { getStaticHeader } from "./getStaticHeader";
import ContactFormEmail from "../components/ContactFormEmail";

export type ContactFormData = {
  [k: string]: FormDataEntryValue;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const mailjet = Mailjet.apiConnect(
  process.env.MAIL_JET_API_KEY as string,
  process.env.MAIL_JET_SECRET_KEY as string
);

export async function sendContactForm(
  data: ContactFormData,
  subject?: string
): Promise<any> {
  const header = await getStaticHeader();
  const logo = header.acf.logo;
  const request = await mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: "atlantic@norseagroup.com",
            Name: "Website Norsea Atlantic",
          },
          To: [
            {
              Email: "atlantic@norseagroup.com",
              Name: "Norsea Atlantic",
            },
          ],
          Subject: subject || data.subject,
          TextPart: data.message,
          HTMLPart: `
        <html>
          <body>
            <div style="padding: 40px; font-weight: bold; font-size: 16px; width: 100%;">
                <div style="padding: 20px; margin-bottom: 20px; background-color: #92C0E9; display: flex; gap: 16px; align-items: center; width: 100%;">
                    <div><img src=${logo} alt="Logo" style="margin-right: 48px; width: 150px; height: 100px;"/></div>
                    <div style="color: white; font-size: 24px; font-weight: bold;">
                      New Contact Form.
                    </div>
                </div>
                <div>
                  ${subject ? `<div>Subject: I am interested in  ${subject}</div>` : ""}
                  ${data.name ? `<div>Name: ${data.name}</div>` : ""}
                  ${
                    (data.first_name &&
                    data.last_name) ?
                    `<div>Full name: ${data.first_name + " " + data.last_name}</div>` : ""
                  }
                  ${data.position ? `<div>Position: ${data.position}</div>` : ""}
                  <div>Email: ${data.email}</div>
                  ${data.phone ? `<div>Phone: ${data.phone}</div>` : ""}
                  ${data.company ? `<div>Company: ${data.company}</div>` : ""}
                  ${data.message ? `<div>Message: ${data.message}</div>`: ""}
                  ${
                    data.agreement ?
                    `<div>
                      User agrees to receive marketing materials on investments and to be contacted via phone and email by NorSea Atlantic
                    </div>` : ""
                  }
                </div>
            </div>
          </div>
        </body>
      </html>`,
        },
      ],
    })
    .then((result) => {
      console.log("Body", result.response.data, result.body);
      return result.body;
    })
    .catch((err) => {
      return err;
    });

  console.log(
    "Request",
    request.Messages[0].To,
    request.Messages[0].Subject,
    request.Messages[0].TextPart,
    request.Messages[0].HTMLPart
  );
  // const res = await resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: "anatolii@advanz.no",
  //   subject: "Contact Form",
  //   text: "Contact Form",
  //   react: ContactFormEmail({ logo, data, subject }),
  // });
  // console.log("Res", res);
  // if (res.data) {
  //   return true;
  // }
  // return false;
  if (request) {
    return true;
  }
  return false;
}
