const daftarKarya = [
    {
        id: 1,
        judul: "Poster Design 01",
        kategori: "Poster",
        gambar: "aset/poster 1.png",
        deskripsi: "Salah satu karya poster dalam portofolio desain saya.",
        tahun: "2026",
        tools: "Canva"
    },
    {
        id: 2,
        judul: "Poster Design 02",
        kategori: "Poster",
        gambar: "aset/poster 2.png",
        deskripsi: "Karya poster dengan pendekatan visual kreatif.",
        tahun: "2026",
        tools: "Canva"
    },
    {
        id: 3,
        judul: "Poster Design 03",
        kategori: "Poster",
        gambar: "aset/poster 3.png",
        deskripsi: "Poster dengan komposisi tipografi dan ilustrasi.",
        tahun: "2026",
        tools: "Canva"
    }
];

function cariKarya(kataKunci = "", kategori = "Semua") {
    return daftarKarya.filter(function (karya) {
        const cocokJudul = karya.judul
            .toLowerCase()
            .includes(kataKunci.trim().toLowerCase());

        const cocokKategori =
            kategori === "Semua" ||
            karya.kategori.toLowerCase() === kategori.toLowerCase();

        return cocokJudul && cocokKategori;
    });
}

function tampilkanKarya(dataKarya) {
    const container = document.getElementById("portfolio-list");

    if (!container) return;

    if (dataKarya.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <p class="text-center">
                    Karya desain tidak ditemukan.
                </p>
            </div>
        `;
        return;
    }

    container.innerHTML = dataKarya.map(function (karya) {
        return `
            <div class="col">
                <article class="card portfolio-card h-100">
                    <div class="portfolio-image-wrapper">
                        <img
                            src="${karya.gambar}"
                            class="portfolio-image"
                            alt="${karya.judul}"
                            loading="lazy"
                        >
                    </div>

                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title h5">${karya.judul}</h3>

                        <p class="card-text">${karya.deskripsi}</p>

                        <button
                            type="button"
                            class="btn btn-primary detail-button mt-auto"
                            data-id="${karya.id}"
                        >
                            Lihat Detail
                        </button>
                    </div>
                </article>
            </div>
        `;
    }).join("");
}
function perbaruiTampilan() {
    const inputCari = document.getElementById("cari-karya");
    const filterKategori = document.getElementById("filter-kategori");
    const jumlahKarya = document.getElementById("jumlah-karya");

    if (!inputCari || !filterKategori || !jumlahKarya) return;

    const hasil = cariKarya(
        inputCari.value,
        filterKategori.value
    );

    tampilkanKarya(hasil);
    jumlahKarya.textContent = hasil.length;
}

$(document).ready(function () {
    perbaruiTampilan();
    $("#cari-karya").on("input", function () {
        perbaruiTampilan();
    });
    $("#filter-kategori").on("change", function () {
        perbaruiTampilan();
    });

    $("#portfolio-list").on("click", ".detail-button", function () {
        const id = Number($(this).attr("data-id"));

        const karya = daftarKarya.find(function (item) {
            return item.id === id;
        });

        if (!karya) return;

        const dialog = document.getElementById("detail-dialog");

        if (!dialog) {
            alert("Dialog detail tidak ditemukan di HTML.");
            return;
        }

        document.getElementById("dialog-title").textContent = karya.judul;
        document.getElementById("dialog-image").src = karya.gambar;
        document.getElementById("dialog-image").alt = karya.judul;
        document.getElementById("dialog-description").textContent =
            karya.deskripsi;

        const kategori = document.getElementById("dialog-category");
        const tahun = document.getElementById("dialog-year");
        const tools = document.getElementById("dialog-tools");

        if (kategori) kategori.textContent = karya.kategori;
        if (tahun) tahun.textContent = karya.tahun;
        if (tools) tools.textContent = karya.tools;

        if (!dialog.open) {
            dialog.showModal();
        }
    });
    $("#close-dialog").on("click", function () {
        const dialog = document.getElementById("detail-dialog");

        if (dialog && dialog.open) {
            dialog.close();
        }
    });

    const dialog = document.getElementById("detail-dialog");
    const gambarDetail = document.getElementById("dialog-image");

    if (dialog && gambarDetail) {
        dialog.addEventListener("close", function () {
            gambarDetail.src = "";
        });
    }
    $("#jumlah-karya").css("cursor", "pointer");

    $("#jumlah-karya").on("click", function () {
        $("#portfolio-list").slideToggle();
    });
});