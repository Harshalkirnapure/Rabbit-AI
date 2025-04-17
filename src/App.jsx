import { Route, Routes } from 'react-router-dom';
import Work_exeperience from './pages/work_experience';
import Job_preference from './pages/job_preferences';
import WorkProof from './pages/work_proof';
import Resume from './pages/resume';
import DomainPage from './pages/domain';
import ProfilePage from './pages/profile';
import Signup from './pages/Signup';
import VerifyOTP from './pages/VerifyOTP';

const App = () => (
  <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/verify" element={<VerifyOTP />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/domain" element={<DomainPage />} />
    <Route path="/work_experience" element={<Work_exeperience />} />
    <Route path="/job_preference" element={<Job_preference />} />
    <Route path="/work_proof" element={<WorkProof />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
);

export default App;
