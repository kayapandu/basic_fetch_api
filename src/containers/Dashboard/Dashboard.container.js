import React from 'react';
import {Table, Col} from 'react-bootstrap';

const API_Todos = 'https://jsonplaceholder.typicode.com/todos';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        this.fetchTodos();
    }
    
    fetchTodos = () => {
        fetch(API_Todos)
            .then(response => response.json())
            .then(data => this.setState({todos: data}))
    }

    render(){
        const {todos} = this.state;
        console.log(todos);
        return(
            <div>
                <h1>This is Dashboard</h1>
                <Col xs={12} md={12}>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>User ID</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map(todo => (
                                <tr key={todo.id} style={{backgroundColor : todo.completed ? '#ff0fff' : '#ffffff'}}>
                                    <th>{todo.id}</th>
                                    <th>{todo.userId}</th>
                                    <th>{todo.title}</th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </div>
        )
    }
}

export default Dashboard;