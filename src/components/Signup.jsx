import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [dynamicInput, setDynamicInput] = useState([{ text: "", file: null }]);
  const [userType, setUserType] = useState("faculty");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [Userdata, setUserData] = useState({
    name: "",
    // department: "",
    // course: "",
    // semester: "",
    resTopic: "",
    insID: "",
    // institute: "",
    discription: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setUserData({
      ...Userdata,
      [e.target.name]: e.target.value,
    });
  }


  const addField = (e) => {
    e.preventDefault();
    const values = [...dynamicInput];
    values.push({ text: "", file: null });
    setDynamicInput(values);
  };

  const removeField = (e, index) => {
    const values = [...dynamicInput];
    values.splice(index, 1);
    setDynamicInput(values);
  };

  const handleInputChange = (index, e) => {
    const values = [...dynamicInput];
    if (e.target.type === "file") {
      values[index].file = e.target.files[0];
      setDynamicInput(values);
    } else {
      values[index].text = e.target.value;
      setDynamicInput(values);
    }
  };

  return (
    <form action="">
      <label htmlFor="name">
        Full Name:
        <input
          type="text"
          name="name"
          value={Userdata.name}
          id="name"
          onChange={handleChange}
        />
      </label>

      <p style={{ fontWeight: "bold" }}>Are you Faculty or Student ?</p>
      <label>
        <input
          type="radio"
          name="userType"
          value="faculty"
          checked={userType === "faculty"}
          onChange={() => setUserType("faculty")}
        />
        <p>Faculty</p>
      </label>

      <label>
        <input
          type="radio"
          name="userType"
          value="student"
          checked={userType === "student"}
          onChange={() => setUserType("student")}
        />
        <p>Student</p>
      </label>

      {userType === "student" ? (
        <>
          <label htmlFor="course">
            Course:
            <select
              name="course"
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="Not Selected">Not Selected</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.com(H)">B.com(H)</option>
              <option value="BA (JMC)">BA (JMC)</option>
              <option value="BA English(H)">BA English(H)</option>
              <option value="BA (Eco.)">BA (Eco.)</option>
              <option value="BA LLB(H)">BA LLB(H)</option>
              <option value="BBA LLB(H)">BBA LLB(H)</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MCA">MCA</option>
              <option value="MA (JMC)">BA (JMC)</option>
              <option value="LLM">LLM</option>
            </select>
          </label>

          <label htmlFor="semester">
            semeter:
            <select
              name="semester"
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="Not Selected">Not Selected</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </label>
        </>
      ) : (
        <label htmlFor="department">
          Department:
          <select
            name="department"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="Not Selected">Not Selected</option>
            <option value="VSLLS">VSLLS</option>
            <option value="VSIT">VSIT</option>
            <option value="VSJMC">VSJMC</option>
            <option value="VSBS">VSBS</option>
            <option value="VSE">VSE</option>
            <option value="VSES">VSES</option>
            <option value="Engineering">Engineering</option>
          </select>
        </label>
      )}

      <label htmlFor="instituteid">
        Institute Id:
        <input
          type="text"
          name="insID"
          id="instituteid"
          value={Userdata.insID}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="researchTopic">
        Research Topic:
        <input
          type="text"
          name="resTopic"
          id="researchTopic"
          value={Userdata.resTopic}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="discription">
        Discription:
        <textarea
          type="textarea"
          name="discription"
          rows={6}
          cols={50}
          id="discription"
          value={Userdata.discription}
          onChange={handleChange}
        />
      </label>

      {dynamicInput.map((input, index) => (
        <div key={index}>
          <label>
            {"Research Sub Topic " + (index + 1)}
            <input
              type="text"
              name="text"
              value={input.text}
              onChange={(e) => handleInputChange(index, e)}
            />
            <br />
            <input
              type="file"
              name="file"
              accept=".pdf"
              onChange={(e) => handleInputChange(index, e)}
            />

            {index > 0 ? (
              <button onClick={(e) => removeField(e, index)}>remove</button>
            ) : (
              <button
                style={{ display: "none" }}
                onClick={(e) => removeField(e, index)}
              >
                remove
              </button>
            )}
          </label>
        </div>
      ))}

      <button onClick={(e) => addField(e)}>add</button>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
