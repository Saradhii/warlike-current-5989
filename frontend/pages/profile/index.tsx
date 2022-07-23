import React, { useEffect, useState} from 'react'
import jwt_decode from "jwt-decode";
import styles from "./profile.module.css";
import axios, { AxiosResponse } from "axios";

type User = {
    first_name:string;
    last_name:string;
    _id:string;
    email:string;
};

var userid : any;
var accessToken :any ;
var refreshToken : any;
const Profile = () => {

   let [user,setUser] = useState<User[]>([]);
    useEffect(function() {
        accessToken = window.localStorage.accessToken;
        userid =  window.localStorage.userid;
        refreshToken = window.localStorage.refreshToken;
        // setAtoken(accessToken);
        console.log(userid);
        var decoded : any = jwt_decode(`${accessToken}`);
        console.log(decoded.first_name);
        setUser(decoded);
        // if(isTokenExpired(accessToken))
        // {
        //     axios.post(`http://localhost:8080/user/newtoken`, {headers: { "authentication": `${refreshToken}` }
        //     }).then((responce) => {
        //     const { data } = responce;
        //     localStorage.setItem("accessToken",data.accessToken);
        //     count++;
        //   })
        // }      
      // console.log(isTokenExpired(accessToken));
    },[]);
    // console.log(user);
    console.log(user);

    // function isTokenExpired(token :string) {
    //     const base64Url = token.split(".")[1];
    //     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    //     const jsonPayload = decodeURIComponent(
    //       atob(base64)
    //         .split("")
    //         .map(function (c) {
    //           return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    //         })
    //         .join("")
    //     );
    //     const { exp } = JSON.parse(jsonPayload);
    //     const expired = Date.now() >= exp * 1000
    //     return expired
    //   }
  return (
    <>
        <div className={styles.usermain} key={user._id}>
        <h2>My Account</h2>
        <hr></hr>
        <h5>MY BEAUTY PROFILE CLICK HERE</h5>
        <hr></hr>
        <h5>MY PRODUCT REVIEW CLICK HERE</h5>
        <hr></hr>
        <h5>ORDER HISTORY</h5>
        <hr></hr>
        <p>You haven't placed any orders yet.</p>
        <hr></hr>
        <h5>ACCOUNT DETAILS</h5>
        <hr></hr>
        <p>Name: {user.first_name}  </p> 
      </div>

    </>
  )
}

// export const getServerSideProps = async (accesstoken : any) => {

//   console.log(userid);

//   const data = await fetch(`http://localhost:8080/user/${userid}`,{
//     headers: { "authentication": `${token}` }}).then(
//         (x)=> x.json()
//     );

//     return{
//         props:{user:data},
//     };
// };



export default Profile