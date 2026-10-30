function fn_ValForm(){
    var sMsg = " ";
    var sInfo = " ";
    var sPilihan = " ";
    var sUmur = document.getElementById("umur").value;
    var cekEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

            if(document.getElementById("nama").value == "") {
                sMsg += "\n* Anda belum mengisikan nama";

            }
            if(document.getElementById("email").value == "") {
                sMsg += "\n* Anda belum mengisikan email";
                
            }else if(!cekEmail.test(document.getElementById(email).value)){
                sMsg += "\n * Format email tidak valid";
            }


            if(sUmur == "") {
                sMsg += "\n* Anda belum mengisikan umur";

            }else if(isNaN (sUmur)){
                sMsg += "\n* Umur harus berupa angka";
            }else{
                var iUmur = parseInt(sUmur);
                if (iUmur > 70) {
                    sMsg += "\n* umur harus berada di antara 7 sampai 70 tahum";
                }else if(iUmur >=7){
                    if (iUmur > 17){
                        sInfo = "Anggota umum";

                    }else{
                        sInfo = "anggota pelajar";
                    }
                } else {
                    sMsg += "\n* umur harus di antara 7 sampai 70 tahun";

                }
            }

            if(document.getElementById("kategori").value == "") {
                sMsg += "\n* Anda belum mengisikan koleksi favorit";

            }

            if(sMsg != "") {
                alert("Peringatan: \n" + sMsg);
                return false;
            }  
            switch (document.getElementById("kategori").value) {
                case "F":
                    sPilihan = "Fiksi";
                    break;
                case "N":
                    sPilihan = "Non-Fiksi";
                    break;
                case "J":
                    sPilihan = "Jurnal Ilmiah";
                    break;
            }

            alert("Terima kasih " + document.getElementById("nama").value + " ! Anda Terdaftar di koleksi" + sPilihan + " ("+ sInfo + ").");
            return true;
}