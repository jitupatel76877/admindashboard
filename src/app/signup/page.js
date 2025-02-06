import Image from "next/image";
import Link from "next/link";

export default function signup() {
  return (
    <>
        <div className="">
        <div className="bg-color ">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className="text-center d-block m-5">
              <div className="welcome_page">Welcome Back</div>
              <div className="my-2 page_sub_heading">
                Let's get started by filling out the form below.
              </div>
              <form>
                <div className="form-group d-flex justify-content-center pb-4 mx-5 mt-5">
                  <input
                    type="email"
                    className="form-control signup_form"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group d-flex justify-content-center pb-4 mx-5 mt-3">
                  <input
                    type="password"
                    className="form-control signup_form"
                    placeholder="Password"
                  />
                </div>
                <div className="signup_btn">
                <Link href="/createaccount">
                <button className="btn">Sign Up</button>
                </Link>
                </div>
                 <div className="m-3 create_account">
                 <span>Dont't have a account? </span>
                 <Link href="" className="sign-up-account">Sign Up here</Link>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    </>
  );
}
