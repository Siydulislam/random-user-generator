const refreshBtn = document.getElementById("refreshBtn");
refreshBtn.addEventListener("click", function(){
    location.reload();
})

const userName = document.getElementById("userName");
const userImg = document.getElementById("userImg");

fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        let userData = data.results[0];
        console.log(userData);
        const userName = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
        document.getElementById("userName").innerText = userName;

        const imgSrc = `<img src="${userData.picture.large}">`;
        //console.log(imgSrc);
        document.getElementById("userImg").innerHTML = imgSrc;

        const userCell = userData.cell;
        document.getElementById("userCell").innerText = userCell;

        const userEmail = userData.email;
        document.getElementById("userEmail").innerText = userEmail;

        const userAddress = `${userData.location.city}, ${userData.location.country}`;
        document.getElementById("userAddress").innerText = userAddress;
    })