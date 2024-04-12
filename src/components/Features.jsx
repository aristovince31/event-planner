import React from "react";
import { HiArrowPath, HiCalendarDays, HiLockClosed } from "react-icons/hi2";
import { MdOutlineDevicesOther } from "react-icons/md";

const features = [
  {
    name: "Track Events",
    description:
      "Track events and appointments within your finger tips. You can easily manage your events and appointments with our platform.",
    icon: HiCalendarDays,
  },
  {
    name: "Data Security",
    description:
      "Provide the security that your customers need. We provide the best security to keep your data safe and secure",
    icon: HiLockClosed,
  },
  {
    name: "Calendar Syncing",
    description:
      "Calendar syncing is a great way to keep your events and appointments up to date. Our platform provides the best calendar syncing to keep you up to date.",
    icon: HiArrowPath,
  },
  {
    name: "Cross Platform Support",
    description:
      "Cross platform support is a great way to keep your events and appointments up to date. Our platform provides the best cross platform support to keep you up to date.",
    icon: MdOutlineDevicesOther,
  },
];

const Features = () => {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="py-15 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Track Faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to manage events
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                This Platform is built to manange your events and grow your
                customer base. We provide the best tools and services to help
                your business grow and succeed. Our platform is built to help
                you manage your business and grow your customer base.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Features;
