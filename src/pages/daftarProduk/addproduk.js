const fs = require("fs");

// Baca file produk.json
const produkFile = "produk.json";
const produkData = JSON.parse(fs.readFileSync(produkFile, "utf-8"));

// Data produk baru yang akan ditambahkan
const produkBaru = {
  barcode: "BRG00008",
  nama_produk: "Produk Baru",
  satuan: "pcs",
  kategori: "makanan",
  harga_beli: 5000,
  harga_jual: 7000,
  keuntungan: 2000,
  stok: 10,
};

// Tambahkan produk baru ke array produkData
produkData.push(produkBaru);

// Tulis kembali data ke produk.json
fs.writeFileSync(produkFile, JSON.stringify(produkData, null, 2));

console.log("Data produk baru berhasil ditambahkan.");
