import {
  Html,
  Body,
  Container,
  Text,
  Img,
  Link,
  Section,
} from "@react-email/components";
import type { ContactFormData } from "../fetchers/sendContactForm";

export default function ContactFormEmail({
  logo,
  data,
  subject
}: {
  logo: string;
  data: ContactFormData;
  subject?: string;
}) {
  return (
    <Html>
      <Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "750px",
          gap: "16px",
        }}
      >
        <Container
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            fontWeight: "bold",
            fontSize: "16px",
            width: "100%",
          }}
        >
          <Section
            style={{
              padding: "20px",
              backgroundColor: "#92C0E9",
              display: "flex",
              gap: "16px",
              alignItems: "center",
              width: "100%",
            }}
          >
  
              <Img src={logo} alt="Logo" width={150} height={100} style={{ marginRight: "48px" }}/>
        
       
              <Text
                style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
              >
                New Contact Form.
              </Text>
          
          </Section>
          <Section
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {subject && <Text>Subject: {'I am interested in ' + subject}</Text>}
            {data.name && <Text>Name: {data.name.toString()}</Text>}
            {data.first_name && data.last_name && <Text>Full name: {data.first_name.toString() + ' ' + data.last_name.toString()}</Text>}
            {data.position && <Text>Position: {data.position.toString()}</Text>}
            <Text>Email: {data.email.toString()}</Text>
            {data.phone && <Text>Phone: {data.phone.toString()}</Text>}
            {data.company && <Text>Company: {data.company.toString()}</Text>}
            {data.message && <Text>Message: {data.message.toString()}</Text>}
            {data.agreement && (
              <Text>
                User agrees to receive marketing materials on investments and to be contacted via phone and email by NoeSea
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
