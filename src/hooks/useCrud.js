import axios from "axios";
import { useState } from "react";



const useCrud = (path) => {
    const [response, setResponse] = useState();

    const BASE_URL = "https://users-crud.academlo.tech";

    //code to read the API with GET
    const getData = () => {
  
        const url = `${BASE_URL}${path}`;
        axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => console.error(err));
            
    };

    //code to create the API with POST
    const postData = (data) => {
        const url = `${BASE_URL}${path}`;
        axios
        .post(url, data)
        .then((res) => {
            console.log(res.data)
            setResponse([...response, res.data])})
        .catch((err) => console.error(err));
    };

    //code to delete the API with DELETE
    const deleteData = (id) => {
        const url = `${BASE_URL}${path}${id}/`;
        axios
        .delete(url)
        .then((res) => {
            console.log(res.data)
            setResponse(response.filter((user) => user.id !== id))})
        .catch((err) => console.error(err));
    };

    //code to update the API with PUT
    const updateData = (id, data) => {
        const url = `${BASE_URL}${path}${id}/`;//If necesarry because of an error, change the path
        axios
        .patch(url, data)
        .then((res) => {
            console.log(res.data)
            setResponse(response.map((user) => (user.id === id ? res.data : user)))})
        .catch((err) => console.error(err));
    };
    

    return  [response, getData, postData, deleteData, updateData] ;
};

export default useCrud;
