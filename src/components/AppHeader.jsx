import './AppHeader.css';
function AppHeader({ judul, deskripsi }) {
  return (
    <header className="app-header">
      <div className="app-header-content">
        <p className="app-header-label">MY CREATIVE SPACE</p>
        <h1>{judul}</h1>
        <p className="app-header-description">{deskripsi}</p>
      </div>
    </header>
  );
}

export default AppHeader;