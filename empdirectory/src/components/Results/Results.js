import React from "react";
import "./Results.css";

function Results(props) {
    const { gender, location, name, phone, picture, email } = props.props;
    // console.log('gender==>>', gender)
    // console.log('location==>>', location)
    // console.log('name==>>', name)
    // console.log('phone==>>', phone)
    // console.log('picture==>>', picture)
    // console.log('props==>>', props.props);
    return (
        <li className="media mx-auto border border-warning" key={gender}>
            <img class="mr-3" src={picture.large} alt={name.first + " " + name.last} />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{name.first + " " + name.last}</h5>
                <p>{phone}</p>
                <p>{email}</p>
                <p>{location.city}, {location.state}, {location.country}</p>
            </div>
        </li>
    )
}

export default Results;