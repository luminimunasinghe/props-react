import PropTypes from 'prop-types'

function Student(props){
// this is the child class
    return(
<div className="student">
    <p>Name :{props.name}</p>
    <p>
        Age : {props.age}

    </p>
    <p>
    Student: {props.isStudent ? "Yes":"No"}</p>

</div>

    );
}

Student.prototype={

    name: PropTypes.string,
    age : PropTypes.number,
    isStudent:PropTypes.bool,


}

export default Student