import request from '../utils/request'

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
    return await request.post('signin/',
    {
        user: user,
        pwd: pwd,
    }).then(res=>{
        let ret = false;
        console.log(res);
        ret = res === 'ok';
        console.log(res + ',ret:' + ret);
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