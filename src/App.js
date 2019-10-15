import React, { Fragment, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'

const App = () => {
  // Tự động init materialize js khi mới chạy app
  useEffect(() => {
    M.AutoInit() // and now we should be able to use modals and all that stuff (có dùng js)
  })

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
