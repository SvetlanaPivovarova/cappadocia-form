import React from 'react';
import {AuthPage} from "./auth-page";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Register} from "./register/register";

function App() {
  return (
    <div className="App">
        <AuthPage />
      <Register />
    </div>
  );
}

export default App;
