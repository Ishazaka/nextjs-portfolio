const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-white text-center xl:text-left'>
        <div className='flex flex-col'>
          {/* text */}
          <div className='flex-1'>
            <h2 className='h2'>
              Let's work together <span className='text-accent'>.</span>
            </h2>
          </div>
          {/* form */}
          <form className='flex-1 flex flex-col gap-4'>
            <div className='flex gap-x-4'>
              <input type='text' placeholder='name' className='w-full' />
              <input type='email' placeholder='email' className='w-full' />
            </div>
            <input type='text' placeholder='subject' />
            <textarea placeholder='message'></textarea>
            <button>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
