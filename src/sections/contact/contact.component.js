import React from 'react'
import LeftSidebar from '../left-sidebar/left-sidebar.component';
import { ContactContainer, ContactMainText, ContactRightSidebar } from './contact.style';

function Contact() {
  return (
    <ContactContainer>
      <LeftSidebar />
      <ContactRightSidebar>
        <ContactMainText>Contact Me</ContactMainText>
      </ContactRightSidebar>
    </ContactContainer>
  );
}

export default Contact;