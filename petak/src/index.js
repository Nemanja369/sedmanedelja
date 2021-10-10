import { getAllUsers} from "./service";

getAllUsers().then(res =>{
     let users = res.data.data
    console.log(users)
})