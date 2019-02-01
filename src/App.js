import React from 'react';

class App extends React.Component {
    state = {resoruce: "posts"}
    render() {
        return(
            <div>
                <div>
                    <button onClick={() => this.setState({resoruce: "posts"})}>Posts</button>
                    <button onClick={() => this.setState({resoruce: "todos"})}>Todos</button>
                </div>
                    {this.state.resoruce}
            </div>
        )
    }
}

export default App;