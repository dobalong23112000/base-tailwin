import { BrowserRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

const SignIn = lazy(() => import('./pages/AuthPages/SignIn'));
const SignUp = lazy(() => import('./pages/AuthPages/SignUp'));
const NotFound = lazy(() => import('./pages/OtherPage/NotFound'));
const UserProfiles = lazy(() => import('./pages/UserProfiles'));
const Videos = lazy(() => import('./pages/UiElements/Videos'));
const Images = lazy(() => import('./pages/UiElements/Images'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Badges = lazy(() => import('./pages/UiElements/Badges'));
const Avatars = lazy(() => import('./pages/UiElements/Avatars'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const LineChart = lazy(() => import('./pages/Charts/LineChart'));
const BarChart = lazy(() => import('./pages/Charts/BarChart'));
const Calendar = lazy(() => import('./pages/Calendar'));
const BasicTables = lazy(() => import('./pages/Tables/BasicTables'));
const FormElements = lazy(() => import('./pages/Forms/FormElements'));
const Blank = lazy(() => import('./pages/Blank'));
const Home = lazy(() => import('./pages/Dashboard/Home'));
const Icons = lazy(() => import('./pages/UiElements/Icons'));
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import PrivateRoute from "./general/components/AppRoutes/PrivateRoute";
import GuestRoute from "./general/components/AppRoutes/GuestRoute";



export default function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
          <Routes>
            {/* Dashboard Layout */}
            <Route element={<AppLayout />}>
              <Route index path="/" element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>} />

              {/* Others Page */}
              <Route path="/profile" element={<UserProfiles />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/blank" element={<Blank />} />

              {/* Forms */}
              <Route path="/form-elements" element={<FormElements />} />

              {/* Tables */}
              <Route path="/basic-tables" element={<BasicTables />} />

              {/* Ui Elements */}
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/avatars" element={<Avatars />} />
              <Route path="/badge" element={<Badges />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/images" element={<Images />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/icons" element={<Icons />} />
              {/* Charts */}
              <Route path="/line-chart" element={<LineChart />} />
              <Route path="/bar-chart" element={<BarChart />} />
            </Route>

            {/* Auth Layout */}
            <Route path="/sign-in" element={
              <GuestRoute><SignIn /></GuestRoute>} />
            <Route path="/sign-up" element={<GuestRoute><SignUp /></GuestRoute>} />

            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

      </Router>
    </>
  );
}
