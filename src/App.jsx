import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kategori from "./pages/kategori/Kategori";
import Stok from "./pages/stok/Stok";
import Transaksi from "./pages/transaksi/Transaksi";
import LaporanPenjualan from "./pages/laporanPenjualan/LaporanPenjualan";
import User from "./pages/karyawan/Karyawan";
import LoginPage from "./pages/login/Login";
import Satuan from "./pages/satuanProduk/Satuan";
import Produk from "./pages/daftarProduk/Produk";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/register/Register";
import Welcome from "./pages/dashboard/Welcome";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Dashboard" element={<Welcome />} />
        <Route path="/KategoriProduk" element={<Kategori />} />
        <Route path="/Stok" element={<Stok />} />
        <Route path="/Transaksi" element={<Transaksi />} />
        <Route path="/SatuanProduk" element={<Satuan />} />
        <Route path="/DaftarProduk" element={<Produk />} />
        <Route path="/LaporanPenjualan" element={<LaporanPenjualan />} />
        <Route path="/Karyawan" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
