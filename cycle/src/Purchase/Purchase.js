import React, {useRef} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebse.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  //const [data, setData] = useState();
  const [user] = useAuthState(auth);

  const { id } = useParams();
  const qtyRef = useRef();
  const adressRef = useRef();
  const phnRef = useRef();

  
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
  const validateNum =()=>{
    if (qtyRef.current.value < data.minorder) {qtyRef.current.value = data.minorder;}
  
   else if (qtyRef.current.value >data.available) {qtyRef.current.value = data.available;}
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
  let minqty = data.minorder;
  let maxorder =data.available;
   const quantityHandle = (e) =>{
      e.preventDefault();
     const qnty = qtyRef.current.value;
     const adress = adressRef.current.value;
     const phone =  phnRef.current.value;
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
      "total":total,
      "adress":adress,
      "phone":phone
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
        toast('your order placed ');
          e.target.reset();
        
        } else {
          toast('Sorry can not   placed order!!');
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
          <img src={data?.img} alt="pic" class="mask mask-squircle w-3/4 md:w-96 "  />
          <div className="p-5">
            <h1 class="text-5xl font-bold">{data?.name}</h1>
            <p class="text-justify">{data?.desc}</p>
            
            <div>
              <label class="label">
                  <span class="label-text text-3xl">Price:${data?.price}</span>
                </label>
                <label class="label">
                  <span class="label-text">Name:{user?.displayName}</span>
                </label>
                
                <label class="label">
                  <span class="label-text">Email:{user?.email}</span>
                </label>
              
                <label class="label">
                  <span class="label-text">Avaiable:{data?.available}</span>
                </label>
                <label class="label">
                  <span class="label-text">Minimum order:{data?.minorder}</span>
                </label>


           
                <div className="flex  align-items-center mt-2">
                  <form  onSubmit={quantityHandle}>
                  <div class=" flex align-items-center flex-col md:flex-row">
                <label class="label">
                  <span class="label-text">Quantity:</span>
                </label>
                <input
                min={minqty}
                max={maxorder}
                  ref={qtyRef}
                  type="number"
                  placeholder="qty"
                  onChange={()=>{validateNum()}}
                  class="input input-bordered w-full max-w-xs m-2"
                  
                />
                 
              </div>
              <div class=" flex align-items-center flex-col md:flex-row">
                <label class="label">
                  <span class="label-text">Adress:</span>
                </label>
                <input
               
                
                  ref={adressRef}
                  type="text"
                  placeholder="adress..."
                  class="input input-bordered w-full max-w-xs m-2"
                  
                />
               
              </div>
              <div class=" flex align-items-center flex-col md:flex-row">
                <label class="label">
                  <span class="label-text">Phone:</span>
                </label>
                <input
               
                
                  ref={phnRef}
                  type="text"
                  placeholder="phone..."
                  class="input input-bordered w-full max-w-xs m-2"
                  
                />
                 <input class="btn btn-md m-2" type="submit" value="Order" />
              </div>
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
