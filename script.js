// membuat perulangan untuk tanggal agar tidak capek membuat sampai 31 kali, Kita membuat 2 kali perulangan,
// perulangan yang pertama untuk menghasilkan 01 sampai 09, perulangan kedua menghasilkan 10 sampai 31
let daftarTanggal = '';
for(i = 1; i<32; i++){
	if(i < 10 ){
		daftarTanggal += `<option value="0${i}">0${i}</option>`;
	}else{
		daftarTanggal += `<option value="${i}">${i}</option>`;
	}
};
// lalu hasilnya akan di letakkan ke select dengan id = "tanggal"
	let hasil1 = daftarTanggal;
	$('#tanggal').append(hasil1);

// -------------------------------------------------------------------------------------------------------


// buat array dengan nama2 bulan, agar mudah membuat option nya di select dengan id ="bulan"
let bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'];
let daftarBulan = '';
bulan.forEach(function(bulan){
	daftarBulan += `<option value="${bulan}">${bulan}</option>`;
});

	let hasil2 = daftarBulan;
	$('#bulan').append(hasil2);

// -------------------------------------------------------------------------------------------------------

// membuat daftar tahun dengan array, lalu hasilnya akan di letakkan pada select dengan id ="tahun"
let tahun = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];

let daftarTahun = '';
tahun.forEach(function(tahun){
	daftarTahun += `<option value="${tahun}">${tahun}</option>`;
});

	let hasilTahun = daftarTahun;
	$('#tahun').append(hasilTahun);

// -------------------------------------------------------------------------------------------------

// membuat perulangan untuk tanggal agar tidak capek membuat sampai 31 kali
let daftarJam = '';
for(i = 0; i<=60; i++){
	if(i < 10){
		daftarJam += `<option value="0${i}">0${i}</option>`;
	}else{
		daftarJam += `<option value="${i}">${i}</option>`;
	}
};
// lalu hasilnya akan di letakkan ke select dengan id = "tanggal"
	let hasilJam = daftarJam;
	$('#jam').append(hasilJam);



//------------------------------------------------------------------------------------------------------ 
// membuat perulangan untuk tanggal agar tidak capek membuat sampai 31 kali
let daftarMenit = '';
for(i = 0; i<=60; i++){
	if(i < 10){
		daftarMenit += `<option value="0${i}">0${i}</option>`;
	}else{
		daftarMenit += `<option value="${i}">${i}</option>`;
	}
};
// lalu hasilnya akan di letakkan ke select dengan id = "tanggal"
	let hasilMenit = daftarMenit;
	$('#menit').append(hasilMenit);


// -----------------------------------------------------------------------------------------------------

// membuat perulangan untuk tanggal agar tidak capek membuat sampai 31 kali
let daftarDetik = '';
for(i = 0; i<=60; i++){
	if(i < 10){
		daftarDetik += `<option value="0${i}">0${i}</option>`;
	}else{
		daftarDetik += `<option value="${i}">${i}</option>`;
	}
};
// lalu hasilnya akan di letakkan ke select dengan id = "tanggal"
	let hasilDetik = daftarDetik;
	$('#detik').append(hasilDetik);

// -------------------------------------------------------------------------------------------------------

$('#proses').click(function(){

	let tanggal = $('#tanggal').val();
	let bulan = $('#bulan').val();
	let tahun = $('#tahun').val();
	let hours = $('#jam').val();
	let minutes = $('#menit').val();
	let seconds = $('#detik').val();

	// let tanggalTujuan = new Date (`${bulan} ${tanggal}, ${tahun} ${jam}:${menit}:00 `);
	const tanggalTujuan = new Date(`${bulan} ${tanggal}, ${tahun} ${hours}:${minutes}:${seconds}`).getTime();
	
	const hasilAkhir = setInterval(function(){

		const tanggalSaatIni = new Date().getTime();
		let selisihWaktu = (tanggalTujuan - tanggalSaatIni);
		
		const hari  = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));

		// menghitung Jam, Karena kita sudah mendapatkan hari, maka kita cari sisa bagi (menggunakan modulus)
		// selisih dengan hari, yang mana 1 hari adalah 86400000 milidetik, lalu tinggal kita bagi
		// dengan jam, 1 jam = 3600000 milidetik
		const jam = Math.floor(selisihWaktu % 86400000 /*1 hari*/  / 3600000 /* 1 Jam*/);

		// Menghitung Menit, karena kita sudah mendapatkan jam, maka kita cari sisa bagi dari selisih
		// dengan jam, 1 jam = 3600000 milidetik, Setelah dapat sisanya maka kita bagi
		// dengan menit, 1 menit = 60000 milidetik
		const menit = Math.floor(selisihWaktu % 3600000 / 60000);

		// Menghitung Detik, karena kita sudah mendapatkan menit, maka kita cari sisa bagi dari selisih
		// dengan menit, 1 menit = 60000 milidetik, Setelah dapat sisanya maka kita bagi
		// dengan detik, 1 detik = 1000 milidetik
		const detik = Math.floor(selisihWaktu % 60000 / 1000); 

		// cetak hari, jam, menit, detik pada html
		const waktu = document.getElementById('waktu');
		waktu.innerHTML = `${hari} hari ${jam} jam ${menit} menit ${detik} detik`;
		

		if(selisihWaktu < 0){
			clearInterval(hasilAkhir);
			waktu.innerHTML = 'Waktu Habis';
		};
				
	},1000);

	$('#batal').click(function(){
		clearInterval(hasilAkhir);
		waktu.innerHTML = '';
	});
	

});
