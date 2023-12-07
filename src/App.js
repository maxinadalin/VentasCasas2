import Error from "containers/errors/Error";
import Home from "containers/pages/Home";
import store from "store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
   <Router>
    <Routes>
      <Route path="*" element={<Error/>}/>

      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
   </Provider>
   
  );
}

export default App;
