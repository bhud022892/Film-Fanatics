import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/style.scss'

export const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    let menu 

    if(showMenu) {
        menu = <div className="toggle-menu" onClick={() => setShowMenu(false)}>
                <ul className="toggle-nav-links" onClick={() => setShowMenu(false)}>
                    <Link className="toggle-nav-link" to="/" onClick={() => setShowMenu(false)}>Watch List</Link>
                    <Link className="toggle-nav-link" to="/watched" onClick={() => setShowMenu(false)}>Watched</Link>
                    <Link className="toggle-nav-btn-link" to="/add" onClick={() => setShowMenu(false)}>+ Add</Link>
                </ul>
        </div>
    }

    return (
        <nav>
            <div className="header-container">
                <div className="header-content">                  
                    <Link to="/" className="nav-logo"><span className="span1">Film </span><span className="span2">Fanatics</span></Link>

                    <div className="nav-menu">
                        <ul className="nav-links">
                            <Link className="nav-link" to="/">Watch List</Link>
                            <Link className="nav-link" to="/watched">Watched</Link>
                            <Link className="nav-btn-link btn" to="/add">+ Add</Link>
                        </ul>
                    </div>

                    {!showMenu ? (
                        <i 
                        className="fas fa-bars"
                        onClick={() => setShowMenu(true)}
                        ></i>
                    ) : (
                        <i 
                        className="fas fa-times"
                        onClick={() => setShowMenu(false)}
                        ></i>
                    )}

                    {menu}
                </div>
            </div>
        </nav>
    )
}
