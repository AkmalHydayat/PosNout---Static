/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AlertShow from "../../components/ui/Alert";

const BodyModalGetProduk = ({
  children,
  isVisible,
  onClose,
  totalJumlah,
  setTotalJumlah,
  setTransaksiList,
  invoiceNumber,
  generateInvoiceNumber,
  setTotalKeuntunganPerTransaksi,
}) => {
  const [pembayaran, setPembayaran] = useState("");
  const [kembalian, setKembalian] = useState(0);



  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };


  const calculateKembalian = (pembayaran, totalJumlah) => {
    if (pembayaran !== "") {
      const bayar = parseInt(pembayaran); // Menggunakan parseInt
      const total = parseInt(totalJumlah);

      if (!isNaN(bayar) && !isNaN(total)) {
        const kembalian = bayar - total;
        setKembalian(kembalian); // Menggunakan toFixed(2) untuk 2 desimal
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 ${isVisible ? "visible bg-black/30" : "invisible"
        } flex items-center justify-center font-pt_Sans  backdrop-blur-sm transition-colors`}
      id="wrapper"
    >
      <div
        className={`flex items-center transition-all ease-in-out space-x-12 ${isVisible
          ? "scale-100 opacity-100 delay-150 duration-300"
          : "scale-75 opacity-0 delay-0"
          }`}
      >
        <div
          className={`w-[650px] relative text-base  font-semibold bg-colorTwo rounded-md`}
        >
          <div className="">{children}</div>
        </div>
        <div className={`w-[400px] relative`}>
          {/* Button Close Modal   */}
          <button
            className={`text-colorTwo ${isVisible
              ? "scale-100 opacity-100  duration-300"
              : "scale-75 opacity-0"
              } absolute z-20 -end-[10px] -top-[10px] bg-purple-600 text-colorTwo px-[7px] hover:bg-purple-700 hover:text-colorTwo rounded-lg  shadow-cus2 hover:shadow-sm2 hover:shadow-black/40 shadow-black/20   `}
            onClick={() => {
              onClose();
              setKembalian(0);
              setPembayaran("");
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div
            className={` relative text-xl font-bold bg-colorTwo dark:bg-colorDarkTwo transition-all ease-out text-purple-600 border-b-[1px] border-purple-600  rounded-t-md py-4 text-center `}
          >
            Data Transaksi
          </div>
          <div className="bg-colorTwo dark:bg-colorDarkTwo text-base p-5 font-medium rounded-b space-y-3">
            <div className="flex border-b-[1px] pb-2 pe-2 border-purple-200 dark:border-colorDarkOne/90  ">
              <div className="w-32">Invoice</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72 font-semibold">{invoiceNumber}</div>
            </div>
            <div className="flex border-b-[1px] pb-2 pe-2 border-purple-200 dark:border-colorDarkOne/90  ">
              <div className="w-32 ">Total Belanja</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72 ">
                {totalJumlah.toLocaleString("id-ID")}
              </div>
            </div>
            <div className="flex border-b-[1px] pb-2  border-purple-200 dark:border-colorDarkOne/90  ">
              <div className="w-32">Bayar</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72 ">
                <input
                  type="text"
                  className="bg-transparent py-0.5 px-2 text-end focus:outline-none placeholder:font-medium focus:bg-white  rounded border-[1px] border-white dark:border-colorDarkTwo dark:hover:border-purple-600 dark:bg-colorDarkTwo dark:focus:border-purple-600  hover:border-purple-600 transition-colors ease-in focus:border-[1px] focus:border-purple-600"
                  placeholder="bayar"
                  value={pembayaran}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, "");
                    if (sanitizedValue.charAt(0) === "0") {
                      // Angka 0 berada di awal inputan, jadi kita menghapusnya
                      setPembayaran(sanitizedValue.slice(1));
                    } else {
                      setPembayaran(sanitizedValue);
                    }
                    if (sanitizedValue === "") {
                      setKembalian(0);
                    }
                    calculateKembalian(sanitizedValue, totalJumlah);
                  }}
                />
              </div>
            </div>
            <div className="flex border-b-[1px] pb-2 pe-2 border-purple-200 dark:border-colorDarkOne/90  ">
              <div className="w-32">Kembalian</div>
              <div className="text-end w-10">:</div>
              <div className="text-end  w-72 ">
                {kembalian.toLocaleString("id-ID")}
              </div>
            </div>
            <div className="flex justify-center gap-9 py-2">
              <button
                className={`bg-colorTwo dark:border-[1px] w-[75px] dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 font-semibold dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group py-1 `}
                onClick={() => {
                  if (pembayaran === "") {
                    AlertMessage("Masukkan nominal pembayaran", 400, "warning");
                  } else if (kembalian.toString().charAt(0) == "-") {
                    AlertMessage(
                      "Nominal pembayaran tidak cukup",
                      400,
                      "warning"
                    );
                  } else {
                    // stok barang yang dipilih akan berkurang
                    AlertMessage(
                      "Transaksi Berhasil ",
                      300,
                      "success"
                    );
                    onClose();

                    setTimeout(() => {
                      generateInvoiceNumber();
                      setTotalJumlah(0);
                      setTotalKeuntunganPerTransaksi(0);
                      setTransaksiList([]);
                      setPembayaran("");
                      setKembalian(0);
                    }, 500);
                  }
                }}
              >
                Proses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyModalGetProduk;
