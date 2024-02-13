import React, { useContext, useEffect } from 'react'
import Routing from '../src/Router'
import { DataContext } from './Components/DataProvider/DataProvider';
import {Type} from "./Utility/action.type"
import {auth} from  "./Utility/firebase"



const App = () => {
    const [{user}, dispatch] = useContext(DataContext)

useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
   
    if(authUser){
      // console.log(authUser);
      dispatch({ 
        type: Type.SET_USER , 
        user: authUser
      })
    }else{
      dispatch({
        type : Type.SET_USER,
        user:  null,
      })
    }
  })
},[])

  return <Routing />;

}

export default App










// import "./App.css";
// import Header from "./Components/Header/Header";
// import Carousel from "./Components/Carousel/CarouselEffect";
// import Category from "./Components/Category/Category";
// import Product from "./Components/Product/Product"


// function App() {
//   return (
//     <div>
//       <Header />
//       <Carousel />
//       <Category />
//       <Product />
//     </div>
//   );
// }

// export default App;
