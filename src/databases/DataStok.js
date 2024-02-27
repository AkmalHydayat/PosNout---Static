import { useState } from "react";

const DataStok = () => {
  const [dataStok, setDataStok] = useState([
    {
      id: 1,
      tanggal: "14-02-2024",
      barcodeProduk: "BRG00001",
      nama_produk: "Le Mineral 600ml",
      jumlah: 4,
    },
    {
      id: 2,
      tanggal: "15-02-2024",
      barcodeProduk: "BRG00005",
      nama_produk: "Qtela tempe 55gr",
      jumlah: 8,
    },
    {
      id: 3,
      tanggal: "16-02-2024",
      barcodeProduk: "BRG00002",
      nama_produk: "Aqua 600ml",
      jumlah: 10,
    },
    {
      id: 4,
      tanggal: "17-02-2024",
      barcodeProduk: "BRG00009",
      nama_produk: "Coca Cola 1.5L",
      jumlah: 6,
    },
    {
      id: 5,
      tanggal: "18-02-2024",
      barcodeProduk: "BRG00014",
      nama_produk: "Tango Chocolate 120gr",
      jumlah: 15,
    },
    {
      id: 6,
      tanggal: "19-02-2024",
      barcodeProduk: "BRG00007",
      nama_produk: "Greenfields",
      jumlah: 5,
    },
    {
      id: 7,
      tanggal: "20-02-2024",
      barcodeProduk: "BRG00010",
      nama_produk: "Sprite 390ml",
      jumlah: 12,
    },
    {
      id: 8,
      tanggal: "21-02-2024",
      barcodeProduk: "BRG00003",
      nama_produk: "Goodtime Cookies",
      jumlah: 7,
    },
    {
      id: 9,
      tanggal: "22-02-2024",
      barcodeProduk: "BRG00004",
      nama_produk: "Nextar Strawberry 42gr",
      jumlah: 9,
    },
    {
      id: 10,
      tanggal: "23-02-2024",
      barcodeProduk: "BRG00006",
      nama_produk: "Chitato bbq 35gr",
      jumlah: 11,
    },
    {
      id: 11,
      tanggal: "24-02-2024",
      barcodeProduk: "BRG00008",
      nama_produk: "Pocari Sweat 350ml",
      jumlah: 14,
    },
    {
      id: 12,
      tanggal: "25-02-2024",
      barcodeProduk: "BRG00011",
      nama_produk: "Tango Wafer",
      jumlah: 6,
    },
    {
      id: 13,
      tanggal: "26-02-2024",
      barcodeProduk: "BRG00013",
      nama_produk: "Frestea",
      jumlah: 8,
    },
    {
      id: 14,
      tanggal: "27-02-2024",
      barcodeProduk: "BRG00015",
      nama_produk: "Beng-beng 28gr",
      jumlah: 10,
    },
    {
      id: 15,
      tanggal: "28-02-2024",
      barcodeProduk: "BRG00016",
      nama_produk: "Mizone 600ml",
      jumlah: 7,
    },
    {
      id: 16,
      tanggal: "01-03-2024",
      barcodeProduk: "BRG00017",
      nama_produk: "Fanta 1L",
      jumlah: 6,
    },
    {
      id: 17,
      tanggal: "02-03-2024",
      barcodeProduk: "BRG00018",
      nama_produk: "Silverqueen 100gr",
      jumlah: 8,
    },
    {
      id: 18,
      tanggal: "03-03-2024",
      barcodeProduk: "BRG00019",
      nama_produk: "Lays BBQ 70gr",
      jumlah: 5,
    },
    {
      id: 19,
      tanggal: "04-03-2024",
      barcodeProduk: "BRG00020",
      nama_produk: "Teh Botol Sosro 450ml",
      jumlah: 11,
    },
    {
      id: 20,
      tanggal: "05-03-2024",
      barcodeProduk: "BRG00021",
      nama_produk: "Choki-choki 10gr",
      jumlah: 9,
    },
  ]);

  return {
    dataStok,
    setDataStok,
  };
};

export default DataStok;
