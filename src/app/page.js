// import Image from "next/image";
// import styles from "./page.module.css";

import Image from "next/image";
import IMG from "../../public/assets/img/image_one.png";
import Link from "next/link";
import "../../public/assets/css/style.css";

export default function Home() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center d-block m-5">
            <Image
              src={IMG}
              alt="Picture of the author"
              width={350}
              height={350}
            />
            <div className="heading">Stay Connected</div>
            <div className="text">
              <p className="mt-2">
                By connecting with your employees, you no longer have to contact
                them yourself, they send priorities for you on and everyboby
                sees them on the platfrom
              </p>
            </div>
            <div className="">
              <Link href="/signin">
              <button className="start-btn border-0 p-2 px-5">Start Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

