/* eslint-disable react-hooks/rules-of-hooks */
import FormInputProduk from "./FormInputProduk";
/* eslint-disable react/prop-types */
const FormAddProduk = ({
  setProduks,
  produks,
  onClose,
  AlertMessage,
  errorInput,
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
  setErrorInput,
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
}) => {
  const generateBarcode = () => {
    const prefix = "BRG";
    const lengthProduk = produks.length + 1
    const formattedId = lengthProduk.toString().padStart(5, "0");
    const barcode = `${prefix}${formattedId}`;

    return barcode;
  };
  const addProduk = () => {
    const barcode = generateBarcode();
    const newProduk = {
      id: produks.length + 1,
      barcode,
      nama_produk: newNamaProduk,
      satuan: newSatuanProduk,
      kategori: newKategoriProduk,
      harga_beli: newHargaBeliProduk,
      harga_jual: newHargaJualProduk,
      keuntungan: newHargaJualProduk - newHargaBeliProduk,
      stok: 0,
    };
    setProduks([...produks, newProduk]);
    AlertMessage("Berhasil Menambahkan Produk", 350, "success");

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
    } else if (newHargaBeliProduk.trim() === "") {
      setIsHargaBeliProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (newHargaJualProduk.trim() === "") {
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
      )
    ) {
      setErrorInput("Produk sudah ada dalam daftar.");
    } else {
      addProduk();
      setNewNamaProduk("");
      setNewSatuanProduk("");
      setNewKategoriProduk("");
      setNewHargaBeliProduk("");
      setNewHargaJualProduk("");
      setErrorInput("");
      onClose();

    }
  };
  return (
    <div className="font-pt_Sans ">
      <div className="border-b-[1px]  border-gray-300">
        <div className="px-6 py-3 text-2xl font-pt_Sans font-semibold text-purple-600">
          Add Data
        </div>
      </div>
      <form action="" onSubmit={setSubmit}>
        <FormInputProduk
          emptyNamaProdukStyle={emptyNamaProdukStyle}
          setIsNamaProdukEmpty={setIsNamaProdukEmpty}
          emptySatuanProdukStyle={emptySatuanProdukStyle}
          setIsSatuanProdukEmpty={setIsSatuanProdukEmpty}
          emptyKategoriProdukStyle={emptyKategoriProdukStyle}
          setIsKategoriProdukEmpty={setIsKategoriProdukEmpty}
          emptyHargaBeliProdukStyle={emptyHargaBeliProdukStyle}
          setIsHargaBeliProdukEmpty={setIsHargaBeliProdukEmpty}
          emptyHargaJualProdukStyle={emptyHargaJualProdukStyle}
          setIsHargaJualProdukEmpty={setIsHargaJualProdukEmpty}
          newNamaProduk={newNamaProduk}
          setNewNamaProduk={setNewNamaProduk}
          newSatuanProduk={newSatuanProduk}
          setNewSatuanProduk={setNewSatuanProduk}
          newKategoriProduk={newKategoriProduk}
          setNewKategoriProduk={setNewKategoriProduk}
          newHargaBeliProduk={newHargaBeliProduk}
          setNewHargaBeliProduk={setNewHargaBeliProduk}
          newHargaJualProduk={newHargaJualProduk}
          setNewHargaJualProduk={setNewHargaJualProduk}
          errorInput={errorInput}
        />
        <div className="px-6 py-4 space-x-2 text-base flex border-t-[1px] border-gray-300 justify-end ">
          <button
            className={`bg-colorTwo dark:border-[1px]  dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group px-4 py-1  `}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddProduk;
