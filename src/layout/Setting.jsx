/* eslint-disable react/prop-types */
import ModalSetting from "./ModalSetting";
import { BsGear } from "react-icons/bs";
import { useState } from "react";
import AlertShow from "../components/ui/Alert";

const Setting = () => {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editUsername, SetEditUsername] = useState("");
  const [editEmail, SetEditEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };

  const updateProfile = (e) => {
    e.preventDefault();
    AlertMessage("Berhasil Mengupdate Data", 330, "success");
    setEdit(false);
  };

  return (
    <div>
      <ModalSetting
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        setPassword={setPassword}
        setConfPassword={setConfPassword}
        edit={edit}
        setEdit={setEdit}
        buttonLabel={
          <div>
            <BsGear className="text-xl text-gray-900 dark:text-colorTwo group-hover:text-purple-600 group-hover:scale-110 transition-all ease-in" />
          </div>
        }
        className={`group p-2 rounded-xl`}
        modalContent={
          <div className="">
            <div className="text-gray-900 dark:text-colorTwo py-5 transition-all ease-in border-gray-200 dark:border-colorDarkOne border-b-[1px] mx-5">
              <div className="text-gray-900 text-2xl dark:text-colorTwo text-center">
                Profile
              </div>
            </div>
            <form
              className="text-gray-900 dark:text-colorTwo pt-5 mb-10 font-medium text-base px-8 text-left space-y-3"
              onSubmit={updateProfile}
            >
              <div className="space-y-1">
                <label htmlFor="">Nama</label>
                <input
                  type="text"
                  className={`w-full h-9 focus:outline-none border rounded transition-colors ease-in border-gray-200 dark:border-colorDarkOne px-2 font-normal ${edit
                    ? " dark:border-colorDarkOne dark:bg-colorDarkTwo"
                    : "bg-gray-400/60 dark:bg-colorDarkOne/60  cursor-default"
                    }`}
                  value={editUsername ? editUsername : "Admin"}
                  onChange={(e) => SetEditUsername(e.target.value)}
                  required
                  readOnly={edit ? false : true}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="">Role</label>
                <input
                  type="text"
                  className={`w-full h-9 focus:outline-none border rounded transition-colors ease-in border-gray-200 dark:border-colorDarkOne px-2 font-normal bg-gray-300 dark:bg-colorDarkOne/60  cursor-default`}
                  value={"Admin"}
                  readOnly
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className={`w-full h-9 focus:outline-none border rounded transition-colors ease-in border-gray-200 dark:border-colorDarkOne px-2 font-normal ${edit
                    ? " dark:border-colorDarkOne dark:bg-colorDarkTwo"
                    : "bg-gray-400/60 dark:bg-colorDarkOne/60  cursor-default"
                    }`}
                  value={editEmail ? editEmail : "email"}
                  onChange={(e) => SetEditEmail(e.target.value)}
                  required
                  readOnly={edit ? false : true}
                />
              </div>
              {/* password */}
              <div
                className={` transition-all ease-in ${edit
                  ? "space-y-3 visible opacity-100 h-[140px] delay-300"
                  : "invisible h-0 opacity-0 "
                  }  `}
              >
                <div className="space-y-1">
                  <label htmlFor="">Password</label>
                  <input
                    type="text"
                    className={`w-full h-9 focus:outline-none border rounded transition-colors ease-in border-gray-200 dark:border-colorDarkOne px-2 font-normal ${edit
                      ? " dark:border-colorDarkOne dark:bg-colorDarkTwo"
                      : "bg-gray-400/60 dark:bg-colorDarkOne/60  cursor-default"
                      }`}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    readOnly={edit ? false : true}
                    placeholder="********"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="text"
                    className={`w-full h-9 focus:outline-none border rounded transition-colors ease-in border-gray-200 dark:border-colorDarkOne px-2 font-normal ${edit
                      ? " dark:border-colorDarkOne dark:bg-colorDarkTwo"
                      : "bg-gray-400/60 dark:bg-colorDarkOne/60  cursor-default"
                      }`}
                    readOnly={edit ? false : true}
                    placeholder="********"
                    value={confPassword}
                    onChange={(e) => {
                      setConfPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* button */}
              <div className="flex">
                <button
                  type="button"
                  onClick={() => setEdit(true)}
                  className={` ${edit
                    ? "  w-0 hidden"
                    : " w-[60px] block py-1.5 text-sm text-white font-semibold rounded-lg border border-colorTwo dark:border-colorDarkTwo  hover:text-white hover:bg-purple-700 bg-purple-600 hover:border-transparent dark:hover:border-transparent focus:outline-none"
                    }   transition-all ease-in `}
                >
                  Edit
                </button>
                <button
                  type="submit"
                  className={` ${edit
                    ? "visible w-[60px]  translate-y-0"
                    : "invisible -translate-y-5 w-0"
                    } py-1.5 text-sm text-white font-semibold rounded-lg border border-colorTwo dark:border-colorDarkTwo  hover:text-white hover:bg-purple-700 bg-purple-600 hover:border-transparent dark:hover:border-transparent focus:outline-none transition-all ease-in `}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEdit(false);
                    setPassword("");
                    setConfPassword("");
                  }}
                  className={` ${edit ? "visible w-[60px]" : "invisible w-0"
                    } py-1.5 text-sm text-white font-semibold ms-1 rounded-lg border border-colorTwo dark:border-colorDarkTwo  hover:text-white hover:bg-purple-700 bg-purple-600 hover:border-transparent dark:hover:border-transparent focus:outline-none transition-transform ease-in duration-200`}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        }
      />
    </div>
  );
};

export default Setting;