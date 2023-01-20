import React from 'react';

import { Link } from 'react-router-dom';

function Home(props) {

    return (

        <div> <nav className="navbar navbar-dark bg-info">
         <h2 className='text-center'>Online Assesment Portal</h2></nav>
        <div className='container'>

<br></br><br></br>
           <Link className='btn btn-dark mx-2' to='/instructor'>Instructor</Link><br /><br /><br></br>
         
            <Link className='btn btn-danger mx-2' to='/student'>Student</Link>

        </div>
        </div>

    );

}



export default Home;