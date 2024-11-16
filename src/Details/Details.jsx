import { useLoaderData } from "react-router-dom";
import Modal from "../Components/Modal";

 

const Details = () => {
    const {cost, treatment, description, image} = useLoaderData();
    
    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            <div className="card bg-base-100 image-full  shadow-xl">
                <figure>
                  <img
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{treatment}</h2>
                  <p>{description}</p>
                  <div className="card-actions justify-end">
                    <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Book Appoinment</button>
                  </div>
                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Details;