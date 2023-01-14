import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const pr1 = "/team/realTeam/Sokhar_Samb.jpeg";
const pr2 = "/team/realTeam/Yolande_wpsyg.jpg";
const pr3 = "/team/realTeam/Foutse_Yuehgoh.jpeg";
const pr4 = "/team/realTeam/Kanubala_DD.jpeg";
const pr5 = "/team/realTeam/Irene_Kameni.jpg";

const Speakers = () => {
  const [showInfo, setShowInfo] = React.useState("");

  return (
    <>
      <div className="bg-white text-pink py-10 ">
        <div className="container mx-auto px-4 pb-8 text-center">
          <h1 className="font-black text-3xl">Who{"'"}s speaking</h1>
          <p className="text-black opacity-60 mt-4">
            These are our communicators, you can see each person information
          </p>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 bg-pink">
          <div
            onMouseEnter={() => setShowInfo("Sokhar Samb")}
            onMouseLeave={() => setShowInfo("")}
            className="relative"
          >
            <Image
              className="h-full"
              src={pr1}
              height={300}
              width={300}
              layout="responsive"
              objectFit="cover"
              alt=""
            />
            {showInfo === "Sokhar Samb" && (
              <>
                <div className="absolute transition ease-in-out duration-1000 flex justify-center gap-2 p-2  top-0 right-0 left-0 ml-auto mr-auto rounded-b w-7/12 bg-pink text-white px-2 mx-auto">
                  <Link href="https://www.facebook.com/sokhar.samb">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />{" "}
                    </a>
                  </Link>

                  <Link href="https://twitter.com/SambSokhar">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />{" "}
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/sokhar-samb/">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />{" "}
                    </a>
                  </Link>
                </div>
                <div className="absolute bottom-10 left-0 bg-white text-pink p-2 rounded-r">
                  Sokhar Samb
                </div>
              </>
            )}
          </div>

          <div
            onMouseEnter={() => setShowInfo("Yolande")}
            onMouseLeave={() => setShowInfo("")}
            className="relative"
          >
            <Image
              className="h-full"
              src={pr2}
              height={300}
              width={300}
              layout="responsive"
              objectFit="cover"
              alt=""
            />
            {showInfo === "Yolande" && (
              <>
                <div className="absolute transition ease-in-out duration-1000 flex justify-center gap-2 p-2  top-0 right-0 left-0 ml-auto mr-auto rounded-b w-7/12 bg-pink text-white px-2 mx-auto">
                  <Link href="https://www.facebook.com/profile.php?id=100010010896908">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />{" "}
                    </a>
                  </Link>
                  <Link href="https://twitter.com/Yolande_NY ">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />{" "}
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/yolande-ngueabou-1826a6132/">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />{" "}
                    </a>
                  </Link>
                </div>
                <div className="absolute bottom-10 left-0 bg-white text-pink p-2 rounded-r">
                  Yolande
                </div>
              </>
            )}
          </div>
          <div
            onMouseEnter={() => setShowInfo("Irene_Kameni")}
            onMouseLeave={() => setShowInfo("")}
            className="relative"
          >
            <Image
              className="h-full"
              src={pr5}
              height={300}
              width={300}
              layout="responsive"
              objectFit="cover"
              alt=""
            />
            {showInfo === "Irene_Kameni" && (
              <>
                <div className="absolute transition ease-in-out duration-1000 flex justify-center gap-2 p-2  top-0 right-0 left-0 ml-auto mr-auto rounded-b w-7/12 bg-pink text-white px-2 mx-auto">
                  {/* No facebook account */}

                  <Link href="https://twitter.com/irenekameni08">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />{" "}
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/irene-kameni-49201112b/">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />{" "}
                    </a>
                  </Link>
                </div>
                <div className="absolute bottom-10 left-0 bg-white text-pink p-2 rounded-r">
                  Irène Kameni
                </div>
              </>
            )}
          </div>
          <div
            onMouseEnter={() => setShowInfo("Foutse Yuehgoh")}
            onMouseLeave={() => setShowInfo("")}
            className="relative"
          >
            <Image
              className="h-full"
              src={pr3}
              height={300}
              width={300}
              layout="responsive"
              objectFit="cover"
              alt=""
            />
            {showInfo === "Foutse Yuehgoh" && (
              <>
                <div className="absolute transition ease-in-out duration-1000 flex justify-center gap-2 p-2  top-0 right-0 left-0 ml-auto mr-auto rounded-b w-7/12 bg-pink text-white px-2 mx-auto">
                  <Link href="https://www.facebook.com/foutse.rihana">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />{" "}
                    </a>
                  </Link>

                  <Link href="https://twitter.com/yuehgoh">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />{" "}
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/foutse-yuehgoh-9105b184/">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />{" "}
                    </a>
                  </Link>
                </div>
                <div className="absolute bottom-10 left-0 bg-white text-pink p-2 rounded-r">
                  Foutse Yuehgoh
                </div>
              </>
            )}
          </div>

          <div
            onMouseEnter={() => setShowInfo("Kanubala DD")}
            onMouseLeave={() => setShowInfo("")}
            className="relative"
          >
            <Image
              className="h-full"
              src={pr4}
              height={300}
              width={300}
              layout="responsive"
              objectFit="cover"
              alt=""
            />
            {showInfo === "Kanubala DD" && (
              <>
                <div className="absolute transition ease-in-out duration-1000 flex justify-center gap-2 p-2  top-0 right-0 left-0 ml-auto mr-auto rounded-b w-7/12 bg-pink text-white px-2 mx-auto">
                  <Link href="https://www.facebook.com/kanubalad">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />{" "}
                    </a>
                  </Link>

                  <Link href="https://twitter.com/KanubalaD">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />{" "}
                    </a>
                  </Link>
                  <Link href="http://www.linkedin.com/in/kanubalad">
                    <a className="hover:scale-105 hover:opacity-75 transition ease-out duration-300">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />{" "}
                    </a>
                  </Link>
                </div>
                <div className="absolute bottom-10 left-0 bg-white text-pink p-2 rounded-r">
                  Kanubala Deborah
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="h-16 bg-pink"></div>
    </>
  );
};

export default Speakers;
