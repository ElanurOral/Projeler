var ingilizce=["apple","bottle","computer","book","mouse","wall","pen","paper","table"];
var turkce=["elma","�i�e","bilgisayar","kitap","fare","duvar","kalem","ka��t","masa"];
function cevir()
{
		 var siraNo;
		 siraNo=ingilizce.indexOf(document.getElementById("arananKelime").value);
		 if(siraNo>=0)
	 {
	 	document.getElementById("turkce").innerText=turkce[siraNo];
 	 }
 }