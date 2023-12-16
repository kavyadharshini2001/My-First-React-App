import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const locationOption = [
  { label: "Chennai", value: "Chennai" },
  { label: "Madurai", value: "Madurai" },
  { label: "Bangalore", value: "Bangalore" },
  { label: "Coimbatore", value: "Coimbatore" },
];
const hobbyOption = [
  { label: "Drawing", value: "Drawing" },
  { label: "Reading", value: "Reading" },
  { label: "Music", value: "Music" },
  { label: "internet-surfing", value: "internet-surfingt" },
];

function Form() {
  const navigate= useNavigate()
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    hobby: [],
  });
  const [studentList, setStudentList] = useState([]);
  const handleChange = (e) => {
    // console.log(e.target.name,e.target.value)
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (newStudent.firstName === "") {
      return toast.error("firstName required");
    }
    if (newStudent.firstName.length < 3) {
      return toast.error("firstName should not be less than three letters");
    }
    if (newStudent.lastName === "") {
      return toast.error("LastName required");
    }
    if (newStudent.email === "") {
      return toast.error("Email required");
    }
    if (newStudent.password === "") {
      return toast.error("password required");
    }
    toast.success("Form Submitted");
    console.log(newStudent);
    axios
      .post("https://65773163197926adf62d9e6b.mockapi.io/Student", newStudent)
      .then((res) => {
        console.log(res);
        toast.success("Created Successfully")
      })
      .catch((err) => console.log(err));
    setStudentList([...studentList, newStudent]);
    setNewStudent({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      location: "",
      hobby: [],
    });
  };
  const deleteStudent = (indx) => {
    studentList.splice(indx, 1);
    setStudentList([...studentList]);
    toast.success("Removed Successfully");
    navigate("/studentlist")
  };

  return (
    <>
      <div className="container w-50 m-auto ">
        <h3>Create Student</h3>

        <div className="row">
          <div className="col-6">
            <label class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              name="firstName"
              value={newStudent.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              name="lastName"
              value={newStudent.lastName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={newStudent.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              value={newStudent.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Location</label>
            <Select
              options={locationOption}
              value={locationOption.filter(
                (op) => op.value === newStudent.location
              )}
              onChange={(e) =>
                setNewStudent({ ...newStudent, location: e.value })
              }
            />
          </div>
          <div className="col-6">
            <label class="form-label">Hobbies</label>
            <Select
              options={hobbyOption}
              isMulti
              value={hobbyOption.filter((op) => {
                return newStudent.hobby.some((pt) => op.value === pt);
              })}
              onChange={(e) =>
                setNewStudent({ ...newStudent, hobby: e.map((op) => op.value) })
              }
            />
          </div>
        </div>
        <div className="text-end mt-5">
          <button
            className="btn btn-sm btn-outline-success"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="container w-75 m-auto mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Location</th>
              <th scope="col">Hobbies</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((list, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{list.firstName}</td>
                  <td>{list.lastName}</td>
                  <td>{list.email}</td>
                  <td>{list.password}</td>
                  <td>{list.location}</td>
                  <td>{list.hobby.join()}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger rounded-pill"
                      onClick={() => deleteStudent(index)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Form;
