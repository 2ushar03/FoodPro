import React from "react";
import "./helpsupp.css";

function HelpSupp(){
    return(
        <div className="cont">
      <h1>Help & Support</h1>
      <p>Welcome to our Help & Support page. Here, you'll find resources to assist you with any questions or issues you may have while using our application.</p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <p>Check out our FAQs section to find answers to commonly asked questions:</p>
      <ul>
        <li>How do I create an account?</li>
        <li>How do I place an order?</li>
        <li>What payment methods do you accept?</li>
      </ul>

      <h2>Contact Us</h2>
      <p>If you can't find the answer to your question in our FAQs, please feel free to reach out to us:</p>
      <ul>
        <li>Email: info@foodx.com</li>
        <li>Phone: +91 9823647XXX</li>
      </ul>

      <p>Our support team is available to assist you from Monday to Friday, 9:00 AM to 5:00 PM (IST).</p>
    </div>
    )
}
export default HelpSupp;