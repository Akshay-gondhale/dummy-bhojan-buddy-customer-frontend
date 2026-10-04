'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import BhojanBuddyHorizontalLogo from '@/assets/bhojanBuddyHorizontalLogo.svg';
import SpoonAndForkIcon from '@/assets/spoonAndFork.svg';
import LoveLogo from '@/assets/loveLogo.svg';
import ClockLogo from '@/assets/clockLogo.svg';

type HeroImageProps = {
  image: StaticImageData;
};

const DesktopSvgWrapper: React.FC<HeroImageProps> = ({ image }) => {
  const [, setIsLoaded] = useState<boolean>(false);
  const svgMask = `url("data:image/svg+xml,${encodeURIComponent(
    `
      <svg
        viewBox="0 0 1872 1500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M73.7059 85.1818C91.071 48.9593 102.692 29.9056 127.946 -1H1324.81C1342.98 20.0738 1354.9 32.3539 1381.44 55.6566C1404.25 73.7569 1419.95 84.5515 1461.21 106.727C1487.95 119.947 1506.28 126.903 1549.75 137.848C1582.26 145.067 1604.54 148.136 1656.63 150.616C1690.33 150.31 1712.17 151.186 1767.51 158.596C1809.63 163.177 1832.65 167.761 1872 181.737V1500H1077.15C1049.64 1482.93 973.161 1473.59 924.003 1457.71C896.832 1448.45 874.807 1442.66 815.523 1430.58L711.828 1404.24C675.859 1393.7 655.92 1386.27 620.895 1369.13C564.391 1336.22 543.172 1322.5 526.772 1307.69L470.139 1254.22C459.479 1238.28 452.88 1228.79 436.638 1207.94C422.452 1189.06 415.209 1176.59 403.136 1152.08C392.054 1130.84 386.394 1117.22 377.611 1089.04C367.604 1061.2 362.948 1043.24 356.075 1007.65L342.515 931.838C338.193 890.24 334.307 865.791 325.764 820.919L305.823 738.727C291.535 694.057 283.496 672.293 269.131 635.788L238.022 567.96C230.106 553.026 222.664 540.654 199.735 505.717C187.426 485.768 180.15 474.412 163.043 452.253C147.576 434.54 139.494 423.461 125.553 402.778C108.012 379.153 98.6573 363.994 82.4801 334.949C65.6001 303.886 58.6435 284.643 50.574 247.172C46.3204 213.867 45.3229 194.266 50.574 154.606C57.1685 128.088 61.563 113.05 73.7059 85.1818Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
  `
  )}")`;

  const maskStyle = {
    WebkitMaskImage: svgMask,
    maskImage: svgMask,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  } as const;
  return (
    <>
      <div className="relative isolate aspect-[1872/1500] h-[100vh]">
        <div className="absolute inset-0 z-10" style={maskStyle}>
          <Image
            src={image}
            alt="Restaurant"
            fill
            priority
            sizes="100vh"
            className="object-cover object-center"
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        {/* Floating Feature Cards Overlay for Desktop (1440px+) */}
        <div className="pointer-events-none absolute inset-0 z-20">
          {/* Card 1 */}
          <div className="pointer-events-auto absolute top-[17%] left-[12%] flex items-center gap-3.5 rounded-full border border-white/80 bg-white/95 px-5 py-3 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:scale-105 xl:left-[14%]">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#edf7e8] text-[#388e3c]">
              <SpoonAndForkIcon className="size-10 text-[#388e3c]" />
            </div>
            <div>
              <h4 className="font-nunito text-sm leading-tight font-extrabold whitespace-nowrap text-[#1c281f] xl:text-base">
                One account
              </h4>
              <p className="font-inter mt-0.5 text-xs leading-tight whitespace-nowrap text-[#66736c]">
                Use it at any partner restaurant.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="pointer-events-auto absolute top-[34%] left-[22%] flex items-center gap-3.5 rounded-full border border-white/80 bg-white/95 px-5 py-3 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:scale-105 xl:left-[24%]">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#edf7e8] text-[#388e3c]">
              <LoveLogo className="size-6 text-[#388e3c]" />
            </div>
            <div>
              <h4 className="font-nunito text-sm leading-tight font-extrabold whitespace-nowrap text-[#1c281f] xl:text-base">
                Save your favourites
              </h4>
              <p className="font-inter mt-0.5 text-xs leading-tight whitespace-nowrap text-[#66736c]">
                Get personalised recommendations.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="pointer-events-auto absolute top-[51%] left-[32%] flex items-center gap-3.5 rounded-full border border-white/80 bg-white/95 px-5 py-3 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:scale-105 xl:left-[34%]">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#edf7e8] text-[#388e3c]">
              <ClockLogo className="size-6 text-[#388e3c]" />
            </div>
            <div>
              <h4 className="font-nunito text-sm leading-tight font-extrabold whitespace-nowrap text-[#1c281f] xl:text-base">
                A smoother experience
              </h4>
              <p className="font-inter mt-0.5 text-xs leading-tight whitespace-nowrap text-[#66736c]">
                Faster ordering, easy reorders and more.
              </p>
            </div>
          </div>
        </div>

        <svg
          className="text-primary-soft absolute top-0 right-0 z-[-10] h-[100%]"
          viewBox="0 0 1884 1500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.458 52.6036L65.9515 0H762.244L792.517 838.47L1883.5 867.163V1500H856.251L844.301 1487.25C828.501 1468.61 819.138 1460.09 801.281 1448.99C783.681 1431.76 767.017 1422.19 734.36 1405.15L672.22 1334.22L591.756 1306.32L492.172 1252.92L473.051 1238.58L444.371 1209.88L428.438 1190.75L407.724 1162.06L381.434 1119.82L351.957 1059.25C344.844 1041.18 339.649 1025.89 329.65 995.483C320.433 969.207 316.559 950.186 312.92 905.42C310.19 870.965 310.172 850.737 310.53 808.98C310.829 779.642 311.193 758.716 312.123 714.931C313.994 700.865 312.144 691.577 307.343 674.283V652.763L305.75 620.882L309.733 604.942L316.107 589.001L261.933 510.893L201.386 460.68L140.042 402.497C122.611 382.859 112.743 370.984 94.6318 345.112C74.2056 317.225 64.1569 300.062 49.2214 266.206C37.8666 233.168 32.3604 214.153 26.9145 177.736C24.8128 154.492 23.9473 141.026 26.9145 110.786C28.7632 88.8723 31.7911 76.1219 40.458 52.6036Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
        <div className="absolute top-4 right-0 flex h-16 w-[22%] flex-col items-center justify-center pt-[.5rem]">
          <BhojanBuddyHorizontalLogo className="-mt-4 w-[75%]" />
        </div>
      </div>
    </>
  );
};

