import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const CourseSection = () => {
    const {user} = useContext(UserContext);
    return (
        <>
            {user && <h1>{user.email}</h1>}
        </>
    );
}

export default CourseSection;