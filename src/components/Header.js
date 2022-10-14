import React from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container-fluid">
                <div className="navbar-brand" href="/">Shu Yang</div>
                <div className="navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <span 
                                className={currentPage === 'About Me'? 'nav-link active' : 'nav-link'}
                                onClick={() => setCurrentPage('About Me')}
                            >    
                                About Me
                            </span>
                        </li>
                        <li className="nav-item">
                            <span 
                                className={currentPage === 'Portfolio'? 'nav-link active' : 'nav-link'}
                                onClick={() => setCurrentPage('Portfolio')}
                            >
                                Portfolio
                            </span>
                        </li>
                        {/* <li className="nav-item">
                            <span 
                                className={currentPage === 'Contact'? 'nav-link active' : 'nav-link'}
                                onClick={() => setCurrentPage('Contact')}    
                            >
                                Contact
                            </span>
                        </li> */}
                        <li className="nav-item">
                            <span 
                                className={currentPage === 'Resume'? 'nav-link active' : 'nav-link'}
                                onClick={() => setCurrentPage('Resume')}    
                            >
                                Resume
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header