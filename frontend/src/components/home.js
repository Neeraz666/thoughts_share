import axios from "axios";
import { useEffect, useState } from "react";
import { Postform } from "./postform";

export const Home = () => {

    const [data, setData] = useState([]);

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
            <Postform />
            <div style={{ marginLeft: '650px', padding: '1px 16px', height: '1000px' }}>
                {data.length ? (
                    <div>
                        {data.map(item => (
                            <h1 key={item.id}>{item.title}</h1>
                        ))}
                    </div>
                ) : (
                    <h2>Loading Please Wait ..... </h2>
                )}
            </div>
        </>
    );
};