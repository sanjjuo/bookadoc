import React from "react";

const Contact = () => {
  return (
    <div className="appWidth space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-app-mainText">📞 Contact Us</h1>
        <p className="text-app-subText max-w-2xl mx-auto">
          Have questions, concerns, or need support? We’re here to help you get
          the most out of BookADoc. Reach out to us anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Email */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-app-mainText">
            📧 Email Support
          </h2>
          <p className="text-app-subText">
            For general inquiries or assistance:
          </p>
          <p className="text-app-subText font-medium">support@bookadoc.com</p>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-app-mainText">📱 Phone</h2>
          <p className="text-app-subText">
            Available from 9am to 6pm, Sunday to Friday:
          </p>
          <p className="text-app-subText font-medium">+971 50 123 4567</p>
        </div>

        {/* Office */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-app-mainText">
            📍 Office Address
          </h2>
          <p className="text-app-subText">Our main office is located at:</p>
          <p className="text-app-subText font-medium">
            Level 12, Tech Tower
            <br />
            Downtown Dubai, UAE
          </p>
        </div>
      </div>

      <div className="text-center pt-10 border-t border-app-border">
        <p className="text-app-subText">
          We aim to respond to all inquiries within 24 hours. Thank you for
          trusting BookADoc.
        </p>
      </div>
    </div>
  );
};

export default Contact;
