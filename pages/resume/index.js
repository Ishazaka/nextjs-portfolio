import React from 'react';

const Resume = () => {
  return (
    <div className='h-full bg-primary py-32 text-white'>
      <div className='container mx-auto'>
        <h1 className='h1 text-center md:text-left  mb-12'>
          Education & <span className='text-accent'>Experience</span>
        </h1>
        {/* timeline */}
        <div className='h-[450px] xl:h-96 max-w-4xl mx-auto xl:mx-0 pl-12 md:pl-0 overflow-y-auto md:overflow-y-visible'>
          {/* item 1 */}
          <div className='group relative before:absolute before:w-3 before:h-3 before:bg-secondary before:rounded-full before:hover:bg-accent before:z-10 max-w-4xl after:w-[1px] after:h-full after:absolute after:bg-white/10 after:top-0 after:left-[6px] after:bottom-0 after:z-0 before:transition-all before:duration-300 pb-8'>
            <div className='pl-10 xl:pl-20 h-full'>
              <div className='mb-2 xl:mb-4 text-white/50 group-hover:text-accent transition-all duration-300'>
                2020 - Present
              </div>
              <h2 className='text-xl xl:text-2xl mb-1'>
                Fullstack Web Developer
              </h2>
              <p className='text-[13px] text-white/50 mb-6'>
                Andromeda Design Agency
              </p>
            </div>
            <div className='pl-10 xl:pl-20 h-full'>
              <h2 className='text-xl xl:text-2xl mb-1'> Web Developer</h2>
              <p className='text-[13px] text-white/50 mb-6'>TWT Dev Corp</p>
            </div>
          </div>
          {/* item 2 */}
          <div className='group relative before:absolute before:w-3 before:h-3 before:bg-secondary before:rounded-full before:hover:bg-accent before:z-10 max-w-4xl after:w-[1px] after:h-full after:absolute after:bg-white/10 after:top-0 after:left-[6px] after:bottom-0 after:z-0 before:transition-all before:duration-300 pb-8'>
            <div className='pl-10 xl:pl-20 h-full'>
              <div className='mb-4 text-white/50 group-hover:text-accent transition-all duration-300'>
                2018 - 2020
              </div>
              <h2 className='text-xl xl:text-2xl mb-1'>Frontend Developer</h2>
              <p className='text-[13px] text-white/50 mb-6'>
                AGM Development Solutions
              </p>
            </div>
            <div className='pl-10 xl:pl-20 h-full'>
              <h2 className='text-xl xl:text-2xl mb-1'>Web Designer</h2>
              <p className='text-[13px] text-white/50 mb-6'>Freelancer</p>
            </div>
          </div>
          {/* item 3 */}
          <div className='group relative before:absolute before:w-3 before:h-3 before:bg-secondary before:rounded-full before:hover:bg-accent before:z-10 max-w-4xl after:w-[1px] after:h-full after:absolute after:bg-white/10 after:top-0 after:left-[6px] after:bottom-0 after:z-0 before:transition-all before:duration-300 pb-8'>
            <div className='pl-10 xl:pl-20 h-full'>
              <div className='mb-4 text-white/50 group-hover:text-accent transition-all duration-300'>
                2016 - 2018
              </div>
              <h2 className='text-xl xl:text-2xl mb-1'>UI Developer</h2>
              <p className='text-[13px] text-white/50 mb-6'>GM Design Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
