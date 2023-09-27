import FacebookIcon from '@/icons/FacebookIcon';
import TwitterIcon from '@/icons/TwitterIcon';
import InstagramIcon from '@/icons/InstagramIcon';

const Footer = () => {
  return (
    <div
      className='sm:flex  sm:h-36 justify-evenly items-start pt-16 px-4 max-w-4xl mx-auto
    relative space-y-3 sm:space-y-0 pb-4'
    >
      <p className='font-extrabold text-2xl tracking-widest'>SISLEY</p>
      <div>
        <h1 className='font-bold'>Dirección</h1>
        <p>Velasco 687, Santa Cruz de la Sierra</p>
      </div>
      <div>
        <h1 className='font-bold'>Contactanos</h1>
        <p className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
            />
          </svg>
          3 3369011
        </p>
      </div>
      <div className='flex space-x-2 absolute right-6 bottom-5 sm:static'>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
};

export default Footer;
