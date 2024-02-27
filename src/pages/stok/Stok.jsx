import LayoutPage from "../../layout/PageLayout";
import ButtonAddStok from "./ButtonAddStok";
import TableStok from "./TableStok";
import DataProduk from "../../databases/DataProduk";
import DataStok from "../../databases/DataStok";

/* eslint-disable react/prop-types */
const Stok = () => {
  const { produkList, setProdukList } = DataProduk()
  const { dataStok, setDataStok } = DataStok()

  return (
    <LayoutPage>
      <div className={` p-6  font-pt_Sans `}>
        <div className="font-medium text-3xl  mb-3 text-gray-900 dark:text-colorTwo transition-colors ease-in">
          Stok Produk
        </div>
        <div className="rounded bg-colorTwo transition-all ease-in shadow-md border-[1px] border-gray-200 shadow-gray-300 dark:shadow-black dark:border-colorDarkOne dark:bg-colorDarkTwo ">
          <div className="px-6 py-3 border-b-[1px] transition-all ease-in  border-purple-300 dark:border-colorDarkOne ">
            <ButtonAddStok
              setStoks={setDataStok}
              produks={produkList}
              setProduks={setProdukList}
              stoks={dataStok}
            />
          </div>
          <TableStok stoks={dataStok} setStoks={setDataStok} />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Stok;
