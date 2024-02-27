/* eslint-disable react/prop-types */

const FormAddSatuan = ({
  onClose,
  satuans,
  setSatuans,
  AlertMessage,
  errorInput,
  setErrorInput,
  namaNewSatuan,
  setNamaNewSatuan,
}) => {

  const addSatuan = () => {
    const newSatuan = {
      id: satuans.length + 1,
      nama_satuan: namaNewSatuan
    };
    setSatuans([...satuans, newSatuan]);
    AlertMessage("Berhasil Menambahkan Satuan", 350, "success");

  }

  const setSubmit = (e) => {
    e.preventDefault();
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
      addSatuan();
      setNamaNewSatuan("");
      setErrorInput("");
      onClose();
    }
  };
  return (
    <div className="">
      <div className="border-b-[1px]  border-gray-300">
        <div className="px-6 py-3 text-2xl font-pt_Sans font-semibold text-purple-600">
          Add Data
        </div>
      </div>
      <form action="" onSubmit={setSubmit}>
        <div className="px-6 py-4 space-y-2 ">
          <label
            htmlFor=""
            className="font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900"
          >
            Satuan
          </label>
          <input
            type="text"
            autoFocus
            className="w-full dark:bg-colorDarkTwo dark:text-colorTwo focus:dark:text-colorDarkOne  h-10 font-pt_Sans focus:outline-none   focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:focus:bg-colorTwo focus:dark:bg-colorTwo  border-gray-300 focus:border-purple-600  transition-transform ease-in  font-medium border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600"
            placeholder="Pcs, Box, Lusin, Dus, etc"
            value={namaNewSatuan}
            onChange={(e) => {
              setNamaNewSatuan(e.target.value.toLowerCase());
            }}
          />
        </div>
        {errorInput && (
          <div className="text-fnd text-xs -mt-3 px-6">{errorInput}</div>
        )}
        <div className="px-6 pb-4 space-x-2 text-base flex justify-end ">
          <button
            className={`bg-colorTwo dark:border-[1px]  dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group px-4 py-1  `}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddSatuan;
