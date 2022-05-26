import React, { useState } from "react";
import { useQuery } from "react-query";
import useTools from "../../Hooks/useTools";
import Loading from "../../Shared/Loading";
import ItemTr from "./ItemTr";
import ManageProductDeleteModal from "./ManageProductDeleteModal";

const ManageProduct = () => {
  // const [tools ] = useTools();
  const [modal, setModal] = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("manageproduct", () =>
    fetch(`https://protected-cliffs-14570.herokuapp.com/tools`, {
      method: "get",
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   },
    }).then((res) => res.json())
  );
  if (isLoading) {
    console.log(tools);
    return <Loading />;
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <p className="text-3xl p-3">Manage product</p>
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Min Order</th>
              <th>Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((item, index) => (
              <ItemTr
                key={item._id}
                item={item}
                index={index}
                setModal={setModal}
              />
            ))}
          </tbody>
        </table>
        {modal && (
          <ManageProductDeleteModal
            modal={modal}
            setModal={setModal}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default ManageProduct;
