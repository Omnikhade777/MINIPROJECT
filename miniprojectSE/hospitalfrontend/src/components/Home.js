
import { useNavigate } from 'react-router-dom';
import { FaUserMd, FaUserInjured, FaArrowLeft } from 'react-icons/fa'; // Icons for doctor, patient, and back button

const Home = () => {
  const navigate = useNavigate();

  const handlePatient = () => {
    navigate('/patieninfo');
  };

  const handleDoctor = () => {
    navigate('/Doctorinfo');
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
      <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
        Hospital Management System
      </h1>

   
      <div className="flex space-x-8">
        <button
          onClick={handlePatient}
          className="flex items-center py-3 px-8 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          <FaUserInjured className="mr-2" /> Patient
        </button>
        <button
          onClick={handleDoctor}
          className="flex items-center py-3 px-8 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition transform hover:scale-105"
        >
          <FaUserMd className="mr-2" /> Doctor
        </button>
      </div>


      <button
        onClick={handleBack}
        className="mt-8 py-2 px-6 bg-gray-800 text-white flex items-center rounded-lg hover:bg-gray-900 transition transform hover:scale-105"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>
    </div>
  );
};

export default Home;
