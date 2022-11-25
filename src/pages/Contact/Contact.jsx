import React from "react";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact_wrapper txt-center my-3">
      <section className="contact-card p-6">
        <section className="contact_title">
          <h1 className="pb-2">REACH US AT</h1>
        </section>
        <section className="contact_details">
          <ul>
            <li className="py-2">
              <h3>support@kicksup.com</h3>
              <p>for any technical support</p>
            </li>
            <li className="py-2">
              <h3>info@kicksup.com</h3>
              <p>for more information</p>
            </li>
            <li className="py-2">
              <h3>feedback@kicksup.com</h3>
              <p>to send your feedback</p>
            </li>
            <li className="py-2">
              <h3>jobs@kicksup.com</h3>
              <p>to work with us</p>
            </li>
          </ul>
        </section>
      </section>
      <h5 className="mt-4">Stay in touch</h5>
      <section className="socials ">
        <img src={twitter} alt="twitter-socials" className="m-1" />
        <img src={instagram} alt="instagram-socials" className="m-1" />
        <img src={facebook} alt="fb-socials" className="m-1" />
      </section>
    </main>
  );
};

export { Contact };
