import Button from "@/shared/Button";
import React from "react";

import contactUsGraph from "@/assets/ContactUsPageGraphic.png";
type Props = {};

const ContactUs = (props: Props) => {
  return (
    <section className=" flex min-h-full w-full items-center justify-center  pt-[5.6rem]">
      <div className="mx-auto w-5/6 ">
        <div className="sm:w-3/5">
          <h1 className=" text-l font-bold sm:text-3xl">
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </h1>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </div>
        <div className="gap-5 sm:flex">
          <div className="flex w-full flex-col gap-8 sm:w-3/5">
            <input
              type="text"
              placeholder="NAME"
              className="w-full rounded-lg border bg-primary-300 px-7 py-3 placeholder-white"
            />
            <input
              type="text"
              placeholder="EMAIL"
              className="rounded-lg border bg-primary-300 px-7 py-3 placeholder-white"
            />
            <textarea
              placeholder="MESSAGE"
              className="rounded-lg border border-primary-500 bg-primary-300 px-7 py-3 placeholder-white"
              rows={4}
              cols={50}
            />
            <div className=" my-10  md:mb-0">
              <Button title="SUBMIT" />
            </div>
          </div>
          <div className=" my-7 sm:my-0 sm:w-2/5">
            <img src={contactUsGraph} alt="contactUsGraph" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
