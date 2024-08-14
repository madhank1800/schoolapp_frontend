import { createContext ,useState} from "react";

export const MyContext = createContext("");
const MyContexProvider = ({children}) => {
    const [globalState, setGlobalState] = useState({
        token: "",
        role:""
    });

  return (
    <div>
      <MyContext.Provider value={{ globalState, setGlobalState }}>
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default MyContexProvider;