import { getAllusers } from "../db/supabase";

export const CardComponent = () => {
  // console.log(getAllusers());

  getAllusers().then(res => {

    const{data: creators, error} = res; // destructing the data and error from the database response.

    if(!error) console.log(creators);
      
    else console.log(error.message); // to display the error
    
    

  }).catch(err => console.log(err));

  return (
    <div>
      CardComponent
    </div>
  );

}

