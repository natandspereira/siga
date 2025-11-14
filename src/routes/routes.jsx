import {Routes, Route} from 'react-router-dom';
import App from '../App';
import DashBoard from '../pages/dashBoardUser/dashBoard';
import RegisterTask from '../pages/registerTask/Desktop/RegisterTask';

export default function AppRoutes(){
    return(
        <>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/user' element={<DashBoard />}/>
                <Route path='/criar' element={<RegisterTask />}/>
                
            </Routes>
        </>
    )
}