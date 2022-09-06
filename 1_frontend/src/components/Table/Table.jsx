import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/userActions";

const Table = () => {
  // state
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.getall);
  // side effects
  useEffect(() => {
    dispatch(getAllUsers());

    if (user) {
      setUserState(user.users);
    }
  }, [dispatch, userState]);

  return (
    <table>
      <thead>
        <tr>
          <th>Fullname</th>
          <th>Email</th>
          <th>Date</th>
          <th>Time</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      {loading && <td>Loading...</td>}
      <>{userState && userState.map((item) => <td>{item.fullname}</td>)}</>
    </table>
  );
};

export default Table;
