import FoodImage from '@/assets/foodImage.png';

import HeroImage from './HeroImage';
const Login = () => {
  return (
    <>
      <div className="flex h-[100vh] w-[100%] flex-col-reverse items-center justify-center md:flex-row">
        <div className="h-[100%] w-[100%] bg-blue-400 md:w-[55%] md:bg-green-400 lg:bg-red-400"></div>
        <div className="flex h-max w-[100%] items-center justify-end bg-red-400 md:h-[100%] md:w-[50%] lg:w-[45%]">
          <div className="relative h-[100%] w-max">
            <HeroImage image={FoodImage} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
