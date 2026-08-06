import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">درباره ما</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
           چه چیزی کافه مارا خاص میکند؟
          </h2>
          <p>
         
          کافه اشوان از سال ۱۳۹۰ با هدف ارائه بهترین قهوه‌ها و غذاهای سالم 
              شروع به کار کرد. ما با استفاده از تازه‌ترین مواد اولیه و دانه‌های 
              قهوه با کیفیت، لحظات خوشی را برای شما رقم می‌زنیم.
          
          </p>
        

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
