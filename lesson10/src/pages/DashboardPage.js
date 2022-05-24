import {Link} from "react-router-dom";

export default function DashboardPage(){
    return(
        <div>
            <h1>Dashboard</h1>
            <div>
                <Link to={'/users'}>Users</Link>
            </div>
        </div>
    )
}