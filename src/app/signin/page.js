import Image from "next/image";
import Link from "next/link";
import "../../../public/assets/css/style.css";
import IMG from "../../../public/assets/img/signin_img.png";
// import EMAIL from "../../public/assets/img/email_icon.jpg";
// import GOOGLE from "../../public/assets/img/google_icon.jpeg";

export default function signIn() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center d-block m-5">
            <Image
              src={IMG}
              alt="Picture of the author"
              width={350}
              height={250}
            />
            <div className="heading-numbe">
              <p className="mt-2 font-weight">
                Type in your phone number below to register
              </p>
              <form className="text-center">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center pb-4">
                    <input
                      type="text"
                      className="form-control input-field"
                      placeholder="First name"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="">
              <Link href="/signup">
                <button className="start-btn border-0 p-2 px-5">
                  Sign In With Phone
                </button>
              </Link>
            </div>
            <div className="text m-2">
              <p>Or sign in with</p>
            </div>
            <div className="my-4">
              <div className="contine-btn ">
                <Link href="" className="no-underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-at-fill m-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                  </svg>
                  Continue With Email
                </Link>
              </div>
              <div className="contine-btn mt-4">
                <Link href="" className="no-underline_google">
                  {/* <Image
                    src={GOOGLE}
                    alt="Picture of the author"
                    width={18}
                    height={18}
                    className="m-2"
                  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-google m-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>
                  Continue With Google
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
