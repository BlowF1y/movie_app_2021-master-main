import Home from "./routes/Home"
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Navigation from "./components/Navigator"
function App(){
    return (
    <BrowserRouter>
        <Navigation />
        <Route PATH='./' exact={true} component={Home}/>
        <Route PATH='./about' component={About}/>npm 
        {/* <Route path='/movie-detail' component={detail}/> */}
    </BrowserRouter>
    )    
}

export default App;