import { useState } from "react";

const DataLaporanPenjualan = () => {
  const [dataLaporanPenjualan, setDataLaporanPenjualan] = useState([
    {
      id: 1,
      tanggal: "14-02-2024",
      totalTransaksi: 1,
      totalPenjualan: 44000,
      totalKeuntungan: 2000,
    },
    {
      id: 2,
      tanggal: "15-02-2024",
      totalTransaksi: 1,
      totalPenjualan: 88000,
      totalKeuntungan: 3000,
    },
    {
      id: 3,
      tanggal: "16-02-2024",
      totalTransaksi: 2,
      totalPenjualan: 92000,
      totalKeuntungan: 4000,
    },
    {
      id: 4,
      tanggal: "17-02-2024",
      totalTransaksi: 3,
      totalPenjualan: 135000,
      totalKeuntungan: 6000,
    },
    {
      id: 5,
      tanggal: "18-02-2024",
      totalTransaksi: 2,
      totalPenjualan: 76000,
      totalKeuntungan: 3500,
    },
    {
      id: 6,
      tanggal: "19-02-2024",
      totalTransaksi: 1,
      totalPenjualan: 55000,
      totalKeuntungan: 2500,
    },
    {
      id: 7,
      tanggal: "20-02-2024",
      totalTransaksi: 4,
      totalPenjualan: 176000,
      totalKeuntungan: 8000,
    },
    {
      id: 8,
      tanggal: "21-02-2024",
      totalTransaksi: 2,
      totalPenjualan: 74000,
      totalKeuntungan: 3400,
    },
    {
      id: 9,
      tanggal: "22-02-2024",
      totalTransaksi: 1,
      totalPenjualan: 85000,
      totalKeuntungan: 3900,
    },
    {
      id: 10,
      tanggal: "23-02-2024",
      totalTransaksi: 3,
      totalPenjualan: 121000,
      totalKeuntungan: 5500,
    },
    {
      id: 11,
      tanggal: "24-02-2024",
      totalTransaksi: 2,
      totalPenjualan: 99000,
      totalKeuntungan: 4500,
    },
    {
      id: 12,
      tanggal: "25-02-2024",
      totalTransaksi: 1,
      totalPenjualan: 48000,
      totalKeuntungan: 2200,
    },
    {
      id: 13,
      tanggal: "26-02-2024",
      totalTransaksi: 2,
      totalPenjualan: 68000,
      totalKeuntungan: 3100,
    },
    {
      id: 14,
      tanggal: "27-02-2024",
      totalTransaksi: 1,
      totalPenjualan: 42000,
      totalKeuntungan: 1900,
    },
    {
      id: 15,
      tanggal: "28-02-2024",
      totalTransaksi: 4,
      totalPenjualan: 198000,
      totalKeuntungan: 9000,
    },
    {
      id: 16,
      tanggal: "01-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 92000,
      totalKeuntungan: 4200,
    },
    {
      id: 17,
      tanggal: "02-03-2024",
      totalTransaksi: 1,
      totalPenjualan: 55000,
      totalKeuntungan: 2500,
    },
    {
      id: 18,
      tanggal: "03-03-2024",
      totalTransaksi: 3,
      totalPenjualan: 118000,
      totalKeuntungan: 5400,
    },
    {
      id: 19,
      tanggal: "04-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 78000,
      totalKeuntungan: 3600,
    },
    {
      id: 20,
      tanggal: "05-03-2024",
      totalTransaksi: 1,
      totalPenjualan: 63000,
      totalKeuntungan: 2900,
    },
    {
      id: 21,
      tanggal: "06-03-2024",
      totalTransaksi: 3,
      totalPenjualan: 115000,
      totalKeuntungan: 5200,
    },
    {
      id: 22,
      tanggal: "07-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 95000,
      totalKeuntungan: 4300,
    },
    {
      id: 23,
      tanggal: "08-03-2024",
      totalTransaksi: 1,
      totalPenjualan: 60000,
      totalKeuntungan: 2800,
    },
    {
      id: 24,
      tanggal: "09-03-2024",
      totalTransaksi: 4,
      totalPenjualan: 182000,
      totalKeuntungan: 8300,
    },
    {
      id: 25,
      tanggal: "10-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 87000,
      totalKeuntungan: 4000,
    },
    {
      id: 26,
      tanggal: "11-03-2024",
      totalTransaksi: 1,
      totalPenjualan: 42000,
      totalKeuntungan: 1900,
    },
    {
      id: 27,
      tanggal: "12-03-2024",
      totalTransaksi: 3,
      totalPenjualan: 126000,
      totalKeuntungan: 5800,
    },
    {
      id: 28,
      tanggal: "13-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 96000,
      totalKeuntungan: 4400,
    },
    {
      id: 29,
      tanggal: "14-03-2024",
      totalTransaksi: 1,
      totalPenjualan: 53000,
      totalKeuntungan: 2400,
    },
    {
      id: 30,
      tanggal: "15-03-2024",
      totalTransaksi: 4,
      totalPenjualan: 175000,
      totalKeuntungan: 8000,
    },
    {
      id: 31,
      tanggal: "16-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 92000,
      totalKeuntungan: 4200,
    },
    {
      id: 32,
      tanggal: "17-03-2024",
      totalTransaksi: 1,
      totalPenjualan: 48000,
      totalKeuntungan: 2200,
    },
    {
      id: 33,
      tanggal: "18-03-2024",
      totalTransaksi: 3,
      totalPenjualan: 135000,
      totalKeuntungan: 6200,
    },
    {
      id: 34,
      tanggal: "19-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 71000,
      totalKeuntungan: 3300,
    },
    {
      id: 35,
      tanggal: "20-03-2024",
      totalTransaksi: 1,
      totalPenjualan: 52000,
      totalKeuntungan: 2400,
    },
    {
      id: 36,
      tanggal: "21-03-2024",
      totalTransaksi: 4,
      totalPenjualan: 196000,
      totalKeuntungan: 8900,
    },
    {
      id: 37,
      tanggal: "22-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 91000,
      totalKeuntungan: 4200,
    },
    {
      id: 38,
      tanggal: "23-03-2024",
      totalTransaksi: 1,
      totalPenjualan: 46000,
      totalKeuntungan: 2100,
    },
    {
      id: 39,
      tanggal: "24-03-2024",
      totalTransaksi: 3,
      totalPenjualan: 128000,
      totalKeuntungan: 5900,
    },
    {
      id: 40,
      tanggal: "25-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 69000,
      totalKeuntungan: 3200,
    },
    {
      id: 41,
      tanggal: "26-03-2024",
      totalTransaksi: 1,
      totalPenjualan: 55000,
      totalKeuntungan: 2500,
    },
    {
      id: 42,
      tanggal: "27-03-2024",
      totalTransaksi: 4,
      totalPenjualan: 180000,
      totalKeuntungan: 8200,
    },
    {
      id: 43,
      tanggal: "28-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 94000,
      totalKeuntungan: 4300,
    },
    {
      id: 44,
      tanggal: "29-03-2024",
      totalTransaksi: 1,
      totalPenjualan: 50000,
      totalKeuntungan: 2300,
    },
    {
      id: 45,
      tanggal: "30-03-2024",
      totalTransaksi: 3,
      totalPenjualan: 131000,
      totalKeuntungan: 6000,
    },
    {
      id: 46,
      tanggal: "31-03-2024",
      totalTransaksi: 2,
      totalPenjualan: 72000,
      totalKeuntungan: 3300,
    },
    {
      id: 47,
      tanggal: "01-04-2024",
      totalTransaksi: 1,
      totalPenjualan: 48000,
      totalKeuntungan: 2200,
    },
    {
      id: 48,
      tanggal: "02-04-2024",
      totalTransaksi: 4,
      totalPenjualan: 190000,
      totalKeuntungan: 8700,
    },
    {
      id: 49,
      tanggal: "03-04-2024",
      totalTransaksi: 2,
      totalPenjualan: 98000,
      totalKeuntungan: 4500,
    },
    {
      id: 50,
      tanggal: "04-04-2024",
      totalTransaksi: 1,
      totalPenjualan: 52000,
      totalKeuntungan: 2400,
    },
  ]);

  return {
    dataLaporanPenjualan,
    setDataLaporanPenjualan,
  };
};

export default DataLaporanPenjualan;
