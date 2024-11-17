import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user,signout } = useContext(AuthContext);
    const handleLogOut = () => {
        signout();
    }
    return (
        <div className="bg-gray-400 text-black flex justify-between items-center px-6 py-4 ">
            <div className="font-semibold text-xl">Teeth Wizard</div>
            <div className="flex gap-2 items-center">
                <ul className="space-x-4">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/alltreatments'>All Treatment</NavLink>
                    <NavLink to='/appoinments'>My Appoinment</NavLink>
                    <NavLink to='/profile'>profile</NavLink>
                </ul>
                {
                    user ? <button onClick={handleLogOut} className="btn mx-3">logout</button> : <NavLink to='/login' className="btn mx-3">login</NavLink> 
                }
            </div>
        </div>
    );
};

export default Navbar;