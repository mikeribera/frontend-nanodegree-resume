var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var arrNames = [];

    arrNames = finalName.split(" ");

    //tratando o primeiro nome para ter a primeira letra em caixa alta
    arrNames[0] = (arrNames[0].charAt(0).toUpperCase()) + arrNames[0].substring(1, arrNames[0].length).toLowerCase();

    //tratando o segundo nome para ser todo CAIXA ALTA
    arrNames[1] = arrNames[1].toUpperCase();

    //reunindo os nomes
    finalName = arrNames[0] + " " + arrNames[1];

    // Don't delete this line!
    return finalName;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
