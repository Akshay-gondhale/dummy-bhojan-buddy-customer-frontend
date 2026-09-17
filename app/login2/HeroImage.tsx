'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

type HeroImageProps = {
  image: StaticImageData;
};

const DesktopSvgWrapper: React.FC<HeroImageProps> = ({ image }) => {
  return (
    <>
      <svg
        className="h-[100vh] w-auto"
        viewBox="0 0 1500 1500"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="restaurant-shape">
            <path
              d="M59.7012 86.1244C77.0631 49.926 88.6824 30.8851 113.932 0H952.91C971.075 21.0597 982.995 33.3316 1009.53 56.6188C1032.34 74.7071 1048.03 85.4945 1089.28 107.656C1116.02 120.866 1134.35 127.818 1177.81 138.756C1210.31 145.97 1232.59 149.036 1284.67 151.515C1318.37 151.209 1340.2 152.084 1395.53 159.49C1437.64 164.068 1460.66 168.649 1500 182.616V1500H1006.34C978.832 1482.94 958.993 1473.61 909.844 1457.74C882.678 1448.48 860.656 1442.7 801.383 1430.62L697.707 1404.31C661.746 1393.77 641.81 1386.35 606.791 1369.22C550.298 1336.33 529.083 1322.61 512.686 1307.81L456.062 1254.39C445.404 1238.45 438.807 1228.97 422.567 1208.13C408.384 1189.27 401.142 1176.81 389.072 1152.31C377.991 1131.09 372.333 1117.47 363.552 1089.31C353.546 1061.49 348.891 1043.55 342.019 1007.97L328.461 932.217C324.14 890.646 320.255 866.214 311.714 821.372L291.776 739.234C277.491 694.594 269.453 672.845 255.091 636.364L223.988 568.581C216.073 553.656 208.632 541.294 185.707 506.38C173.401 486.444 166.126 475.095 149.022 452.951C133.557 435.249 125.477 424.178 111.539 403.509C94.001 379.9 84.648 364.751 68.4738 335.726C51.5969 304.682 44.6415 285.453 36.5735 248.006C32.3207 214.723 31.3234 195.136 36.5735 155.502C43.1668 129.002 47.5605 113.974 59.7012 86.1244Z"
              fill="currentColor"
              stroke="currentColor"
            />
          </clipPath>
        </defs>
        <foreignObject
          x="0"
          y="0"
          width="1500"
          height="1500"
          clipPath="url(#restaurant-shape)"
        >
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt="Restaurant"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </foreignObject>
      </svg>
      <svg
        className="text-primary-soft absolute top-0 right-0 z-[-10] h-[100%]"
        viewBox="0 0 1600 1500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M101.458 53.6036L126.952 1H823.244L853.517 839.47L1600 868.163V1501H917.251L905.301 1488.25C889.501 1469.61 880.138 1461.09 862.281 1449.99C844.681 1432.76 828.017 1423.19 795.36 1406.15L733.22 1335.22L652.756 1307.32L553.172 1253.92L534.051 1239.58L505.371 1210.88L489.438 1191.75L468.724 1163.06L442.434 1120.82L412.957 1060.25C405.844 1042.18 400.649 1026.89 390.65 996.483C381.433 970.207 377.559 951.186 373.92 906.42C371.19 871.965 370.172 851.737 371.53 809.98C371.829 780.642 372.193 759.716 373.123 715.931C374.994 701.865 373.144 692.577 368.343 675.283V653.763L366.75 621.882L370.733 605.942L377.107 590.001L322.933 511.893L262.386 461.68L201.042 403.497C183.611 383.859 173.743 371.984 155.632 346.112C135.206 318.225 125.157 301.062 110.221 267.206C98.8666 234.168 93.3604 215.153 87.9145 178.736C85.8128 155.492 84.9473 142.026 87.9145 111.786C89.7632 89.8723 92.7911 77.1219 101.458 53.6036Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    </>
  );
};
const TabletSvgWrapper: React.FC<HeroImageProps> = ({ image }) => {
  return (
    <>
      <svg
        className="h-[100vh] w-auto"
        viewBox="0 0 1500 1500"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="restaurant-shape">
            <path
              d="M679.263 0L601.953 67.6484C566.816 101.838 551.395 122.392 533.616 162.218C508.948 224.945 504.639 260.421 519.81 324.436C527.842 364.533 535.138 389.516 566.749 450.759C610.582 542.124 637.17 596.932 646.821 627.474C664.656 681.787 673.174 722.276 684.096 823.516C684.815 853.955 695.14 1052 695.14 1052L712.397 1147.95C728.773 1196.01 737.731 1217.63 753.813 1246.66C772.33 1279.08 783.698 1294.19 805.584 1316.38C834.078 1340.46 850.737 1352.73 882.895 1370.23C917.196 1385.6 936.944 1393.56 974.011 1405.43C1007.17 1414.84 1024.81 1420.94 1054.08 1433.73C1092.64 1448.55 1115.71 1459.97 1158.31 1483.43L1181.09 1500H1500V205.016L1440.64 188.449L1327.43 167.05L1190.76 140.819C1149.66 130.251 1127.59 122.944 1089.29 108.376C1055.69 92.2189 1038.8 82.3147 1011.29 63.5067C992.396 46.4872 985.588 37.9182 974.011 22.7796L960.205 0.69029L679.263 0Z"
              fill="currentColor"
              stroke="currentColor"
            />
          </clipPath>
        </defs>
        <foreignObject
          x="0"
          y="0"
          width="1500"
          height="1500"
          clipPath="url(#restaurant-shape)"
        >
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt="Restaurant"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </foreignObject>
      </svg>
    </>
  );
};
const MobileSvgWrapper: React.FC<HeroImageProps> = ({ image }) => {
  return (
    <>
      <svg
        className="h-max w-[100vw]"
        viewBox="0 0 1500 985"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="restaurant-shape">
            <path
              d="M0 730.759L0.797556 0.797772L984.981 0C982.837 28.9365 986.103 46.1763 1000.93 78.9794C1013.48 102.23 1024.3 114.844 1051.98 136.419C1092.19 157.689 1110.82 166.564 1134.12 174.712C1178.51 188.603 1205.64 194.979 1256.15 205.027L1389.34 225.769C1436.35 231.547 1460.96 236.635 1501 249.703V914.247L1500.83 914.182C1483.36 907.488 1473.52 903.715 1438.79 894.302C1373.92 874.619 1339.28 868.201 1279.28 861.594C1215.42 857.006 1181.68 856.61 1126.95 861.594C1056.42 867.108 1019.79 873.08 958.662 887.92C895.526 901.731 859.175 908.329 792.77 918.236C710.473 927.964 663.818 929.195 579.026 918.236C514.221 906.699 477.269 898.042 409.944 877.549L292.703 836.863L193.008 800.165L83.7434 761.074L0 730.759Z"
              fill="currentColor"
              stroke="currentColor"
            />
          </clipPath>
        </defs>
        <foreignObject
          x="0"
          y="0"
          width="1500"
          height="1500"
          clipPath="url(#restaurant-shape)"
        >
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt="Restaurant"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </foreignObject>
      </svg>
    </>
  );
};
const HeroImage: React.FC<HeroImageProps> = ({ image }) => {
  const [windowWidth, setWindowWidth] = useState<number>(1200);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
  return (
    <>
      {windowWidth > 1200 ? (
        <DesktopSvgWrapper image={image} />
      ) : windowWidth >= 800 ? (
        <>
          <TabletSvgWrapper image={image} />
        </>
      ) : (
        <>
          <MobileSvgWrapper image={image} />
        </>
      )}
    </>
  );
};
export default HeroImage;
