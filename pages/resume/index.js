import React from 'react';

const Resume = () => {
  return (
    <div className='h-full bg-primary py-32 text-white'>
      <div className='container mx-auto'>
        <h1 className='h1'>Education & Experience</h1>
        {/* timeline */}
        <div className='h-96'>
          {/* item 1 */}
          <div className='group relative before:absolute before:w-3 before:h-3 before:bg-secondary before:rounded-full before:hover:bg-accent before:z-10 max-w-4xl after:w-[1px] after:h-full after:absolute after:bg-white/10 after:top-0 after:left-[6px] after:bottom-0 after:z-0 before:transition-all before:duration-300'>
            <div className='pl-20 h-full'>
              <div className='mb-4 group-hover:text-accent transition-all duration-300'>
                2020 - Present
              </div>
              <h2 className='text-2xl mb-1'>Frontend Developer</h2>
              <p className='text-sm'>Andromeda Design Agency</p>
            </div>
          </div>
          {/* item 2 */}
          <div>2</div>
          {/* item 3 */}
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
