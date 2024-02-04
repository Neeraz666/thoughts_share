import axios from "axios";
import { useEffect, useState } from "react";
import { Postform } from "./postform";

export const Home = (props) => {

    const [data, setData] = useState([]);

    /*
        The data from the backend is fetched using the get method by the help of axios and is saved to data by using state hook.
    */

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/home/listcontents/');
                setData(response.data.results);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchdata();

    }, []);



    return (
        <>
            {props.isAuth ? (
                <>
                    <Postform />
                    <div style={{ marginLeft: '450px', marginRight: '200px', padding: '30px 16px', height: '1000px' }}>

                        {/* 
                    The conditional is used here, at first it checks if the data has some length, if it has them data is mapped using an arrow function with item as the parameter. Item can be used inside the map function to get the data from the data (The data got from the get request.)
                */}

                        {data.length ? (
                            <div>
                                {data.map(item => (
                                    // <h1 key={item.id}>{item.title}</h1>
                                    <div className="userprofile">
                                        <div className="userinfo">
                                            <img src={item.user.profilephoto} alt="User Image" className="userimage" />
                                            <div class="user-name">
                                                <span class="fullname"> {item.user.firstname} {item.user.lastname} </span>
                                                <span class="username"> {item.user.email} </span>
                                            </div>
                                        </div>
                                        <div className="postinfo">
                                            <h2 className="posttitle">{item.title}</h2>
                                            <p className="postcontent"> {item.thoughts} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <h2>Loading Please Wait ..... </h2>
                        )}
                    </div>
                </>
            ) : (
                <p style={{marginLeft: '400px'}}> LOGIN TO ENTER </p>
            )}
        </>
    );
};