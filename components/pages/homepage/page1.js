import Image from "next/image";
import Link from "next/link";
import ButtonBeize from "../../layout/ButtonBeize";
import CardHome from "../../Cards/CardHome";
import ParaCurved from "../../tricks/ParaCurved";
import Partners from "../../Cards/Partners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FirstPage = () => {
  return (
    <>
      <main className="sm:h-[500px] 0 relative mb-4">
        <div className="h-full">
          <Image
            src="/img/background.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="group"
          />
          <div className=" absolute w-full h-full bg-black opacity-50 "> </div>
          <div className="container py-16 sm:py-0 flex h-full justify-center items-center relative mx-auto  px-4">
            <div className="bg-pink/40 p-4 rounded-md z-10 md:text-left text-center container mx-auto ">
              <h1 className="font-black text-center lg:text-4xl md:text-3xl text-3xl leading-tight mb-4	">
                Women Promoting Science To The Younger Generation
              </h1>
              <p className=" text-sm text-center font-light text-white px-2 rounded">
                WPSYG has a vision of an African continent where the majority of
                the population are engaged in mathematics and science related
                careers and a continent whose development agenda is driven by
                mathematics and science
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="py-5">
        <div className=" grid sm:grid-cols-5 gap-5 container mx-auto px-4 ">
          <div className="sm:col-span-3  flex flex-col  justify-center ">
            <div className="">
              <div className="text sm:w-2/3 w-full  ">
                <h1 className="font-black lg:text-4xl md:text-3xl text-3xl sm:text-left text-center leading-tight mb-12	">
                  Women Promoting Science To The Younger Generation
                </h1>
              </div>
              <p className="text-xl my-7 sm:pr-5 pr-0 sm:text-left text-center leading-relaxed">
                WPSYG has a vision of an African continent where the majority of
                the population are engaged in mathematics and science related
                careers and a continent whose development agenda is driven by
                mathematics and science
              </p>
              <div className="btn grid sm:grid-cols-2 md:gap-4 gap-2">
                <Link href="https://youtube.com/playlist?list=PLBNH0HZjdRCNIgtcGAIgR6R64G4ARpQtl">
                  <a className="border text-center rounded-md bg-white  text-black lg:px-12 md:px-2  py-2 hover:bg-gray-200 font-semibold">
                    Join youtube{" "}
                    <FontAwesomeIcon
                      icon={["fab", "youtube"]}
                      size="1x"
                      color="red"
                      className="rounded inline"
                    />
                  </a>
                </Link>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc_IVVi1oZ5TZpUJOPwYH3a5kNEuFEPXuFmjot2Z44V4n6Nlg/viewform">
                  <a className="border text-center rounded-md bg-white  text-black lg:px-12 md:px-2  py-2 hover:bg-gray-200 font-semibold">
                    Join Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 flex justify-center items-center">
            <Image
              src="/img/img3.svg"
              alt="robotic"
              layout="intrinsic"
              objectFit="container"
              width={450}
              height={450}
              priority
            />
          </div>
        </div>
      </div> */}

      <div className=" container mx-auto px-4 ">
        <div className="grid relative sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="my-4 h-full">
            <ParaCurved />
            <div className="description tracking-wider leading-loose">
              WPSYG is an association that is focused on igniting and sustaining
              the interest of the youth in general and girls in particular in
              mathematics and science with the aim of getting them to develop
              career in this field to enable them compete globally and solve the
              local development challenges in their communities.
            </div>
          </div>
          <div className="relative h-full min-h-[300px]">
            <Image
              src="/img/img3.svg"
              alt="robotic"
              layout="fill"
              objectFit="container"
              priority
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 container mx-auto px-4 my-8">
        <CardHome />
      </div>
      <h1 className="text-white md:text-2xl text-center text-xl font-black container mx-auto">
        Partners
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4  h-full container mx-auto px-4 py-4">
        {/* <Partners /> */}
        <div className="text-center my-4 text-lg ">
          AIMS was able to acquire trustworthy partners like Blaise Diagne High
          School, Sally High School, Kennedy High School, Delafoss High School,
          Mariama Ba High School.
        </div>
        <div className="relative  flex sm:h-full h-40 justify-center items-center">
          <Image
            src="/partner/partner.jpg"
            layout="fill"
            // width="120"
            // height="120"
            objectFit="contain"
            objectPosition="center"
            alt="group"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default FirstPage;
