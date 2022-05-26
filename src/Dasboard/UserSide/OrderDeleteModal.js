import React from "react";

const OrderDeleteModal = ({ modal, setModal, refetch }) => {
  const { _id, name } = modal;
  const deleteOrder = (id) => {
    fetch(`https://protected-cliffs-14570.herokuapp.com/order/${id}`, {
      method: "delete",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setModal(null);
        console.log(result);
        refetch();
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete? {name}{" "}
          </h3>
          <button
            class="btn btn-xs m-1"
            onClick={() => {
              deleteOrder(_id);
            }}
          >
            Delete
          </button>
          <label for="my-modal-3" class="btn btn-xs">
            Cancel
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteModal;
