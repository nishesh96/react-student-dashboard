import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';


const fakeData = { "110": { "name": "Sadhya", "class": 3, "rollNo": 110, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "111": { "name": "Anoop", "class": 3, "rollNo": 111, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "112": { "name": "Anish", "class": 3, "rollNo": 112, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "113": { "name": "Sagarvir", "class": 3, "rollNo": 113, "marks": { "s1": 55, "s2": 67, "s3": 77, "s4": 76 } }, "114": { "name": "Sadhan", "class": 3, "rollNo": 114, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "115": { "name": "Sacharu", "class": 3, "rollNo": 115, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "116": { "name": "Sachchit", "class": 3, "rollNo": 116, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "117": { "name": "Sahadev", "class": 3, "rollNo": 117, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "118": { "name": "Sadadin", "class": 3, "rollNo": 118, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "119": { "name": "Sadgun", "class": 3, "rollNo": 119, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "120": { "name": "Sadasyormi", "class": 3, "rollNo": 120, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "121": { "name": "Anoop", "class": 3, "rollNo": 121, "marks": { "s1": 55, "s2": 67, "s3": 77, "s4": 66 } }, "122": { "name": "Sagarvir", "class": 3, "rollNo": 122, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "123": { "name": "Sahaman", "class": 3, "rollNo": 123, "marks": { "s1": 55, "s2": 67, "s3": 77, "s4": 66 } }, "124": { "name": "Bakulesha", "class": 3, "rollNo": 124, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "125": { "name": "Sagramasinha", "class": 3, "rollNo": 125, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "126": { "name": "Sahadev", "class": 3, "rollNo": 126, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "127": { "name": "Sagarvir", "class": 3, "rollNo": 127, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "128": { "name": "Sadasyormi", "class": 3, "rollNo": 128, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "129": { "name": "Sadgun", "class": 3, "rollNo": 129, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "130": { "name": "Sadhya", "class": 3, "rollNo": 130, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "131": { "name": "Anoop", "class": 3, "rollNo": 131, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "132": { "name": "Anish", "class": 3, "rollNo": 132, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "133": { "name": "Sagarvir", "class": 3, "rollNo": 133, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "134": { "name": "Sadhan", "class": 3, "rollNo": 134, "marks": { "s1": 55, "s2": 67, "s3": 77 } } }

const getStudentData = (data) => {
    fetch('https://api.myjson.com/bins/1dlper').then(data => {
        if (data && data.length) {
            console.log("api hit -");
        }
        else
            data = fakeData;
       // console.log(data);
    }).catch(err => { console.log(err) });
    return data;
}
class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state={
            studentData : [],
            loading: true
        }
    }

    
    componentDidMount() {
        this.props.getUsers();
        const data = getStudentData();
        console.log("data--");
        console.log(data);
        if(data)
        this.setState({
            studentData: data,
            loading:false
        });
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        const { studentData , loading} = this.state;

        console.log(Object.keys(studentData));
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in to the University portal!</p>
               
               {!loading &&  <em>Loading student data...</em>}
               {studentData && Object.keys(studentData).map((student,index) => {
                   <p>{student.id}</p>
                console.log(student)
               })
    }
                {/* <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                } */}
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedDashboard = connect(mapState, actionCreators)(Dashboard);
export { connectedDashboard as Dashboard };