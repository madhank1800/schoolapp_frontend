
import './App.css';
import FallbackComponent  from './FallbackComponent';
import { Suspense, lazy, } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup';
import LoginPage from './Components/LoginPage';
//import Attendance from './SchoolSection/Attendance';
//import Attendance from "./SchoolSection/Attendance";

//import HomePage from './Components/HomePage';
import ProtectedRoute from './ProtectedRoute';
//import Sports from './SchoolSection/Sports';
//import Labs from './SchoolSection/Labs';
//import ProgressCard from './SchoolSection/ProgressCard';

//const Profile = lazy(() => import('./SchoolSection/Profile'));
//const SchoolEvents = lazy(() => import('./SchoolSection/SchoolEvents'));
//import Profile from './SchoolSection/Profile';
//import AddStudent from './SchoolSection/AddStudent';
//const AddStudent = lazy(() => import("./SchoolSection/AddStudent"));
//const Attendance = lazy(() => import("./SchoolSection/Attendance"));
const HomePage = lazy(() => import('./Components/HomePage'));

function App() {

  






  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Suspense 
            fallback={
              <>
                <h1>hii</h1>
              </>
            }
          >
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          </Suspense>  */}

          {/* <Route
            path="/home/"
            element={
              <ProtectedRoute>
                <Suspense fallback={<FallbackComponent />}>
                  <HomePage />
                </Suspense>
              </ProtectedRoute>
            }
          /> */}

         


         

         

          <Route
            path="/home/*"
            element={
              <ProtectedRoute>
                <Suspense fallback={<FallbackComponent />}>
                  <HomePage />
                </Suspense>
              </ProtectedRoute>
            }
          >
{/* 
            <Route path="addstudent" element={<AddStudent />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="sports" element={<Sports />} />
            <Route path="labs" element={<Labs />} />
            <Route path="progresscard" element={<ProgressCard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="events" element={<SchoolEvents />} /> */}
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
