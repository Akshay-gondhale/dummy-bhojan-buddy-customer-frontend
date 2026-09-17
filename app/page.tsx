import LoginPageBanner from '@/assets/loginPageBanner.png';
import ClipboardIcon from '@/assets/clipboardIcon.svg';
import RightArrowIcon from '@/assets/rightArrowIcon.svg';
import ClockIcon from '@/assets/clockIcon.svg';
import Image from 'next/image';
const App = () => {
  return (
    <>
      <div className="flex h-[100vh] w-[100%]">
        <div className="w-[50%] border-r-[2px] border-[#E7E5E4] bg-[#fcfbf9]">
          hii
        </div>
        <div className="relative w-[50%] bg-[#f9f8f6]">
          <div className="mx-auto mt-[2rem] flex w-[40%] flex-col items-center justify-center">
            <div className="bg-[] flex size-[5rem] items-center justify-center rounded-[50%] bg-[#8ec97150]">
              <ClipboardIcon className="size-[65%] text-[#3c610b]" />
            </div>
            <h2 className="text-center text-[2.5rem] leading-[2.7rem] font-bold">
              Help us serve <br />
              you <span className="text-[#3c610b]">better!</span>
            </h2>
            <div className="my-[0.7rem] h-[3px] w-[3rem] rounded-[2rem] bg-[#3c610b50]"></div>
            <div>
              <p className="text-center text-[#404040]">
                Take a quick survey and get personalized dish recommendations
                that you'll love!
              </p>
            </div>
          </div>
          <Image
            className="absolute bottom-[10vh] left-[50%] w-[65%] translate-x-[-50%] object-contain"
            src={LoginPageBanner}
            alt="Login Page Banner"
          />
          <div className="absolute bottom-0 z-[10] flex h-max w-[100%] flex-col items-center justify-center gap-[.5rem] pb-[1rem]">
            <button className="relative h-[3rem] w-[70%] rounded-[.5rem] bg-[#3c610b] text-white">
              Take a Survey
              <RightArrowIcon className="absolute top-[50%] right-[1rem] size-[1.8rem] translate-y-[-50%] text-white" />
            </button>
            <div className="flex items-center justify-center gap-[.5rem]">
              <ClockIcon className="size-[1.2rem] text-[#404040]" />
              <p className="text-[.8rem] text-[#404040]">
                Takes less than 2 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
