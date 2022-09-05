import {
  StyledFormWrapper,
  StyledForm,
  StyledInputCointainer,
} from "./Form.style";

const Form = () => {
  return (
    <StyledFormWrapper>
      <h1>Registration Form</h1>
      <StyledForm>
        <StyledInputCointainer>
          <label htmlFor="fullname">Fullname:</label>
          <input type="text" placeholder="John Smith" />
        </StyledInputCointainer>
        <StyledInputCointainer>
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder="John@gmail.com" />
        </StyledInputCointainer>
        <StyledInputCointainer>
          <label htmlFor="registrationDate">Registration date:</label>
          <input type="date" className="registration-date" />
        </StyledInputCointainer>
        <div className="time-input-wrapper">
          <label htmlFor="time">Time:</label>
          <select name="time" id="time">
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
        <p>Work hours are 8:00 AM to 5:00 PM</p>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Form;
