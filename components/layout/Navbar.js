import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="bg-white md:px-0">
        <nav className="flex items-center flex-wrap bg-white container mx-auto font-myFont px-4 ">
          <Link href="/">
            <a className="inline-flex items-center py-2 mr-4 relative  ">
              <span>
                <Image
                  src="/logo2.jpeg"
                  alt="logo"
                  width="80"
                  height="70"
                  objectFit="cover"
                />
              </span>
              <span className="ml-2 md:inline hidden">
                <Image
                  src="/logotext.jpeg"
                  alt="logo"
                  width="100"
                  height="80"
                  objectFit="cover"
                />
              </span>
            </a>
          </Link>
          <button
            className=" inline-flex p-3 hover:scale-110 transition ease-in-out duration-500 text-pink rounded lg:hidden ml-auto  outline-none"
            onClick={handleClick}
          >
            {active !== true ? (
              <span>
                <FontAwesomeIcon icon="fa-solid fa-bars" size="xl" />
              </span>
            ) : (
              "X"
            )}
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col md:gap-10 gap-4 lg:h-auto ">
              <Link href="/">
                <a
                  onClick={handleClick}
                  className={
                    router.pathname === "/"
                      ? "bg-pink md:bg-transparent md:text-pink text-white px-2 rounded py-2 lg:inline-flex lg:w-auto w-full items-center justify-center hover:opacity-90 font-bold  border-b-2 border-pink hover:border-opacity-90"
                      : "lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center font-normal text-noir  hover:text-noir transition duration-500 ease-in-out hover:text-base hover:opacity-60"
                  }
                >
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a
                  onClick={handleClick}
                  className={
                    router.pathname === "/about"
                      ? "bg-pink md:bg-transparent md:text-pink text-white px-2 rounded py-2 lg:inline-flex lg:w-auto w-full items-center justify-center hover:opacity-90 font-bold  border-b-2 border-pink hover:border-opacity-90"
                      : "lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center font-normal text-noir  hover:text-noir transition duration-500 ease-in-out hover:text-base hover:opacity-60"
                  }
                >
                  About Us
                </a>
              </Link>
              <Link href="/gallery">
                <a
                  onClick={handleClick}
                  className={
                    router.pathname === "/gallery"
                      ? "bg-pink md:bg-transparent md:text-pink text-white px-2 rounded py-2 lg:inline-flex lg:w-auto w-full items-center justify-center hover:opacity-90 font-bold  border-b-2 border-pink hover:border-opacity-90"
                      : "lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center font-normal text-noir  hover:text-noir  transition duration-500 ease-in-out hover:text-base hover:opacity-60"
                  }
                >
                  Gallery
                </a>
              </Link>
              <Link href="/events">
                <a
                  onClick={handleClick}
                  className={
                    router.pathname === "/events"
                      ? "bg-pink md:bg-transparent md:text-pink text-white px-2 rounded py-2 lg:inline-flex lg:w-auto w-full items-center justify-center hover:opacity-90 font-bold  border-b-2 border-pink hover:border-opacity-90"
                      : "lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center font-normal text-noir  hover:text-noir  transition duration-500 ease-in-out hover:text-base hover:opacity-60"
                  }
                >
                  Events
                </a>
              </Link>
              <Link href="/contact">
                <a
                  onClick={handleClick}
                  className={
                    router.pathname === "/contact"
                      ? "bg-pink md:bg-transparent md:text-pink text-white px-2 rounded py-2 lg:inline-flex lg:w-auto w-full items-center justify-center hover:opacity-90 font-bold  border-b-2 border-pink hover:border-opacity-90"
                      : "lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center font-normal text-noir  hover:text-noir transition duration-500 ease-in-out hover:text-base hover:opacity-60"
                  }
                >
                  {" "}
                  Contact us
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
