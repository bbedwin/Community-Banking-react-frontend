import { createContext, useState } from "react";

const ProjectContext = createContext()
export default ProjectContext;

export const ProjectProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState()
    const [userInfo, setUserInfo] = useState()
    const [groups, setGroups] = useState([])

    const Logout = () => {
        setAuthToken()
        setUserInfo()
        localStorage.setItem('status', '0')
    }

    let values = {
        authToken,
        setAuthToken,
        userInfo,
        groups,
        setUserInfo,
        setGroups, 
        Logout
    }

    return (
        <ProjectContext.Provider value={values}>
            {children}
        </ProjectContext.Provider>
    )
}