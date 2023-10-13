import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Dashboard = () => {

    const location = useLocation()

    return (

        <>
            <p>dashboard</p>

            <Link to={location.pathname + "/new"}>new report</Link>

        </>

    )

}

export default Dashboard