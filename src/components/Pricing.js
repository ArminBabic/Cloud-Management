import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

function Pricing() {
  return (
    <section name="pricing" className="w-full text-white my-16">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <header className="text-slate-300 text-center py-8">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for your recearch.
          </h3>
          <p className="text-3xl">
            lorem ipsum ini ahbsab ipphsi kkaa hi dijet gind ka liop pise .
            lorem ipsum ini ahbsab ipphsi.
          </p>
        </header>

        <main className="grid md:grid-cols-2">
          <article className="bg-white text-slate-900 m-4 p-8 rounded-xl relative shadow-2xl">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-5xl font-bold py-4  flex">
                $49
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl text-slate-500 py-8">
              Lorem ipsun habudu kasnim jose ipsi.
            </p>

            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum darujum ha.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum darujum ha.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum darujum ha.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum darujum ha.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum darujum ha.
              </p>
              <button className="w-full my-4 py-4">Get Started</button>
            </div>
          </article>
          <article className="bg-white text-slate-900 m-4 p-8 rounded-xl relative shadow-2xl">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              premium
            </span>
            <div>
              <p className="text-5xl font-bold py-4  flex">
                $99
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl text-slate-500 py-8">
              Lorem ipsun habudu kasnim jose ipsi.
            </p>

            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum darujum ha.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum darujum ha.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum darujum ha.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum darujum ha.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum darujum ha.
              </p>
              <button className="w-full my-4 py-4">Get Started</button>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
}

export default Pricing;
