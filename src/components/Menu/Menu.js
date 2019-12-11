import React from 'react';
function Menu() {
      return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">

                  <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                    <a className="nav-link" href="/">Accuil <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/useState">UseState</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/useEffect">UseEffect</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/context">Context</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/useReduce">UseReduce</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/useCallback">UseCallBack</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/useMemo">UseMemo</a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="/tabs">Tabs</a>
                              </li>
                        </ul>
                  </div>
            </nav>
      )
}

export default Menu;