// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase';

// const CourseOverview = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const coursesSnapshot = await db.collection('courses').get();
//         const fetchedCourses = coursesSnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setCourses(fetchedCourses);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h1>Course Overview</h1>
//       <ul>
//         {courses.map(course => (
//           <li key={course.id}>
//             <h2>{course.courseName}</h2>
//             <p>{course.description}</p>
//             <ul>
//               {course.subCourses.map(subCourse => (
//                 <li key={subCourse.id}>
//                   <h3>{subCourse.name}</h3>
//                   <ul>
//                     {subCourse.topics.map(topic => (
//                       <li key={topic.id}>
//                         <p>{topic.name}</p>
//                         {/* Render alternate text for video */}
//                         <Link to={`/course-start/${course.id}/${topic.id}`}>Watch Video</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CourseOverview;
