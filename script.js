const enrollmentData = {
  enrollmentData: [
    { student: "Alice", course: "Math" },
    { student: "Bob", course: "Math" },
    { student: "Charlie", course: "English" },
    { student: "David", course: "Science" },
    { student: "Eve", course: "Math" },
    { student: "Frank", course: "English" },
  ],
};

// complete this function
async function calculateEnrollment() {
  // Create an object to store the number of students enrolled in each course
  const courseEnrollments = {};

  // Iterate through the enrollment data
  enrollmentData.enrollmentData.forEach((entry) => {
    const { course } = entry;

    // If the course is already in the object, increment its count; otherwise, set it to 1
    if (courseEnrollments[course]) {
      courseEnrollments[course]++;
    } else {
      courseEnrollments[course] = 1;
    }
  });

  // Log the courses and their total enrollment numbers
  for (const [course, count] of Object.entries(courseEnrollments)) {
    console.log(`${course}: ${count} students`);
  }
}

// Call the function to calculate and log the enrollment
calculateEnrollment();
