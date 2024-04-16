// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { db } from '../firebase';
// import ReactPlayer from 'react-player';

// const CourseStart = () => {
//   const { courseId, topicId } = useParams();
//   const [course, setCourse] = useState(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const courseDoc = await db.collection('courses').doc(courseId).get();
//         if (courseDoc.exists) {
//           const courseData = courseDoc.data();
//           setCourse(courseData);
//           const topic = courseData.subCourses.flatMap(subCourse => subCourse.topics).find(topic => topic.id === topicId);
//           setSelectedTopic(topic);
//         } else {
//           console.log('Course not found');
//         }
//       } catch (error) {
//         console.error('Error fetching course:', error);
//       }
//     };

//     fetchCourse();
//   }, [courseId, topicId]);

//   return (
//     <div>
//       <h1>Course Start</h1>
//       {selectedTopic && (
//         <div>
//           <h2>{selectedTopic.name}</h2>
//           <ReactPlayer url={selectedTopic.videoUrl} controls />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseStart;
