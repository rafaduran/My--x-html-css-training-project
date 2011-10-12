var array = document.getElementsByTagName('span');
var hour = new Date().getHours();
var txt = "";

if(hour < 12){
    txt = "Good Morning";
} else if(hour < 18) {
    txt = "Good Afternoon";
} else {
    txt = "Good Evening";
}

for(i = 0; i < array.length; i++) {
    array[i].innerHTML = txt;
}
document.title = txt;
