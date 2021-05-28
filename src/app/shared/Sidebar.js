import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {Collapse} from "react-bootstrap";
import {Trans} from "react-i18next";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState]: false});
    } else if (Object.keys(this.state).length === 0) {
      this.setState({[menuState]: true});
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({[i]: false});
      });
      this.setState({[menuState]: true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path: "/apps", state: "appsMenuOpen"},
      {path: "/partner", state: "partnerMenuOpen"},
      {path: "/licenses", state: "licensesMenuOpen"},
      {path: "/cost", state: "costMenuOpen"},
      {path: "/virus", state: "virusMenuOpen"},
      {path: "/user", state: "userMenuOpen"},
      // {path: "/user-pages", state: "userPagesMenuOpen"},
      // {path: "/error-pages", state: "errorPagesMenuOpen"},
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state]: true});
      }
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <Link
            className="sidebar-brand brand-logo text-decoration-none"
            to="/"
          >
            {/* <img src={require("../../assets/images/logo.svg")} alt="logo" /> hj */}
            <h2 className="text-white ">M-Security</h2>
          </Link>
          <a className="sidebar-brand brand-logo-mini " href="index.html">
            {/* <img
              src={require("../../assets/images/logo-mini.svg")}
              alt="logo"
            /> */}
            M
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img
                    className="img-xs rounded-circle "
                    src={require("../../assets/images/faces/face15.jpg")}
                    alt="profile"
                  />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">
                    <Trans>MSecurity</Trans>
                  </h5>
                  <span>
                    <Trans>Admin</Trans>
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>GENERAL</Trans>
            </span>
          </li>
          <li
            className={
              this.isPathActive("/dashboard")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon">
                <i className="mdi mdi-home"></i>
              </span>
              <span className="menu-title">
                <Trans>Dashboard</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/partner")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.partnerMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("partnerMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-account-multiple-plus"></i>
              </span>
              <span className="menu-title">
                <Trans>Partner</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.partnerMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/partner/viewPartner")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/partner/viewPartner"
                    >
                      <Trans>View All Partner</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/partner/create")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/partner/create"
                    >
                      <Trans>Create New Partner</Trans>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/changePassword/changePassword")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/changePassword/changePassword"
                    >
                      <Trans>ChangePassword</Trans>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/cost")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.costMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("costMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-currency-usd"></i>
              </span>
              <span className="menu-title">
                <Trans>Cost</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.costMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/cost/costList")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/cost/costList"
                    >
                      <Trans>Cost List</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/cost/createCost")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/cost/createCost"
                    >
                      <Trans>Create Cost</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li
            className={
              this.isPathActive("/licenses")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.licensesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("licensesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-file"></i>
              </span>
              <span className="menu-title">
                <Trans>Licenses</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.licensesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/licenses/createLicens")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/licenses/createLicens"
                    >
                      <Trans>Create</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/licenses/licensesList")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/licenses/licensesList"
                    >
                      <Trans>List</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/virus")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.virusMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("virusMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-alert-circle-outline"></i>
              </span>
              <span className="menu-title">
                <Trans>Virus</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.virusMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/virus/virusList")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/virus/virusList"
                    >
                      <Trans>Virus List</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
