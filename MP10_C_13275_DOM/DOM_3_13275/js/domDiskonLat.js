var totalNode;
var infoNode;

function init() {
    totalNode = document.getElementById("totalBayar").firstChild;
    infoNode = document.getElementById("infoHemat").firstChild;
    hitungTotal();
}

function hitungTotal() {
    var harga = parseFloat(document.getElementById("harga").value);
    var diskon = parseFloat(document.getElementById("diskon").value);

    if (isNaN(diskon) || diskon < 0 || diskon > 100) {
        totalNode.data = "Diskon tidak valid!";
        totalNode.parentNode.style.color = "red";
        infoNode.data = "Anda hemat: Rp0";
    }
    else {
        var potongan = harga * (diskon / 100);
        var akhir = harga - potongan;

        totalNode.data = akhir;
        totalNode.parentNode.style.color = "green";
        infoNode.data = "Anda hemat: Rp" + potongan;
    }
}