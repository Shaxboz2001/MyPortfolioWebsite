import React, { useState } from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../left-sidebar/left-sidebar.component";
import emailjs from "emailjs-com";
import {
  ContactContainer,
  ContactForm,
  ContactMainText,
  ContactRightSidebar,
  ContactType,
  ContactTypeCode,
  ContactTypeContainer,
  ContactTypeLogo,
  ContactTypeName,
  InputSubject,
  InputTop,
  MessageText,
  SendButton,
  TopContainerInputs,
} from "./contact.style";

function Contact() {
  let color = useSelector((state) => state);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});
  let user = {};
  function getData() {
    user = {
      name,
      email,
      subject,
      message,
    };
    setData(user);
    console.log(data);
    return data;
  }
  function sendEmail(e){
e.preventDefault();

emailjs
  .sendForm(
    "service_4jq1a8i",
    "portfolio_jel5dfo",
    e.target,
    "Uc4mCXWmyetGk4zFI"
  )
  .then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
  e.target.reset();
  setName("");
  setEmail("");
  setMessage("");
  setSubject("");
  console.log("ishladi");
  }
  return (
    <ContactContainer>
      <LeftSidebar />
      <ContactRightSidebar>
        <ContactMainText color={color}>Contact Me</ContactMainText>
        <ContactTypeContainer>
          <ContactType>
            <ContactTypeLogo></ContactTypeLogo>
            <ContactTypeName>Call Me On</ContactTypeName>
            <ContactTypeCode>+998 (33) 397 76 46</ContactTypeCode>
          </ContactType>
          <ContactType>
            <ContactTypeLogo></ContactTypeLogo>
            <ContactTypeName>Office</ContactTypeName>
            <ContactTypeCode>Yunusobod,Tashkent</ContactTypeCode>
          </ContactType>
          <ContactType>
            <ContactTypeLogo></ContactTypeLogo>
            <ContactTypeName>Email</ContactTypeName>
            <ContactTypeCode>ismoilovshakhboz@mail.ru</ContactTypeCode>
          </ContactType>
        </ContactTypeContainer>
        <ContactForm onSubmit={sendEmail}>
          <TopContainerInputs>
            <InputTop
              placeholder="Name*"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <InputTop
              placeholder="Email*"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </TopContainerInputs>
          <InputSubject
            placeholder="Subject*"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            name="subject"
          />
          <MessageText
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            name="message"
          />
          <SendButton
            type="submit"
            value="Send Message"
            color={color}
          ></SendButton>
        </ContactForm>
      </ContactRightSidebar>
    </ContactContainer>
  );
}

export default Contact;
