import React  from 'react';
import Header from '../../components/header/header';
import Footer from "../../components/footer/footer";
function ContactUsPage() {

  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch:</p>
      <form>
        {/* form fields go here */}
      </form>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
