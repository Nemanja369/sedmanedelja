import axios from "axios";

const url = 'http://couetus.herokuapp.com/api/forum/users'


export const getAllUsers = () => axios.get(`${url}`);

