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
      {path: "/basic-ui", state: "basicUiMenuOpen"},
      {path: "/form-elements", state: "formElementsMenuOpen"},
      {path: "/tables", state: "tablesMenuOpen"},
      {path: "/icons", state: "iconsMenuOpen"},
      {path: "/charts", state: "chartsMenuOpen"},
      {path: "/user-pages", state: "userPagesMenuOpen"},
      {path: "/error-pages", state: "errorPagesMenuOpen"},
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
              this.isPathActive("/basic-ui")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.basicUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("basicUiMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">
                <Trans>Advertisment</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/basic-ui/buttons")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/buttons"
                    >
                      <Trans>View All Ads</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/basic-ui/dropdowns")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/dropdowns"
                    >
                      <Trans>Create New Ad</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/jjk")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon">
                <i className="mdi mdi-account-multiple-plus"></i>
              </span>
              <span className="menu-title">
                <Trans>Member</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/jjk")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon">
                <i className="mdi mdi-file-export"></i>
              </span>
              <span className="menu-title">
                <Trans>Export to CSV</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/jjk")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon">
                <i className="mdi mdi-file-find"></i>
              </span>
              <span className="menu-title">
                <Trans>Find Licenses</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/jjk")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon">
                <i className="mdi mdi-marker"></i>
              </span>
              <span className="menu-title">
                <Trans>Generate</Trans>
              </span>
            </Link>
          </li>

          <li
            className={
              this.isPathActive("/icons")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.iconsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("iconsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-database"></i>
              </span>
              <span className="menu-title">
                <Trans>Virus Database</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.iconsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/icons/mdi")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/icons/mdi"
                    >
                      <Trans>View All Detial</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
            <Collapse in={this.state.iconsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/icons/mdi")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/icons/mdi"
                    >
                      <Trans>Add New Detials</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/user-pages")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.userPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("userPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-account"></i>
              </span>
              <span className="menu-title">
                <Trans>User Management</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.userPagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user-pages/login-1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user-pages/login-1"
                    >
                      <Trans>Login</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user-pages/register-1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user-pages/register-1"
                    >
                      <Trans>Register</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>More</Trans>
            </span>
          </li>
          <li
            className={
              this.isPathActive("/error-pages")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.errorPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("errorPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-lock"></i>
              </span>
              <span className="menu-title">
                <Trans>Error Pages</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.errorPagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/error-pages/error-404")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/error-pages/error-404"
                    >
                      404
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/error-pages/error-500")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/error-pages/error-500"
                    >
                      500
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item menu-items">
            <a
              className="nav-link"
              href="http://bootstrapdash.com/demo/corona-react-free/documentation/documentation.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title">
                <Trans>Documentation</Trans>
              </span>
            </a>
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
