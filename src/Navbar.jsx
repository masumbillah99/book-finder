import logo from "./assets/lws-logo-en.svg";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-between mt-7">
      <img src={logo} alt="" className="block max-w-[100px] md:max-w-[165px]" />
      <span className="block">
        <IoNotificationsOutline className="w-7 h-7" />
      </span>
    </div>
  );
}
