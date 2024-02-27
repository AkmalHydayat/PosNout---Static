import { useState } from "react";

const DataKategori = () => {
  const [dataKategori, setDataKategori] = useState([
    { id: 1, nama_kategori: "Minuman" },
    { id: 2, nama_kategori: "Makanan" },
    { id: 3, nama_kategori: "Elektronik" },
    { id: 4, nama_kategori: "Dapur" },
    { id: 5, nama_kategori: "Kesehatan" },
    { id: 6, nama_kategori: "Kecantikan" },
    { id: 7, nama_kategori: "Mainan" },
    { id: 8, nama_kategori: "Olahraga" },
    { id: 9, nama_kategori: "Otomotif" },
    { id: 10, nama_kategori: "Pertukangan" },
  ]);

  return {
    dataKategori,
    setDataKategori,
  };
};

export default DataKategori;
