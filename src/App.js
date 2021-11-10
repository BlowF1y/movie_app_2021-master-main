import Home from "./routes/Home"
import './App.css'
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Navigation from "./components/Navigator"
function App(){
    return (
    <HashRouter>
        <Navigation />
        <Route PATH='./' exact={true} component={Home}/>
        <Route PATH='./about' component={About}/>npm 
        {/* <Route path='/movie-detail' component={detail}/> */}
    </HashRouter>
    )
    
        
}
// { <Route path='/home'>
// <h1>Home</h1>    
// </Route>
// <Route path='/home/instroduction'>
// <h1>instroduction</h1>
// </Route>
// <Route path='/about'>
// <h1>about</h1>
// </Route> }
export default App;