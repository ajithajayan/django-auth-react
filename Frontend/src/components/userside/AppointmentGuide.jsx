import React from "react";

function AppointmentGuide() {
  return (
    <div className="flex flex-col items-center">
      <header className="header items-center self-stretch flex w-full flex-col justify-center px-16 max-md:max-w-full max-md:px-5">
        <span className="flex flex-col items-center max-md:max-w-full">
          <h2 className="text-slate-800 text-center text-2xl font-medium leading-8 max-md:max-w-full">
            Discover the Online Appointment!
          </h2>
          <p className="text-neutral-500 text-center text-base leading-6 self-stretch mt-4 max-md:max-w-full">
            A step-by-step guide to build an on-demand appointment for patients
          </p>
        </span>
      </header>
      <div className="content-start flex-wrap self-stretch w-full mt-16 pb-6 px-4 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="self-stretch shadow-lg bg-white flex grow items-stretch justify-between gap-5 w-full pl-16 py-10 rounded-md max-md:max-w-full max-md:flex-wrap max-md:mt-8 max-md:pl-5">
              <span className="flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e64c34e9142dccc3e49f01364141f1e030df8b9dfdd38f8356cfb2835cdd29c2?apiKey=e5b36b972ccb4739bd317b67a96e9d90&"
                  alt="doctor"
                  className="aspect-square object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
                />
                <div className="text-blue-500 text-center text-xl font-medium leading-6 uppercase self-center whitespace-nowrap mt-6">
                  Find a Doctor
                </div>
                <div className="text-slate-800 text-center text-base leading-6 mt-2 max-md:max-w-full">
                  With more than 1000+ doctors and on mission to provide best <br /> care Health Care Service
                </div>
              </span>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95278ddd-e281-4361-814e-0978aed2a6f8?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95278ddd-e281-4361-814e-0978aed2a6f8?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95278ddd-e281-4361-814e-0978aed2a6f8?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95278ddd-e281-4361-814e-0978aed2a6f8?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/95278ddd-e281-4361-814e-0978aed2a6f8?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95278ddd-e281-4361-814e-0978aed2a6f8?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95278ddd-e281-4361-814e-0978aed2a6f8?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95278ddd-e281-4361-814e-0978aed2a6f8?apiKey=e5b36b972ccb4739bd317b67a96e9d90&"alt="arrow"
                className="aspect-[0.31] object-contain object-center w-[22px] items-start overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="self-stretch shadow-lg bg-white flex grow items-stretch justify-between gap-5 w-full pl-16 py-10 rounded-md max-md:max-w-full max-md:flex-wrap max-md:mt-8 max-md:pl-5">
              <span className="flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/96e5c6c1e3e4c3ab16253ad3eda50891dd362a451411506220a332bd4868b3c2?apiKey=e5b36b972ccb4739bd317b67a96e9d90&"
                  alt="doctor"
                  className="aspect-square object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
                />
                <div className="text-blue-500 text-center text-xl font-medium leading-6 uppercase self-center whitespace-nowrap mt-6">
                  View Doctor
                </div>
                <div className="text-slate-800 text-center text-base leading-6 mt-2 max-md:max-w-full">
                  Share your health concern here and we shall assign you a top <br /> doctor across the North East
                </div>
              </span>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5c065fc-879c-4b0e-bc77-7bb6f55dba96?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c065fc-879c-4b0e-bc77-7bb6f55dba96?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c065fc-879c-4b0e-bc77-7bb6f55dba96?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c065fc-879c-4b0e-bc77-7bb6f55dba96?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c065fc-879c-4b0e-bc77-7bb6f55dba96?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c065fc-879c-4b0e-bc77-7bb6f55dba96?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c065fc-879c-4b0e-bc77-7bb6f55dba96?apiKey=e5b36b972ccb4739bd317b67a96e9d90&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c065fc-879c-4b0e-bc77-7bb6f55dba96?apiKey=e5b36b972ccb4739bd317b67a96e9d90&"alt="arrow"
                className="aspect-[0.31] object-contain object-center w-[22px] items-start overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="self-stretch shadow-lg bg-white flex flex-col items-stretch w-full px-20 py-10 rounded-md max-md:max-w-full max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5149dd55080bd2e790175faffb1704e8c139683200c05f443678cc9e3b54d66e?apiKey=e5b36b972ccb4739bd317b67a96e9d90&"
                alt="doctor"
                className="aspect-square object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
              />
              <div className="text-blue-500 text-center text-xl font-medium leading-6 uppercase self-center whitespace-nowrap mt-6">
                Book a visit
              </div>
              <div className="text-slate-800 text-center text-base leading-6 whitespace-nowrap mt-2 max-md:ml-2 max-md:mr-2">
                Book your time slot with doctor from your comfort zone
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="justify-center bg-blue-600 flex gap-4 pl-11 pr-10 py-5 rounded-[30px] items-start max-md:px-5">
        <a href="#" className="text-white text-center text-base font-medium leading-6">
          Find Doctor
        </a>
        <div className="text-white text-center text-base font-black leading-4 self-stretch">
          
        </div>
      </div>
    </div>
  );
}

export default AppointmentGuide;