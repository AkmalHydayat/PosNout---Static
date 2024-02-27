import { useState } from "react";

const DataKaryawan = () => {
  const [listKaryawan, setListKaryawan] = useState([
    {
      id: 1,
      username: "Inggrid Lorse",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "InggridLorse.com",
      role: "Manager",
    },
    {
      id: 2,
      username: "John Doe",
      img: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "JohnDoe.com",
      role: "Developer",
    },
    {
      id: 3,
      username: "Jason Sybil",
      img: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "JosanSybil.com",
      role: "Admin",
    },
    {
      id: 4,
      username: "Agatha Swance",
      img: "https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "AgathaSwance.com",
      role: "Karyawan",
    },
    {
      id: 5,
      username: "Monna lee",
      img: "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "MonnaLee.com",
      role: "Karyawan",
    },
  ]);
  return {
    listKaryawan,
    setListKaryawan,
  };
};

export default DataKaryawan;
