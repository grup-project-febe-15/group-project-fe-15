import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const PageDaftar = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SubmitForm = async (e) => {
    e.preventDefault();

    if (username === "" && email === "" && password === "") {
      toast.info("Isi Form Terlebih Dahulu", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (email === "") {
      toast.warning("Isi Email Terlebih Dahulu", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (password === "") {
      toast.warning("Isi Password Terlebih dahulu", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      //Akan menyebabkan salah di login
      try {
        const user = {
          full_name: fullname,
          username: username,
          email: email,
          password: password,
          role: "user",
        };
        const response = await axios.post("https://group-project-be-15-production.up.railway.app/signup", user);

        console.log(response);
        toast.success("Berhasil membuat akun", {
          position: "top-right",
        });
        navigate("/masuk");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <section className="main py-3">
        <div className="container">
          <ToastContainer />
          <div className="row">
            <div className="col text-center pt-5">
              <h2>Welcome</h2>
              <p>Let's Join Us</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <div className="login-form mt-4 p-4">
                  <form id="formSignUp" className="row g-3" method="POST" onSubmit={SubmitForm}>
                    <h4 className="text-center">Sign Up</h4>
                    <div className="col-12">
                      <label>Full Name</label>
                      <input type="text" id="username" name="username" className="form-control" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <label>Username</label>
                      <input type="text" id="username" name="username" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <label>Email</label>
                      <input type="text" id="email" name="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <label>Password</label>
                      <input type="password" id="password" name="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <hr className="mt-4" />
                  <div className="col-12">
                    <p className="text-center mb-0">
                      Sudah memiliki Akun ?, Silahkan <Link to="/masuk">Sign In</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageDaftar;
