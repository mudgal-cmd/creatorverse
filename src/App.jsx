import { BrowserRouter as Router } from "react-router-dom"

import { supabase } from "./client";

function App() {
  console.log(supabase);
  return (
    <Router>
      <div>
        CreatorVerse
      </div>
    </Router>
    
  )
}

export default App
