import "./SignUp.scss";
// icons
import { BiUser } from "react-icons/bi";
import { LuLock, LuPhoneCall } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  signUserError,
  signUserStart,
  signUserSuccess,
} from "../../Slice/authSlice";
import { useState } from "react";
import AuthService from "../../Service/auth";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const RegisterHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());

    const users = {
      name: user,
      username: username,
      password: password,
      phone_number: number,
    };

    try {

      const response = await AuthService.userRegister(users);
      dispatch(signUserSuccess(response.config.data));
      navigate("/Login")
    } catch (error) {
      dispatch(signUserError(error));
    }
  };

  return (
    <div className="signUp">
      <div className="box">
        <div className="title">
          <Link to={"/"}>
            <img src="./imegs/Logo.png" alt="" />
          </Link>
          <h2>Создайте свою учетную запись</h2>
        </div>
        <form id="form">
          <div className="content">
            <label className="sub_title" htmlFor="emailInput">
              <BiUser />
              <p>имя</p>
            </label>
            <Input
              type={"text"}
              id={"userInput"}
              state={user}
              setState={setUser}
            />
          </div>

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

          <div className="content">
            <label className="sub_title" htmlFor="emailInput">
              <LuPhoneCall />
              <p>Ваш номер телефона</p>
            </label>
            <Input
              type={"text"}
              id={"NumberInput"}
              state={number}
              setState={setNumber}
            />
          </div>
        </form>

        <div className="buttons">
          <Link to={"/Login"}>
            <button>Войти</button>
          </Link>
          <button
            disabled={isLoading}
            onClick={RegisterHandler}
            form="form"
            type="submit"
          >
            {isLoading ? "загрузка.." : "Зарегистрироваться"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
