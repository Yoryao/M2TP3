var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let indice = 0;

var delay = setInterval(() =>{
    if (indice < meses.length) {

        var myTbody = document.getElementById("tbody");
        var row = document.createElement("tr");
        
        var cell1 = document.createElement("td");
        var cell1Text = document.createTextNode(meses[indice]);
        cell1.appendChild(cell1Text);
        row.appendChild(cell1);
        
        var cell2 = document.createElement("td");
        var cell2Text = document.createTextNode(diasDelMes[indice]);
        cell2.appendChild(cell2Text);
        row.appendChild(cell2);
        myTbody.appendChild(row);
        
    indice++;
}

        else {

            clearInterval(delay);

        }
}, 1000);

