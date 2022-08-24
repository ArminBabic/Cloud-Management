import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";

function Support() {
  return (
    <section name="support" className="w-full  mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="support img"
        />
      </div>

      <main className="max-w-[1240px] mx-auto relative text-white">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-12 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-8 text-center">
            Finding the right team
          </h3>
          <p className="text-3xl text-slate-300 py-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <article className="bg-white rounded-xl shadow-2xl">
            <header className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                lorem ipsum ini ahbsab ipphsi kkaa hi dijet gind ka liop pise .
                lorem ipsum ini ahbsab ipphsi kkaa hi.
              </p>
            </header>

            <footer className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us
                <ArrowSmRightIcon className="w-6 ml-2" />
              </p>
            </footer>
          </article>

          <article className="bg-white rounded-xl shadow-2xl">
            <header className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                lorem ipsum ini ahbsab ipphsi kkaa hi dijet gind ka liop pise .
                lorem ipsum ini ahbsab ipphsi kkaa hi.
              </p>
            </header>

            <footer className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us
                <ArrowSmRightIcon className="w-6 ml-2" />
              </p>
            </footer>
          </article>

          <article className="bg-white rounded-xl shadow-2xl">
            <header className="p-8">
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                lorem ipsum ini ahbsab ipphsi kkaa hi dijet gind ka liop pise .
                lorem ipsum ini ahbsab ipphsi kkaa hi.
              </p>
            </header>

            <footer className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us
                <ArrowSmRightIcon className="w-6 ml-2" />
              </p>
            </footer>
          </article>
        </div>
      </main>
    </section>
  );
}

export default Support;
