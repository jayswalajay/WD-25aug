function lg()
{
    var em=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    if(em=='rajshree007@gmail.com' && pass=='rajshree007')
    {
        alert('You are Logged in Successfully')
        window.location='dashboard.html';

    }
    else 
    {

        alert('Your email and password are Incorect try again')
        window.location='index.html';
    }

}

// logout function here
function signout()
{
    if(confirm('Are you sure to Logout ?'))
    {
    alert('You are successfully logout')
    window.location='index.html';
    }
    else 
    {
        window.location='dashboard.html';
    }
}