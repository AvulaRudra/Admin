import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const CoursePage = () => {
  const [courseCategories, setCourseCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courseCategories'));
        const categories = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourseCategories(categories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course categories:', error);
      }
    };

    fetchCourseCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {courseCategories.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-bold mb-4">{category.title.trim()}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {category.courses.map((course, i) => (
              <div key={i} className="p-4 border rounded shadow">
                <img src={`https://source.unsplash.com/random/400x300?sig=${index}`} alt={course} className="w-full h-24 sm:h-32 object-cover mb-2 rounded" />
                <p className="text-sm sm:text-base">{course}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursePage;
