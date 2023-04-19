import { createContext, useState } from "react";

const ProjectContext = createContext()
export default ProjectContext;

export const ProjectProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState()
    const [userInfo, setUserInfo] = useState()

    let values = {
        authToken,
        setAuthToken,
        userInfo,
        setUserInfo
    }

    return (
        <ProjectContext.Provider value={values}>
            {children}
        </ProjectContext.Provider>
    )
}