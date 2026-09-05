import LoginPageBanner from "@/assets/loginPageBanner.png";
import ClipboardIcon from "@/assets/clipboardIcon.svg";
import RightArrowIcon from "@/assets/rightArrowIcon.svg";
import ClockIcon from "@/assets/clockIcon.svg";
import Image from "next/image";
const App = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex">
        <div className="w-[50%] bg-[#fcfbf9] border-r-[2px] border-[#E7E5E4]">
          hii
        </div>
        <div className="relative w-[50%] bg-[#f9f8f6]">
          <div className="w-[40%] flex flex-col mx-auto mt-[2rem] justify-center items-center">
            <div className="size-[5rem] bg-[#8ec97150] rounded-[50%] flex justify-center items-center bg-[]">
              <ClipboardIcon className="size-[65%] text-[#3c610b]" />
            </div>
            <h2 className="text-[2.5rem] text-center leading-[2.7rem] font-bold">
              Help us serve <br />
              you <span className="text-[#3c610b]">better!</span>
            </h2>
            <div className="h-[3px] w-[3rem] bg-[#3c610b50] rounded-[2rem] my-[0.7rem]"></div>
            <div>
              <p className="text-center text-[#404040]">
                Take a quick survey and get personalized dish recommendations
                that you'll love!
              </p>
            </div>
          </div>
          <Image
            className="w-[65%] left-[50%] translate-x-[-50%] absolute bottom-[10vh] object-contain"
            src={LoginPageBanner}
            alt="Login Page Banner"
          />
          <div className="absolute w-[100%] pb-[1rem] h-max z-[10] bottom-0 flex flex-col gap-[.5rem] justify-center items-center">
            <button className="w-[70%] relative h-[3rem] bg-[#3c610b] text-white rounded-[.5rem]">
              Take a Survey
              <RightArrowIcon className="text-white size-[1.8rem] absolute right-[1rem] top-[50%] translate-y-[-50%]" />
            </button>
            <div className="flex justify-center gap-[.5rem] items-center">
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
