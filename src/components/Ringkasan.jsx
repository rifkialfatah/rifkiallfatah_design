
import './Ringkasan.css';

function Ringkasan({ jumlahKarya }) {
  return (
    <section className="ringkasan">
      <div className="ringkasan-card">
        <p className="ringkasan-label">Total Karya Desain</p>
        <p className="ringkasan-number">{jumlahKarya}</p>
        <p className="ringkasan-description">
          Karya yang tersimpan dalam katalog
        </p>
      </div>
    </section>
  );
}

export default Ringkasan;