import detailPesananList from "../databases/DataDetailPesanan.js";

export async function getProductTerlaris(period) {
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
      const bulan = tanggalParts[1];

      if (!separatedByMonth[bulan]) {
        separatedByMonth[bulan] = [];
      }

      separatedByMonth[bulan].push(item);
    });

    const hasilJumlah = separatedByMonth[lastMonth].reduce((acc, obj) => {
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
