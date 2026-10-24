
import { useState } from 'react';
import './FormDesain.css';

function FormDesain({ onTambahDesain }) {
  const [nama, setNama] = useState('');
  const [kategori, setKategori] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!nama.trim() || !kategori || !deskripsi.trim()) {
      return;
    }

    const desainBaru = {
      id: crypto.randomUUID(),
      nama: nama.trim(),
      kategori,
      deskripsi: deskripsi.trim(),
    };

    onTambahDesain(desainBaru);

    setNama('');
    setKategori('');
    setDeskripsi('');
  }

  return (
    <section className="form-desain">
      <h2>Tambah Karya Desain</h2>
      <p>Masukkan informasi karya yang ingin kamu simpan.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nama-desain">Nama Karya</label>
        <input
          id="nama-desain"
          type="text"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
          placeholder="Masukkan nama karya"
          required
        />

        <label htmlFor="kategori-desain">Kategori</label>
        <select
          id="kategori-desain"
          value={kategori}
          onChange={(event) => setKategori(event.target.value)}
          required
        >
          <option value="">Pilih kategori</option>
          <option value="Poster">Poster</option>
          <option value="Banner">Banner</option>
          <option value="Feed Instagram">Feed Instagram</option>
          <option value="Editing Foto">Editing Foto</option>
          <option value="Sertifikat">Sertifikat</option>
        </select>

        <label htmlFor="deskripsi-desain">Deskripsi</label>
        <textarea
          id="deskripsi-desain"
          value={deskripsi}
          onChange={(event) => setDeskripsi(event.target.value)}
          placeholder="Ceritakan singkat tentang karya ini"
          rows="4"
          required
        />

        <button type="submit">Tambah Karya</button>
      </form>
    </section>
  );
}

export default FormDesain;