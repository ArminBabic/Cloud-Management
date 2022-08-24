import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

function Footer() {
  return (
    <section className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2   md:grid-cols-6   border-b-2 border-gray-600 py-8">
        <article>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </article>

        <article>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </article>

        <article>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </article>

        <article>
          <h6 className="font-bold uppercase pt-2">legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </article>

        <article className="col-span-2 pt-8 md:pt-2">
          <h6 className="uppercase font-bold">Subscribe to our newsletter</h6>
          <p className="py-4">
            The latest news,articles and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email..."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </article>
      </div>

      <footer className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto  justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">All rights reserved.</p>
        <div className="flex  justify-between  sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaGithub />
          <FaTwitch />
        </div>
      </footer>
    </section>
  );
}

export default Footer;
