import Card from './Card';
import { ReactComponent as PlusIcon2 } from '../assets/plus-2.svg';

function Column({ cards, title }) {
  return (
    <div className="">
      {/*   */}
      <div className="bg-[#F4F6F8] rounded-[0.8rem] py-[0.8rem] px-[1.6rem] flex justify-between items-center  mb-[2.4rem] ">
        <p className="text-[#858A93] font-medium text-[1.6rem] leading-[1.9rem] ">
          {title}
        </p>

        <div className="py-[0.8rem] px-[1.2rem] text-white text-[1.6rem] font-medium leading-[1.9rem] rounded-[0.4rem] bg-black  ">
          {cards.length}
        </div>
      </div>

      {/* card(s) */}
      <div className="">
        {cards.map((card, index) => (
          <Card card={card} columnTitle={title} key={index} />
        ))}
      </div>

      {/*  */}
      <div className="flex justify-center items-center gap-[1.2rem] py-[1.2rem] bg-[#F2F4F5] border border-dashed border-[#d5d5d5] text-[#7D8088] text-[1.6rem] font-medium leading-[1.9rem] rounded-[1.2rem]  ">
        <PlusIcon2 /> <p>Add Task</p>
      </div>
    </div>
  );
}

export default Column;
