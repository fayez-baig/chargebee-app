import SvgIcon from "../../../Common/components/svg-icon/SvgIcon";

const Footer = () => {
  return (
    <footer className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h1>Experience the Smartest Way to Automate Recurring Payments</h1>
        </div>
        <div className="col-12 col-md-4">
          <button className="btn btn-outline-primary btn-purple" type="submit">
            Sechdule a Demo
            <SvgIcon
              style={{ width: "15px" }}
              className="ml-2"
              icon="ArrowRight"
            />
          </button>
          <button className="btn btn-outline-purple ml-2" type="submit">
            Signup for free
            <SvgIcon
              style={{ width: "15px" }}
              className="ml-2"
              icon="ArrowRight"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
