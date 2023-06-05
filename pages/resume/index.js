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
          <div className=' w-full max-w-xl mx-auto border-b border-white/10 pb-3 mb-6'>
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
          <div className='bg-pink-50/10 max-w-4xl mx-auto flex flex-col xl:flex-row justify-between h-[42vh] xl:h-[55vh] overflow-y-auto'>
            <div className='bg-green-400/20 flex-1'>left</div>
            <div className='bg-yellow-400/20 flex-1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              temporibus omnis, reprehenderit illum autem vel molestiae rem vero
              sequi deserunt laborum consequuntur nostrum laudantium voluptas.
              Veniam distinctio praesentium impedit magni! Officia tempore sequi
              vero iste qui, illum, expedita explicabo, placeat fugit culpa
              debitis. Ratione optio quam, soluta, obcaecati vel exercitationem
              quas tenetur eius facilis omnis atque sint maiores saepe officia
              eos ut voluptatem quo. Ipsum saepe aliquid ad ut optio repudiandae
              ipsam asperiores ratione nobis error tempore sint, sit ipsa
              provident reiciendis architecto vero esse earum reprehenderit
              natus quo eius. Quae, facilis nemo iste sint ea rerum vitae
              dolores? Impedit ipsum soluta quaerat! Voluptatum commodi dicta
              accusamus eligendi unde eius velit eum totam nihil, laborum culpa,
              officiis ipsa optio, omnis aliquam qui. Molestiae ratione totam
              nemo odit dolorem ut corrupti dolore quos et temporibus quae
              voluptatibus, magni nisi praesentium quaerat consectetur illum
              necessitatibus cupiditate architecto ab quasi! Molestiae officiis
              amet cum ea explicabo quia quas, ad debitis dolorem facilis! Rem
              atque repudiandae necessitatibus maiores fugiat ut unde, quas
              velit officiis placeat quos, quibusdam perspiciatis deserunt
              voluptatibus earum, doloremque odio temporibus. Hic voluptatibus
              illum amet! Voluptas, nobis magnam expedita quia a hic nostrum,
              rerum vero alias animi quod inventore corporis sunt veritatis
              eligendi commodi voluptate assumenda dolorum quae ullam atque
              odio? Dignissimos beatae nobis, maxime odio expedita accusamus
              officiis mollitia dolores, amet optio commodi tenetur eligendi
              quisquam ut quae vitae alias, atque nam. In, facilis adipisci sit
              ullam qui consectetur commodi non quaerat, sint officiis pariatur
              recusandae quod tempore quasi veritatis labore explicabo fugit
              error voluptatum. Consequuntur exercitationem ab in temporibus
              nulla reprehenderit debitis! Voluptatum ipsam nisi molestias.
              Nihil natus facilis earum quisquam dignissimos expedita neque fuga
              quaerat porro rem vel molestiae voluptatum consequatur mollitia
              veritatis ab dicta ullam ipsam provident, nobis modi doloremque
              libero nisi cupiditate. Recusandae architecto iusto vitae beatae
              dolorum, doloribus aliquid quaerat labore. Deserunt quae
              temporibus ab minima officiis culpa molestias ipsum at suscipit
              voluptatibus ad dignissimos saepe ducimus recusandae officia
              fugiat fuga nam, ea, provident maxime, unde a obcaecati. Facere
              recusandae voluptatum voluptate rem ea temporibus fuga laboriosam,
              accusantium ipsum error impedit modi praesentium ducimus vel
              laudantium eaque ut omnis? Sunt non quae consequatur unde
              laudantium quam consectetur vel exercitationem necessitatibus?
              Adipisci harum quaerat cupiditate facilis esse pariatur, veniam,
              magnam eius sit autem consequuntur quos qui beatae magni, error
              voluptas? Accusamus quasi corrupti ex eligendi voluptate est a
              vero, iste reprehenderit facere numquam perspiciatis suscipit
              fugiat.
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
