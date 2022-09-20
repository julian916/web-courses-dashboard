import mock from '../../data/data.json';

// Simulate fetch to backend and filter data manually
export const getCoursesCall = (searchValue, status, language) : Promise<any> => {
  return new Promise((resolve, reject) => {
    let courses = mock.data;
    if(searchValue) {
      courses = courses.filter(course => course.name.toLowerCase().includes(searchValue.toLowerCase()));
    }
    if(status) {
      courses = courses.filter(course => course.status === status);
    }
    if(language) {
      courses = courses.filter(course => course.language === language);
    }
    resolve(courses);
  });
};

export const trimString = function (string, length) {
  return string.length > length ?
    string.substring(0, length) + '...' :
    string;
};
