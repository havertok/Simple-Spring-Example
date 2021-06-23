const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client'); 

//Done an older way.
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

	componentDidMount() { 
		client({method: 'GET', path: '/api/employees'}).done(response => {
			this.setState({employees: response.entity._embedded.employees});
		});
	}

	render() {
		return (
			<EmployeeList employees={this.state.employees}/>
		)
	}
}

//A react component done in an older way
class EmployeeList extends React.Component{
	render() {
		const employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>username</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}

class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.username}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)

//Tried out the "new" way with a state hook, but it doesn't render.'
/*function App(){
		const [employeesState, setEmpState] = useState();
		
		const employeeUrl = 'http://localhost:8080/sle/employees'
		useEffect(() => {
			loadEmployees()
		}, []);
		
		function loadEmployees(){
			setTimeout(() => {
      			fetch(empoyeeUrl)
      				.then(resp => setEmpState(resp.data))
      				.catch(err => console.log('ERROR' + err))
    		}, 2000);
		}
		
		
		return {
			<EmployeeList employees={eployeesState} />
		}
}*/