/* eslint-disable jsx-a11y/anchor-is-valid */
import SvgIcon from "./../../../Common/components/svg-icon/SvgIcon";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light mt-5">
      <div class=" navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">
          <SvgIcon
            style={{ width: "115.64px", height: "36px" }}
            icon="ChargebeeLogo"
          />
        </a>

        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link active font-weight-bold"
              aria-current="page"
              href="#"
            >
              Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              Solutins
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              Resources
            </a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <button
            className="btn btn-outline-primary m-2 border-0 btn-purple-transparent"
            type="submit"
          >
            Sechdule a Demo
            <SvgIcon
              style={{ width: "15px" }}
              className="ml-2"
              icon="ArrowRight"
            />
          </button>
          <button className="btn btn-outline-primary btn-purple" type="submit">
            Login{" "}
            <SvgIcon
              style={{ width: "15px" }}
              className="ml-2"
              icon="ArrowRight"
            />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
