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
      <div className="tablet:px-[2rem] flex h-[6rem] w-[100%] justify-between px-[1rem]">
        <div className="tablet:w-[30%] flex h-[100%] w-[100%] items-center gap-[1rem]">
          <div className="tablet:w-[60%] flex h-[100%] w-max items-center justify-center">
            <Image
              className="tablet:w-[80%] h-[60%] w-max object-contain"
              src={dummyRestaurant}
              alt="Dummy Restaurant Logo"
            />
          </div>
          <div className="bg-muted h-[50%] w-[2px] rounded-[2px] opacity-50"></div>
          <div className="tablet:w-[40%] flex h-[100%] w-max items-center justify-center gap-[.5rem]">
            <TableIcon className="size-[2.5rem]" />
            <p className="font-nunito pt-[.3rem] font-semibold">Table 12</p>
          </div>
        </div>
      </div>
      <div className="tablet:w-[80%] tablet:px-0 relative mx-auto w-[100%] max-w-[90rem] px-[1rem]">
        <div className="absolute top-0 right-0">
          <p className="text-muted flex items-center gap-2 text-[1rem]">
            Skip
            <RightChevronIcon className="text-muted size-4" />
          </p>
        </div>
        {/* Survey Section */}

        <div className="flex items-center justify-center gap-4">
          {/* Question Number */}
          <span className="tablet:block hidden font-semibold text-gray-500">
            1 of 5
          </span>
           {/* Progress Bars */}
          <div className="flex gap-2">
            <div className="bg-primary tablet:w-[3.5rem] h-[.5rem] w-[2rem] rounded-full"></div>
            <div className="tablet:w-[2rem] h-[.5rem] w-[1rem] rounded-full bg-gray-200"></div>
            <div className="tablet:w-[2rem] h-[.5rem] w-[1rem] rounded-full bg-gray-200"></div>
            <div className="tablet:w-[2rem] h-[.5rem] w-[1rem] rounded-full bg-gray-200"></div>
            <div className="tablet:w-[2rem] h-[.5rem] w-[1rem] rounded-full bg-gray-200"></div>
          </div>
        </div>

        {/* Spice Sectoion 1 */}

        <div className="flex w-[100%] flex-col items-center justify-center">
          <div className="bg-primary-light mt-[.8rem] mb-[.3rem] flex size-[6rem] items-center justify-center rounded-full">
            <Image
              className="w-[70%] object-contain"
              src={spicy}
              alt="Spicy Icon"
            />
          </div>

          <p className="font-nunito tablet:text-[2rem] tablet:leading-[2.5rem] text-center text-[1.7rem] leading-[2.2rem] font-bold">
            How much spice are <br /> you in the mood for?
          </p>
          <p className="text-muted mt-[.2rem] text-center font-medium">
            We&apos;ll tailor recommendations to your taste
          </p>
        </div>

        {/* Spice Sectoion 2 */}
        <div className="tablet:flex-row mt-[1rem] flex flex-col items-center justify-center gap-[.8rem]">
          <div className="shadow-6 border-primary bg-primary-light tablet:w-[15rem] tablet:h-[10rem] tablet:flex-col relative flex w-[100%] items-center justify-center rounded-[.8rem] border py-[.7rem]">
            <div className="tablet:flex-col tablet:gap-[0] flex h-[100%] w-[100%] items-center justify-center gap-[1rem]">
              <div className="tablet:w-auto tablet:pl-[0] w-[20%] pl-[.5rem]">
                <Image
                  className="tablet:w-[3.5rem] w-[80%] object-contain"
                  src={mild}
                  alt="Mild Spice"
                />
              </div>
              <div className="tablet:w-auto flex w-[80%]">
                <div className="tablet:w-auto w-[80%]">
                  <h1 className="font-nunito tablet:text-center text-[1rem] font-bold">
                    Mild
                  </h1>
                  <h6 className="font-nunito text-muted tablet:text-center text-[.8rem]">
                    just a hint of spice
                  </h6>
                </div>
                <div className="tablet:w-[0] flex w-[20%] items-center justify-center">
                  <div className="text-primary tablet:absolute tablet:top-[.5rem] tablet:right-[.5rem] tablet:size-[1.4rem] size-[1.7rem] rounded-full">
                    <CheckCircleIcon className="text-primary h-[100%] w-[100%] object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-6 tablet:h-[10rem] tablet:w-[15rem] relative flex items-center justify-center rounded-[.8rem] bg-white py-[.7rem]">
            <div className="tablet:gap-[0] tablet:flex-col flex h-[100%] w-[100%] items-center justify-center gap-[1rem]">
              <div className="tablet:w-auto tablet:pl-[0] w-[20%] pl-[.5rem]">
                <Image
                  className="tablet:w-[3.5rem] w-[80%] object-contain"
                  src={medium}
                  alt="Medium Spice"
                />
              </div>
              <div className="tablet:w-auto flex w-[80%]">
                <div className="tablet:w-auto w-[80%]">
                  <h1 className="font-nunito tablet:text-center text-[1rem] font-bold">
                    Medium
                  </h1>
                  <h6 className="tablet:text-center font-nunito text-muted text-[.8rem]">
                    A balanced kick
                  </h6>
                </div>
                <div className="tablet:w-[0] flex w-[20%] items-center justify-center">
                  <div className="border-muted tablet:absolute top-[.5rem] right-[.5rem] size-[1.2rem] rounded-full border-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-6 tablet:h-[10rem] tablet:w-[15rem] relative flex items-center justify-center rounded-[.8rem] bg-white py-[.7rem]">
            <div className="tablet:gap-[0] tablet:flex-col flex h-[100%] w-[100%] items-center justify-center gap-[1rem]">
              <div className="tablet:pl-[0] tablet:w-auto w-[20%] pl-[.5rem]">
                <Image
                  className="tablet:w-[3.5rem] w-[80%] object-contain"
                  src={spicy}
                  alt="Spicy Spice"
                />
              </div>
              <div className="tablet:w-auto flex w-[80%]">
                <div className="tablet:w-auto w-[80%]">
                  <h1 className="tablet:text-center font-nunito text-[1rem] font-bold">
                    Spicy
                  </h1>
                  <h6 className="tablet:text-center font-nunito text-muted text-[.8rem]">
                    Bring on the heat
                  </h6>
                </div>
                <div className="tablet:w-[0] flex w-[20%] items-center justify-center">
                  <div className="border-muted tablet:absolute top-[.5rem] right-[.5rem] size-[1.2rem] rounded-full border-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-6 tablet:h-[10rem] tablet:w-[15rem] relative flex items-center justify-center rounded-[.8rem] bg-white py-[.7rem]">
            <div className="tablet:gap-[0] tablet:flex-col flex h-[100%] w-[100%] items-center justify-center gap-[1rem]">
              <div className="tablet:pl-[0] tablet:w-auto w-[20%] pl-[.5rem]">
                <Image
                  className="tablet:w-[3.5rem] object-contain"
                  src={extra}
                  alt="Extra Spicy Spice"
                />
              </div>
              <div className="tablet:w-auto w-[80%]">
                <h1 className="tablet:text-centerfont-nunito text-[1rem] font-bold">
                  Very Spicy
                </h1>
                <h6 className="tablet:text-center font-nunito text-muted text-[.8rem]">
                  I love it hot
                </h6>
                <div className="flex w-[20%] items-center justify-center">
                  <div className="border-muted tablet:absolute top-[.5rem] right-[.5rem] size-[1.2rem] rounded-full border-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tablet :gap-[2rem] flex h-[7rem] w-[100%] items-center justify-center gap-[.5rem]">
          <button className="shadow-6 border-primary tablet:w-[15rem] relative mt-[.5rem] flex h-[3rem] w-[50%] items-center justify-center gap-[1rem] rounded-[.8rem] border font-semibold">
            <RightArrowIcon
              className={
                'tablet:absolute tablet:left-[1rem] tablet:translate-y-[-50%] top-[50%] size-[2rem] rotate-[180deg] text-black'
              }
            />
            <p className="font-nunito text-[1rem] font-semibold text-black">
              Back
            </p>
          </button>
          <button className="shadow-6 bg-primary tablet:w-[15rem] relative mt-[.5rem] flex h-[3rem] w-[50%] items-center justify-center gap-[1rem] rounded-[.8rem] font-semibold">
            <p className="font-nunito text-[1rem] font-semibold text-white">
              Next
            </p>
            <RightArrowIcon
              className={
                'tablet:absolute tablet:right-[1rem] tablet:top-[50%] tablet:translate-y-[-50%] size-[2rem] text-black text-white'
              }
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Survey;
