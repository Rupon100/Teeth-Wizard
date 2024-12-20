import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
 

 

const Login = () => {

    const { googleLogin, handleLonin, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    //const loca = location.state;
    //console.log(loca)

    const handleLoginSubmit = (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const email = form.get("email");
      const pass = form.get("pass");
      console.log(email,pass);

      handleLonin(email,pass)
      .then(result => {
          setUser(result.user);
      })
      .catch(error => console.log(error.message))
    }

    const handleGoogle = () => {
      googleLogin()
      .then(result => {
        setUser(result);
        navigate(location?.state ? location.state : '/')
      })
    }

    return (
        <div className="m-10 max-w-2xl mx-auto space-y-3">
            <div>
                <form onSubmit={handleLoginSubmit} className="space-y-3">
                    <label className="input input-bordered flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                      </svg>
                      <input type="text" name="email" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                          fillRule="evenodd"
                          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                          clipRule="evenodd" />
                      </svg>
                      <input type="password" name="pass" className="grow" />
                    </label>
                    <button className="btn">Login</button>
               </form>
            </div>
            <button onClick={handleGoogle} className="btn my-2">Google Login</button>
            <br />
            <p>
                Have an account?
                <Link to='/register' className="text-green-400 px-2">Register</Link>
            </p>
        </div>
    );
};

export default Login;