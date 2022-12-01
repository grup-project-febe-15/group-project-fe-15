import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { masukServices } from "../../services/masukServices";

const PageMasuk = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(Signin([email], [password], [username]));
  }, []);

  // const SubmitForm = (e) => {
  //   e.preventDefault();
  //   const cariAkun = user.find((item) => item.email === email && item.password === password && item.username === username);

  //   if (cariAkun) {
  //     localStorage.setItem("user", JSON.stringify(cariAkun));
  //     toast.success(" Selamat kamu berhasil login!", {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //     navigate("/");
  //   } else {
  //     toast.error("kamu belum punya akun", {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //   }
  const SubmitForm = (e) => {
    e.preventDefault();

    let params = {
      username,
      password,
    };

    masukServices.masuk(params).then((response) => {
      console.log(response);
      localStorage.setItem("token", response.token);
      window.location.reload();
    });
  };

  return (
    <>
      <section className="main py-3">
        <div className="container">
          <div className="row">
            <div className="col text-center pt-5">
              <h2>Welcome Back</h2>
              <p>Let's continue what you learn about Art</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <div className="login-form mt-4 p-4">
                  <form id="formSignIn" className="row g-3" onSubmit={SubmitForm}>
                    <h4 className="text-center">Sign In</h4>
                    <div className="col-12">
                      <label>Username</label>
                      <input type="text" id="username" name="username" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <label>Password</label>
                      <input type="password" id="password" name="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Sign In
                      </button>
                    </div>
                  </form>
                  <hr className="mt-4" />
                  <div className="col-12">
                    <p className="text-center mb-0">
                      Belum Memiliki Akun ?, Silahkan <Link to="/daftar">Signup</Link>
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

export default PageMasuk;
