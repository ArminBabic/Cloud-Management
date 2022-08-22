import React from "react";

function About() {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers accros the world
          </h2>
          <p className="text-3xl text-gray-500 py-6">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>

        <div className="grid gap-2 px-2 md:grid-cols-3 text-center">
          <div className="border py-8 rounded-xl shadow-xl ">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl ">
            <p className="text-6xl font-bold text-indigo-600">24/7 </p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl ">
            <p className="text-6xl font-bold text-indigo-600">100K</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
