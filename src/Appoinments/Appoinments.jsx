import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

 

const Appoinments = () => {
    const data = useContext(AuthContext);
    return (
        <div>
            <h1>{data?.name}</h1>
        </div>
    );
};

export default Appoinments;