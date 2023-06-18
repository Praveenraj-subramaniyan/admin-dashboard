import "./App.css";
import { useState } from "react";

function App() {
  const [swap, setswap] = useState(1);
  const [studentId, setStudentId] = useState(4);
  const [teacherId, setteacherId] = useState(4);
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", grade: "A" },
    { id: 2, name: "Jane Smith", grade: "B" },
    { id: 3, name: "Tom Williams", grade: "C" },
  ]);

  const [teachers, setTeachers] = useState([
    { id: 1, name: "Mr. Johnson", subject: "Math" },
    { id: 2, name: "Ms. Davis", subject: "English" },
    { id: 3, name: "Mr. Wilson", subject: "Science" },
  ]);

  const [newStudent, setNewStudent] = useState({ id: "", name: "", grade: "" });
  const [editStudentState, seteditStudentState] = useState({
    id: "",
    name: "",
    grade: "",
  });
  const [newTeacher, setNewTeacher] = useState({
    id: "",
    name: "",
    subject: "",
  });
  const [editTeacherState, seteditTeacherState] = useState({
    id: "",
    name: "",
    subject: "",
  });
  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleEditStudentChange = (e) => {
    const { name, value } = e.target;
    seteditStudentState((prevStudent) => ({ ...prevStudent, [name]: value }));
  };
  const addStudent = () => {
    if (newStudent.name === "" || newStudent.grade === "") {
    } else {
      const newStudentWithId = { ...newStudent, id: studentId };
      setStudents((prevStudents) => [...prevStudents, newStudentWithId]);
      setNewStudent({ id: "", name: "", grade: "" });
      setStudentId((prevStudentId) => prevStudentId + 1);
    }
  };
  const editStudentvalue = (id, name, grade) => {
    seteditStudentState({ id: id, name: name, grade: grade });
  };
  const editStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => {
        if (student.id === id) {
          return {
            ...student,
            name: editStudentState.name,
            grade: editStudentState.grade,
          };
        } else {
          return student;
        }
      })
    );
    seteditStudentState({ id: "", name: "", grade: "" });
  };

  const handleTeacherChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher((prevTeacher) => ({ ...prevTeacher, [name]: value }));
  };
  const handleEditTeacherChange = (e) => {
    const { name, value } = e.target;
    seteditTeacherState((prevTeacher) => ({ ...prevTeacher, [name]: value }));
  };

  const addTeacher = () => {
    if (newTeacher.name === "" || newTeacher.subject === "") {
    } else {
      const newTeacherWithId = { ...newTeacher, id: teacherId };
      setTeachers((prevTeachers) => [...prevTeachers, newTeacherWithId]);
      setNewTeacher({ id: "", name: "", subject: "" });
      setteacherId((prevteacherId) => prevteacherId + 1);
    }
  };

  const deleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };
  const deleteTeacher = (id) => {
    setTeachers((prevTeachers) =>
      prevTeachers.filter((teacher) => teacher.id !== id)
    );
  };
  const editTeachervalue = (id, name, subject) => {
    seteditTeacherState({ id: id, name: name, subject: subject });
  };
  const editTeacher = (id) => {
    setTeachers((prevTeachers) =>
      prevTeachers.map((teacher) => {
        if (teacher.id === id) {
          return {
            ...teacher,
            name: editTeacherState.name,
            subject: editTeacherState.subject,
          };
        } else {
          return teacher;
        }
      })
    );
  };
  return (
    <div>
      <div className="row">
        <div className="col-6 btndiv">
          <button
            className={`${
              swap === 1 ? "OnclickedButton" : "btn btn-primary"
            } commonswapbtn`}
            onClick={() => setswap(1)}
          >
            Student Management
          </button>
        </div>
        <div className="col-6 btndiv">
          <button
            className={`${
              swap === 2 ? "OnclickedButton" : "btn btn-primary"
            } commonswapbtn`}
            onClick={() => setswap(2)}
          >
            Teacher Management
          </button>
        </div>
      </div>
      {swap === 1 ? (
        <div>
          <div className="row">
            <div className="col-12 col-sm-5 mt-5 ms-3">
              <div>
                <h3>Add New Student</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={newStudent.name}
                  onChange={handleStudentChange}
                />
                <br /> <br />
                <input
                  type="text"
                  name="grade"
                  placeholder="Grade"
                  value={newStudent.grade}
                  onChange={handleStudentChange}
                />
                <br /> <br />
                <button className="btn btn-primary" onClick={addStudent}>
                  Add Student
                </button>
              </div>
            </div>
            <div className="col-12 col-sm-6 mt-5">
              <div className="offcanvas offcanvas-start" id="editStudentCanvas">
                <div className="offcanvas-header">
                  <h1 className="offcanvas-title">Edit student</h1>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={editStudentState.name}
                    onChange={handleEditStudentChange}
                  />
                  <br /> <br />
                  <input
                    type="text"
                    name="grade"
                    placeholder="Grade"
                    value={editStudentState.grade}
                    onChange={handleEditStudentChange}
                  />
                  <br /> <br />
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => editStudent(editStudentState.id)}
                    data-bs-dismiss="offcanvas"
                  >
                    Edit student
                  </button>
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.grade}</td>
                      <td>
                        <button
                          className="btn btn-primary px-4"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#editStudentCanvas"
                          onClick={() =>
                            editStudentvalue(
                              student.id,
                              student.name,
                              student.grade
                            )
                          }
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => deleteStudent(student.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col-12 col-sm-5 mt-5 ms-3">
              <h3>Add New Teacher</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newTeacher.name}
                onChange={handleTeacherChange}
              />
              <br /> <br />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={newTeacher.subject}
                onChange={handleTeacherChange}
              />
              <br /> <br />
              <button className="btn btn-primary" onClick={addTeacher}>
                Add Teacher
              </button>
            </div>
            <div className="col-12 col-sm-6 mt-5 ">
              <div className="offcanvas offcanvas-start" id="editTeacherCanvas">
                <div className="offcanvas-header">
                  <h1 className="offcanvas-title">Heading</h1>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={editTeacherState.name}
                    onChange={handleEditTeacherChange}
                  />
                  <br /> <br />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={editTeacherState.subject}
                    onChange={handleEditTeacherChange}
                  />
                  <br /> <br />
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="offcanvas"
                    onClick={() => editTeacher(editTeacherState.id)}
                  >
                    Edit Teacher
                  </button>
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher) => (
                    <tr key={teacher.id}>
                      <td>{teacher.id}</td>
                      <td>{teacher.name}</td>
                      <td>{teacher.subject}</td>
                      <td>
                        <button
                          className="btn btn-primary px-4"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#editTeacherCanvas"
                          onClick={() =>
                            editTeachervalue(
                              teacher.id,
                              teacher.name,
                              teacher.subject
                            )
                          }
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => deleteTeacher(teacher.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
