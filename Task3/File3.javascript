document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 1, name: 'Introduction to HTML', description: 'Learn the basics of HTML.', completed: false },
        { id: 2, name: 'Introduction to CSS', description: 'Learn how to style your web pages with CSS.', completed: false },
        { id: 3, name: 'JavaScript Basics', description: 'Get started with JavaScript programming.', completed: false }
    ];

    const courseList = document.getElementById('courseList');
    const courseInfo = document.getElementById('courseInfo');
    const markCompleteButton = document.getElementById('markCompleteButton');

    let selectedCourseId = null;

    function renderCourses() {
        courseList.innerHTML = courses.map(course => `
            <li onclick="selectCourse(${course.id})">
                ${course.name}
            </li>
        `).join('');
    }

    function selectCourse(courseId) {
        selectedCourseId = courseId;
        const course = courses.find(c => c.id === courseId);

        if (course) {
            courseInfo.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.description}</p>
            `;
            markCompleteButton.disabled = course.completed;
        }
    }

    function markAsCompleted() {
        if (selectedCourseId) {
            const course = courses.find(c => c.id === selectedCourseId);
            if (course) {
                course.completed = true;
                markCompleteButton.disabled = true;
                courseInfo.innerHTML = `
                    <h3>${course.name}</h3>
                    <p>${course.description}</p>
                    <p><strong>Status:</strong> Completed</p>
                `;
            }
        }
    }

    markCompleteButton.addEventListener('click', markAsCompleted);

    renderCourses();
});
