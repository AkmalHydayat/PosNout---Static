import { useState } from "react";

const DataProduk = () => {
  const [produkList, setProdukList] = useState([
    {
      id: 1,
      barcode: "BRG00001",
      nama_produk: "Le Mineral 600ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 1700,
      harga_jual: 2600,
      keuntungan: 900,
      stok: 48,
    },
    {
      id: 2,
      barcode: "BRG00002",
      nama_produk: "Aqua 600ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 1500,
      harga_jual: 2400,
      keuntungan: 900,
      stok: 42,
    },
    {
      id: 3,
      barcode: "BRG00003",
      nama_produk: "Goodtime Cookies",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 7000,
      harga_jual: 8500,
      keuntungan: 1500,
      stok: 23,
    },
    {
      id: 4,
      barcode: "BRG00004",
      nama_produk: "Nextar Strawberry 42gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 1000,
      harga_jual: 2000,
      keuntungan: 1000,
      stok: 11,
    },
    {
      id: 5,
      barcode: "BRG00005",
      nama_produk: "Qtela tempe 55gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 5000,
      harga_jual: 6000,
      keuntungan: 1000,
      stok: 3,
    },
    {
      id: 6,
      barcode: "BRG00006",
      nama_produk: "Chitato bbq 35gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 4200,
      harga_jual: 5300,
      keuntungan: 1100,
      stok: 11,
    },
    {
      id: 7,
      barcode: "BRG00007",
      nama_produk: "Greenfields",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 21000,
      harga_jual: 22000,
      keuntungan: 1000,
      stok: 11,
    },
    {
      id: 8,
      barcode: "BRG00008",
      nama_produk: "Pocari Sweat 350ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 5570,
      harga_jual: 6200,
      keuntungan: 830,
      stok: 21,
    },
    {
      id: 9,
      barcode: "BRG00009",
      nama_produk: "Coca Cola 1.5L",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 17570,
      harga_jual: 19200,
      keuntungan: 1830,
      stok: 14,
    },
    {
      id: 10,
      barcode: "BRG00010",
      nama_produk: "Sprite 390ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 5720,
      harga_jual: 6500,
      keuntungan: 980,
      stok: 14,
    },
    {
      id: 11,
      barcode: "BRG00011",
      nama_produk: "Tango Wafer",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 2500,
      harga_jual: 3500,
      keuntungan: 1000,
      stok: 30,
    },
    {
      id: 12,
      barcode: "BRG00012",
      nama_produk: "Sari Roti",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 3000,
      harga_jual: 4000,
      keuntungan: 1000,
      stok: 25,
    },
    {
      id: 13,
      barcode: "BRG00013",
      nama_produk: "Frestea",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 4500,
      harga_jual: 5500,
      keuntungan: 1000,
      stok: 18,
    },
    {
      id: 14,
      barcode: "BRG00014",
      nama_produk: "Tango Chocolate 120gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 3800,
      harga_jual: 4800,
      keuntungan: 1000,
      stok: 22,
    },
    {
      id: 15,
      barcode: "BRG00015",
      nama_produk: "Beng-beng 28gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 2200,
      harga_jual: 3200,
      keuntungan: 1000,
      stok: 35,
    },
    {
      id: 16,
      barcode: "BRG00016",
      nama_produk: "Mizone 600ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 3000,
      harga_jual: 4000,
      keuntungan: 1000,
      stok: 25,
    },
    {
      id: 17,
      barcode: "BRG00017",
      nama_produk: "Fanta 1L",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 6000,
      harga_jual: 7000,
      keuntungan: 1000,
      stok: 20,
    },
    {
      id: 18,
      barcode: "BRG00018",
      nama_produk: "Silverqueen 100gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 8000,
      harga_jual: 9500,
      keuntungan: 1500,
      stok: 15,
    },
    {
      id: 19,
      barcode: "BRG00019",
      nama_produk: "Lays BBQ 70gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 6000,
      harga_jual: 7500,
      keuntungan: 1500,
      stok: 12,
    },
    {
      id: 20,
      barcode: "BRG00020",
      nama_produk: "Teh Botol Sosro 450ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 4000,
      harga_jual: 5000,
      keuntungan: 1000,
      stok: 28,
    },
    {
      id: 21,
      barcode: "BRG00021",
      nama_produk: "Choki-choki 10gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 1200,
      harga_jual: 2200,
      keuntungan: 1000,
      stok: 30,
    },
    {
      id: 22,
      barcode: "BRG00022",
      nama_produk: "Fruit Tea 500ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 5000,
      harga_jual: 6000,
      keuntungan: 1000,
      stok: 18,
    },
    {
      id: 23,
      barcode: "BRG00023",
      nama_produk: "Oreo 137gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 4500,
      harga_jual: 5500,
      keuntungan: 1000,
      stok: 25,
    },
    {
      id: 24,
      barcode: "BRG00024",
      nama_produk: "Fruitamin 100ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 2500,
      harga_jual: 3500,
      keuntungan: 1000,
      stok: 32,
    },
    {
      id: 25,
      barcode: "BRG00025",
      nama_produk: "Snickers 50gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 4000,
      harga_jual: 5000,
      keuntungan: 1000,
      stok: 20,
    },
    {
      id: 26,
      barcode: "BRG00026",
      nama_produk: "Lipton Lemon Tea 450ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 6000,
      harga_jual: 7000,
      keuntungan: 1000,
      stok: 15,
    },
    {
      id: 27,
      barcode: "BRG00027",
      nama_produk: "Malkist Roma 100gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 3200,
      harga_jual: 4200,
      keuntungan: 1000,
      stok: 28,
    },
    {
      id: 28,
      barcode: "BRG00028",
      nama_produk: "Freshtea Jasmine 500ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 4500,
      harga_jual: 5500,
      keuntungan: 1000,
      stok: 2,
    },
    {
      id: 29,
      barcode: "BRG00029",
      nama_produk: "Dua Kelinci Kacang",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 7000,
      harga_jual: 8000,
      keuntungan: 1000,
      stok: 18,
    },
    {
      id: 30,
      barcode: "BRG00030",
      nama_produk: "Teh Pucuk Harum 400ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 3000,
      harga_jual: 4000,
      keuntungan: 1000,
      stok: 20,
    },
    {
      id: 31,
      barcode: "BRG00031",
      nama_produk: "Indomie Goreng",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 1200,
      harga_jual: 2200,
      keuntungan: 1000,
      stok: 4,
    },
    {
      id: 32,
      barcode: "BRG00032",
      nama_produk: "Fanta 390ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 4000,
      harga_jual: 5000,
      keuntungan: 1000,
      stok: 15,
    },
    {
      id: 33,
      barcode: "BRG00033",
      nama_produk: "Choco Pie",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 6000,
      harga_jual: 7000,
      keuntungan: 1000,
      stok: 25,
    },
    {
      id: 34,
      barcode: "BRG00034",
      nama_produk: "Teh Kotak 250ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 3000,
      harga_jual: 4000,
      keuntungan: 1000,
      stok: 30,
    },
    {
      id: 35,
      barcode: "BRG00035",
      nama_produk: "Lays Original 70gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 5500,
      harga_jual: 6500,
      keuntungan: 1000,
      stok: 18,
    },
    {
      id: 36,
      barcode: "BRG00036",
      nama_produk: "Teh Botol Sosro 350ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 3500,
      harga_jual: 4500,
      keuntungan: 1000,
      stok: 22,
    },
    {
      id: 37,
      barcode: "BRG00037",
      nama_produk: "Mie Sedap Goreng",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 1300,
      harga_jual: 2300,
      keuntungan: 1000,
      stok: 35,
    },
    {
      id: 38,
      barcode: "BRG00038",
      nama_produk: "Aqua 1.5L",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 7000,
      harga_jual: 8000,
      keuntungan: 1000,
      stok: 20,
    },
    {
      id: 39,
      barcode: "BRG00039",
      nama_produk: "Choki-choki Pandan",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 1200,
      harga_jual: 2200,
      keuntungan: 1000,
      stok: 30,
    },
    {
      id: 40,
      barcode: "BRG00040",
      nama_produk: "Pocari Sweat 500ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 6500,
      harga_jual: 7500,
      keuntungan: 1000,
      stok: 25,
    },
    {
      id: 41,
      barcode: "BRG00041",
      nama_produk: "Chitato BBQ 68gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 6000,
      harga_jual: 7000,
      keuntungan: 1000,
      stok: 18,
    },
    {
      id: 42,
      barcode: "BRG00042",
      nama_produk: "Fruitamin 200ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 3000,
      harga_jual: 4000,
      keuntungan: 1000,
      stok: 3,
    },
    {
      id: 43,
      barcode: "BRG00043",
      nama_produk: "Silverqueen 50gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 3500,
      harga_jual: 4500,
      keuntungan: 1000,
      stok: 22,
    },
    {
      id: 44,
      barcode: "BRG00044",
      nama_produk: "Freshtea Original 500ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 4500,
      harga_jual: 5500,
      keuntungan: 1000,
      stok: 15,
    },
    {
      id: 45,
      barcode: "BRG00045",
      nama_produk: "Oreo 290gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 7000,
      harga_jual: 8000,
      keuntungan: 1000,
      stok: 20,
    },
    {
      id: 46,
      barcode: "BRG00046",
      nama_produk: "Teh Pucuk Harum 1L",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 8000,
      harga_jual: 9000,
      keuntungan: 1000,
      stok: 1,
    },
    {
      id: 47,
      barcode: "BRG00047",
      nama_produk: "Malkist Abon 75gr",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 3200,
      harga_jual: 4200,
      keuntungan: 1000,
      stok: 25,
    },
    {
      id: 48,
      barcode: "BRG00048",
      nama_produk: "Coca Cola 390ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 5000,
      harga_jual: 6000,
      keuntungan: 1000,
      stok: 30,
    },
    {
      id: 49,
      barcode: "BRG00049",
      nama_produk: "Choki-choki Vanilla",
      satuan: "pcs",
      kategori: "makanan",
      harga_beli: 1200,
      harga_jual: 2200,
      keuntungan: 1000,
      stok: 2,
    },
    {
      id: 50,
      barcode: "BRG00050",
      nama_produk: "Fanta 600ml",
      satuan: "pcs",
      kategori: "minuman",
      harga_beli: 5500,
      harga_jual: 6500,
      keuntungan: 1000,
      stok: 1,
    },
  ]);

  return {
    produkList,
    setProdukList,
  };
};

export default DataProduk;
