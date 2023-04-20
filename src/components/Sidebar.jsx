import { ReactComponent as Lightning } from '../assets/Lightning.svg';
import { ReactComponent as Dasboard } from '../assets/Dashboard.svg';
import { ReactComponent as Settings } from '../assets/Settings.svg';
import { ReactComponent as Activities } from '../assets/Lightning.svg';
import { ReactComponent as Users } from '../assets/Users.svg';
import { ReactComponent as AddedUser } from '../assets/UserPlus.svg';
import { ReactComponent as Affiliate } from '../assets/Radioactive.svg';
import { ReactComponent as PlusIcon2 } from '../assets/plus-icon.svg';

const menuItems = [
  { menu: 'Dasboard', icon: <Dasboard /> },
  { menu: 'Settings', icon: <Settings /> },
  { menu: 'Activities', icon: <Activities /> },
  { menu: 'Users', icon: <Users /> },
  { menu: 'Added User', icon: <AddedUser /> },
  { menu: 'Affiliate', icon: <Affiliate /> },
];

function Sidebar() {
  return (
    <div className="bg-[#1D1042] text-[#fff] px-[2rem] sm:px-[3.2rem] pt-[3.8rem] pb-[1rem] hidden sm:flex sm:flex-col  ">
      {/*  */}
      <div className="flex-1">
        {/* button */}
        <div className="bg-[#45269C] px-[1.2rem] sm:px-[2.5rem] py-[1.2rem]  text-[1.6rem] leading-[1.9rem] rounded-[8px] flex items-center gap-[1.144rem] ">
          <Lightning />
          Welcome Keerthi
        </div>

        {/* menu items */}
        <ul className="mt-[4.337rem] flex flex-col gap-[3.3rem] ">
          {menuItems.map((item) => (
            <li
              key={item.menu}
              className="flex gap-[0.912rem] items-center text-[1.4rem] leading-[1.7rem] font-medium "
            >
              {item.icon} {item.menu}
            </li>
          ))}
        </ul>

        <hr className="border-none h-[1px] bg-[#fff] opacity-50 my-[3.25rem]  " />

        <div className="flex flex-col gap-[3.3rem]  ">
          <li className="flex gap-[0.912rem] items-center text-[1.4rem] leading-[1.7rem] font-medium opacity-70">
            <Lightning /> Profile
          </li>
          <li className="flex gap-[0.912rem] items-center text-[1.4rem] leading-[1.7rem] font-medium opacity-70">
            <Users /> Logout
          </li>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center items-center gap-[0.8rem] py-[1.75rem] bg-[#703EFE] text-[#FFFFFF] text-[1.6rem] leading-[1.9rem] rounded-[0.8rem]  ">
        <PlusIcon2 /> <p>NEW PROJECT</p>
      </div>
    </div>
  );
}

export default Sidebar;