const TabletSvgWrapper: React.FC<HeroImageProps> = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const svgMask = `url("data:image/svg+xml,${encodeURIComponent(
    `
      <svg
        viewBox="0 0 1500 1500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M679.263 0L601.953 67.6484C566.816 101.838 551.395 122.392 533.616 162.218C508.948 224.945 504.639 260.421 519.81 324.436C527.842 364.533 535.138 389.516 566.749 450.759C610.582 542.124 637.17 596.932 646.821 627.474C664.656 681.787 673.174 722.276 684.096 823.516C684.815 853.955 695.14 1052 695.14 1052L712.397 1147.95C728.773 1196.01 737.731 1217.63 753.813 1246.66C772.33 1279.08 783.698 1294.19 805.584 1316.38C834.078 1340.46 850.737 1352.73 882.895 1370.23C917.196 1385.6 936.944 1393.56 974.011 1405.43C1007.17 1414.84 1024.81 1420.94 1054.08 1433.73C1092.64 1448.55 1115.71 1459.97 1158.31 1483.43L1181.09 1500H1500V205.016L1440.64 188.449L1327.43 167.05L1190.76 140.819C1149.66 130.251 1127.59 122.944 1089.29 108.376C1055.69 92.2189 1038.8 82.3147 1011.29 63.5067C992.396 46.4872 985.588 37.9182 974.011 22.7796L960.205 0.69029L679.263 0Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
  `
  )}")`;

  const maskStyle = {
    WebkitMaskImage: svgMask,
    maskImage: svgMask,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  } as const;
  return (
    <>
      <div className="relative isolate aspect-[1500/1500] h-[100vh]">
        <div className="absolute inset-0 z-10" style={maskStyle}>
          <Image
            src={image}
            alt="Restaurant"
            fill
            priority
            sizes="100vh"
            className="object-cover object-center"
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        {/* Floating Feature Cards Overlay for Tablet (768px to 1439px) */}
        <div className="pointer-events-none absolute inset-0 z-20">
          {/* Card 1 */}
          <div className="pointer-events-auto absolute top-[16%] left-[38%] flex origin-left scale-[0.8] items-center gap-2.5 rounded-full border border-white/80 bg-white/95 px-3.5 py-2 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all sm:scale-[0.85] md:scale-90 lg:scale-[0.95]">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#edf7e8] text-[#388e3c]">
              <SpoonAndForkIcon className="size-4 text-[#388e3c]" />
            </div>
            <div>
              <h4 className="font-nunito text-xs leading-tight font-extrabold whitespace-nowrap text-[#1c281f] sm:text-sm">
                One account
              </h4>
              <p className="font-inter mt-0.5 text-[0.68rem] leading-tight whitespace-nowrap text-[#66736c]">
                Use it at any partner restaurant.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="pointer-events-auto absolute top-[33%] left-[46%] flex origin-left scale-[0.8] items-center gap-2.5 rounded-full border border-white/80 bg-white/95 px-3.5 py-2 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all sm:scale-[0.85] md:scale-90 lg:scale-[0.95]">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#edf7e8] text-[#388e3c]">
              <LoveLogo className="size-4 text-[#388e3c]" />
            </div>
            <div>
              <h4 className="font-nunito text-xs leading-tight font-extrabold whitespace-nowrap text-[#1c281f] sm:text-sm">
                Save your favourites
              </h4>
              <p className="font-inter mt-0.5 text-[0.68rem] leading-tight whitespace-nowrap text-[#66736c]">
                Get personalised recommendations.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="pointer-events-auto absolute top-[50%] left-[54%] flex origin-left scale-[0.8] items-center gap-2.5 rounded-full border border-white/80 bg-white/95 px-3.5 py-2 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all sm:scale-[0.85] md:scale-90 lg:scale-[0.95]">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#edf7e8] text-[#388e3c]">
              <ClockLogo className="size-4 text-[#388e3c]" />
            </div>
            <div>
              <h4 className="font-nunito text-xs leading-tight font-extrabold whitespace-nowrap text-[#1c281f] sm:text-sm">
                A smoother experience
              </h4>
              <p className="font-inter mt-0.5 text-[0.68rem] leading-tight whitespace-nowrap text-[#66736c]">
                Faster ordering, easy reorders and more.
              </p>
            </div>
          </div>
        </div>

        {isLoaded && (
          <svg
            className="text-primary-soft absolute top-0 right-0 z-[-10] h-[100%]"
            viewBox="0 0 1500 1500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M496.31 102.452C514.151 59.8884 526.263 37.9725 550.169 1H819.461V240.481H1492V1500H894.034C840.196 1460.95 812.116 1434.8 771.509 1385.13L760.064 1369.15C701.876 1276.93 681.566 1217.46 656.347 1110.06C651.732 1089.43 649.369 1068.24 645.457 1021.04C643.777 984.295 644.04 958.786 647.528 900.952L659.266 788.458L664.1 702.88L644.076 580.034L576.407 484.793L523.93 408.877C516.399 395.672 511.618 386.974 492.167 346.074C475.438 297.047 471.57 275.448 468 240.481C469.685 188.467 475.374 158.348 496.31 102.452Z"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        )}
        <div className="absolute top-4 right-0 flex h-16 w-[27%] flex-col items-center justify-center pt-[.7rem]">
          <p className="text-muted font-nunito text-[.8rem] font-bold">
            Powered by
          </p>
          <BhojanBuddyHorizontalLogo className="-mt-4 w-[80%]" />
        </div>
      </div>
    </>
  );
};

