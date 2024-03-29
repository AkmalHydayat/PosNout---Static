/* eslint-disable react/prop-types */
import FormAddKategori from "./FormAddKategori";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import ModalAddKategori from "./ModalAddKategori";
const ButtonAddKategori = ({ kategoris, setKategoris, AlertMessage }) => {
  const [showModal, setShowModal] = useState(false);
  const [errorInput, setErrorInput] = useState("");
  return (
    <div>
      <ModalAddKategori
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}

        setErrorInput={setErrorInput}
        buttonLabel={
          <div className="flex items-center  space-x-2">
            <FiPlusCircle className="text-lg" />
            <div className="text-base  font-semibold font-pt_Sans">Add</div>
          </div>
        }
        className={`bg-purple-600 dark:shadow-black text-colorTwo shadow-cus2 hover:shadow-sm2 hover:shadow-gray-400 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
        modalContent={
          <FormAddKategori
            AlertMessage={AlertMessage}
            setKategoris={setKategoris}
            kategoris={kategoris}
            onClose={() => setShowModal(false)}
            errorInput={errorInput}
            setErrorInput={setErrorInput}
          />
        }
      />
    </div>
  );
};

export default ButtonAddKategori;
