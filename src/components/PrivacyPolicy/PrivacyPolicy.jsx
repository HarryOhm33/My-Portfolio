import "./PrivacyPolicy.css";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy_policy">
      <div className="head">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated: [23-10-2024]</strong>
        </p>
      </div>

      <p>
        Your privacy is important to us. This Privacy Policy outlines how we
        collect, use, and protect your information when you visit our website.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect your email address when you fill out the contact form on our
        website. This information is used solely for communication purposes.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We may use your email address to:
        <ul>
          <li>Respond to your inquiries.</li>
          <li>Provide updates or information related to your requests.</li>
        </ul>
      </p>
      <h2>Data Protection</h2>
      <p>
        We take the security of your personal information seriously. We
        implement appropriate technical and organizational measures to protect
        your information from unauthorized access, disclosure, or misuse.
      </p>
      <h2>Third-Party Services</h2>
      <p>
        We do not sell or share your personal information with third parties.
        Your email is collected through Web3Forms, which adheres to strict
        privacy and data protection standards.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new policy on this page. You are advised
        to review this policy periodically for any changes.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at hari333333om@gmail.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
