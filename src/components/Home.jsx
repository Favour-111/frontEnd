import React from "react";
import { useNavigate } from "react-router";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="HomeBg ">
        <div className="container">
          <div className="row">
            <div className="sections col-md-6 text-light">
              <div className="contents text-light ms-5">
                <h1 class="text-white home-title mb-0">
                  Welcome to SchoolsPortal
                </h1>
                <p className=" text fw-light fs-6 my-3 ">
                  A robust and feature rich cloud based school management
                  aplication that allows school managers effectively manage
                  their schools remotely from anywhere with tools for teachers
                  to teach and students to learn online anywhere.
                </p>
                <button className="landingBtn">get started</button>
              </div>
            </div>
            <div className="formBody col-md-6 text-light">
              <div className="contents text-dark mx-5 bg-light rounded p-3">
                <p className="fs-5 fw-bold">
                  sign into your dashBoard already have an account
                </p>
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <label className="from-label my-2 text-capitalize">
                    select school
                  </label>
                  <select name="" id="" className="form-control">
                    <option value="">Government College Umuahia</option>
                    <option value="">Akwa Ibom State</option>
                    <option value="">Holy Family College, Abak</option>
                    <option value="">Anambra State</option>
                    <option value="">
                      Bishop Crowther Seminary, Works Road, Awka
                    </option>
                    <option value="">Christ the King College, Onitsha</option>
                    <option value="">Hussey College Warri</option>
                    <option value="">
                      Government Secondary School, Afikpo
                    </option>
                    <option value="">
                      Federal Government Girls College, Benin
                    </option>
                    <option value="">
                      University Preparatory Secondary School, Benin City
                    </option>
                    <option value="">Ladela Secondary School, Abuja</option>
                    <option value="">
                      Whiteplains British School, Jabi, Abuja
                    </option>
                    <option value="">Diocesan High School, Gombe</option>
                    <option value="">
                      Federal Government Girls' College, Owerri
                    </option>
                    <option value="">De-genius olivet</option>
                    <option value="">
                      Government Secondary School, Owerri
                    </option>
                    <option value="">Ray Jacobs Boarding School, Mgbidi</option>
                    <option value="">Barewa College, Zaria</option>
                    <option value="">Dawakin Tofa Science College</option>
                    <option value="">Titcombe College Egbe</option>
                    <option value="">
                      Landmark University Secondary School
                    </option>
                    <option value="">
                      Apata Memorial High School, Ireakari Estate, Isolo, Lagos
                    </option>
                    <option value="">
                      Babington Macaulay Junior Seminary, Ikorodu, Lagos
                    </option>
                    <option value="">
                      British International School Lagos, Ikoyi, Lagos
                    </option>
                    <option value="">CMS Grammar School, Lagos</option>
                    <option value="">D-Ivy College, Ikeja Lagos</option>
                    <option value="">
                      Ebun Pro Veritas International School, Oregun, Ikeja,
                      Lagos
                    </option>
                    <option value="">Faith Academy, Gowon Estate</option>
                    <option value="">Government College Ikorodu</option>
                    <option value="">Igbobi College, Yaba</option>
                  </select>
                  <br />
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                  <button
                    className="btn btn-link mx-4"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    don't have an account Sign-up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
