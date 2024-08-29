import { useState } from 'react';
import MyContext from './myContext';

const MyState = ({children}) =>  {
    const name = "Kamal Nayan Upadhyay";
    const [loading, setLoading] = useState(false);
  return (
    <MyContext.Provider value={{
        loading,
        setLoading
    }}>
       {children}
    </MyContext.Provider>
  )
}

export default MyState