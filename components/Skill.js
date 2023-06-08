const Skill = ({ skill }) => {
  return (
    <div className='text-center'>
      <div className='border-2 border-white/10 rounded-[85px] px-4 xl:px-16 py-8 xl:py-20 max-w-[175px] flex justify-center hover:border-accent transition-all duration-300 mb-4'>
        <div className='text-6xl xl:text-7xl'>{skill.icon}</div>
      </div>
      <div className='text-sm'>{skill.title}</div>
    </div>
  );
};

export default Skill;
