import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Service/ServiceCard";

 

const AllTreatments = () => {

    const services = useLoaderData();

    return (
        <div>
            <div className='p-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map((service, i) => <ServiceCard key={i} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllTreatments;