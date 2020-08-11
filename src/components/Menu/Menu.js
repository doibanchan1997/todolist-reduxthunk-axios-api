import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

let menus = [
    {
        label: "Trang Chu",
        to: "/",
        exact: true
    },
    {
        label: "San Pham",
        to: "/product-list",
        exact: false
    },
    {
        label: "Vlog",
        to: "/vlog",
        exact: false
    }
]

let MenuLink = ({label, to, activeOnlyWhenExact}) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });
    return (
        <li className={match ? "active ass": ""}>
            <Link className="nav-link" to={to} > {label} </Link>
        </li>
    )
}

let showMenu = (menu) =>{ 
    let result = null
    if (menu.length > 0){
        result = menu.map((item, index)=> {
            return (
                <MenuLink
                    key = {index}
                    activeOnlyWhenExact = {item.exact}
                    to = {item.to}
                    label = {item.label}
                />
            )
        })
    }

    return result
}

export const Menu = (props) => {
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="/">React_Redux_API</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="/collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {showMenu(menus)}
          </ul>
          
        </div>
      </nav>
    )
}

export default Menu