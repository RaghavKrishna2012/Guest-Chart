name_of_the_guest_array = [];

function submit ()
{

var name_1 = document.getElementById("name_of_the_Guest_1").value;
 var name_2 = document.getElementById("name_of_the_Guest_2").value;
    var name_3 = document.getElementById("name_of_the_Guest_3").value;
    var name_4 = document.getElementById("name_of_the_Guest_4").value;
    
    name_of_the_guest_array.push(name_1);
    name_of_the_guest_array.push(name_2);
    name_of_the_guest_array.push(name_3);
    name_of_the_guest_array.push(name_4);
    document.getElementById("display_name").innerHTML =name_of_the_guest_array; 
   
   document.getElementById("submit_button").style.diplay="none";
    document.getElementById("sort_button").style.diplay="inline-block";
    
}

function sorting ()
{
name_of_the_guest_array.sort();
    document.getElementById("display_name").innerHTML = name_of_guest_array;
}