import jwt_decode from "jwt-decode";
import { useContext } from "react";
import ProjectContext from "../context/MainContext";
import axiosClient from "../components/Axios";

const useRefreshToken = () => {
    const { setAuthToken, setUserInfo } = useContext(ProjectContext)

    const refresh = async () => {
        const RFT = localStorage.getItem("refreshToken")
        console.log(`RFT ${RFT}`)
        const response = await axiosClient.post('/token/refresh/', {
            "refresh": RFT
        }
        )

        let newAccessToken = JSON.stringify(response?.data).access

        setAuthToken(newAccessToken)

        const userInfo = jwt_decode(newAccessToken)

        setUserInfo(userInfo)

        console.log(`NEW ACCESS TOKEN IS ${newAccessToken}`)

        return newAccessToken
    }

    return refresh
}

export default useRefreshToken