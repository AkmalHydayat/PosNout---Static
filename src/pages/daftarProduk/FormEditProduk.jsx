/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import DataKategori from "../../databases/DataKategori";
import DataSatuan from "../../databases/DataSatuan";
const FormEditProduk = ({
  onClose,
  id,
  isSearching,
  setSearchResults,
  searchResults,
  setProduks,
  produks,
  stok,
  AlertMessage,
  newNamaProduk,
  setNewNamaProduk,
  newSatuanProduk,
  setNewSatuanProduk,
  newKategoriProduk,
  setNewKategoriProduk,
  newHargaBeliProduk,
  setNewHargaBeliProduk,
  newHargaJualProduk,
  setNewHargaJualProduk,
  setIsNamaProdukEmpty,
  setIsSatuanProdukEmpty,
  setIsKategoriProdukEmpty,
  setIsHargaBeliProdukEmpty,
  setIsHargaJualProdukEmpty,
  emptyNamaProdukStyle,
  emptySatuanProdukStyle,
  emptyKategoriProdukStyle,
  emptyHargaBeliProdukStyle,
  emptyHargaJualProdukStyle,
  setErrorInput,
  errorInput,
  editNama,
  editHargaBeli,
  editHargaJual,
}) => {
  const { dataKategori } = DataKategori()
  const { dataSatuan } = DataSatuan()

  const updateProduk = async () => {

    if (isSearching) {

      const updatedSearchResults = searchResults.map((produk) => {
        if (produk.id === id) {
          return {
            ...produk,
            nama_produk: newNamaProduk,
            satuan: newSatuanProduk,
            kategori: newKategoriProduk,
            harga_beli: newHargaBeliProduk,
            harga_jual: newHargaJualProduk,
            keuntungan: newHargaJualProduk - newHargaBeliProduk,
            stok: stok,
          };
        }
        return produk;
      });
      setSearchResults(updatedSearchResults);
      AlertMessage("Berhasil Mengedit Produk", 380, "success");

    } else {
      const updateProduk = produks.map((produk) => {
        if (produk.id === id) {
          return {
            ...produk,
            nama_produk: newNamaProduk,
            satuan: newSatuanProduk,
            kategori: newKategoriProduk,
            harga_beli: newHargaBeliProduk,
            harga_jual: newHargaJualProduk,
            keuntungan: newHargaJualProduk - newHargaBeliProduk,
            stok: stok,
          };
        }
        return produk;
      });
      setProduks(updateProduk);
      AlertMessage("Berhasil Mengedit Produk", 380, "success");

    }
  }

  const setSubmit = (e) => {
    e.preventDefault();
    if (newNamaProduk.trim() === "") {
      setIsNamaProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (newSatuanProduk.trim() === "") {
      setIsSatuanProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (newKategoriProduk.trim() === "") {
      setIsKategoriProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (newHargaBeliProduk == "") {
      setIsHargaBeliProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (newHargaJualProduk == "") {
      setIsHargaJualProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (
      produks.some(
        (produk) =>
          produk.nama_produk &&
          produk.nama_produk.toLowerCase() === newNamaProduk.toLowerCase()
      ) &&
      produks.some(
        (produk) =>
          produk.satuan &&
          produk.satuan.toLowerCase() === newSatuanProduk.toLowerCase()
      ) &&
      produks.some(
        (produk) =>
          produk.kategori &&
          produk.kategori.toLowerCase() === newKategoriProduk.toLowerCase()
      ) &&
      produks.some(
        (produk) =>
          produk.harga_beli && produk.harga_beli === newHargaBeliProduk
      ) &&
      produks.some(
        (produk) =>
          produk.harga_jual && produk.harga_jual === newHargaJualProduk
      )
    ) {
      setErrorInput("Produk sudah ada dalam daftar.");
    } else {
      updateProduk();
      onClose();
      AlertMessage("berhasil memperbarui", 310, "success");
    }
  };

  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl font-semibold font-pt_Sans text-start text-purple-600">
          Edit Data
        </div>
      </div>
      <form action="" onSubmit={setSubmit}>
        <div className="text-start text-base">
          {/* input nama produk */}
          <div>
            <div className="px-6 py-1 mt-2 ">
              <label
                htmlFor=""
                className={`font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900 `}
              >
                Produk
              </label>
              <input
                type="text"
                autoFocus
                className={`w-full h-10 font-pt_Sans focus:outline-none focus:bg-colorTwo dark:focus:bg-colorTwo dark:focus:text-colorDarkOne  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:bg-colorDarkTwo  border-gray-300 focus:border-purple-600  transition-transform ease-in-out  font-medium border-[1px] text-gray-600 focus:text-colorDarkOne  rounded px-2 text-base placeholder:text-sm placeholder:font-normal dark:placeholder:text-colorTwo/50 dark:text-colorTwo placeholder:text-gray-600 ${emptyNamaProdukStyle}`}
                placeholder="Produk"
                value={newNamaProduk ? newNamaProduk : editNama}
                onChange={(e) => {
                  setNewNamaProduk(e.target.value.toLowerCase());
                  setIsNamaProdukEmpty(false);
                }}
              />
            </div>
          </div>
          <div className="flex space-x-2">
            {/* input satuan */}
            <div className="w-1/2 ">
              <div className="ps-6 py-1 mt-2 ">
                <label
                  htmlFor=""
                  className={` font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900`}
                >
                  Satuan
                </label>
                <select
                  className={`${emptySatuanProdukStyle} w-full h-10 font-pt_Sans focus:outline-none   focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:bg-colorDarkTwo focus:text-colorDarkOne border-gray-300 focus:border-purple-600  transition-transform ease-in-out  font-medium border-[1px] text-gray-600 dark:text-colorTwo rounded px-2 text-[15px] placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 dark:placeholder:text-colorTwo/50`}

                  onChange={(e) => {
                    setNewSatuanProduk(e.target.value.toLowerCase());
                    setIsSatuanProdukEmpty(false);
                  }}
                >

                  {dataSatuan.map((satuan, index) => (
                    <option value={satuan.nama_satuan} key={index}>
                      {satuan.nama_satuan}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* input kategori */}
            <div className="w-1/2 ">
              <div className="pe-6 py-1 mt-2 ">
                <label
                  htmlFor=""
                  className={`font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900`}
                >
                  Kategori
                </label>
                <select
                  className={`${emptyKategoriProdukStyle} w-full h-10 font-pt_Sans focus:outline-none focus:text-colorDarkOne focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:bg-colorDarkTwo  border-gray-300 focus:border-purple-600  transition-transform ease-in-out  font-medium border-[1px] text-gray-600 dark:text-colorTwo rounded px-2 text-[15px] placeholder:text-sm placeholder:font-normal placeholder:text-gray-600`}
                  size={1}
                  placeholder="pilih"
                  onChange={(e) => {
                    setNewKategoriProduk(e.target.value.toLowerCase());
                    setIsKategoriProdukEmpty(false);
                  }}
                >

                  {dataKategori.map((kategori) => (
                    <option
                      value={kategori.nama_kategori}
                      key={kategori.id}
                      className=""
                    >
                      {kategori.nama_kategori}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            {/* input harga beli */}
            <div>
              <div className="ps-6 py-1 mt-2 ">
                <label
                  htmlFor=""
                  className={` font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900`}
                >
                  Harga Beli
                </label>
                <input
                  type="text"
                  className={`${emptyHargaBeliProdukStyle} focus:text-colorDarkOne w-full h-10 font-pt_Sans focus:outline-none dark:focus:bg-colorTwo dark:focus:text-colorDarkOne focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:bg-colorDarkTwo  border-gray-300 focus:border-purple-600  transition-transform ease-in-out  font-medium border-[1px] text-gray-600 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 dark:placeholder:text-colorTwo/50 dark:text-colorTwo`}
                  placeholder="Harga Beli"
                  value={newHargaBeliProduk ? newHargaBeliProduk : editHargaBeli}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, "");

                    if (sanitizedValue.charAt(0) === "0") {
                      // Angka 0 berada di awal inputan, jadi kita menghapusnya
                      setNewHargaBeliProduk(sanitizedValue.slice(1));
                    } else {
                      setNewHargaBeliProduk(sanitizedValue.toLowerCase());
                      setIsHargaBeliProdukEmpty(false);
                    }
                  }}
                />
              </div>
            </div>
            {/* input harga jual */}
            <div>
              <div className="pe-6 py-1 mt-2  ">
                <label
                  htmlFor=""
                  className={`font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900`}
                >
                  Harga Jual
                </label>
                <input
                  type="text"
                  className={`${emptyHargaJualProdukStyle} focus:text-colorDarkOne w-full h-10 font-pt_Sans focus:outline-none dark:focus:bg-colorTwo dark:focus:text-colorDarkOne focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:bg-colorDarkTwo  border-gray-300 focus:border-purple-600  transition-transform ease-in-out  font-medium border-[1px] text-gray-600 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 dark:placeholder:text-colorTwo/50 dark:text-colorTwo`}
                  placeholder="Harga Jual"
                  value={newHargaJualProduk ? newHargaJualProduk : editHargaJual}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, "");

                    if (sanitizedValue.charAt(0) === "0") {
                      // Angka 0 berada di awal inputan, jadi kita menghapusnya
                      setNewHargaJualProduk(sanitizedValue.slice(1));
                    } else {
                      setNewHargaJualProduk(sanitizedValue.toLowerCase());
                      setIsHargaJualProdukEmpty(false);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          {/* stok */}
          <div>
            <div className="px-6 py-1 mt-2  flex flex-col">
              <label
                htmlFor=""
                className={`font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900`}
              >
                Stok
              </label>
              <input
                type="text"
                className="w-[10%] text-center h-10 focus:outline-none font-semibold bg-gray-300 dark:bg-colorDarkOne/80 cursor-default border-gray-300 border-[1px] text-gray-900 dark:text-colorTwo rounded px-2 text-[15px] placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 mb-3"
                placeholder="Harga Jual"
                value={stok ? stok : 0}
                readOnly
              />
            </div>
            {errorInput && (
              <div className="text-fnd text-xs px-6 text-center mt-2">
                {errorInput}
              </div>
            )}
          </div>
        </div>
        <div className="px-6 py-4 space-x-2 text-base flex border-t-[1px] border-gray-300 justify-end ">
          <button
            type="submit"
            className={`bg-colorTwo dark:border-[1px]  dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group px-4 py-1  `}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditProduk;
