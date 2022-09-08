import Form from "../../components/Form";
import Table from "../../components/Table/Table";
import { StyledMain, StyledWrapper } from "./AppointmentPage.style";

const AppointmentPage = () => {
  return (
    <StyledMain>
      <StyledWrapper>
        <Form />
        <Table />
      </StyledWrapper>
    </StyledMain>
  );
};

export default AppointmentPage;
