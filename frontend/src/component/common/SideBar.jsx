import React from 'react'

const SideBar = () => {
    return (
        <div className='card shadow border-0'>
            <div className='card-body'>
                <h4>Sidebar</h4>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Articals</a></li>
                    <li>
                        <button className='btn btn-primary'>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar