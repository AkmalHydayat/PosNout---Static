/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import LayoutPage from "../../layout/PageLayout";
import { useEffect, useState } from "react";
import { Chart } from "chart.js";
import Dashboard from "./Dashboard";
import DataProduk from "../../databases/DataProduk";
import DataDetailPesanan from "../../databases/DataDetailPesanan";
import DataLaporanPenjualan from "../../databases/DataLaporanPenjualan";

const Welcome = () => {

  const [minimumStok, setMinimumStok] = useState([]);
  const [barang_KurangLaris, setBarang_KurangLaris] = useState([]);
  const [chartData, setChartData] = useState([]);
  const { produkList } = DataProduk()
  const { detailPesananList } = DataDetailPesanan()
  const { dataLaporanPenjualan } = DataLaporanPenjualan()
  Chart.defaults.font.family = "DM Sans";
  Chart.defaults.font.color = "red";

  const [chartDatasSale, setChartDatasSale] = useState({
    labels: [],
    datasets: [
      {
        label: "Total Penjualan/Hari",
        data: [],
      },
    ],
  });

  const [ChartDatasPolarArea, setChartDatasPolarArea] = useState({
    labels: [],
    datasets: [
      {
        label: "Total Penjualan/Hari",
        data: [],
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",

        labels: {
          pointStyle: "rectRounded",
          usePointStyle: true,
          // This more specific font property overrides the global property
          font: {
            size: 11,
            family: "'DM Sans', serif",
          },
        },
      },
    },
  };

  const barangKurangTerlaris = () => {
    if (produkList.length > 0) {
      const arrayProduk = produkList.map((obj) => obj.nama_produk);
      const arrayOrder = detailPesananList.map((obj) => obj.namaProduk);
      const filteredData = arrayProduk.filter(
        (produk) => !arrayOrder.includes(produk)
      );

      setBarang_KurangLaris(filteredData);
    }
  };

  const stokMinimum = () => {
    if (produkList.length > 0) {
      const filteredData = produkList.filter((produk) => {
        const stok = produk.stok;
        return stok <= 10;
      });
      setMinimumStok(filteredData);
    }
  };

  const monthNumberToName = (monthNumber) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ];

    return months[monthNumber - 1];
  };

  const getPeriodSaleReport = (period) => {
    if (period === "hari") {
      return dataLaporanPenjualan.slice(-20);
    } else if (period === "minggu") {
      const chunkSize = 7; // Jumlah maksimum elemen dalam setiap array
      const resultArrays = [];

      for (let i = 0; i < dataLaporanPenjualan.length; i += chunkSize) {
        const chunk = dataLaporanPenjualan.slice(i, i + chunkSize);
        resultArrays.push(chunk);
      }

      const transformedData = resultArrays.map((dateRange) => {
        const startDate = dateRange[0].tanggal;
        const endDate = dateRange[dateRange.length - 1].tanggal;

        const totalTransaksi = dateRange.reduce(
          (acc, item) => acc + item.totalTransaksi,
          0
        );
        const totalPenjualan = dateRange.reduce(
          (acc, item) => acc + item.totalPenjualan,
          0
        );
        const totalKeuntungan = dateRange.reduce(
          (acc, item) => acc + item.totalKeuntungan,
          0
        );

        return {
          tanggal: `${startDate} s/d ${endDate}`,
          totalTransaksi,
          totalPenjualan,
          totalKeuntungan,
        };
      });
      return transformedData;
    } else if (period === "bulan") {
      const separatedByMonth = {};

      dataLaporanPenjualan.forEach((item) => {
        const tanggalParts = item.tanggal.split("-");
        const bulan = tanggalParts[1];

        if (!separatedByMonth[bulan]) {
          separatedByMonth[bulan] = [];
        }
        separatedByMonth[bulan].push(item);
      });

      const transformedData = Object.entries(separatedByMonth).map(
        ([month, dateRange]) => {
          const monthName = monthNumberToName(parseInt(month, 10));
          const startDate = dateRange[0].tanggal;
          const endDate = dateRange[dateRange.length - 1].tanggal;

          const totalTransaksi = dateRange.reduce(
            (acc, item) => acc + item.totalTransaksi,
            0
          );
          const totalPenjualan = dateRange.reduce(
            (acc, item) => acc + item.totalPenjualan,
            0
          );
          const totalKeuntungan = dateRange.reduce(
            (acc, item) => acc + item.totalKeuntungan,
            0
          );

          return {
            bulan: monthName,
            tanggal: `${startDate} s/d ${endDate}`,
            totalTransaksi,
            totalPenjualan,
            totalKeuntungan,
          };
        }
      );
      return transformedData
    }

  }

  const handlerChart = async (baseOn) => {
    try {
      const dataChart = await getPeriodSaleReport(baseOn);
      setChartData(dataChart);
      setChartDatasSale({
        labels: dataChart.map((data) => {
          // Memecah string tanggal menjadi array dengan "/" sebagai pemisah
          const parts = data.tanggal.split("-");
          // console.log(parts);
          let formattedDate = "";
          if (baseOn === "minggu") {
            formattedDate = `${parts[0]}/${parts[1]} - ${parts[2].slice(
              9,
              11
            )}/${parts[3]}`;
          } else if (baseOn === "bulan") {
            formattedDate = data.bulan;
          } else {
            formattedDate = `${parts[0]}/${parts[1]}`;
          }

          return formattedDate;
        }),
        datasets: [
          {
            label: "Penjualan",
            data: dataChart.map((data) => data.totalPenjualan),
            backgroundColor: "#e11d48",
            borderColor: "#e11d48",
          },
          {
            label: "Keuntungan",
            data: dataChart.map((data) => data.totalKeuntungan),
            backgroundColor: "rgba(13, 148, 136,  1)",
            borderColor: "rgba(13, 148, 136,  1)",
          },
        ],
      });
    } catch (error) {
      // Handle error jika diperlukan
      console.error("Error in component:", error);
    }
  };

  const getProductTerlaris = (period) => {
    const currentDate = new Date();

    if (period === "minggu") {
      const parseDate = (dateString) => {
        const parts = dateString.split("-");
        return new Date(parts[2], parts[1] - 1, parts[0]);
      };

      const dateWeekAgo = new Date();
      dateWeekAgo.setDate(dateWeekAgo.getDate() - 7);

      const filterByDateRange = (details, startDate, endDate) => {
        return details.filter((detail) => {
          const detailDate = parseDate(detail.waktuTransaksi);
          return detailDate >= startDate && detailDate <= endDate;
        });
      };

      const filteredDetails = filterByDateRange(
        detailPesananList,
        dateWeekAgo,
        currentDate
      );

      const hasilJumlah = filteredDetails.reduce((acc, obj) => {
        const { jumlah, namaProduk } = obj;

        if (!acc[namaProduk]) {
          acc[namaProduk] = jumlah;
        } else {
          acc[namaProduk] += jumlah;
        }
        return acc;
      }, []);

      const dataProdukTerlaris = Object.keys(hasilJumlah).map((namaProduk) => ({
        namaProduk,
        jumlah: hasilJumlah[namaProduk],
      }));
      return dataProdukTerlaris;
    } else if (period === "bulan lalu") {
      const separatedByMonth = {};
      const thisMonth = currentDate.getMonth() + 1;

      let lastMonth;
      if (thisMonth === 1) {
        lastMonth = 12;
      } else {
        lastMonth = thisMonth - 1;
      }

      detailPesananList.forEach((item) => {
        const tanggalParts = item.waktuTransaksi.split("-");
        const bulan = parseInt(tanggalParts[1], 10); // Konversi ke angka agar tidak ada masalah pembandingan

        if (!separatedByMonth[bulan]) {
          separatedByMonth[bulan] = [];
        }

        separatedByMonth[bulan].push(item);
      });

      if (separatedByMonth[lastMonth]) { // Pastikan ada data untuk bulan lalu
        const hasilJumlah = separatedByMonth[lastMonth].reduce((acc, obj) => {
          const { jumlah, namaProduk } = obj;

          if (!acc[namaProduk]) {
            acc[namaProduk] = jumlah;
          } else {
            acc[namaProduk] += jumlah;
          }
          return acc;
        }, {});

        const dataProdukTerlaris = Object.keys(hasilJumlah).map((namaProduk) => ({
          namaProduk,
          jumlah: hasilJumlah[namaProduk],
        }));

        return dataProdukTerlaris;
      }
    } else if (period === "bulan ini") {
      const separatedByMonth = {};
      const thisMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      detailPesananList.forEach((item) => {
        const tanggalParts = item.waktuTransaksi.split("-");
        const bulan = tanggalParts[1];

        if (!separatedByMonth[bulan]) {
          separatedByMonth[bulan] = [];
        }

        separatedByMonth[bulan].push(item);
      });

      const hasilJumlah = separatedByMonth[thisMonth].reduce((acc, obj) => {
        const { jumlah, namaProduk } = obj;

        if (!acc[namaProduk]) {
          acc[namaProduk] = jumlah;
        } else {
          acc[namaProduk] += jumlah;
        }
        return acc;
      }, []);

      const dataProdukTerlaris = Object.keys(hasilJumlah).map((namaProduk) => ({
        namaProduk,
        jumlah: hasilJumlah[namaProduk],
      }));
      return dataProdukTerlaris;
    }
  }

  const handlerProdukTerlaris = async (baseOn) => {
    try {
      const dataChart = await getProductTerlaris(baseOn);
      setChartDatasPolarArea({
        labels: dataChart.slice(0, 8).map((data) => data.namaProduk),
        datasets: [
          {
            label: "Penjualan",
            data: dataChart.slice(0, 8).map((data) => data.jumlah),
            backgroundColor: [
              "#c026d3",
              "rgb(8 145 178) ",
              "#e11d48",
              "#f97316",
              "#16a34a",
              "rgb(13 148 136)",
              "#ca8a04",
              "#84cc16",
            ],
            borderColor: [
              "#c026d3",
              "rgb(8 145 178)",
              "#e11d48",
              "#f97316",
              "#16a34a",
              "rgb(13 148 136)",
              "#ca8a04",
              "#84cc16",
            ],
          },
        ],
      });
    } catch (error) {
      // Handle error jika diperlukan
      console.error("Error in component:", error);
    }
  };


  useEffect(() => {
    handlerChart("hari")
    handlerProdukTerlaris("minggu")
    stokMinimum();
    barangKurangTerlaris();
  }, []);

  return (
    <LayoutPage>
      <Dashboard
        minimumStok={minimumStok}
        barang_KurangLaris={barang_KurangLaris}
        chartData={chartData}
        chartDatasSale={chartDatasSale}
        options={options}
        ChartDatasPolarArea={ChartDatasPolarArea}
        handlerChart={handlerChart}
        handlerProdukTerlaris={handlerProdukTerlaris}
      />
    </LayoutPage>
  );
};

export default Welcome;
