//Should tell the server to use React
var React = require('react');
const ReactDOM = require('react-dom');
var client = require('./client');

//createClass is an alternative to the class extends syntax, here we need no constructor, but do need to get the initial state
var App = React.createClass({
    getInitialState: function () {
        return ({employees: []});
    },
    componentDidMount: function () { //We shouldn't be calling in the class like this, but it's this is a simple example on purpose
        client({method: 'GET', path: '/sle/employees'}).done(response => {
            this.setState({employees: response.entity._embedded.employees});
        });
    },
    render: function () {
        return (
            <EmployeeList employees={this.state.employees}/>
        )
    }
})

//The above render: function returns this class.  Recall _links is part of the built-in meta data given by Spring
var EmployeeList = React.createClass({
    render: function () {
        var employees = this.props.employees.map(employee =>
            <Employee key={employee._links.self.href} employee={employee}/>
        );
        return (
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                {employees}
            </table>
        )
    }
})

//the {employees} is defined here, standard React stuff though the syntax is different/old
var Employee = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.username}</td>
            </tr>
        )
    }
})

//Finally, we render the page
React.render(
    <App />,
    document.getElementById('react')
)