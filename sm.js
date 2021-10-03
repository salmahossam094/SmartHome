function room ()
{
    var x = document.getElementById("rooms").value;
    document.getElementById("demo").innerHTML=x;
    window.location.href = x+".html";
}