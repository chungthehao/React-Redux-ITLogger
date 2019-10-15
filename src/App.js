import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {
  // Tự động init materialize js khi mới chạy app
  useEffect(() => {
    M.AutoInit() // and now we should be able to use modals and all that stuff (có dùng js)
  })

  return (
    <div className="App">
      My App
    </div>
  );
}

export default App;
