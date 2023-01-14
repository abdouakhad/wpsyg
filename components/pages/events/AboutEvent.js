import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
const pr4 = "/team/realTeam/Yolande_wpsyg.jpg";
const AboutEvent = () => {
  return (
    <div>
      <div className="container mx-auto px-4 ">
        <div className="grid md:grid-cols-2 grid-cols-1 text-center md:gap-8 gap-4 py-4 relative justify-center items-center">
          <div className="md:block flex justify-center">
            <Image
              src={pr4}
              alt="events"
              width="400"
              height="430"
              objectFit="cover"
              objectPosition="center"
              className="border mt-2 rounded"
            />
          </div>
          <div className="container mx-auto my-4 grid justify-center gap-4">
            <p className="font-bold text-xl">Go subscrbe on YouTube</p>
            <Link href="https://youtube.com/playlist?list=PLBNH0HZjdRCNIgtcGAIgR6R64G4ARpQtl">
              <a className="border text-center rounded bg-white  text-black lg:px-12 md:px-2  py-2 hover:bg-gray-200 font-semibold">
                python days{" "}
                <FontAwesomeIcon
                  icon={["fab", "youtube"]}
                  size="1x"
                  color="red"
                  className="rounded inline"
                />
              </a>
            </Link>
            <Link href="https://youtube.com/playlist?list=PLBNH0HZjdRCP1mrMPYAWYV_0RY-b0Mr9D">
              <a className="border text-center rounded bg-white  text-black lg:px-12 md:px-2  py-2 hover:bg-gray-200 font-semibold">
                Modeling Events
                <FontAwesomeIcon
                  icon={["fab", "youtube"]}
                  size="1x"
                  color="red"
                  className="rounded inline"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-black text-3xl">BackGround</h1>
          <p className="opacity-90 leading-relaxed my-4 ">
            In contemporary times, advances in human well-being in the world are
            driven by progress in the field of Mathematics and Science. Indeed,
            modern economies are predominantly built on dynamism and
            achievements in the fields of mathematics and science. The emergence
            of countries in the far east as dominant global forces is mostly
            attributed to the gains accrued through a sustained investment in
            mathematics and science. Nonetheless, in most developing countries
            especially in Africa, few people pursue this field at all sectors in
            the educational spectrum. This apathy for science and mathematics is
            even more widespread among females. Many reasons have been proffered
            over the years for this situation including the fact that these
            subjects are complex and difficult. Other reasons given for this
            situation include little investment in industries and the absence of
            adequate personnel and equipment in schools and educational
            institutions. Some people have even resorted to classifying this
            field as a ‘male only field’ due to the dominance of males in the
            field. To reverse this situation, UNESCO and most nations have put
            in frantic efforts but the number of females in the sciences is
            still abysmally low. While very few females dare to venture into
            this field, a great majority of them drop out at very early stages
            of the programs. In spite of the many reasons that have been
            advanced for this, one of the most obvious reasons which is mostly
            overlooked is the fact that girls often lack role models and
            mentorship especially from the peers who have succeeded in this
            field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
