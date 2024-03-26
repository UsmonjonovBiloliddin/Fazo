import "./Navbar_top.scss";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAddIcCall } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
const NavbarTop = () => {
  return (
    <div className="NavbarTop">
      <nav>
        <div className="left">
          <div className="regions">
            <p>
              <CiLocationOn />
              Ташкент
            </p>

            <div className="select">
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
            </div>
          </div>

          <ul>
            <NavLink>
              <li>Наши магазины</li>
            </NavLink>
            <NavLink>
              <li>B2B продажи</li>
            </NavLink>
            <NavLink>
              <li>Покупка в рассрочку</li>
            </NavLink>
            <NavLink>
              <li>Способы оплаты</li>
            </NavLink>
            <NavLink>
              <li>Гарантия на товары</li>
            </NavLink>
          </ul>
        </div>

        <div className="right">
          <h4>
            <MdOutlineAddIcCall /> +998 95 123 55 88
          </h4>
          <select name="" id="">
            <option value="">
              <h1>Uz</h1>
            </option>
            <option value="">
              <h1>Rus</h1>
            </option>
            <option value="">
              <h1>Eng</h1>
            </option>
          </select>
        </div>

        <HiMiniBars3 />
      </nav>
    </div>
  );
};

export default NavbarTop;
