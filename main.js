var names = [

];

function submit() {
    var firstname = document.getElementById("input1").value;
    var secondname = document.getElementById("input2").value;
    var thirdname = document.getElementById("input3").value;
    var fourthname = document.getElementById("input4").value;
    var fifthname = document.getElementById("input5").value;
    names.push(firstname);
    names.push(secondname);
    names.push(thirdname);
    names.push(fourthname);
    names.push(fifthname);
    document.getElementById("display_names").innerHTML = names;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sorting() {
    names.sort();
    document.getElementById("display_names").innerHTML = names;
}