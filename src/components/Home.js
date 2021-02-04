import { memo } from "react";
import UrlForm from "./UrlForm";

const Home = () => (
  <div className="pt-6 h-full flex justify-center">
    <div className="bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 md:text-left">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">More than just</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 block">
                  shorter links
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </p>
              <UrlForm />
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/heroImage.png"
                alt="Man standing by the desk"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default memo(Home);
