import { useState } from "react";

const DataSatuan = () => {
  const [dataSatuan, setDataSatuan] = useState([
    { id: 1, nama_satuan: "Pcs" },
    { id: 2, nama_satuan: "Kotak" },
    { id: 3, nama_satuan: "Kodi" },
    { id: 4, nama_satuan: "Bungkus" },
    { id: 5, nama_satuan: "Botol" },
    { id: 6, nama_satuan: "Karton" },
    { id: 7, nama_satuan: "Kaleng" },
    { id: 8, nama_satuan: "Kilogram" },
    { id: 9, nama_satuan: "Buah" },
    { id: 10, nama_satuan: "Gram" },
  ]);

  return {
    dataSatuan,
    setDataSatuan,
  };
};

export default DataSatuan;
