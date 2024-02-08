import logo from "./assets/lws-logo-en.svg";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="">
      <img src={logo} alt="" className="block w-20 h-20" />
      <span className="block">
        <IoMdNotificationsOutline />
      </span>
    </div>
  );
}
