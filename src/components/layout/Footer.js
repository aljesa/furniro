import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-black.png";
import Button from "../reusable/Button";
import Input from "../reusable/forms/Input";
import { useState } from "react";
function Footer() {
  const footerLinks = [
    {
      heading: "Links",
      items: [
        { text: "Home", to: "/" },
        { text: "Shop", to: "/shop" },
        { text: "About", to: "/about" },
        { text: "Contact", to: "/contact" },
      ],
    },
    {
      heading: "Help",
      items: [
        { text: "Payment Options", to: "/" },
        { text: "Returns", to: "/returns" },
        { text: "Privacy Policies", to: "/privacy-policy" },
      ],
    },
    {
      heading: "Newsletter",
      newsletterForm: true, // Add a flag for the newsletter form
    },
  ];

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="bg-white text-black py-12">
      <div className="container">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://flowbite.com/"
              className="flex items-start flex-col"
            >
              <img src={logo} className="h-8 mr-3" alt="FlowBite Logo" /> <br />
            </a>
            <Button
              to="https://googlemaps.com"
              text="400 University Drive Suite 200 Coral Gables, FL 33134 USA"
              className="text-light-grey bg-transparent normal-case font-normal py-0 px-0"
              isButton={false}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-base font-medium text-light-grey">
                  {section.heading}
                </h2>
                {section.newsletterForm ? (
                  <form>
                    <div className="">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className=""
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <Button
                        text="Subscribe"
                        className="custom-button"
                        isButton={true}
                        type="submit"
                      />
                    </div>
                  </form>
                ) : (
                  <ul className="font-medium text-black">
                    {section.items &&
                      section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-4">
                          <Link to={item.to}>{item.text}</Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-light-gray lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-base text-black">
            © 2023{" "}
            <a href="/" className="hover:underline">
              funiro
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
