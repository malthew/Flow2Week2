import 'bootstrap/dist/css/bootstrap.css';
const AllUsers = "http://localhost:3333/api/users/";

document.getElementById("userPage_btn").addEventListener('click', function() {
    
    let h1content = document.querySelector("#h1content");
    let h3content = document.querySelector("#h3content");
    let content = document.querySelector("#content");
    let linksDiv = document.querySelector("#linksDiv");

    //Clear existing content
    h1content.innerHTML = "";
    h3content.innerHTML = "";
    content.innerHTML = "";
    linksDiv.innerHTML = "";
    
    afetch();
})

function afetch(){
    fetch(AllUsers)
    console.log("a fetch")
            .then(res => res.json())
            .then(data => {
                let allUserList = (data)
        console.log(allUserList)
        table1(allUserList)
    }
)
}
function table1 (list) {
    var headers = (Object.getOwnPropertyNames(list[0]));
    var headerString = "<tr>" +
            headers.map(function (a) {
                return "<th>" + a + "</th>"
            }).join("") +
            "</tr>";
    console.log(headerString);
    var htmlRows = "<tr>"
    list.forEach(e => {
        var temp = Object.values(e).map(function (a) {
            return "<td>" + a + "</td>";
        }).join("") + "</tr>";
        htmlRows += temp;
    })
    console.log(htmlRows);
    document.getElementById("allUserList").innerHTML = "<table class='table table-bordered table-hover table-sm'>" + headerString + htmlRows; 
}
function getUserByID () {
     
    id = document.getElementById('userID').value; 
    fetch(UserByID+id)
.then(res => res.json()) //in flow1, just do it
.then(data => {
// Inside this callback, and only here, the response data is available
   console.log("data",data); 
   
   let result = data.map(data => data = `JokeText: ${data.jokeText}<br> Type: ${data.type}<br> JokeID: ${data.id}`);
   document.getElementById('jokeByID').innerHTML = result ;
})}