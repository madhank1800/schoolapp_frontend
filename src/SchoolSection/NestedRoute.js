


import React, { Suspense, lazy} from "react";

import {  Route, Routes } from "react-router-dom";
import FallbackComponent from "../FallbackComponent";


const AddStudent = lazy(() => import("../SchoolSection/AddStudent"));
const Attendance = lazy(() => import("../SchoolSection/Attendance"));
const Labs = lazy(() => import("../SchoolSection/Labs"));
const Sports = lazy(() => import("../SchoolSection/Sports"));
const ProgressCard = lazy(() => import("../SchoolSection/ProgressCard"));
const SchoolEvents = lazy(() => import("../SchoolSection/SchoolEvents"));
const Profile = lazy(() => import("../SchoolSection/Profile"));

const NestedRoute = () => {
  return (
    <>
      <Suspense fallback={<FallbackComponent />}>
        <Routes>
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="sports" element={<Sports />} />
          <Route path="labs" element={<Labs />} />
          <Route path="progresscard" element={<ProgressCard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="events" element={<SchoolEvents />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default NestedRoute;