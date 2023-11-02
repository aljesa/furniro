import { Icon } from "@iconify/react";

function HeaderIcon({ title, icon, href }) {
  return (
    <li className="w-7 h-7 mr-11">
      <a href={href} title={title} className="inline-block w-full h-full">
        <Icon icon={icon} className="w-full h-full hover:text-primary" />
      </a>
    </li>
  );
}
export default HeaderIcon;
