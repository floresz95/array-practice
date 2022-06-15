async function getStudents() {
    const response = await fetch("http://127.0.0.1:3000/students")
    return await response.json()
}
async function init (){
    const students = await getStudents();
    document.body.innerHTML = getStudentListHTML(students)
}

function getStudentListHTML(students){
    console.log(students);
    const studentListHTMLs = students.map(studentComponent)
    console.log(studentListHTMLs);
    return studentListHTMLs.join("")

}


function studentComponent(student){
    return `
        <div class="student">
            <p>${student.name}</p>
            <p>${student.status}</p>
        </div>
    
    `
}

init();