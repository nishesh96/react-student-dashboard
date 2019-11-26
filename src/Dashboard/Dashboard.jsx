import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import { userActions } from '../_actions';
import { element } from 'prop-types';
import { Navbar } from '../_components/Navbar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        minWidth: 150,
    },
    content:{
        textAlign: "center"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        backgroundColor: red[400],
    },
}));

    


 const StudentGrid = ({ studentData ,search, sortByAlph, sortByMarks }) => {
    console.log('search');
    console.log(search);
    const classes = useStyles();
    console.log('SG', Object.keys(studentData));

    var len = search.length;
    var students = len = 0 ? Object.values(studentData) : Object.values(studentData).filter(student => (student["name"].toUpperCase().indexOf(search) > -1));
    
    // console.log('studentSearch', students);
        
    var studentInfo = students.map((student, index) => {
            var name = student["name"];  
            var rollNo = student["rollNo"]; 
            var marksObj = student["marks"]; 
            var totalMarks= 0;

            Object.values(marksObj).map( val => {     
                totalMarks += val;
            });
            // console.log(totalMarks);
 
            return <Grid key={rollNo} item xs={6} md={4}>
                            <Card className={classes.card}>
                                <CardHeader style={{"height":"100px"}}
                                    avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                            {name.charAt(0)}
                                    </Avatar>
                                    }
                                    // action={
                                    //   <IconButton aria-label="settings">
                                    //     <MoreVertIcon />
                                    //   </IconButton>
                                    // }
                                        title={<h3>{name}</h3>}
                                        subheader={<h5>Roll : {rollNo}</h5>}
                                ></CardHeader>
                    <CardContent className={classes.content}>
                        <div style={{"border":"1px solid red","borderRadius":"5%","width":"90%"}}>
                            <div className={classes.title} style={{ "padding": "5px", "backgroundColor": "red", "color": "black" }}>Total Marks</div>
                            <div><h4>{totalMarks + " "}</h4></div>
                        </div>
                    
                    </CardContent>

                            </Card>
                           
                    </Grid>
         });
     
    return (<div className={classes.root}>
        <Grid container spacing={2}>
            {studentInfo}
        </Grid>
    </div>
    )}


const fakeData = { "110": { "name": "Sadhya", "class": 3, "rollNo": 110, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "111": { "name": "Anoop", "class": 3, "rollNo": 111, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "112": { "name": "Anish", "class": 3, "rollNo": 112, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "113": { "name": "Sagarvir", "class": 3, "rollNo": 113, "marks": { "s1": 55, "s2": 67, "s3": 77, "s4": 76 } }, "114": { "name": "Sadhan", "class": 3, "rollNo": 114, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "115": { "name": "Sacharu", "class": 3, "rollNo": 115, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "116": { "name": "Sachchit", "class": 3, "rollNo": 116, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "117": { "name": "Sahadev", "class": 3, "rollNo": 117, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "118": { "name": "Sadadin", "class": 3, "rollNo": 118, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "119": { "name": "Sadgun", "class": 3, "rollNo": 119, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "120": { "name": "Sadasyormi", "class": 3, "rollNo": 120, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "121": { "name": "Anoop", "class": 3, "rollNo": 121, "marks": { "s1": 55, "s2": 67, "s3": 77, "s4": 66 } }, "122": { "name": "Sagarvir", "class": 3, "rollNo": 122, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "123": { "name": "Sahaman", "class": 3, "rollNo": 123, "marks": { "s1": 55, "s2": 67, "s3": 77, "s4": 66 } }, "124": { "name": "Bakulesha", "class": 3, "rollNo": 124, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "125": { "name": "Sagramasinha", "class": 3, "rollNo": 125, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "126": { "name": "Sahadev", "class": 3, "rollNo": 126, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "127": { "name": "Sagarvir", "class": 3, "rollNo": 127, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "128": { "name": "Sadasyormi", "class": 3, "rollNo": 128, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "129": { "name": "Sadgun", "class": 3, "rollNo": 129, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "130": { "name": "Sadhya", "class": 3, "rollNo": 130, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "131": { "name": "Anoop", "class": 3, "rollNo": 131, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "132": { "name": "Anish", "class": 3, "rollNo": 132, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "133": { "name": "Sagarvir", "class": 3, "rollNo": 133, "marks": { "s1": 55, "s2": 67, "s3": 77 } }, "134": { "name": "Sadhan", "class": 3, "rollNo": 134, "marks": { "s1": 55, "s2": 67, "s3": 77 } } };

class Dashboard extends React.Component {
 


    constructor(props){
        super(props);
        this.state={
            studentData : [],
            isLoaded: false,
            error: null,
            search:'',
            sortByAlph:false,
            sortByMarks:false
        }

        // this.onChange = this.onChange.bind(this);
    }
    onChange(search) {
        // Declare variables
        console.log(search);
        var input, filter, ul, li, a, i, txtValue;
        var filterSearch = search.toUpperCase();
        this.setState({
            search: filterSearch
        })
        console.log('filterSearch', this.state.search);
    }
    componentDidMount() {
        fetch("https://api.myjson.com/bins/1dlper")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                this.setState({
                    isLoaded: true,
                    studentData: result
                });
                },
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
  }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        const { studentData, isLoaded, search, sortByAlph, sortByMarks } = this.state;
        console.log('search',search);

        return <><Navbar onChange = {(search) => this.onChange(search)}/>
            <div className="col-md-11 col-md-offset-1">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in to the University portal!</p>
               
               {!isLoaded &&  <em>Loading student data...</em>}
                {isLoaded && <StudentGrid studentData={studentData} search={search} sortByAlph={sortByAlph} sortByMarks={sortByMarks}  ></StudentGrid>}

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
            </>
    }
}

function mapState(state) {
    const { users, authentication , studentData } = state;
    const { user } = authentication;
    return { user, users, studentData };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedDashboard = connect(mapState, actionCreators)(Dashboard);
export { connectedDashboard as Dashboard };