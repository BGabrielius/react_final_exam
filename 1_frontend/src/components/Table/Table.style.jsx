import styled from "styled-components";

export const StyledTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 10px;
`;

export const StyledTable = styled.table`
  width: 100%;
  max-width: 700px;
  min-width: 605px;
  box-shadow: 0px 0px 5px 3px #e3e3ee;
  border-radius: 20px;
  border-collapse: collapse;

  /* border-radius: 15px; */

  thead {
    background-color: #e3e3ee;

    /* border-radius: 15px; */
  }
  th {
    padding: 7px;
    text-align: left;
    /* border-radius: 15px; */
    color: #5a5a5a;
  }
  tr {
    &:hover {
      background-color: #f4f4f4;
    }
  }
  td {
    padding: 5px 7px;
    text-align: left;
    color: gray;
  }
  .th-btn {
    text-align: center;
  }
  .td-btn {
    text-align: center;
  }
  .th-fullname {
    border-top-left-radius: 15px;
  }
  .th-delete {
    border-top-right-radius: 15px;
  }
`;
