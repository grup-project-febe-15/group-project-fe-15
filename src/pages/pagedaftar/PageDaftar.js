import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const PageDaftar = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SubmitForm = async (e) => {
    e.preventDefault();

    if (email === "" && password === "" && username === "") {
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
      try {
        await axios.post("https://635538c3483f5d2df3afaee4.mockapi.io/users", {
          username: username,
          email: email,
          password: password,
        });
        toast.success("selamat kamu berhasil membuat akun", {
          position: toast.POSITION.TOP_CENTER,
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
                        Daftar
                      </button>
                    </div>
                  </form>
                  <hr className="mt-4" />
                  <div className="col-12">
                    <p className="text-center mb-0">
                      Sudah memiliki Akun ?, Silahkan <Link to="/masuk">Masuk</Link>
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
