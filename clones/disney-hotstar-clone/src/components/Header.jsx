import logo from "../assets/images/header/disney-white.png";
import profile from "../assets/images/header/profile.jpg";
import HeaderItem from "./HeaderItem";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
          alt="logo"
        />
        {menu.map((item, i) => {
          return <HeaderItem Name={item.name} Icon={item.icon} key={i} />;
        })}
      </div>
      <img src={profile} alt="profile" className="w-[3rem] rounded-full" />
    </div>
  );
}

export default Header;
