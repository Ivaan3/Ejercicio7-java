const f_hoy = new Date();

const f_nacimiento = new Date(1991, 8, 26);
console.log(f_nacimiento)

const comparacion = f_hoy.getTime() > f_nacimiento.getTime();
console.log(comparacion)

const dia_nacimiento = f_nacimiento.getDate();
console.log(dia_nacimiento)

const mes_nacimiento = f_nacimiento.getMonth() + 1;
console.log(mes_nacimiento)

const anyo_nacimiento = f_nacimiento.getFullYear();
console.log(anyo_nacimiento)
