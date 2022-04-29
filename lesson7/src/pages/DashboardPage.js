import {Link} from 'react-router-dom';
import '../index.css'

export default function DashboardPage() {
    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='dashboard-links'>
                <Link className='link' to={'/albums'}>Albums</Link>
                <Link className='link' to={'/users'}>Users</Link>
            </div>
        </div>
    )
}