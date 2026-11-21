const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
let url = "https://robocode-json.artem4ikk02.workers.dev/sstasusho/sixseven/"
let userdetails = document.getElementById("user-details");

fetch(url + "users/" + id)
.then(async function(response){
    let userData = await response.json();
userdetails.innerHTML = `
   <h2>${userData.name}</h2>
   <h3>${userData.surname}</h3>
   <img src="${userData.photo_url}" alt="User Avatar">
   <p>Balance: ${userData.balance}</p>
`;

});