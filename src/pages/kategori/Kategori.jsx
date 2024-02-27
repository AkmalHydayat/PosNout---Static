
import LayoutPage from "../../layout/PageLayout";
import ButtonAddKategori from "./ButtonAddKategori";
import TableKategori from "./TableKategori";
import AlertShow from "../../components/ui/Alert";
import DataKategori from "../../databases/DataKategori";

const Kategori = () => {
  const { dataKategori, setDataKategori } = DataKategori();

  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };


  return (
    <LayoutPage>
      <div className={`p-6 font-pt_Sans`}>
        <div className="font-medium text-3xl  mb-3 text-gray-900 dark:text-colorTwo transition-colors ease-in">
          Kategori Produk
        </div>
        <div className="rounded bg-colorTwo transition-all ease-in shadow-md border-[1px] border-gray-200 shadow-gray-300 dark:shadow-black dark:border-colorDarkOne dark:bg-colorDarkTwo ">
          <div className="px-6 py-3 border-b-[1px] transition-all ease-in  border-purple-300 dark:border-colorDarkOne ">
            <ButtonAddKategori
              kategoris={dataKategori}
              setKategoris={setDataKategori}
              AlertMessage={AlertMessage}
            />
          </div>
          <TableKategori
            kategoris={dataKategori}
            setKategoris={setDataKategori}
            AlertMessage={AlertMessage}
          />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Kategori;


