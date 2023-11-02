import { Disclosure } from "@headlessui/react";
import logo from "../../assets/images/logo.png";
import HeaderIcon from "../reusable/HeaderIcon";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Shop", href: "/shop", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  return (
    <div className="min-h-full container">
      <Disclosure as="nav" className="bg-white text-black py-8">
        {({ open }) => (
          <>
            <div className="flex justify-between items-center">
              <a href="/" className="" title="Furniro">
                <img className="w-44 h-10" src={logo} alt="Furniro" />
              </a>
              <div className="hidden lg:block">
                <div className="">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "text-base font-poppins font-medium text-primary mr-16"
                          : "text-base font-poppins font-medium hover:text-primary mr-16 last:mr-0"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <ul className="flex ">
                  <HeaderIcon
                    title="Login"
                    icon="mdi:account-alert-outline"
                    href="/"
                  />
                  <HeaderIcon
                    title="Login"
                    icon="material-symbols:search"
                    href="/"
                  />
                  <HeaderIcon title="Login" icon="mdi:heart-outline" href="/" />
                  <HeaderIcon
                    title="Login"
                    icon="material-symbols:shopping-cart-outline"
                  />
                </ul>
              </div>
              <div className="lg:hidden text-end">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Icon
                      icon="iconoir:xmark"
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Icon
                      icon="uil:bars"
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
export default Header;
