import DataLaporanPenjualan from "../databases/DataLaporanPenjualan";

const getPeriodSaleReport = (period) => {
  const { dataLaporanPenjualan } = DataLaporanPenjualan();

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
    return transformedData;
  }

  return getPeriodSaleReport;
};

export default () => ({
  getPeriodSaleReport,
});
