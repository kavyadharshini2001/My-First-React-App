import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import {
  Popover,
  PopoverHeader,
  PopoverBody,
  Modal,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import UserContext, { UserProvider } from "../Context/UseContext";
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

function Studentlist() {
  const value = useContext(UserContext)
  console.log(value)
  const [studentList, setStudentList] = useState([]);
  const [deleteId, setDeleteID] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();

  const fetchStudentList = () => {
    axios
      .get("https://65773163197926adf62d9e6b.mockapi.io/Student")
      .then((res) => {
        setStudentList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchStudentList();
  }, []);
  const toggleDelete = (id) => {
    setDeleteID(id);
  };
  const toggleEdit = (data) => {
    setEditModal(!editModal);
    setEditData(data);
  };

  const deleteStudent = (id) => {
    console.log(id);
    axios
      .delete(`https://65773163197926adf62d9e6b.mockapi.io/Student/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Student Delete");
        fetchStudentList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(editData);
  const handleChange = (e) => {
    // console.log(e.target.name,e.target.value)
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  const handleUpdate = () => {
    console.log(editData);
    axios
      .put(
        `https://65773163197926adf62d9e6b.mockapi.io/Student/${editData.id}`,
        editData
      )
      .then((res) => {console.log(res)
        toast.success("updated successfully")
        setEditModal(!editModal)
        fetchStudentList()
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container w-80  mt-5">
      <h2>Student List {value}</h2>
      <div className="text-end">
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => navigate("/form")}
        >
          + Add Student
        </button>
      </div>
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
            <th scope="col">Action</th>
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
                    class="btn btn-sm btn-primary"
                    onClick={() => navigate(`/student/detail/${list.id}`)}
                  >
                    View
                  </button>
                  <button
                    class="btn btn-sm btn-warning"
                    onClick={() => toggleEdit(list)}
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-sm btn-danger"
                    id={`delete-std-${index}`}
                    onClick={() => toggleDelete(list.id)}
                  >
                    Delete
                  </button>
                </td>
                <Popover
                  target={`delete-std-${index}`}
                  isOpen={list.id === deleteId}
                  placement="top"
                >
                  <PopoverHeader>Confirmation</PopoverHeader>
                  <PopoverBody>
                    <div>Are you sure, want to delete?</div>
                    <div>
                      <button onClick={() => deleteStudent(list.id)}>
                        yes
                      </button>
                      <button onClick={() => setDeleteID("")}>no</button>
                    </div>
                  </PopoverBody>
                </Popover>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        isOpen={editModal}
        toggle={() => setEditModal(!editModal)}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => setEditModal(!editModal)}>
          Edit Student
        </ModalHeader>
        <modalBody>
          {" "}
          <div className="container ">
            <div className="row">
              <div className="col-6">
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  value={editData.firstName}
                  // onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-6">
                <label class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  value={editData.lastName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-6">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  value={editData.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-6">
                <label class="form-label">Password</label>
                {
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    value={editData.password}
                    onChange={(e) => handleChange(e)}
                  />
                }
              </div>
              <div className="col-6">
                <label class="form-label">Location</label>
                {
                  <Select
                    options={locationOption}
                    value={locationOption.filter(
                      (op) => op.value === editData.location
                    )}
                    onChange={(e) =>
                      setEditData({ ...editData, location: e.value })
                    }
                  />
                }
              </div>
              <div className="col-6">
                <label class="form-label">Hobbies</label>
                <Select
                  options={hobbyOption}
                  isMulti
                  value={hobbyOption.filter((op) => {
                    return editData?.hobby?.some((pt) => op.value === pt);
                  })}
                  onChange={(e) =>
                    setEditData({ ...editData, hobby: e.map((op) => op.value) })
                  }
                />
              </div>
            </div>
          </div>
        </modalBody>
        <ModalFooter>
          <div>
            <button onClick={() => setEditModal(!editModal)}>Cancel</button>
            <button onClick={() => handleUpdate()}>Update</button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Studentlist;
