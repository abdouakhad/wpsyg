import Image from "next/image";
import Link from "next/link";
function MainEventPage({}) {
  return (
    <>
      <main className="h-[500px] relative ">
        <div className="">
          <Image
            src="/events/meeting.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="group"
          />
          <div className=" absolute w-full h-full bg-black opacity-70 md:pt-0 pt-8"></div>
          <div className="md:absolute w-full h-full  md:pt-0">
            <div className="container mx-auto flex justify-center  h-full items-center px-4">
              <div className="z-10 md:text-left text-center container mx-auto ">
                <h1 className="text-white text-center text-2xl capitalize font-black ">
                  Indeed, modern economies are predominantly built on dynamism
                  and achievements in the fields of mathematics and science.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="mx-auto py-12 lg:px-16 md:px-8 px-4  leading-normal bg-white text-black">
        <h1 className="text-3xl font-bold  mb-8 text-center">
          Women in Science Conference
        </h1>
        <p>
          Our organization is excited to announce our upcoming event featuring
          talks and workshops from some of the top women in science fields. This
          event aims to provide a platform for women to share their research and
          experiences, and to inspire the next generation of female scientists.
          Whether you{`'`}re a seasoned professional or just starting out in
          your career, there{`'`}s something for everyone at our event. We hope
          you{`'`}ll join us for this exciting and inspiring opportunity to
          connect with other like-minded individuals and learn from some of the
          best in the field. Registration is now open, so don{`'`}t miss out on
          this chance to be a part of the movement to promote and support women
          in science.
        </p>
        <div className="my-8 grid md:grid-cols-2">
          <div>
            <p className="font-semibold text-lg">Workshop topics:</p>
            <ul className="ml-8">
              <li className="list list-decimal">
                How to negotiate your salary and benefits
              </li>
              <li className="list list-decimal">
                Creating and maintaining a work-life balance
              </li>
              <li className="list list-decimal">
                Navigating imposter syndrome and self-doubt
              </li>
              <li className="list list-decimal">
                Building and leading successful teams
              </li>
            </ul>
          </div>
          <p className="my-4">
            In addition to our conference in Somone, we are also hosting a
            one-day event in Senegal on February. This event will feature talks
            and networking opportunities with local women in science. The
            registration fee for this event will be anounced. Don{`'`}t miss out
            on this amazing opportunity to connect with other women in science
            and learn from some of the best in the field. Register now!
          </p>
        </div>
        <Link href="/contact">
          <a className="bg-pink text-white font-bold py-2 px-4 rounded-full hover:bg-pink/70 focus:outline-none focus:shadow-outline">
            Register
          </a>
        </Link>
      </section>
    </>
  );
}

export default MainEventPage;
