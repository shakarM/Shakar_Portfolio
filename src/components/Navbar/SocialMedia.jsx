import React from "react";
import { BsTwitter, BsFacebook, BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/shakar-latif/">
          {" "}
          <IoLogoLinkedin />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/shakarM">
          {" "}
          <BsGithub />{" "}
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.instagram.com/shakarbit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        >
          {" "}
          <BsInstagram />{" "}
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
