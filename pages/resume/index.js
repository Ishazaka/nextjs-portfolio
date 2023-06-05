import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';

const Resume = () => {
  return (
    <div className='h-full bg-primary py-32 text-white'>
      <div className='container mx-auto'>
        <h1 className='h1 text-center mb-12'>
          Education & <span className='text-accent'>Experience</span>
        </h1>
        {/* timeline */}
        <div className='px-10 xl:px-0'>
          {/* top */}
          <div className='w-full max-w-xl mx-auto border-b border-white/10 pb-3 mb-6'>
            <div className='flex justify-between px-6'>
              <div className='flex flex-col items-center'>
                <HiAcademicCap className='text-5xl m-2' />
                <div className='text-[13px] uppercase tracking-wider'>
                  Education
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <HiBriefcase className='text-5xl m-2' />
                <div className='text-[13px] uppercase tracking-wider'>
                  Employment
                </div>
              </div>
            </div>
          </div>
          <div className='bg-pink-50/10 max-w-4xl mx-auto flex flex-col xl:flex-row justify-between h-[42vh] xl:h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10 pr-2'>
            <div className='relative flex-1 after:w-[1px] after:h-full after:absolute after:bg-red-500 after:top-0 after:right-0 after:bottom-0 after:z-0'>
              left
            </div>
            <div className='flex-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              perferendis ab itaque rerum numquam doloremque dolores sit
              reiciendis officia accusantium iste, at officiis placeat. Et
              laboriosam dolore aliquid ad, eligendi laudantium quasi numquam
              iste odit recusandae debitis culpa! Voluptatibus vitae autem
              veritatis quia voluptas ipsam asperiores impedit ullam architecto
              assumenda corporis soluta rerum, deleniti blanditiis laborum!
              Reiciendis id, suscipit quis rem eum error doloremque consectetur
              labore obcaecati dolorum sequi facere similique, doloribus officia
              accusantium expedita sed dolor harum, excepturi ipsa ipsam. Esse
              cupiditate cum non expedita maxime deserunt? Rem, a consectetur
              fuga tenetur consequuntur harum laudantium, soluta accusamus nam
              autem voluptate dolores. Harum, ab iusto voluptates cupiditate
              maiores ipsam quod in debitis labore voluptate assumenda, quae
              saepe quo non ipsa suscipit veniam facilis. Reprehenderit rerum
              quod quisquam numquam quo deleniti dicta saepe sunt incidunt optio
              odio ut nesciunt cum sequi, ex omnis. Laudantium ad vel ex
              similique atque iste, molestias, unde ullam tempore pariatur fuga,
              optio illo. Repellendus est expedita possimus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

//  {/* item 1 */}
//  <div className='group relative before:absolute before:w-3 before:h-3 before:bg-secondary before:rounded-full before:hover:bg-accent before:z-10 max-w-4xl after:w-[1px] after:h-full after:absolute after:bg-white/10 after:top-0 after:left-[6px] after:bottom-0 after:z-0 before:transition-all before:duration-300 pb-8'>
//  <div className='pl-10 xl:pl-20 h-full'>
//    <div className='mb-2 xl:mb-4 text-white/50 group-hover:text-accent transition-all duration-300'>
//      2020 - Present
//    </div>
//    <h2 className='text-xl xl:text-2xl mb-1'>
//      Fullstack Web Developer
//    </h2>
//    <p className='text-[13px] text-white/50 mb-6'>
//      Andromeda Design Agency
//    </p>
//  </div>
//  <div className='pl-10 xl:pl-20 h-full'>
//    <h2 className='text-xl xl:text-2xl mb-1'> Web Developer</h2>
//    <p className='text-[13px] text-white/50 mb-6'>TWT Dev Corp</p>
//  </div>
// </div>
// {/* item 2 */}
// <div className='group relative before:absolute before:w-3 before:h-3 before:bg-secondary before:rounded-full before:hover:bg-accent before:z-10 max-w-4xl after:w-[1px] after:h-full after:absolute after:bg-white/10 after:top-0 after:left-[6px] after:bottom-0 after:z-0 before:transition-all before:duration-300 pb-8'>
//  <div className='pl-10 xl:pl-20 h-full'>
//    <div className='mb-4 text-white/50 group-hover:text-accent transition-all duration-300'>
//      2018 - 2020
//    </div>
//    <h2 className='text-xl xl:text-2xl mb-1'>Frontend Developer</h2>
//    <p className='text-[13px] text-white/50 mb-6'>
//      AGM Development Solutions
//    </p>
//  </div>
//  <div className='pl-10 xl:pl-20 h-full'>
//    <h2 className='text-xl xl:text-2xl mb-1'>Web Designer</h2>
//    <p className='text-[13px] text-white/50 mb-6'>Freelancer</p>
//  </div>
// </div>
// {/* item 3 */}
// <div className='group relative before:absolute before:w-3 before:h-3 before:bg-secondary before:rounded-full before:hover:bg-accent before:z-10 max-w-4xl after:w-[1px] after:h-full after:absolute after:bg-white/10 after:top-0 after:left-[6px] after:bottom-0 after:z-0 before:transition-all before:duration-300 pb-8'>
//  <div className='pl-10 xl:pl-20 h-full'>
//    <div className='mb-4 text-white/50 group-hover:text-accent transition-all duration-300'>
//      2016 - 2018
//    </div>
//    <h2 className='text-xl xl:text-2xl mb-1'>UI Developer</h2>
//    <p className='text-[13px] text-white/50 mb-6'>GM Design Studio</p>
//  </div>
// </div>
