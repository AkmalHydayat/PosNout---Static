
/* eslint-disable react/prop-types */
const FormEditSatuan = ({
  onClose,
  id,
  isSearching,
  setSearchResults,
  searchResults,
  setSatuans,
  AlertMessage,
  errorInput,
  namaNewSatuan,
  setNamaNewSatuan,
  setErrorInput,
  satuans,
  namaSatuan,
}) => {

  const updateSatuan = async () => {

    if (isSearching) {

      const updatedSearchResults = searchResults.map((satuan) => {
        if (satuan.id === id) {
          return { ...satuan, nama_satuan: namaNewSatuan };
        }
        return satuan;
      });
      setSearchResults(updatedSearchResults);
      AlertMessage("Berhasil Mengedit", 380, "success");

    } else {
      const updatedSatuan = satuans.map((satuan) => {
        if (satuan.id === id) {
          return { ...satuan, nama_satuan: namaNewSatuan };
        }
        return satuan;
      });
      setSatuans(updatedSatuan);
      AlertMessage("Berhasil Mengedit", 380, "success");

    }
  }

  const setSubmit = (e) => {
    e.preventDefault();
    // console.log(namaNewSatuan);
    if (namaNewSatuan.trim() === "") {
      setErrorInput("Input tidak boleh kosong.");
    } else if (
      satuans.some(
        (satuan) =>
          satuan.nama_satuan.toLowerCase() === namaNewSatuan.toLowerCase()
      )
    ) {
      setErrorInput("Satuan sudah ada dalam daftar.");
    } else {
      updateSatuan();
      onClose();
      setNamaNewSatuan("");
      setErrorInput("");
    }
  };

  return (
    <div className="font-pt_Sans">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-start text-2xl text-purple-600">
          Edit Data
        </div>
      </div>
      <form action="" onSubmit={setSubmit}>
        <div className="px-6 py-4 space-y-2 text-start ">
          <label
            htmlFor=""
            className="font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900"
          >
            Satuan
          </label>
          <input
            type="text"
            className="w-full h-10 font-pt_Sans focus:outline-none   focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:focus:bg-colorTwo dark:bg-colorDarkTwo dark:text-colorTwo/80 focus:dark:text-colorDarkOne border-gray-300 focus:border-purple-600  transition-transform ease-in  font-medium border-[1px] rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600"
            value={namaNewSatuan ? namaNewSatuan : namaSatuan}
            onChange={(e) => setNamaNewSatuan(e.target.value.toLowerCase())}
            placeholder={namaSatuan}
            autoFocus
          />
          {errorInput && (
            <div className="text-fnd text-xs -mt-3 px-2">{errorInput}</div>
          )}
        </div>
        <div className="px-6 pb-4 space-x-2 text-base flex justify-end">
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

export default FormEditSatuan;
