import Column from './Column';

import avatar from '../assets/avatar.png';

import { ReactComponent as PowerView } from '../assets/power-view.svg';
import { ReactComponent as BoardView } from '../assets/two-columns.svg';
import { ReactComponent as ParticipantsView } from '../assets/p-view.svg';
import { ReactComponent as ListView } from '../assets/list.svg';
import { ReactComponent as PlusIcon } from '../assets/plus-icon.svg';

import { AiOutlineAlignLeft } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

import cardImg1 from '../assets/card-image-1.png';
import cardImg2 from '../assets/card-image-2.png';
import cardImg3 from '../assets/card-image-3.png';

const columns = [
  {
    title: 'Todo',
    cards: [
      {
        img: cardImg1,
        title: 'High fidelity design',
        subtitle: 'Make clear and design color',
      },
      {
        title: 'Usability testing',
        subtitle: 'Make clear and design color',
      },
    ],
  },

  {
    title: 'In Progress',
    cards: [
      {
        img: cardImg2,
        title: 'High fidelity design',
        subtitle: 'Make clear and design color',
      },
    ],
  },

  {
    title: 'Completed',
    cards: [
      {
        title: 'Usability testing',
        subtitle: 'Make clear and design color',
      },
      {
        img: cardImg3,
        title: 'High fidelity design',
        subtitle: 'Make clear and design color',
      },
    ],
  },
];

function Dashboard({ toggleMobileSidebar, showMobileSidebar }) {
  return (
    <div className="flex-1 overflow-y-scroll flex flex-col pb-[4rem] ">
      {/* Header */}
      <div className="px-[3.4rem] xl:px-[6.4rem] pt-[4rem] pb-[2.4rem] ">
        <div className="flex justify-between items-start  sm:block">
          <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-[2rem]  ">
            <div className="">
              <h1 className="font-semibold text-[2.8rem] lg:text-[3.8rem] leading-[4.6rem] ">
                New Campaign Run
              </h1>
              <p className="text-[1.4rem] leading-[1.7rem] text-[#B8B9BD] mt-[0.4rem] ">
                A new campaign launch for brand new features in the month of May
              </p>
            </div>
            <span className="bg-black py-[1.2rem] px-[2.85rem] text-white rounded-[0.8rem] text-[1.4rem] leading-[1.7rem]  inline-block">
              ADD MEMBERS
            </span>
          </div>

          {/* hamburger */}
          <span
            className="sm:hidden text-[2.5rem] cursor-pointer "
            onClick={toggleMobileSidebar}
          >
            {showMobileSidebar ? <AiOutlineClose /> : <AiOutlineAlignLeft />}
          </span>
        </div>

        {/*  */}
        <div className="mt-[5.7rem] flex flex-col lg:flex-row lg:justify-between gap-[2rem] ">
          <div className=" flex items-center gap-[1.2rem] ">
            <div className="flex">
              <img
                className="w-[4.2rem] h-[4.2rem] rounded-[3.4rem] border-[2px] border-solid border-[#fff]  "
                src={avatar}
                alt="avatar"
              />
              <img
                className="w-[4.2rem] h-[4.2rem] rounded-[3.4rem] border-[2px] border-solid border-[#fff] ml-[-1.1rem] "
                src={avatar}
                alt="avatar"
              />
              <img
                className="w-[4.2rem] h-[4.2rem] rounded-[3.4rem] border-[2px] border-solid border-[#fff] ml-[-1.1rem] "
                src={avatar}
                alt="avatar"
              />
            </div>
            <div className="flex gap-[0.5rem] text-[#B8B9BD] text-[1.4rem] leading-[1.7rem]  ">
              <span className="">8</span>
              <span className="">members</span>
            </div>
          </div>
          <div className="flex items-center gap-[1.8rem] flex-wrap ">
            <div className="flex items-center gap-[0.4rem] text-[#7D8088] text-[1.4rem] font-medium leading-[1.7rem] ">
              <ParticipantsView />
              <p className="">Participants View</p>
            </div>
            <div className="flex items-center gap-[0.4rem] text-[#7D8088] text-[1.4rem] font-medium leading-[1.7rem] ">
              <BoardView />
              <p className="">Board View</p>
            </div>
            <div className="flex items-center gap-[0.4rem] text-[#7D8088] text-[1.4rem] font-medium leading-[1.7rem] ">
              <ListView />
              <p className="">List View</p>
            </div>
            <div className="flex items-center gap-[0.4rem] text-[#7D8088] text-[1.4rem] font-medium leading-[1.7rem] ">
              <PowerView />
              <p className="">Power View</p>
            </div>

            <PlusIcon />
          </div>
        </div>
      </div>

      {/*  */}
      <main className="flex-1 bg-[#FCFBFC] px-[3.4rem] xl:px-[6.4rem] pt-[6.4rem] grid grid-cols-[repeat(auto-fit,minmax(32rem,35.3rem))] gap-[4rem] justify-center ">
        {columns.map(({ title, cards }) => (
          <Column cards={cards} title={title} key={title} />
        ))}
      </main>
    </div>
  );
}

export default Dashboard;
