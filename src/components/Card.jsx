import { ReactComponent as Dots } from '../assets/Three-dot.svg';
import { ReactComponent as List } from '../assets/list.svg';
import { ReactComponent as ChatIcon } from '../assets/chat.svg';
import { ReactComponent as LinkIcon } from '../assets/link.svg';

import avatar from '../assets/avatar.png';

function Card({ card: { img, title, subtitle }, columnTitle }) {
  let progressBar;

  if (columnTitle === 'Todo') {
    progressBar = '';
  }
  if (columnTitle === 'In Progress') {
    progressBar = 'before:bg-[#FF5F37] before:w-[50%]';
  }
  if (columnTitle === 'Completed') {
    progressBar = 'before:bg-[#8BC488] before:w-[100%]';
  }

  return (
    <div className="bg-white p-[1.6rem] rounded-[1.2rem] shadow-one mb-[1.6rem]  ">
      {/*  */}
      {img ? <img className="w-full" src={img} alt="card" /> : null}
      <div className="mt-[1.8rem] flex justify-between ">
        <div>
          <p className="font-semibold text-[1.6rem] leading-[1.9rem] text-[#000] mb-[0.8rem]  ">
            {title}
          </p>
          <p className="text-[1.4rem] leading-[1.7rem] text-[#B8B9BD]">
            {subtitle}
          </p>
        </div>

        <Dots />
      </div>
      {/*  */}
      <div className="flex justify-between items-center mt-[1.85rem] ">
        <div className="flex items-center gap-[0.4rem] ">
          <List />
          <span className="text-[1.4rem] leading-[1.7rem] text-[#B8B9BD]">
            Progress
          </span>
        </div>

        <div className="font-medium text-[1.4rem] leading-[1.7rem] text-[#000]">
          2/10
        </div>
      </div>
      {/*  */}
      <div
        className={`relative h-[0.8rem] bg-[#ebebeb] rounded-[2.4rem] mt-[0.85rem] overflow-hidden before:content-[' '] before:absolute before:left-0 before:pb-[0.8rem] ${progressBar} `}
      ></div>
      {/*  */}
      <div className="flex justify-between items-center mt-[0.8rem]  ">
        <div className=" text-[#B8B9BD] text-[1.2rem] leading-[1.2rem] flex gap-[1rem] ">
          <div className="flex gap-[0.4rem] items-center">
            <ChatIcon /> <p>7</p>
          </div>
          <div className="flex gap-[0.4rem] items-center">
            <LinkIcon /> <p>7</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="w-[3.2rem] h-[3.2rem] rounded-[2.4rem] border-[2px] border-solid border-[#fff]  "
            src={avatar}
            alt="avatar"
          />
          <img
            className="w-[3.2rem] h-[3.2rem] rounded-[2.4rem] border-[2px] border-solid border-[#fff] ml-[-1.1rem] "
            src={avatar}
            alt="avatar"
          />
          <img
            className="w-[3.2rem] h-[3.2rem] rounded-[2.4rem] border-[2px] border-solid border-[#fff] ml-[-1.1rem] "
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
