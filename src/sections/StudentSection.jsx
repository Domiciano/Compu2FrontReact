import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const StudentSection = () => {

    const {user} = useContext(UserContext);

    return (
        <h1>Bienvenido {user.email}</h1>
    );
}
export default StudentSection;