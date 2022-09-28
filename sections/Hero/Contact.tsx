import React from "react";
import Icon from "./Icon";

function Contact({ className }) {
  return (
    <div className={className}>
      <Icon
        icon="resume"
        link="https://www.dropbox.com/s/vkkblcxjhkn7x5g/Jamie_Karam_Resume.pdf?dl=0"
        title="Link to my resume"
      />
      <Icon icon="gitHub" link="https://github.com/JKaram" title="Link to my GitHub" />
      <Icon icon="linkedIn" link="https://www.linkedin.com/in/jamiekaram/" title="Link to my Linkedin" />
    </div>
  );
}

export default Contact;
