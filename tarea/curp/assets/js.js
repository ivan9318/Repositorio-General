let apellidoPaterno = prompt('ingresa tu apellido paterno');
let apellidoMaterno = prompt('ingresa tu apellido materno');
let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento en formato 1992-12-01");
let genero = prompt('Eres H o M');
let estado = prompt('De que estado eres');
let apellidoPaterno2 = apellidoPaterno.slice(0, 2);
let apellidoMaterno2 = apellidoMaterno[0];
let fecha = fechaNacimiento.slice(1);
if (estado == 'Aguascalientes') {
    estado = 'AGS';
}
else if (estado == 'Baja California') {
    estado = 'BCN';
}
else if (estado == 'Chihuahua') {
    estado = 'CHI';
}
if (estado == 'Campeche') {
    estado = 'CAM';
}
else if (estado == 'Ciudad de México') {
    estado = 'DIF';
}
else if (estado == 'Coahuila') {
    estado = 'COA';
}
else if (estado == 'Colima') {
    estado = 'COL';
}
else if (estado == 'Durango') {
    estado = 'DUR';
}
else if (estado == 'Guanajuato') {
    estado = 'GTO';
}
else if (estado == 'Guerrero') {
    estado = 'GRO';
}
else if (estado == 'Hidalgo') {
    estado = 'HID';
}
else if (estado == 'Jalisco') {
    estado = 'JAL';
}
else if (estado == 'Michoacan') {
    estado = 'MIC';
}
else if (estado == 'Nayarit') {
    estado = 'NAY';
}
else if (estado == 'Nuevo León') {
    estado = 'NLE';
}
else if (estado == 'Oaxaca') {
    estado = 'OAX';
}
else if (estado == 'Puebla') {
    estado = 'PUE';
}
else if (estado == 'Querétaro') {
    estado = 'QRO';
}
else if (estado == 'Quintana Roo') {
    estado = 'ROO';
}
else if (estado == 'San Luis Potosí') {
    estado = 'SLP';
}
else if (estado == 'Sinaloa') {
    estado = 'SIN';
}
else if (estado == 'Sonora') {
    estado = 'SON';
}
else if (estado == 'Tabasco') {
    estado = 'TAB';
}
else if (estado == 'Tamaulipas') {
    estado = 'TAM';
}
else if (estado == 'Tlaxcala') {
    estado = 'TLX';
}
else if (estado == 'Veracruz ') {
    estado = 'COL';
}
else if (estado == 'Yucatán') {
    estado = 'YUC';
}
else if (estado == 'Zacatecas') {
    estado = 'ZAC';
}

var consonante=apellidoPaterno.split('');
for (let  i = 0; i < consonante.length(); i++) {
    
    if(consonante[i]=='a'||consonante[i]=='e'||consonante[i]=='i'||consonante[i]=='o'||consonante[i]!=='u'){
         consonante[i];
    }
}
alert(consonante);
/*
function.palabra(w){
    var regex=/[^aeiou]/gi;
    var vowels = w.replace(regex, "");
    var len=vowels.length;
    if (len>1)return w[0]+(vowels[0]==w[0]? vowels[1]:vowels[0]);
    else return w[0];

}   
const consonanteAPellidoP = function() {
    let aux = apellidoPaterno.split('');

    for (let i = 1; i < aux.length; i++) {
        if (!(aux[i] === 'A' || aux[i] === 'E' || aux[i] === 'I' || aux[i] === 'O' || aux[i] === 'U')) {
            return aux[i];
        }
    }

}
let vocal1= palabra(apellidoP);
alert(consonante[0]);

Aguascalientes	AGS	Aguascalientes
Baja California	BCN	Mexicali
Baja California Sur	BCS	La Paz
Campeche	CAM	San Francisco de Campeche
Chiapas	CHP	Tuxtla Gutiérrez
Chihuahua	CHI	Chihuahua
Ciudad de México	DIF	
Coahuila	COA	
Colima	COL	
Durango	DUR	
Guanajuato	GTO	
Guerrero	GRO	
Hidalgo	HGO	
Jalisco	JAL
México	MEX	
Michoacán	MIC	
Morelos	MOR	
Nayarit	NAY	
Nuevo León	
Oaxaca	OAX	
Puebla	PUE	
Querétaro	QRO	
Quintana Roo	ROO	
San Luis Potosí	SLP	
Sinaloa	SIN	
Sonora	SON	
Tabasco	TAB	
Tamaulipas	TAM	
Tlaxcala	TLX	
Veracruz	VER	
Yucatán	YUC	
Zacatecas	ZAC	

*/