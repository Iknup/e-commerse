import MainPageSlider from './components/Main/MainPageSlider';
import SideBar from './components/Sidebar/SideBar';

export default function Home() {
  return (
    <main className='w-full h-full bg-black '>
      <div className='fixed z-50 top-3 left-3'>
        <SideBar />
      </div>
      <MainPageSlider />
    </main>
  );
}
