import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOneUser,
  getAllUsers,
  updateOneUser,
} from "../../redux/actions/userActions";
import Button from "../Button";

import { StyledTableWrapper, StyledTable } from "./Table.style";

const Table = () => {
  // state
  const [total, setTotal] = useState(null);
  const [page, setPage] = useState(1);
  const [userState, setUserState] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.getall);
  const { user: updateMessage } = useSelector((state) => state.update);
  const { user: deleteMessage } = useSelector((state) => state.delete);

  // side effects
  useEffect(() => {
    if (!mounted) {
      dispatch(getAllUsers(page));
      setMounted(true);
    }
    if (user) {
      setUserState(user.paginatedUsers);
      setTotal(user.total);
    }
  }, [user, total, page, mounted, message, dispatch]);

  // custom functions
  const handleUpdateUser = (e) => {
    const { userId } = e.target.dataset;

    const trToUpdate = e.target.parentNode.parentNode;

    const user = {
      fullname: trToUpdate.children[0].innerText,
      email: trToUpdate.children[1].innerText,
      date: trToUpdate.children[2].innerText,
      time: trToUpdate.children[3].innerText,
    };
    dispatch(updateOneUser(userId, user));

    setMessage(updateMessage);
  };

  const handleDeleteUser = async (e) => {
    const { userId } = e.target.dataset;

    await dispatch(deleteOneUser(userId));

    await dispatch(getAllUsers(page));

    setMessage(deleteMessage);
  };

  const handleChangePage = (item) => {
    setPage(item);
    dispatch(getAllUsers(item));
  };

  return (
    <StyledTableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th className="th-fullname">Fullname</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th className="th-btn">Update</th>
            <th className="th-btn th-delete">Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td>{error}</td>
            </tr>
          )}
          {userState &&
            userState.map((item) => (
              <tr key={item._id} data-id={item._id}>
                <td
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                >
                  {item.fullname}
                </td>
                <td
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                >
                  {item.email}
                </td>
                <td
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                >
                  {item.date}
                </td>
                <td
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                >
                  {item.time}
                </td>
                <td className="td-btn">
                  <Button
                    text="Update"
                    action={handleUpdateUser}
                    userId={item._id}
                  />
                </td>
                <td className="td-btn">
                  <Button
                    text="Delete"
                    action={handleDeleteUser}
                    userId={item._id}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>

      <>
        {!total ? (
          <p>loading...</p>
        ) : (
          <div>
            {Array.from(Array(Math.ceil(total / 10)).keys()).map((item) => (
              <Button
                key={item}
                text={item + 1}
                action={() => handleChangePage(item + 1)}
              />
            ))}
          </div>
        )}
      </>

      {message && <p>{message}</p>}
    </StyledTableWrapper>
  );
};

export default Table;
