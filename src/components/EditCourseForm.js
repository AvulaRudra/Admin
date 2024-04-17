import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useRef } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyA6hi5WniSmIBsPCwcqk_QVizh8yHcYM88",
    authDomain: "ravuru-ccbcd.firebaseapp.com",
    projectId: "ravuru-ccbcd",
    storageBucket: "ravuru-ccbcd.appspot.com",
    messagingSenderId: "438776822141",
    appId: "1:438776822141:web:31b8db8d2b789959003414",
    measurementId: "G-9TDRW616T8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const EditCourseForm = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courses, setCourses] = useState([]);
  const [courseData, setCourseData] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [subCourses, setSubCourses] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const initialRender = useRef(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true); // Set loading to true when fetching courses
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const coursesData = querySnapshot.docs.map(doc => doc.data());
        setCourses(coursesData);
        setLoading(false); // Set loading to false after fetching courses
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchCourses();
  }, [db]);

  useEffect(() => {
    const fetchCourseData = async () => {
      setLoading(true); // Set loading to true when fetching course data
      try {
        const docRef = doc(db, 'courses', selectedCourse);
        const docSnap = await docRef.get();
        if (docSnap.exists()) {
          const data = docSnap.data();
          setCourseData(data);
          setCourseName(data.courseName);
          setDescription(data.description);
          setSubCourses(data.subCourses);
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
      setLoading(false); // Set loading to false after fetching course data
    };

    if (!initialRender.current) {
      fetchCourseData();
    }
  }, [db, selectedCourse]);

  const handleCourseSelect = (courseName) => {
    setSelectedCourse(courseName);
  };

  const handleNextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    else handleConfirmChanges();
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleConfirmChanges = async () => {
    try {
      const updatedCourseData = {
        courseName,
        description,
        subCourses
      };

      await updateDoc(doc(db, 'courses', selectedCourse), updatedCourseData);

      setAlertMessage('Course updated successfully');
      setShowAlert(true);
    } catch (error) {
      setAlertMessage('Error updating course. Please try again.');
      setShowAlert(true);
      console.error('Error updating course:', error);
    }
  };

  const renderCourseDropdown = () => (
    <select value={selectedCourse} onChange={(e) => handleCourseSelect(e.target.value)}>
      <option value="">Select Course</option>
      {courses.map((course, index) => (
        <option key={index} value={course.courseName}>{course.courseName}</option>
      ))}
    </select>
  );

  const renderEditCourseForm = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Course: {selectedCourse}</h2>
      <form onSubmit={handleNextStep}>
        <label htmlFor="courseName">Course Name:</label>
        <input type="text" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        {/* Render additional form fields for sub-courses and topics if needed */}
        <button type="button" onClick={handlePreviousStep}>Previous</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );

  const renderLoading = () => (
    <div className="flex items-center justify-center h-screen">
      <svg className="animate-spin h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.09a1.5 1.5 0 003 0V4.472c2.652.467 4.733 2.547 5.2 5.199h-3.09a1.5 1.5 0 000 3h3.09c-.467 2.652-2.548 4.733-5.2 5.2v-3.09a1.5 1.5 0 00-3 0v3.09c-2.652-.467-4.733-2.548-5.2-5.2H4z"></path>
      </svg>
    </div>
  );

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      {renderCourseDropdown()}
      {loading ? renderLoading() : selectedCourse && renderEditCourseForm()} {/* Conditional rendering based on loading state */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4">
            <p className="text-lg font-semibold">{alertMessage}</p>
            <button onClick={() => setShowAlert(false)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCourseForm;
