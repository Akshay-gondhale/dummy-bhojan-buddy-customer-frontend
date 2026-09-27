import FoodImage from '@/assets/foodImage.png';
import DummyRestaurantLogo from '@/assets/dummyRestaurantLogo.png';
import TableIcon from '@/assets/tableIcon.svg';
import HeroImage from './HeroImage';
import Image from 'next/image';
import RightArrowIcon from '@/assets/rightArrowIcon.svg';
import UserIcon from '@/assets/userIcon.svg';
import HelpMeChooseIcon from '@/assets/helpMeChooseIcon.svg';
import BhojanBuddyLogo from '@/assets/bhojanBuddyLogo.svg';
import Link from 'next/link';

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const SparksIcon = () => (
  <svg
    width="32"
    height="18"
    viewBox="0 0 32 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <line
      x1="2"
      y1="16"
      x2="8"
      y2="3"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <line
      x1="16"
      y1="15"
      x2="16"
      y2="2"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <line
      x1="27"
      y1="16"
      x2="23"
      y2="3"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const Signup = () => {
  return (
    <div className="tablet:flex tablet:flex-row-reverse tablet:items-center tablet:justify-center tablet:h-screen tablet:overflow-hidden min-h-screen w-full bg-[#fcfbf7]">
    
      <div className="tablet:h-screen tablet:w-[46%] flex h-max w-full shrink-0 items-center justify-end xl:w-[42%]">
        <div className="relative h-full w-max">
          <HeroImage image={FoodImage} />
        </div>
      </div>


      <div className="tablet:w-[54%] tablet:h-screen tablet:overflow-y-auto tablet:px-8 mx-auto w-full [scrollbar-width:none] px-4 py-6 [-ms-overflow-style:none] lg:px-12 xl:w-[58%] xl:px-16 [&::-webkit-scrollbar]:hidden">
        <div className="tablet:min-h-full flex w-full flex-col items-center justify-center py-3">
          <div className="flex w-full max-w-[38rem] flex-col justify-center sm:max-w-[42rem] lg:max-w-[44rem] xl:max-w-[46rem]">

            <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
              <BhojanBuddyLogo className="size-8 sm:size-9" />
              <span className="font-nunito text-xl font-black tracking-tight text-[#1c281f] sm:text-2xl">
                Bhojan Buddy
              </span>
            </div>


            <span className=''>
              <SparksIcon />
            </span>
            <h1 className="font-nunito tablet:text-[2.85rem] text-[2.2rem] leading-[1.12] font-black tracking-tight text-[#1c281f] sm:text-[2.6rem]">
              Create your <br />
              Bhojan Buddy account
            </h1>

            <p className="font-nunito mt-2 text-[1.25rem] font-black text-[#388e3c] sm:text-[1.4rem]">
              Create once. Dine anywhere.
            </p>

            <p className="font-inter mt-1.5 max-w-[34rem] text-[0.95rem] leading-[1.45] font-medium text-[#6f7c76] sm:text-[1.02rem]">
              Use your account at any partner restaurant and enjoy a seamless
              dining experience.
            </p>


            <div className="mt-5 grid grid-cols-1 gap-3.5 sm:mt-6 sm:grid-cols-2">
  
              <div className="flex h-[3.35rem] w-full items-center rounded-xl border border-[#cbd5e1] bg-white px-4 shadow-2xs transition-all focus-within:border-[#388e3c] focus-within:ring-1 focus-within:ring-[#388e3c]">
                <UserIcon className="mr-3 size-5 shrink-0 text-[#6f7c76]" />
                <input
                  type="text"
                  placeholder="First name"
                  className="font-inter w-full text-[0.98rem] font-medium text-[#1c281f] outline-none placeholder:text-[#6f7c76]/70"
                />
              </div>


              <div className="flex h-[3.35rem] w-full items-center rounded-xl border border-[#cbd5e1] bg-white px-4 shadow-2xs transition-all focus-within:border-[#388e3c] focus-within:ring-1 focus-within:ring-[#388e3c]">
                <UserIcon className="mr-3 size-5 shrink-0 text-[#6f7c76]" />
                <input
                  type="text"
                  placeholder="Last name"
                  className="font-inter w-full text-[0.98rem] font-medium text-[#1c281f] outline-none placeholder:text-[#6f7c76]/70"
                />
              </div>
            </div>

            <div className="mt-3.5 flex h-[3.35rem] w-full items-center rounded-xl border border-[#cbd5e1] bg-white px-4 shadow-2xs transition-all focus-within:border-[#388e3c] focus-within:ring-1 focus-within:ring-[#388e3c]">
              <PhoneIcon className="mr-3 size-5 shrink-0 text-[#6f7c76]" />
              <div className="flex shrink-0 cursor-pointer items-center gap-1 pr-3">
                <span className="font-inter text-[0.98rem] font-bold text-[#1c281f]">
                  +91
                </span>
                <svg
                  className="size-3.5 text-[#6f7c76]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className="mr-3.5 h-[55%] w-[1px] shrink-0 bg-[#cbd5e1]"></div>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="font-inter w-full text-[0.98rem] font-medium text-[#1c281f] outline-none placeholder:text-[#6f7c76]/70"
              />
            </div>

 
            <button className="bg-primary group relative mt-4 flex h-[3.5rem] w-full cursor-pointer items-center justify-center rounded-xl shadow-sm transition-all hover:bg-[#488e33] active:scale-[0.99] sm:mt-5">
              <span className="font-nunito text-[1.18rem] font-extrabold tracking-wide text-white">
                Create account
              </span>
              <RightArrowIcon className="absolute right-5 size-5 text-white transition-transform group-hover:translate-x-1" />
            </button>

            <div className="mt-3.5 text-center">
              <p className="font-inter text-[0.95rem] font-medium text-[#6f7c76]">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="ml-0.5 inline-flex items-center gap-1 font-extrabold text-[#388e3c] hover:underline"
                >
                  Log in <span className="text-base font-black">→</span>
                </Link>
              </p>
            </div>


            <div className="my-4 flex w-full items-center justify-center sm:my-5">
              <div className="h-[1px] flex-1 bg-[#e2e8f0]"></div>
              <span className="font-inter px-4 text-xs font-bold tracking-wider text-[#6f7c76]">
                OR
              </span>
              <div className="h-[1px] flex-1 bg-[#e2e8f0]"></div>
            </div>

      
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
              <div>
                <button className="group flex h-[3.5rem] w-full cursor-pointer items-center justify-between rounded-xl border-[1.5px] border-[#388e3c] bg-white px-4 shadow-2xs transition-all hover:bg-[#f2f9ed]">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center">
                      <UserIcon className="size-5 text-[#388e3c]" />
                    </div>
                    <span className="font-nunito text-[1rem] font-bold text-[#1c281f]">
                      Continue as Guest
                    </span>
                  </div>
                  <RightArrowIcon className="size-4 text-[#1c281f] transition-transform group-hover:translate-x-1" />
                </button>
                <p className="font-inter mt-1.5 pl-1 text-left text-xs leading-snug font-medium text-[#6f7c76]">
                  No login, no hassle.
                  <br />
                  Just great food.
                </p>
              </div>

  
              <div>
                <button className="group flex h-[3.5rem] w-full cursor-pointer items-center justify-between rounded-xl border-[1.5px] border-transparent bg-[#eef7e9] px-4 transition-all hover:bg-[#e4f3dc]">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center">
                      <HelpMeChooseIcon className="size-5 text-[#388e3c]" />
                    </div>
                    <span className="font-nunito text-[1rem] font-bold text-[#1c281f]">
                      Help me choose
                    </span>
                  </div>
                  <RightArrowIcon className="size-4 text-[#1c281f] transition-transform group-hover:translate-x-1" />
                </button>
                <p className="font-inter mt-1.5 pl-1 text-left text-xs leading-snug font-medium text-[#6f7c76]">
                  Get personalised
                  <br />
                  recommendations.
                </p>
              </div>
            </div>

       
            <div className="mt-5 flex w-full items-center justify-between gap-3 rounded-2xl border border-[#e2efe0] bg-[#f0f8ec] p-4 sm:mt-6 sm:gap-5 sm:p-5">
             
              <div className="flex shrink-0 flex-col items-start gap-2 pl-1 sm:flex-row sm:items-center sm:gap-3.5 sm:pl-2">
                <p className="font-inter text-[0.85rem] font-bold tracking-wide whitespace-nowrap text-[#6f7c76] sm:text-[0.98rem]">
                  You're dining at
                </p>
                <Image
                  className="h-10 w-auto object-contain sm:h-12"
                  src={DummyRestaurantLogo}
                  alt="Udaan Restaurant"
                  priority
                />
              </div>

              <div className="h-10 w-px shrink-0 bg-[#d4e6cf]"></div>

              
              <div className="flex max-w-[16rem] flex-1 items-center justify-center gap-2.5 rounded-xl border border-[#d2e5cd] bg-[#e4f3dc] px-4 py-2.5 sm:max-w-[20rem]">
                <TableIcon className="size-6 text-[#1c281f]" />
                <span className="font-nunito text-[1.1rem] font-extrabold whitespace-nowrap text-[#1c281f]">
                  Table 12
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
