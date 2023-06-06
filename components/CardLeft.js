const CardLeft = ({ data }) => {
  // destructure data
  const { pretitle, title, description } = data;
  return (
    <div className='relative group bg-[#1E1E31] h-44 mb-12 p-4 before:absolute before:w-[16px] before:h-[1px] before:bg-white/10 before:-right-4 after:absolute after:w-4 after:h-4 after:bg-[#2F303E] after:-right-6 after:top-2 after:rounded-full after:z-10 hover:after:bg-accent  before:hidden after:hidden xl:before:flex xl:after:flex after:transition-all after:duration-300 rounded-md flex flex-col items-center text-center'>
      <div className='bg-none group-hover:bg-accent transition-all duration-300 text-white text-[15px] max-w-max px-4 rounded-full mb-4'>
        {pretitle}
      </div>
      <div className='text-xl mb-2'>{title}</div>
      <div className='text-sm font-light text-white/50'>{description}</div>
    </div>
  );
};

export default CardLeft;
