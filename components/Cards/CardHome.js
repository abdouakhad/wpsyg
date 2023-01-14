import { Fragment } from "react";
import FontAwesome from "../fontAwesome/fontAwesome";
import allData from "../../data";
import Image from "next/image";
const Card = () => {
  return (
    <Fragment>
      <div className="bg-white   text-noir  py-3 rounded-md filter drop-shadow">
        <div className="w-11/12 m-auto">
          <div className="text-left py-2 ">
            <FontAwesome className="" icon="braille" />
          </div>
          <div className="">
            <h1 className="font-black text-xl my-2">MISSION</h1>
            <div className="text-noir overflow-auto max-h-40">
              AIMS- WPSYG, an association of young people who have made
              considerable academic strides in this field and was established in
              2018, we believe by mentoring and engaging in a peer-to-peer
              interaction with young people, the notion that science and
              mathematics are preserve for a unique group of people will be
              demystified and hence paving the way for many young females to
              pursue careers in this sector. The association’s activities will
              be started in Mbour in Senegal and will be rolled out in the
              medium-term to other communities in Senegal and eventually to the
              rest of the African continent. Ultimately, the association will
              become a Pan African organization that will have branches in all
              African countries. The criteria for starting the activities of the
              organization from Mbour is due to the proximity of the community
              to the founders of the organization which will ease the
              organizations of activities at the early stages of its existence.
              The association will strategically expand its activities to other
              locations over time.
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-md md:h-full h-64 ">
        <Image
          className="rounded "
          src="/img/mission.jpg"
          layout="fill"
          objectFit="contain"
          alt="mission"
        />
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  return {
    props: {
      allData,
    },
  };
}
export default Card;
