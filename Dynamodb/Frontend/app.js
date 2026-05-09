async function addStudent() {
  const data = {
    StudentID: document.getElementById("StudentID").value,
    FullName: document.getElementById("FullName").value,
    Email: document.getElementById("Email").value,
    Course: document.getElementById("Course").value,
    City: document.getElementById("City").value
  };
  await fetch("/add-student", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  alert("Student Added Successfully");
  loadStudents();
}
async function loadStudents() {
  const res = await fetch("/students");
  const students = await res.json();
  let html = "<ul>";
  students.forEach(s => {
    html += `
      <li>
        ${s.StudentID} - ${s.FullName} - ${s.Course} - ${s.City}
      </li>
    `;
  });
  html += "</ul>";
  document.getElementById("students").innerHTML = html;
}
loadStudents();