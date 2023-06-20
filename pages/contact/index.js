const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-white text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <div className='flex-1'>
            <h2 className='h2 text-center mb-12'>
              Let's connect <span className='text-accent'>.</span>
            </h2>
          </div>
          {/* form */}
          <form className='flex-1 flex flex-col gap-4 w-full mx-auto'>
            <div className='flex gap-x-4 w-full'>
              <input
                type='text'
                placeholder='name'
                className='w-full h-[50px] rounded-md pl-4 capitalize'
              />
              <input
                type='email'
                placeholder='email'
                className='w-full h-[50px] rounded-md pl-4 capitalize'
              />
            </div>
            <input
              type='text'
              placeholder='subject'
              className='w-full h-[50px] rounded-md pl-4 capitalize'
            />
            <textarea
              placeholder='message'
              className='w-full h-[50px] rounded-md pl-4 capitalize'
            ></textarea>
            <button className='w-full bg-accent h-[50px] rounded-md'>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
