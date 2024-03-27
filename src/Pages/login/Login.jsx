import "./Login.scss";
// icons
import { LuLock } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import { Input } from "../../ui/index";
import { useDispatch, useSelector } from "react-redux";
import {
  signUserError,
  signUserStart,
  signUserSuccess,
} from "../../Slice/authSlice";
import AuthService from "../../Service/auth";
import { setItem } from "../../helpers/persistance-storage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const LoginHandler = async (e) => {
    e.preventDefault();

    dispatch(signUserStart());

    const user = {
      username,
      password,
    };
    try {
      const response = await AuthService.userLogin(user);
      setItem("token " , response.data.access_token)
      dispatch(signUserSuccess());
      navigate("/")
    } catch (error) {
      dispatch(signUserError(error));
    }
  };
  return (
    <div className="login">
      <div className="box">
        <div className="title">
          <Link to={"/"}>
            <img src="./imegs/Logo.png" alt="" />
          </Link>
          <h2>Войдите в свою учетную запись</h2>
        </div>

        <form id="form">
          <div className="content">
            <label className="sub_title" htmlFor="UsernameInput">
              <BiUser />
              <p>Имя пользователя</p>
            </label>
            <Input
              type={"text"}
              id={"UserInput"}
              state={username}
              setState={setUsername}
            />
          </div>

          <div className="content">
            <label className="sub_title" htmlFor="passwordInput">
              <LuLock />
              <p>Пароль</p>
            </label>
            <Input
              type={"password"}
              id={"password"}
              state={password}
              setState={setPassword}
            />
          </div>
        </form>

        <div className="buttons">
          <Link to={"/SignUp"}>
            <button>Зарегистрироваться</button>
          </Link>
          <button disabled={isLoading} onClick={LoginHandler} type="submit">
            {isLoading ? "загрузка.." : "Войти"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
