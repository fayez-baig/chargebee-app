import Header from "./../../domians/Layout/components/header/Header";
import SvgIcon from "./../../domians/Common/components/svg-icon/SvgIcon";
import BrandsIcon from "../../../assets/images/brands.png";
import Footer from "../../domians/Layout/components/footer/footer";

const HomePage = () => {
  return (
    <main>
      <section className="section-bg">
        <div className="container">
          <Header />
          <div className="jumbotron jumbotron-fluid bg-transparent pl-0 pr-0">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-5">
                  <h1 className="display-5 font-weight-bold orange">
                    Subscription Billing & Revenue Operation
                  </h1>
                  <h1 className="display-5 font-weight-bold dark-blue mb-4">
                    For Business Designed for Growth{" "}
                  </h1>
                  <p className="dark-blue section-info-desc mb-5">
                    Charge gives you the freedom to deploy the right growth
                    strageties, while automating everything else in your
                    order-to-revenue workflow
                  </p>
                  <div className="mb-5">
                    <button
                      className="btn btn-outline-primary btn-purple"
                      type="submit"
                    >
                      Get a Consultation
                      <SvgIcon
                        style={{ width: "15px" }}
                        className="ml-2"
                        icon="ArrowRight"
                      />
                    </button>
                    <button className="btn btn-outline-dark ml-2" type="submit">
                      Signup for free
                      <SvgIcon
                        style={{ width: "15px" }}
                        className="ml-2"
                        icon="ArrowRight"
                      />
                    </button>
                  </div>
                  <p className="dark-blue section-info-para mt-5">
                    Trusted by leading brands to process over $3Bn in recurring
                    revenue
                  </p>
                  <img src={BrandsIcon} alt="brand" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="billing-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <h5>BEYOND BILLING </h5>
              <h1 className="mb-4">Streamline Your Entire RevOps Workflow</h1>
              <p className="billing-section-desc">
                The next big revenue opportunity need not be familier. Chargebee
                give you the infrastructure to discover and turn every revenue
                potential into a business outcome
              </p>
            </div>

            <div className="col-12 col-md-6">
              <SvgIcon
                style={{ width: "100%", height: "auto" }}
                icon="SubscriptionAutomation"
              />
            </div>
            <div className="col-12 col-md-3 ">
              <h4 className="mb-3">Automate the Order-to-Revenue Lifecycle</h4>
              <p className="billing-section-desc mb-4">
                Collect recurring payments and automate your subscription
                billing logic - from checkout to reconciliation.
              </p>
              <p className="subscription-automation">
                Subscription Automation{" "}
                <SvgIcon
                  style={{ width: "10px" }}
                  className="ml-2"
                  icon="Arrow"
                />
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-3"></div>
            <div className="col-12 col-md-6">
              <SvgIcon
                style={{ width: "100%", height: "auto" }}
                icon="BillingExperiments"
              />
            </div>
            <div className="col-12 col-md-3">
              <h4 className="mb-3">
                Evolve your Billing Workflow to Fit Your Business Strategy{" "}
              </h4>
              <p className="billing-section-desc mb-4">
                Adjust pricing structuress, products, bundles, acquisition flows
                and recovery processes to maximize revenue
              </p>
              <p className="subscription-automation">
                Billing Expriments{" "}
                <SvgIcon
                  style={{ width: "10px" }}
                  className="ml-2"
                  icon="Arrow"
                />
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-3"></div>
            <div className="col-12 col-md-6">
              <SvgIcon
                style={{ width: "100%", height: "auto" }}
                icon="Integration"
              />
            </div>
            <div className="col-12 col-md-3">
              <h4 className="mb-3">
                Scale Your Revenue Stack for Each Stage of Growth
              </h4>
              <p className="billing-section-desc mb-4">
                Upgrade finance, accounting, CRM, and more on the revenue engine
                that scales with you.
              </p>
              <p className="subscription-automation">
                Extensible Platform{" "}
                <SvgIcon
                  style={{ width: "10px" }}
                  className="ml-2"
                  icon="Arrow"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>FOR THE MODERN CFO </h5>
              <h1 className="mb-4">
                Spend less time Closing More time Driving
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 d-flex mb-3">
              <div className="mr-2">
                <SvgIcon
                  style={{ width: "15px" }}
                  className="ml-2"
                  icon="Check"
                />
              </div>
              <div>
                <h3>GAAP Complaint RevRec</h3>
                <p className="mb-5">
                  Recognize revenue accurately with ASC-606 & IFRS-15 complaint
                  revenue reporting
                </p>
                <span className="subscription-automation mt-4">
                  Deffered Revenue Report
                  <SvgIcon
                    style={{ width: "10px" }}
                    className="ml-2"
                    icon="Arrow"
                  />
                </span>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex mb-3">
              <div className="mr-2">
                <SvgIcon
                  style={{ width: "15px" }}
                  className="ml-2"
                  icon="Check"
                />
              </div>
              <div>
                <h3>Collections & Reconciliation</h3>
                <p className="mb-5">
                  Eliminate manual reconciliation by auto-matching books of
                  accounts with the bank.
                </p>
                <span className="subscription-automation mt-4">
                  One-touch Reconciliation
                  <SvgIcon
                    style={{ width: "10px" }}
                    className="ml-2"
                    icon="Arrow"
                  />
                </span>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex">
              <div className="mr-2">
                <SvgIcon
                  style={{ width: "15px" }}
                  className="ml-2"
                  icon="Check"
                />
              </div>
              <div>
                <h3>A/R & DSO Management</h3>
                <p className="mb-4">
                  Reduce DSO and plug revenue churn proactively with Smart
                  Dunning & Smarter Retries.
                </p>
                <span className="subscription-automation mt-2">
                  Smart Dunning{" "}
                  <SvgIcon
                    style={{ width: "10px" }}
                    className="ml-2"
                    icon="Arrow"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
