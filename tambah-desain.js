$(document).ready(function () {
    $("#form-tambah-karya").hide();

    $("#toggle-form").on("click", function () {
        $("#form-tambah-karya").stop(true, true).slideToggle();
    });

    $("#form-tambah-karya").on("submit", function (event) {
        event.preventDefault();

        const judul = $("#judul").val().trim();
        const kategori = $("#kategori").val();
        const tahun = $("#tahun").val();
        const deskripsi = $("#deskripsi").val().trim();
        const aplikasi = $("#aplikasi").val().trim() || "Belum diisi";
        const fileGambar = $("#gambar")[0].files[0];

        if (
            !judul ||
            !kategori ||
            !tahun ||
            !deskripsi ||
            !fileGambar
        ) {
            alert("Mohon lengkapi semua data dan pilih gambar.");
            return;
        }
        if (!fileGambar.type.startsWith("image/")) {
            alert("File harus berupa gambar.");
            return;
        }
        const gambarURL = URL.createObjectURL(fileGambar);
        const kartu = `
            <div class="col">
                <article class="card h-100 portfolio-card">

                    <img
                        src="${gambarURL}"
                        class="card-img-top p-3"
                        alt="${judul}"
                        style="height: 250px; object-fit: contain;"
                    >

                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title h5">
                            ${judul}
                        </h3>

                        <p class="card-text">
                            ${deskripsi}
                        </p>

                        <p class="mb-1">
                            <strong>Kategori:</strong> ${kategori}
                        </p>

                        <p class="mb-1">
                            <strong>Tahun:</strong> ${tahun}
                        </p>

                        <p class="mb-0">
                            <strong>Tools:</strong> ${aplikasi}
                        </p>
                    </div>

                </article>
            </div>
        `;
        $("#daftar-karya-baru").append(kartu);

        $("#notifikasi")
            .stop(true, true)
            .hide()
            .text("Karya desain berhasil ditambahkan!")
            .fadeIn();
        this.reset();
    });

    $("#form-tambah-karya").on("reset", function () {
        $("#notifikasi").stop(true, true).fadeOut();
    });

});