const MobileSvgWrapper: React.FC<HeroImageProps> = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const svgMask = `url("data:image/svg+xml,${encodeURIComponent(
    `
      <svg
        viewBox="0 0 1500 985"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 730.759L0.797556 0.797772L984.981 0C982.837 28.9365 986.103 46.1763 1000.93 78.9794C1013.48 102.23 1024.3 114.844 1051.98 136.419C1092.19 157.689 1110.82 166.564 1134.12 174.712C1178.51 188.603 1205.64 194.979 1256.15 205.027L1389.34 225.769C1436.35 231.547 1460.96 236.635 1501 249.703V914.247L1500.83 914.182C1483.36 907.488 1473.52 903.715 1438.79 894.302C1373.92 874.619 1339.28 868.201 1279.28 861.594C1215.42 857.006 1181.68 856.61 1126.95 861.594C1056.42 867.108 1019.79 873.08 958.662 887.92C895.526 901.731 859.175 908.329 792.77 918.236C710.473 927.964 663.818 929.195 579.026 918.236C514.221 906.699 477.269 898.042 409.944 877.549L292.703 836.863L193.008 800.165L83.7434 761.074L0 730.759Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
  `
  )}")`;

  const maskStyle = {
    WebkitMaskImage: svgMask,
    maskImage: svgMask,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  } as const;
  return (
    <>
      <div className="relative isolate aspect-[1500/985] w-[100vw]">
        <div className="absolute inset-0 z-10" style={maskStyle}>
          <Image
            src={image}
            alt="Restaurant"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        {isLoaded && (
          <svg
            className="text-primary-soft absolute top-0 right-0 z-[-10] h-auto w-[100%]"
            viewBox="0 0 1500 1058"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M288.86 932.46C163.937 901.084 92.6498 867.352 1.59151 805.162L0 0H789.39V629.331H1500V1016L1328.12 919.731C1259.26 887.892 1209.54 875.646 1105.31 861.651L1004.24 798.002L701.857 824.257L572.149 914.957C473.433 944.023 411.844 948.684 288.86 932.46Z"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        )}
        <div className="absolute top-0 right-0 flex h-[21%] w-[28%] flex-col items-center justify-center">
          <p className="text-muted font-nunito text-[.6rem] font-bold">
            Powered by
          </p>
          <BhojanBuddyHorizontalLogo className="mt-[-.5rem] w-[80%]" />
        </div>
      </div>
    </>
  );
};
const HeroImage: React.FC<HeroImageProps> = ({ image }) => {
  const [windowWidth, setWindowWidth] = useState<number>(-1);
  const [windowHeight, setWindowHeight] = useState<number>(-1);

  useEffect(() => {
    // eslint-disable-next-line
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
  return (
    <>
      {windowWidth > 0 && windowHeight > 0 && (
        <>
          {windowWidth >= 1440 ? (
            <DesktopSvgWrapper image={image} />
          ) : windowWidth >= 768 && windowWidth / windowHeight > 1 ? (
            <>
              <TabletSvgWrapper image={image} />
            </>
          ) : (
            <>
              <MobileSvgWrapper image={image} />
            </>
          )}
        </>
      )}
    </>
  );
};
export default HeroImage;
