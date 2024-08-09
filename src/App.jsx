import { BrowserRouter as Router } from "react-router-dom"
import { CardComponent } from "./components/CardComponent";
import { supabase } from "./client";

function App() {
  
  console.log(supabase);
  
  return (
    <Router>
        <CardComponent />
    </Router>
    
  )
}

export default App
