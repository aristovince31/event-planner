import React from "react";
import { BiCustomize } from "react-icons/bi";
import { TbCalendarBolt, TbBell } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { HiOutlineFunnel } from "react-icons/hi2";
import { RiAdvertisementLine } from "react-icons/ri";

const Service = () => {
  return (
    <>
      <div
        id="services"
        className="section relative top-10 pt-20 pb-8 md:pt-16 md:pb-0"
      >
        <div className="xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
              What We Do
            </h2>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style={{ margin: "0 auto", height: 35 }}
              xmlSpace="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r={5}
                className="stroke-primary"
                style={{
                  fill: "transparent",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1="55.1"
                y1="30.4"
                x2={100}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
              <line
                x1="45.1"
                y1="30.4"
                x2={0}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
            </svg>
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
              Save time managing advertising &amp; Content for your business.
            </p>
          </header>
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 transparent border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <div className="inline-block text-gray-900 mb-4">
                    <BiCustomize className="w-8 h-8 text-gray-500" />
                  </div>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Customizable Event Booking System
                </h3>
                <p className="text-gray-500">
                  These platforms allow you to design a professional and
                  customized look for your booking website. You can choose from
                  a variety of fully responsive templates to match your company
                  brand. No design skills are needed, and you can even insert
                  your own logo and add photos of staff and services.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 transparent border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <div className="inline-block text-gray-900 mb-4">
                    <TbCalendarBolt className="w-8 h-8 text-gray-500" />
                  </div>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Appointment Scheduling
                </h3>
                <p className="text-gray-500">
                  Event booking systems facilitate scheduling for one-time or
                  recurring events. Whether it’s a workshop, conference, or
                  entertainment event, clients and participants can reserve
                  their places online. The system also allows for group
                  bookings, where one person can book for an entire group.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 transparent border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <RiAdvertisementLine className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Creative ads
                </h3>
                <p className="text-gray-500">
                  Personalized ads are digital ad experiences tailored to match
                  a business’s message with relevant individuals. These ads
                  consider people’s preferences, interests, and online behaviors
                  that they’ve shared. The goal is to provide a better online
                  experience by showing relevant ads while respecting privacy.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 transparent border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <MdPayments className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Online Payments
                </h3>
                <p className="text-gray-500">
                  Participants can pay during the booking process, making it
                  convenient for both organizers and attendees. Accepting
                  payments ensures that reservations are confirmed promptly.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 transparent border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <TbBell className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Automated Reminders
                </h3>
                <p className="text-gray-500">
                  Event booking platforms often send automated reminders to
                  participants. These reminders can include event details,
                  location, and any other relevant information.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 transparent border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <HiOutlineFunnel className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Optimize conversions
                </h3>
                <p className="text-gray-500">
                  Prioritize user needs. Ensure that the information is easily
                  accessible and well-organized. Opt for a responsive design
                  that works well on various devices (desktop, tablet, mobile).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
