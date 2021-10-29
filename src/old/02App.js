import React, {Component} from "react";

class App extends React.Component {
    state = {
        count : 0,
    };

    add = () => {
        this.setState(current => ({count: this.state.count +1}))
        console.log('add');
    };

    Minus = () => {
        this.setState(current => ({count: this.state.count -1}))
        console.log('Minus')
    }


    render() {
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.Minus}>Minus</button>
            </div>
        )
    }
}

// export default App;