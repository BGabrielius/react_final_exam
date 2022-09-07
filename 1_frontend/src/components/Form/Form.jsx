import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getAllUsers } from "../../redux/actions/userActions";

import {
  StyledFormWrapper,
  StyledForm,
  StyledInputCointainer,
} from "./Form.style";

const Form = () => {
  // state
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    date: "",
    time: "8:00",
  });
  const {
    loading,
    user: message,
    error,
  } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createUser(user));

    await dispatch(getAllUsers(1));
  };
  return (
    <StyledFormWrapper>
      <h1>Registration Form</h1>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputCointainer>
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            placeholder="John Smith"
            value={user.fullname}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, fullname: e.target.value }))
            }
          />
        </StyledInputCointainer>
        <StyledInputCointainer>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="John@gmail.com"
            value={user.email}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </StyledInputCointainer>
        <StyledInputCointainer>
          <label htmlFor="registrationDate">Registration date:</label>
          <input
            type="date"
            className="registration-date"
            value={user.date}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </StyledInputCointainer>
        <div className="time-input-wrapper">
          <label htmlFor="time">Time:</label>
          <select
            name="time"
            id="time"
            value={user.time}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, time: e.target.value }))
            }
          >
            <option value="8:00">8:00</option>
            <option value="8:30">8:30</option>
            <option value="9:00">9:00</option>
            <option value="9:30">9:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
          </select>
        </div>
        <div>
          <input type="submit" className="submit-btn" />
        </div>
        {loading && <p>Loading...</p>}
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Form;
