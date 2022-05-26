import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { toast } from "react-toastify";
import UserModal from "./UserModal";
const UserRow = ({ user, index, refetch, setModal }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://protected-cliffs-14570.herokuapp.com/user/admin/${email}`, {
      method: "put",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        refetch();
        if (data.modifiedCount > 0) {
          toast.success("User Role upadated Successfully!!!");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button class="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
        {role === "admin" && <p>Admin</p>}
      </td>
      <td>
        <label
          for="user-modal"
          class="btn btn-xs bg-red-500 text-white border-0"
          onClick={() => setModal(user)}
        >
          Remove
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
