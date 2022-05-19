// import CCoffee from "./components/CCoffee";
import ContactForm from "./components/ContactForm";
import FCoffee from "./components/FCoffee";
// import Small from "./components/Small";
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import home from " ../src/components/Home";


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path= "/" element = Home />
     <Route path ="/contactform" element = {<ContactForm />}/>
     <Route path ="/coffees" element = {<FCoffee firstName='Todd' />}/>
     <Route path="*" element={<h1>404 Page Not Found</h1>}/>
     </Routes>
      {/* <CCoffee firstName='Todd' /> */}  
      {/* <Small /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
