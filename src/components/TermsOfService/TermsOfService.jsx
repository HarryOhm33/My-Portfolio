import { useEffect } from "react";
import "./TermsOfService.css";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-of-services">
      <div className="head">
        <h1>Terms of Service</h1>
        <p>
          <strong>Last updated: [Date]</strong>
        </p>
      </div>

      <p>
        Welcome to our website. By accessing or using our services, you agree to
        comply with and be bound by these Terms of Service. Please read them
        carefully.
      </p>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing our website, you confirm that you accept these Terms of
        Service and that you agree to comply with them. If you do not agree to
        these terms, you must not use our services.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may revise these Terms of Service at any time by updating this page.
        You should check this page periodically to review the terms because they
        are binding on you.
      </p>

      <h2>Intellectual Property Rights</h2>
      <p>
        All content, trademarks, and other intellectual property on our website
        are the property of Hari Om or our licensors. You may not use,
        reproduce, or distribute any content without our written consent.
      </p>

      <h2>User Responsibilities</h2>
      <p>
        You agree to use our website for lawful purposes and in a way that does
        not infringe the rights of, restrict, or inhibit anyone else's use of
        the website. You must not use the website in any way that may damage or
        impair the website.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        We strive to provide accurate and up-to-date information, but we do not
        warrant that the information on our website is complete, reliable, or
        error-free. We will not be liable for any loss or damage arising from
        your use of the website.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms of Service shall be governed by and construed in accordance
        with the laws of India. Any disputes arising from these terms shall be
        subject to the exclusive jurisdiction of the courts.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms of Service, please contact
        us at hari333333om@gmail.com.
      </p>
    </div>
  );
};

export default TermsOfService;
