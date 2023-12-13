import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const BrowseFooter = () => {
  const iconList = [
    {
      icon: faFacebookF,
      path: "https://www.facebook.com/",
    },
    {
      icon: faInstagram,
      path: "https://www.instagram.com/",
    },
    {
      icon: faTwitter,
      path: "https://twitter.com/",
    },
    {
      icon: faYoutube,
      path: "https://www.youtube.com/",
    },
  ];
  const memberFooterLinkList = [
    {
      title: "Audio Description",
      path: "/",
    },
    {
      title: "Investor Relations",
      path: "/",
    },
    {
      title: "Legal Notices",
      path: "/",
    },
    {
      title: "Cookie Preferences",
      path: "/",
    },
    {
      title: "Corporate Information",
      path: "/",
    },
    {
      title: "Help Center",
      path: "/",
    },
    {
      title: "Gift Cards",
      path: "/",
    },
    {
      title: "Jobs",
      path: "/",
    },
    {
      title: "Terms of Use",
      path: "/",
    },
    {
      title: "Watch for Free",
      path: "/",
    },
    {
      title: "Netflix Originals",
      path: "/",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="flex flex-col gap-4">
          <div className="text-white flex gap-6">
            {iconList.map((item, index) => (
              <a href={item.path} key={index} className="inline-block">
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </a>
            ))}
          </div>
          <ul className="items-center flex flex-row flex-wrap text-[13px] my-14px p-0">
            {memberFooterLinkList.map((item, index) => (
              <li
                key={index}
                className="box-border flex-shrink-0 w-1/4 list-none mb-4 pr-22"
              >
                <Link to={item.path} className="text-[#808080] no-underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span>© 2023-2028 Netify, Inc.</span>
        </div>
      </div>
    </>
  );
};

export default BrowseFooter;
