var ingilizce=["apple","bottle","computer","book","mouse","wall","pen","paper","table"];
var turkce=["elma","þiþe","bilgisayar","kitap","fare","duvar","kalem","kaðýt","masa"];
function cevir()
{
		 var siraNo;
		 siraNo=ingilizce.indexOf(document.getElementById("arananKelime").value);
		 if(siraNo>=0)
	 {
	 	document.getElementById("turkce").innerText=turkce[siraNo];
 	 }
 }