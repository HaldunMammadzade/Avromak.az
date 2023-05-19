import React, {useEffect} from 'react';
import history from "../const/history";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Routes from "./Elements/Routes/Routes";

function App() {
    useEffect(() => {
        const unListen = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unListen();
        }
    }, []);
    return (
        <div>
            <Header/>
            <Routes/>
            <Footer/>
        </div>
    );
}
export default App
