import styled from "styled-components";

export const StyledTable = styled.table`
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  border: 1px solid #333;
  border-collapse: collapse;

  margin-top: 3em;

  thead {
    background-color: #f4f4f4;
  }
  th {
    padding: 7px;
    text-align: left;
  }
  tr {
    &:hover {
      background-color: #f4f4f4;
    }
  }
  td {
    padding: 5px 7px;
    text-align: left;
  }
  .th-btn {
    text-align: center;
  }
  .td-btn {
    text-align: center;
  }
`;
