
import './App.css';
import AppHeader from './components/AppHeader';
import Ringkasan from './components/Ringkasan';

function App() {
  return (
    <>
      <AppHeader
        judul="RIFKI ALFATAH DESIGN"
        deskripsi="Katalog karya desain dan proyek kreatif."
      />

      <Ringkasan jumlahKarya={0} />
    </>
  );
}

export default App;
