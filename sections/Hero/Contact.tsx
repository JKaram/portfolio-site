import React from "react";
import Icon from "./Icon";

function Contact({ className }) {
  return (
    <div className={className}>
      <Icon icon="resume" link="https://www.linkedin.com/in/jamiekaram/" title="Link to Linkedin" />
      <Icon icon="gitHub" link="https://github.com/JKaram" title="Link to GitHub" />
      <Icon icon="linkedIn" link="https://www.linkedin.com/in/jamiekaram/" title="Link to Linkedin" />
    </div>
  );
}

export default Contact;
