import FoodImage from '@/assets/foodImage.png';
import DummyRestaurantLogo from '@/assets/dummyRestaurantLogo.png';
import TableIcon from '@/assets/tableIcon.svg';
import HeroImage from './HeroImage';
import Image from 'next/image';
import RightArrowIcon from '@/assets/rightArrowIcon.svg';
import UserIcon from '@/assets/userIcon.svg';
import HelpMeChooseIcon from '@/assets/helpMeChooseIcon.svg';
import Link from 'next/link';
const Login = () => {
  return (
    <>
      <div className="tablet:flex tablet:flex-row-reverse tablet:items-center tablet:justify-center tablet:h-[100vh] w-[100%]">
        <div className="tablet:h-[100%] tablet:w-[50%] flex h-max w-[100%] items-center justify-end xl:w-[45%]">
          <div className="relative h-[100%] w-max">
            <HeroImage image={FoodImage} />
          </div>
        </div>
        <div className="tablet:w-[50%] tablet:pl-[3rem] tablet:overflow-y-auto tablet:pb-0 tablet:px-0 tablet:max-w-none tablet:mx-auto mx-auto h-[100%] w-[100%] max-w-[35rem] px-[1rem] pb-[3rem] xl:w-[55%] xl:pl-[5rem]">
          <div className="tablet:min-h-[100vh] flex w-[100%] flex-col items-center justify-center">
            <div className="tablet:block tablet:flex-none flex w-[100%] flex-col items-center justify-center xl:max-w-[35rem]">
              <p className="text-muted font-nunito text-[1.5rem] font-bold">
                Welcome to
              </p>
              <Image
                className="tablet:h-[7rem] tablet:w-max h-auto w-[70%] object-contain"
                src={DummyRestaurantLogo}
                priority
                alt="..."
              />
              <div className="bg-primary-light border-primary mt-[1rem] flex h-[2.5rem] w-max items-center justify-center gap-[.5rem] rounded-[.8rem] border-[1px] px-[1rem]">
                <TableIcon className="size-[2rem] text-black" />
                <p className="font-medium">Table 12</p>
              </div>
              <h2 className="font-nunito tablet:text-[3rem] tablet:leading-[3.5rem] mt-[1rem] text-[2rem] leading-[2.3rem] font-bold">
                Your table is ready!
              </h2>
              <p className="text-muted tablet:text-[1.3rem]">
                Explore the menu, order your favourites, <br /> and enjoy a
                seamless dining experience.
              </p>
              <div className="border-muted mt-[.5rem] flex h-[3rem] w-[100%] rounded-[.8rem] border-[1px]">
                <div className="flex w-[15%] items-center justify-center">
                  <p className="font-inter font-medium">+91</p>
                </div>
                <div className="flex w-[85%] items-center justify-between gap-[1rem]">
                  <div className="bg-muted h-[60%] w-[1px]"></div>
                  <input
                    type="number"
                    className="placeholder:text-muted font-inter w-[100%] font-medium outline-none"
                    placeholder="Enter your phone number"
                    suppressHydrationWarning={true}
                  />
                </div>
              </div>
              <button className="bg-primary relative mt-[.5rem] flex h-[3rem] w-[100%] items-center justify-center rounded-[.8rem] font-semibold">
                <p className="font-nunito text-on-primary text-[1.2rem] font-semibold">
                  Login with Mobile
                </p>
                <RightArrowIcon
                  className={
                    'text-on-primary absolute top-[50%] right-[1rem] size-[2rem] translate-y-[-50%]'
                  }
                />
              </button>
              <p className="text-muted mt-[.5rem] text-center text-[.8rem] font-medium">
                Don&apos;t have an account?
                <Link
                  href={'/signup'}
                  className="text-primary font-nunito ml-[.5rem] text-[.9rem] font-bold underline"
                >
                  Create account
                </Link>
              </p>
              <div className="mt-[.5rem] flex w-[100%] items-center justify-center">
                <div className="bg-muted h-[2px] w-[45%] opacity-[.5]"></div>
                <div className="flex w-[10%] items-center justify-center">
                  <p className="font-inter text-muted font-medium">OR</p>
                </div>
                <div className="bg-muted h-[2px] w-[45%] opacity-[.5]"></div>
              </div>
              <div className="mt-[.5rem] flex w-[100%] items-center justify-center">
                <div className="w-[48%]">
                  <button className="border-primary tablet:gap-[.8rem] flex h-[3.5rem] w-[100%] items-center justify-start gap-[.5rem] rounded-[.8rem] border-[2px] px-[1rem]">
                    <div className="tablet:w-[20%] flex h-[100%] w-[30%] items-center justify-center">
                      <UserIcon className="size-[1.8rem]" />
                    </div>
                    <p className="font-nunito tablet:text-[1rem] tablet:text-start tablet:w-[80%] w-[70%] text-[.9rem] font-semibold">
                      Continue as Guest
                    </p>
                    {/* <RightArrowIcon className="size-[1.7rem]" /> */}
                  </button>
                  <p className="text-muted font-inter mt-[.5rem] text-center text-[.9rem] leading-[1.3rem] font-medium">
                    No login, no hassle.
                    <br />
                    Just great food
                  </p>
                </div>
                <div className="w-[4%]"></div>
                <div className="w-[48%]">
                  <button className="border-primary bg-primary-soft tablet:gap-[.8rem] flex h-[3.5rem] w-[100%] items-center justify-start gap-[.5rem] rounded-[.8rem] border-[2px] px-[1rem]">
                    <div className="tablet:w-[20%] flex h-[100%] w-[30%] items-center justify-center">
                      <HelpMeChooseIcon className="w-[100%]" />
                    </div>
                    <p className="font-nunito tablet:text-[1rem] tablet:text-start w-[80%] text-[.9rem] font-semibold">
                      Help me choose
                    </p>
                    {/* <RightArrowIcon className="size-[1.7rem]" /> */}
                  </button>
                  <p className="text-muted font-inter mt-[.2rem] text-center text-[.9rem] leading-[1.3rem] font-medium">
                    Get personalised
                    <br /> recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
