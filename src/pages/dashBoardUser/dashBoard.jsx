import DashBoardMobile from "./Mobile/DashBoardMobile";
import DashBoardUser from "./Desktop/DashBoardUser";
import { useMediaQuery } from "react-responsive";

export default function DashBoard(){
    const isMobile = useMediaQuery({maxWidth: 767});
    
    return(
        <>
            {isMobile ? <DashBoardMobile /> : <DashBoardUser />}
        </>
    )
}