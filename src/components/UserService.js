function IsLogin()
{
    return localStorage.getItem("user") != null;
}

function GetUser()
{
    return localStorage.getItem("user");
}

function Auth(user, pwd, remember)
{
    const token = "abcdef0123456";
    localStorage.setItem("token", token);
    localStorage.setItem("user", "wyt");
    return true;
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