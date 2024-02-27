

import LayoutPage from "../../layout/PageLayout";
import ButtonAddSatuan from "./ButtonAddSatuan";
import TableSatuan from "./TableSatuan";
import AlertShow from "../../components/ui/Alert";
import DataSatuan from "../../databases/DataSatuan";

/* eslint-disable react/prop-types */
const Satuan = () => {
  const { dataSatuan, setDataSatuan } = DataSatuan()
  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };

  return (
    <LayoutPage>
      <div className={` p-6  font-pt_Sans`}>
        <div className="font-medium text-3xl  mb-3 text-gray-900 dark:text-colorTwo transition-colors ease-in">
          Satuan Produk
        </div>
        <div className="rounded bg-colorTwo transition-all ease-in shadow-md border-[1px] border-gray-200 shadow-gray-300 dark:shadow-black dark:border-colorDarkOne dark:bg-colorDarkTwo ">
          <div className="px-6 py-3 border-b-[1px] transition-all ease-in  border-purple-300 dark:border-colorDarkOne ">
            <ButtonAddSatuan
              satuans={dataSatuan}
              setSatuans={setDataSatuan}
              AlertMessage={AlertMessage}
            />
          </div>
          <TableSatuan
            satuans={dataSatuan}
            setSatuans={setDataSatuan}
            AlertMessage={AlertMessage}
          />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Satuan;
