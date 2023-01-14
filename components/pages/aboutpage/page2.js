import React from "react";
import Image from "next/image";
import AboutCard from "./AboutCard";
import Team from "./team";
const AboutBG = "/img/about.jpeg";
const PexelBG = "/img/pexel2.jpg";
const SecondPage = () => {
  return (
    <>
      <div className="relative w-full min-h-[600px]">
        <div
          className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-b from-transparent to-pink"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-full h-full z-30 flex items-center">
          <p className="text-3xl md:text-5xl lg:text-7xl font-extrabold w-full md:w-2/3 lg:w-4/5  md:pl-0 pl-4 container mx-auto tracking-tight leading-loose">
            {
              "Let's be more involved in science, technology, engineering & mathematics"
            }
          </p>
        </div>
        <Image
          src={AboutBG}
          alt="science and women"
          objectFit="cover"
          layout="fill"
          className="w-full h-full"
        />
      </div>

      {/* Robotic SEction */}
      <div className=" px-4 py-4 my-10 container mx-auto">
        <div className="sm:text-3xl md:text-5xl mx-auto text-4xl md:w-1/2 sm:w-8/12 w-11/12 font-bold">
          Robotic is becoming a life changing now
          <div className="h-2 bg-gradient-to-r from-noir via-white to-transparent rounded-full w-full my-8" />
        </div>

        <div className="text-md text-center  w-full text-gray-100 py-4">
          <p className="text-md leading-loose ">
            {
              "Did you know on average, those with stem majors earn $500,000 more over the course of their lifetime  \
            than those with no-stem majors"
            }
          </p>
          <p className="text-md leading-loose">
            Our society is undergoing numerous technological changes. In just a
            couple of decades, it will be quite different from what it is today.
            One significant factor that impacts and transforms various aspects
            of everyday life is the rapid expansion of the artificial
            intelligence and robotics industry.
          </p>
          <p className="leading-loose">
            Scientists, industry experts and ordinary people all express various
            viewpoints about the potential outcomes of the active AI and
            robotics development. And if some believe that smart technologies
            have inexhaustible power and vast benefits, others are scared of the
            possible “rise of the machines” and the destruction of the human
            race.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full px-4 md:h-full h-auto mt-4 container mx-auto">
        <div className="grid md:grid-cols-3 justify-center items-center grid-cols-1 gap-3 my-4">
          <AboutCard
            number={"20"}
            title="membres"
            text="The membership of the organization comprises highly skilled people to have advanced knowledge and skills in mathematics and science."
          />
          <AboutCard
            number={"100"}
            title={"participants"}
            text={
              "Over the years AIMS-WPSYG has been able to register 100 participants across different countries"
            }
          />
          <AboutCard
            number={"70%"}
            title={"success"}
            text={
              "Thanks to the AIMS challenge, 70% of the results have been achieved"
            }
          />
        </div>
      </div>

      {/* Section Miscellaneous */}
      <div className=" text-black">
        <div className="text-centergrid md:grid-cols-2 gap-4 py-5 md:my-20 my-10 container mx-auto px-4">
          <div className="bg-white  rounded mb-4">
            <p className="text-center bg-black text-white titre font-bold text-md p-4 ">
              Opportunities and challenges in achieving goals and objectives
            </p>
            <p className="mt-4 mx-4  titre font-bold text-md   ">
              - Internal Strengths
            </p>
            <div className="p-4">
              To achieve the goal and objectives of AIMS-WPSYG, the following
              internal and external opportunities and challenges have been
              identified by the organization:
            </div>

            <p className=" mx-4  titre font-bold text-md   ">
              - High human capacity
            </p>
            <div className="p-4">
              The membership of the organization comprises highly skilled people
              to have advanced knowledge and skills in mathematics and science.
              This will therefore serve as a source of much needed personnel to
              advance to agenda the association
            </div>
            <p className="mx-4  titre font-bold text-md   ">
              - Wide spatial coverage
            </p>
            <div className="p-4">
              With the huge network of women alumni of the African Institute for
              Mathematical Sciences who have gone on to attain blissful
              professional goals located all over the African continent, the
              organization has a large pool of people to tap on in situ for its
              activities when it expands its activities to the rest of the
              African continent.
            </div>
            <p className=" mx-4  titre font-bold text-md   ">
              - Ease in accessing locations
            </p>
            <div className="p-4">
              Most of the activities of the organization will be designed as
              outreach programs which will either take place at the location of
              the target population or online. This eliminates the need for
              external venues in most cases
            </div>
          </div>
          <div className="bg-white rounded ">
            <p className="text-center  bg-black text-white titre font-bold text-md p-4 ">
              Internal Challenges
            </p>

            <p className=" mx-4 p-4 titre font-bold text-md   ">
              - Availability of members
            </p>
            <div className="px-4">
              Due to the work schedule of AIMS alumni in particular, it is
              anticipated that in some cases, there will be difficulty in
              getting a convenient and suitable time that fits into their plans.
              To ameliorate this, plans will be drawn in partnership members
              concerned and there will be constant engagement with them to
              ensure smooth roll out of all activities.
            </div>
          </div>
          <div className="bg-white mt-4 pb-4 rounded ">
            <p className="text-center bg-black text-white titre font-bold text-md p-4 ">
              External Strengths
            </p>
            <p className=" m-4  titre font-bold text-md   ">- Partnerships</p>
            <div className="px-4">
              AIMS-WPSYG is backed by well-established and highly reputable
              organizations including AIMS, international organizations for
              education and gender, the ministries of education and higher
              education of various countries, universities, colleges, high
              schools, private companies etc. These organizations will therefore
              support the association logically and financially to ensure that
              its goals and objectives are met.
            </div>
            <p className=" m-4  titre font-bold text-md   ">- Strategic Plan</p>
            <div className="px-4">
              To attain the goals and objectives of AIMS-WPSYG, the organization
              as adopted a strategic plan which is based of its planned
              activities over the short-term (1 year), medium-term (next 2
              years) and long-term (next 5 years).
            </div>
          </div>
        </div>
      </div>
      <div>
        <Team />
      </div>
      {/* Illustration Images */}
      <div className="w-full h-20 "></div>
    </>
  );
};

export default SecondPage;
