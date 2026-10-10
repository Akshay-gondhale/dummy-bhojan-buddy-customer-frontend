import Image from 'next/image';
import dummyRestaurant from '@/assets/dummyRestaurantLogo.png';
import TableIcon from '@/assets/tableIcon.svg';
import BhojanBuddyLogo from '@/assets/bhojanBuddyLogo.svg';
import mild from '@/assets/mildSpicy.png';
import RightArrowIcon from '@/assets/rightArrowIcon.svg';
import extra from '@/assets/extraSpicy.png';
import medium from '@/assets/mediumSpicy.png';
import spicy from '@/assets/spicy.png';
import CheckCircleIcon from '@/assets/checkCircle.svg';
import RightChevronIcon from '@/assets/RightChevron.svg';
import leftArrowIcon from '@/assets/leftArrowIcon.svg';
const Survey = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex h-[6rem] w-[100%] justify-between px-[2rem]">
        <div className="flex h-[100%] w-[30%] items-center">
          <div className="flex h-[100%] w-[60%] items-center justify-center">
            <Image
              className="w-[80%] object-contain"
              src={dummyRestaurant}
              alt="Dummy Restaurant Logo"
            />
          </div>
          <div className="bg-muted h-[50%] w-[2px] rounded-[2px] opacity-50"></div>
          <div className="flex h-[100%] w-[40%] items-center justify-center gap-[.5rem]">
            <TableIcon className="size-[2.5rem]" />
            <p className="font-nunito pt-[.3rem] font-semibold">Table 12</p>
          </div>
        </div>
        <div className="flex h-[100%] w-[12%] items-center justify-center">
          <BhojanBuddyLogo className="size-[2.5rem]" />
          <p className="text-muted font-nunito text-[.8rem] leading-[1rem]">
            Powered by
            <br />
            Bhojan Buddy
          </p>
        </div>
      </div>
      <div className="mx-auto w-[80%] max-w-[90rem]">
        {/* Survey Section */}
        <div className="flex items-center justify-center gap-4">
          {/* Question Number */}
          <span className="font-semibold text-gray-500">1 of 5</span> 
          {/* Progress Bars */}
          <div className="flex gap-2">
            <div className="bg-primary h-[.5rem] w-[3.5rem] rounded-full"></div>
            <div className="h-[.5rem] w-[3.5rem] rounded-full bg-gray-200"></div>
            <div className="h-[.5rem] w-[3.5rem] rounded-full bg-gray-200"></div>
            <div className="h-[.5rem] w-[3.5rem] rounded-full bg-gray-200"></div>
            <div className="h-[.5rem] w-[3.5rem] rounded-full bg-gray-200"></div>
          </div>
        </div>

        {/* Spice Sectoion 1 */}

        <div className="flex w-[100%] flex-col items-center justify-center">
          <div className="bg-primary-light mt-[.8rem] mb-[.3rem] flex size-[6rem] items-center justify-center rounded-full">
            <div className="font-nunito text-muted flex size-[4rem] gap-[32rem]">
              <Image
                className="w-[100%] object-contain"
                src={spicy}
                alt="Spicy Icon"
              />
              <p className="flex items-center gap-2 text-[1rem] text-[#7D8795]">
                Skip
                <RightChevronIcon className="size-4 fill-[#7D8795]" />
              </p>
            </div>
          </div>

          <p className="font-nunito text-[2rem] leading-[2.5rem] font-bold">
            How much spice are <br /> you in the mood for?
          </p>
          <p className="text-muted mt-[.2rem] font-medium">
            We&apos;ll tailor recommendations to your taste
          </p>
        </div>

        {/* Spice Sectoion 2 */}
        <div className="mt-[1rem] flex items-center justify-center gap-[.8rem]">
          <div className="shadow-6 relative flex h-[10rem] w-[15rem] items-center justify-center rounded-[.8rem] border border-[#8AC184] bg-[#f1f6ee]">
            <div className="absolute top-[.5rem] right-[.5rem] size-[1.2rem] rounded-full border-[1px] border-[#8fc971] fill-green-600">
              <CheckCircleIcon className="w-[100% ] h-[100%] fill-green-600 object-contain" />
            </div>
            <div className="item-center flex h-[70%] w-[50%] flex-col justify-center">
              <Image
                className="w-[50%] object-contain"
                src={mild}
                alt="Mild Spice"
              />
              <h1 className="font-nunito text-[1rem] font-bold">Mild</h1>
              <h6 className="font-nunito text-muted text-[.8rem]">
                just a hint of spice
              </h6>
            </div>
          </div>
          <div className="shadow-6 relative flex h-[10rem] w-[15rem] items-center justify-center rounded-[.8rem]">
            <div className="border-muted absolute top-[.5rem] right-[.5rem] size-[1.2rem] rounded-full border-[1px]"></div>
            <div className="item-center flex h-[70%] w-[50%] flex-col justify-center">
              <Image
                className="w-[50%] object-contain"
                src={medium}
                alt="Medium Spice"
              />
              <h1 className="font-nunito text-[1rem] font-bold">Medium</h1>
              <h6 className="font-nunito text-muted text-[.8rem]">
                A balanced kick
              </h6>
            </div>
          </div>
          <div className="shadow-6 relative flex h-[10rem] w-[15rem] items-center justify-center rounded-[.8rem]">
            <div className="border-muted absolute top-[.5rem] right-[.5rem] size-[1.2rem] rounded-full border-[1px]"></div>
            <div className="item-center flex h-[70%] w-[50%] flex-col justify-center">
              <Image
                className="w-[50%] object-contain"
                src={spicy}
                alt="Spicy Spice"
              />
              <h1 className="font-nunito text-[1rem] font-bold">Spicy</h1>
              <h6 className="font-nunito text-muted text-[.8rem]">
                Bring on the heat
              </h6>
            </div>
          </div>
          <div className="shadow-6 relative flex h-[10rem] w-[15rem] items-center justify-center rounded-[.8rem]">
            <div className="border-muted absolute top-[.5rem] right-[.5rem] size-[1.2rem] rounded-full border-[1px]"></div>
            <div className="item-center flex h-[70%] w-[50%] flex-col justify-center">
              <Image
                className="w-[50%] object-contain"
                src={extra}
                alt="Extra Spicy Spice"
              />
              <h1 className="font-nunito text-[1rem] font-bold">Very Spicy</h1>
              <h6 className="font-nunito text-muted text-[.8rem]">
                I love it hot
              </h6>
            </div>
          </div>
        </div>
        <div className="flex h-[7rem] items-center justify-center gap-[2rem]">
          <button className="shadow-6 relative mt-[.5rem] flex h-[3rem] w-[15rem] items-center justify-center rounded-[.8rem] border border-[#8fc971] font-semibold">
            <p className="font-nunito text-[1.2rem] font-semibold text-black">
              Back
            </p>
            <RightArrowIcon
              className={
                'absolute top-[50%] left-[1rem] size-[2rem] translate-y-[-50%] text-black'
              }
            />
          </button>
          <button className="shadow-6 bg-primary relative mt-[.5rem] flex h-[3rem] w-[15rem] items-center justify-center rounded-[.8rem] font-semibold">
            <p className="font-nunito text-[1.2rem] font-semibold text-white">
              Next
            </p>
            <RightArrowIcon
              className={
                'absolute top-[50%] right-[1rem] size-[2rem] translate-y-[-50%] text-black'
              }
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Survey;
