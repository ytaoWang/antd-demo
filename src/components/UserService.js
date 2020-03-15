import axios from 'axios';

function IsLogin()
{
    return localStorage.getItem("user") != null;
}

function GetUser()
{
    return localStorage.getItem("user");
}

async function Auth(user, pwd, remember)
{
    const token = "abcdef0123456";
    return await axios.post('http://localhost:8080/signin/',
    {
        user: user,
        pwd: pwd,
    }).then(res=>{
        let ret = false;
        console.log(res);
        ret = res.data === 'ok';
        console.log(res.data + ',ret:' + ret);
        if(ret) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
        }
        return ret;
    });
}


function Logout()
{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
}

function GetToken()
{
    return localStorage.getItem("token");
}

export {IsLogin, Auth, Logout, GetToken, GetUser};