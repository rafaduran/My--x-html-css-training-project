table = document.getElementById("table");

for(i = 20; i > 0 ; i--){
    table.insertRow(0);
    table.rows[0].insertCell(0).innerHTML = i;
    table.rows[0].insertCell(1).innerHTML = i * 5;
}
//this.insertRow(0);
