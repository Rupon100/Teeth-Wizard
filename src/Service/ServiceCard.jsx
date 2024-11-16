import { NavLink } from "react-router-dom";

 

const ServiceCard = ({ service }) => {

    const {id, cost, description,image,treatment} = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                 {treatment}
                <div className="badge badge-secondary">${cost}</div>
              </h2>
              <p title={description}>{description.slice(0,100)}...{}</p>
              <div className="card-actions justify-end">
                <NavLink to={`/details/${id}`} className="btn">Checkout More</NavLink>
              </div>
            </div>
       </div>
    );
};

export default ServiceCard;