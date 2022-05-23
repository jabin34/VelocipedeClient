import React, {useRef} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../firebse.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  //const [data, setData] = useState();
  const [user] = useAuthState(auth);

  const { id } = useParams();
  const qtyRef = useRef();
const {data,isLoading, refetch} = useQuery("users", () =>
    fetch(`http://localhost:4000/tools/${id}`, {
      method: "get",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    }).then((res) => res.json())
  );
  if (isLoading) {
    console.log(data);
    return <Loading />;
  }

  // useEffect(()=>{
  //   const url = `http://localhost:4000/tools/${id}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((item) => {
  //       setData(item);
  //       console.log(item);
  //     });
  // },[id]);
  
   const quantityHandle = (e) =>{
      e.preventDefault();
     const qnty = qtyRef.current.value;
     let total = qnty*data?.price;
     let availableProduct = data?.available-qnty;
     if(qnty>data?.available){
       alert('quantity is greater than available');
       return;
     }
     if(qnty<data?.minorder){
      alert(`you have to order min ${data?.minorder}`);
      return;
    }
     console.log(qnty);
     const orderDetails = {
      user:user.displayName,
      email:user.email,
      "name":data?.name,
      "desc":data?.desc,
      "img":data?.img,
      "qnty":qnty,
      "total":total
    };
    fetch("http://localhost:4000/order", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
         alert('added')
          e.target.reset();
        
        } else {
        alert('failed');
        }
      });

      fetch(`http://localhost:4000/tools/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({availableProduct}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data updated');
      });

   refetch();
    console.log(orderDetails);
    
   };
    
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={data?.img} alt="pic" />
          <div>
            <h1 class="text-5xl font-bold">{data?.name}</h1>
            <p class="py-6">{data?.desc}</p>
            <p class="py-6">Avaiable:{data?.available}</p>
            <p class="py-6">Minimum order:{data?.minorder}</p>
            <div>
             
                <label class="label">
                  <span class="label-text">Name:</span>
                </label>
                <input disabled
                  type="text" value={user?.displayName}
                  class="input input-bordered input-md w-full max-w-xs text-black"
                />
                <label class="label">
                  <span class="label-text">Email:</span>
                </label>
                <input
                  type="text" disabled value={user?.email}
                  class="input input-bordered input-md w-full max-w-xs text-black"
                />
                <div className="flex align-items-center mt-2">
                  <form  onSubmit={quantityHandle}>
                  <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Task Name</span>
                </label>
                <input
                  ref={qtyRef}
                  type="number"
                  placeholder="qty"
                  class="input input-bordered w-full max-w-xs"
                  
                />
              </div>
              <input class="btn btn-md " type="submit" value="Proceed" />
                 </form>
                 
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
