const BottomNavbar = () => {
  const buttonStyle =
    'w-14 h-14 mx-4 text-center border-[2px] border-black rounded-full';
  return (
    <nav className='z-50 sticky bottom-0 bg-white hidden sm:flex items-center justify-center h-16'>
      <button className={buttonStyle}>Home</button>
      <button className={buttonStyle}>Men</button>
      <button className={buttonStyle}>Women</button>
      <button className={buttonStyle}>New Collection</button>
      <button className={buttonStyle}>Sale</button>
    </nav>
  );
};

export default BottomNavbar;
