import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2">
                <Image
                  className="w-full"
                  src="/my1.JPG"
                  alt="Our Story Image"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="md:w-1/2 md:ml-12">
                <p className="text-gray-700 leading-relaxed">
                  Introducing Divier: Revolutionizing Business Solutions Divier
                  is a cutting-edge business solutions provider that is
                  transforming the way organizations operate and thrive in
                  today dynamic market. With our innovative approach and
                  advanced technologies, we empower businesses to achieve new
                  levels of efficiency, productivity, and success. At Divier, we
                  understand the unique challenges faced by businesses across
                  industries. Whether you are a small startup or a large
                  enterprise, we offer tailored solutions that address your
                  specific needs and drive sustainable growth. Our team of
                  experts works closely with you to analyze your business
                  processes, identify areas for improvement, and implement
                  strategic solutions that deliver tangible results. Our
                  comprehensive suite of services encompasses a wide range of
                  areas, including digital transformation, process optimization,
                  data analytics, cloud computing, cybersecurity, and more.
                  Leveraging the latest technologies and industry best
                  practices, we help you streamline operations, enhance customer
                  experiences, and gain a competitive edge in the market. What
                  sets Divier apart is our unwavering commitment to excellence
                  and customer satisfaction. We strive to build long-term
                  partnerships with our clients, guiding them through every step
                  of their business transformation journey. Our dedicated
                  support team ensures seamless implementation and provides
                  ongoing assistance, ensuring that your business continues to
                  thrive long after the initial engagement. Partner with Divier
                  today and unlock the full potential of your business.
                  Experience the power of innovative solutions, tailored
                  strategies, and unparalleled support as we embark on a journey
                  towards sustainable growth and success together.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Chairman/Founder
            </h2>
            <div className="m-auto">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <Image
                  className="w-32 h-32 rounded-full mb-4"
                  src="/my.jpeg"
                  alt="Team Member 1"
                  width={100}
                  height={100}
                />
                <h3 className="text-xl font-bold mb-2">Vuth Sarandy</h3>
                <p className="text-gray-700 text-sm">Co-founder / CEO</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
