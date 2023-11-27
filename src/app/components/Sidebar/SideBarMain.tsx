import { MenuState } from './SideBar';

type Props = {
  changeState: (string: MenuState) => void;
};

const SideBarMain = ({ changeState }: Props) => {
  return (
    <div className='side-bar-menu gap-y-5'>
      <button
        onClick={() => {
          changeState(MenuState.Men);
        }}
        className='flex justify-between'
      >
        <h1>HOMBRE</h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>
      <button
        onClick={() => {
          changeState(MenuState.Women);
        }}
        className='flex justify-between'
      >
        <h1>MUJER</h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBarMain;
