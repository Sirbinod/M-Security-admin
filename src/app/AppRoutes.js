import React, {Component, Suspense, lazy} from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const ViewPartner = lazy(() => import("./partner/viewPartner"));
const Create = lazy(() => import("./partner/create"));

const CostList = lazy(() => import("./cost/costList"));
const CreateCost = lazy(() => import("./cost/createCost"));

const CreateLicens = lazy(() => import("./licenses/createLicens"));
const LicensesList = lazy(() => import("./licenses/licensesList"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const VirusList = lazy(() => import("./virus/virusList"));

const Logout = lazy(() => import("./user/logout"));

// const Register = lazy(() => import("./user/register"));
// const Login = lazy(() => import("./user/login"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="/partner/viewPartner" component={ViewPartner} />
          <Route path="/partner/create" component={Create} />
          <Route path="/cost/createCost" component={CreateCost} />
          <Route path="/cost/costList" component={CostList} />

          <Route path="/licenses/createLicens" component={CreateLicens} />
          <Route path="/licenses/licensesList" component={LicensesList} />

          <Route path="/virus/virusList" component={VirusList} />
          <Route path="/user/logout" component={Logout} />
          {/* <Route path="/user/register" component={Register} />
          <Route path="/user/login" component={Login} /> */}

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
