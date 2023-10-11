import React, { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.name === "" || user.email === "" || user.password === "") {
      toast.error("please input field");
    } else {
      const response = await axios.post("http://localhost:5000/admin", user);
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.msg);
      } else {
        toast.error(response.data.msg);
      }
    }
  };
  return (
    <div>
      <div className="w-50 m-auto p-4 shadow mt-4">
        <form onSubmit={handleSubmit}>
          <p className="text-capitalize text-center fw-light fs-2">
            registration form
          </p>

          <div class="mb-3">
            <label class="form-label">User-name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="name"
              onChange={handleForm}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={handleForm}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={handleForm}
            />
          </div>
          <div class="mb-3 form-check"></div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
