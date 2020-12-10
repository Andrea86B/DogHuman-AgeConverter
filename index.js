document.getElementById("submitBtn").addEventListener('click', function(){
    var dogAge = document.getElementById("dogAgeInput").value;
    var humanAge = Math.round((Math.log(dogAge) * 16) + 31);
    document.getElementById("result").innerHTML = humanAge;
})