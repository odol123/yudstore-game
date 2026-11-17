/* =========================================================
   Yudstore Game
   ========================================================= */
(() => {
  "use strict";

  /* ---------------------------------------------------------
     Ganti nomor ini dengan nomor WhatsApp Anda.
     Format internasional, tanpa tanda + dan tanpa spasi.
     --------------------------------------------------------- */
  const WA_NUMBER = "6281234567890";

  /* ---------------------------------------------------------
     DAFTAR GAME
     --------------------------------------------------------- */
  const GAMES = {
    ml:   { nama: "Mobile Legends", singkat: "ML",   kelas: "ml"   },
    ff:   { nama: "Free Fire",      singkat: "FF",   kelas: "ff"   },
    pubg: { nama: "PUBG Mobile",    singkat: "PUBG", kelas: "pubg" },
    gi:   { nama: "Genshin Impact", singkat: "GI",   kelas: "gi"   },
    val:  { nama: "Valorant",       singkat: "VAL",  kelas: "val"  },
    cod:  { nama: "Call of Duty",   singkat: "COD",  kelas: "cod"  },
  };

  /* ---------------------------------------------------------
     DAFTAR AKUN
     ---------------------------------------------------------
     Ubah atau tambah data di sini.
     - id     : wajib unik
     - game   : kunci dari GAMES di atas
     - nama   : judul akun
     - rank   : rank utama
     - harga  : angka rupiah, tanpa titik
     - label  : "Hot", "Baru", "Murah", atau kosongkan
     - terjual: true kalau sudah laku
     - isi    : daftar keunggulan akun
     - login  : metode login
     - desk   : penjelasan singkat
     - populer: angka untuk urutan "Paling populer"
     --------------------------------------------------------- */
  const AKUN = [
    {
      id: "ml-01",
      game: "ml",
      nama: "Akun MLBB Mythical Glory",
      rank: "Mythical Glory",
      harga: 1850000,
      label: "Hot",
      terjual: false,
      login: "Moonton + Email",
      isi: ["Winrate 61%", "142 skin", "12 hero lengkap emblem"],
      desk: "Akun naik sendiri dari Epic, tidak pernah diboost. Emblem sudah full untuk lima role.",
      populer: 98,
    },
    {
      id: "ml-02",
      game: "ml",
      nama: "Akun MLBB Mythic V",
      rank: "Mythic V",
      harga: 475000,
      label: "Murah",
      terjual: false,
      login: "Moonton + Email",
      isi: ["Winrate 54%", "38 skin", "Koleksi hero 74"],
      desk: "Cocok untuk yang mau langsung main rank tinggi tanpa grinding dari bawah.",
      populer: 84,
    },
    {
      id: "ml-03",
      game: "ml",
      nama: "Akun MLBB Epic Collector",
      rank: "Epic I",
      harga: 260000,
      label: "",
      terjual: true,
      login: "Moonton + Email",
      isi: ["Winrate 52%", "21 skin", "3 skin Collector"],
      desk: "Akun santai dengan beberapa skin Collector langka.",
      populer: 61,
    },
    {
      id: "ff-01",
      game: "ff",
      nama: "Akun FF Grandmaster",
      rank: "Grandmaster",
      harga: 920000,
      label: "Hot",
      terjual: false,
      login: "Facebook + Google",
      isi: ["Winrate 58%", "64 skin", "Bundle langka 9"],
      desk: "Sudah terhubung ke dua metode login agar mudah dipindah tangan.",
      populer: 93,
    },
    {
      id: "ff-02",
      game: "ff",
      nama: "Akun FF Heroic",
      rank: "Heroic",
      harga: 385000,
      label: "Baru",
      terjual: false,
      login: "Google",
      isi: ["Winrate 55%", "27 skin", "Pet level 4"],
      desk: "Baru masuk stok. Belum pernah dipakai untuk turnamen.",
      populer: 78,
    },
    {
      id: "ff-03",
      game: "ff",
      nama: "Akun FF Diamond Starter",
      rank: "Diamond",
      harga: 145000,
      label: "Murah",
      terjual: false,
      login: "Google",
      isi: ["Winrate 51%", "12 skin", "Akun bersih"],
      desk: "Pilihan hemat untuk mulai main dengan koleksi awal yang rapi.",
      populer: 55,
    },
    {
      id: "pubg-01",
      game: "pubg",
      nama: "Akun PUBG Conqueror",
      rank: "Conqueror",
      harga: 1350000,
      label: "Hot",
      terjual: false,
      login: "Twitter + Email",
      isi: ["K/D 4.1", "88 outfit", "Mythic outfit 6"],
      desk: "Pernah masuk peringkat Conqueror dua musim berturut-turut.",
      populer: 90,
    },
    {
      id: "pubg-02",
      game: "pubg",
      nama: "Akun PUBG Ace Master",
      rank: "Ace Master",
      harga: 620000,
      label: "",
      terjual: false,
      login: "Email",
      isi: ["K/D 3.2", "41 outfit", "Skin senjata 23"],
      desk: "Statistik stabil karena dimainkan satu orang sejak awal.",
      populer: 72,
    },
    {
      id: "gi-01",
      game: "gi",
      nama: "Akun Genshin AR 58",
      rank: "AR 58",
      harga: 2400000,
      label: "Hot",
      terjual: false,
      login: "Email + Username",
      isi: ["5 karakter bintang 5", "18 karakter", "Primogem tersisa 12.400"],
      desk: "Roster luas dengan lima karakter bintang lima hasil gacha sendiri.",
      populer: 96,
    },
    {
      id: "gi-02",
      game: "gi",
      nama: "Akun Genshin AR 45",
      rank: "AR 45",
      harga: 780000,
      label: "Baru",
      terjual: false,
      login: "Email",
      isi: ["2 karakter bintang 5", "11 karakter", "Primogem tersisa 4.100"],
      desk: "Akun bersih tanpa riwayat pelanggaran, cocok untuk main santai.",
      populer: 69,
    },
    {
      id: "val-01",
      game: "val",
      nama: "Akun Valorant Immortal",
      rank: "Immortal",
      harga: 1650000,
      label: "Hot",
      terjual: false,
      login: "Riot ID + Email",
      isi: ["12 skin senjata", "3 skin eksklusif", "Rank peak Immortal 2"],
      desk: "Rank peak Immortal 2 dengan riwayat pertandingan yang bersih.",
      populer: 89,
    },
    {
      id: "val-02",
      game: "val",
      nama: "Akun Valorant Diamond",
      rank: "Diamond",
      harga: 540000,
      label: "",
      terjual: true,
      login: "Riot ID + Email",
      isi: ["6 skin senjata", "Rank peak Diamond 3", "Akun bersih"],
      desk: "Akun menengah dengan koleksi skin senjata yang cukup lengkap.",
      populer: 58,
    },
    {
      id: "cod-01",
      game: "cod",
      nama: "Akun COD Mobile Legendary",
      rank: "Legendary",
      harga: 720000,
      label: "Baru",
      terjual: false,
      login: "Activision + Google",
      isi: ["K/D 3.8", "34 skin", "Mythic weapon 4"],
      desk: "Terhubung ke dua metode login sehingga proses pindah tangan cepat.",
      populer: 74,
    },
    {
      id: "cod-02",
      game: "cod",
      nama: "Akun COD Mobile Master",
      rank: "Master",
      harga: 310000,
      label: "Murah",
      terjual: false,
      login: "Google",
      isi: ["K/D 2.6", "15 skin", "Akun bersih"],
      desk: "Harga ringan dengan statistik yang masih enak dipakai naik rank.",
      populer: 63,
    },
  ];

  /* ---------------------------------------------------------
     PEMBANTU
     --------------------------------------------------------- */
  const rp = (n) => "Rp" + n.toLocaleString("id-ID");
  const el = (id) => document.getElementById(id);

  const LABEL_KELAS = { Hot: "hot", Baru: "baru", Murah: "murah" };

  /* ---------------------------------------------------------
     KEADAAN
     --------------------------------------------------------- */
  const state = {
    filter: "semua",
    cari: "",
    urut: "populer",
    sembunyikanTerjual: false,
  };

  /* ---------------------------------------------------------
     KERANJANG
     --------------------------------------------------------- */
  const KUNCI_SIMPAN = "yudstore-game-keranjang";

  let keranjang = [];
  try {
    const simpan = localStorage.getItem(KUNCI_SIMPAN);
    if (simpan) {
      const isi = JSON.parse(simpan);
      if (Array.isArray(isi)) {
        // Buang id yang sudah tidak ada di katalog
        keranjang = isi.filter((id) => AKUN.some((a) => a.id === id));
      }
    }
  } catch {
    keranjang = [];
  }

  const simpanKeranjang = () => {
    try {
      localStorage.setItem(KUNCI_SIMPAN, JSON.stringify(keranjang));
    } catch {
      /* localStorage penuh atau diblokir, keranjang tetap jalan di memori */
    }
  };

  const akunById = (id) => AKUN.find((a) => a.id === id);

  const totalKeranjang = () =>
    keranjang.reduce((jumlah, id) => {
      const a = akunById(id);
      return a ? jumlah + a.harga : jumlah;
    }, 0);

  /* ---------------------------------------------------------
     TOAST
     --------------------------------------------------------- */
  const wadahToast = el("toasts");

  function toast(pesan) {
    if (!wadahToast) return;
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
    const span = document.createElement("span");
    span.textContent = pesan;
    t.appendChild(span);
    wadahToast.appendChild(t);
    setTimeout(() => {
      t.classList.add("is-out");
      setTimeout(() => t.remove(), 300);
    }, 2600);
  }

  /* ---------------------------------------------------------
     RENDER KARTU
     --------------------------------------------------------- */
  const grid = el("grid");
  const kosong = el("kosong");
  const hasil = el("hasil");

  function kartuHTML(a) {
    const g = GAMES[a.game];
    const label = a.label && LABEL_KELAS[a.label] ? a.label : "";
    return `
      <article class="card glass ${a.terjual ? "is-sold" : ""}" data-id="${a.id}">
        <div class="card__thumb card__thumb--${g.kelas}">
          ${label ? `<span class="card__badge">${label}</span>` : ""}
          <span class="mark">${g.singkat}</span>
          ${a.terjual ? '<div class="card__sold">Terjual</div>' : ""}
        </div>
        <div class="card__body">
          <div class="card__top">
            <div>
              <h3 class="card__name">${a.nama}</h3>
              <p class="card__game">${g.nama}</p>
            </div>
            <span class="rank">${a.rank}</span>
          </div>

          <ul class="specs">
            ${a.isi.map((i) => `<li><span class="k">Isi</span><span class="v">${i}</span></li>`).join("")}
            <li><span class="k">Login</span><span class="v">${a.login}</span></li>
          </ul>

          <div class="card__foot">
            <span class="price">${rp(a.harga)}</span>
            <div class="card__acts">
              <button class="iconbtn" type="button" data-detail="${a.id}"
                      aria-label="Lihat detail ${a.nama}">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="8.5"/>
                  <path d="M12 11v5M12 8h.01"/>
                </svg>
              </button>
              <button class="btn--add" type="button" data-add="${a.id}"
                      ${a.terjual ? "disabled" : ""}>
                ${a.terjual ? "Habis" : "Beli"}
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function daftarTampil() {
    const kata = state.cari.trim().toLowerCase();

    let daftar = AKUN.filter((a) => {
      if (state.filter !== "semua" && a.game !== state.filter) return false;
      if (state.sembunyikanTerjual && a.terjual) return false;
      if (!kata) return true;
      const g = GAMES[a.game];
      const teks = [a.nama, g.nama, a.rank, a.login, ...a.isi].join(" ").toLowerCase();
      return teks.includes(kata);
    });

    const urut = {
      populer: (a, b) => b.populer - a.populer,
      murah: (a, b) => a.harga - b.harga,
      mahal: (a, b) => b.harga - a.harga,
      nama: (a, b) => a.nama.localeCompare(b.nama, "id"),
    };
    daftar.sort(urut[state.urut] || urut.populer);

    return daftar;
  }

  function render() {
    const daftar = daftarTampil();

    grid.innerHTML = daftar.map(kartuHTML).join("");
    kosong.hidden = daftar.length > 0;

    const total = AKUN.length;
    const terjual = AKUN.filter((a) => a.terjual).length;
    if (daftar.length === total) {
      hasil.innerHTML = `Menampilkan <strong>${total}</strong> akun, <strong>${total - terjual}</strong> di antaranya masih tersedia.`;
    } else {
      hasil.innerHTML = `Menampilkan <strong>${daftar.length}</strong> dari <strong>${total}</strong> akun.`;
    }
  }

  /* ---------------------------------------------------------
     CHIP FILTER
     --------------------------------------------------------- */
  const chips = el("chips");

  function renderChips() {
    const daftar = [{ kunci: "semua", nama: "Semua Game" }].concat(
      Object.entries(GAMES).map(([kunci, g]) => ({ kunci, nama: g.nama }))
    );
    chips.innerHTML = daftar
      .map(
        (d) =>
          `<button class="chip ${state.filter === d.kunci ? "is-active" : ""}"
                   type="button" data-filter="${d.kunci}"
                   aria-pressed="${state.filter === d.kunci}">${d.nama}</button>`
      )
      .join("");
  }

  chips.addEventListener("click", (e) => {
    const tombol = e.target.closest("[data-filter]");
    if (!tombol) return;
    state.filter = tombol.dataset.filter;
    renderChips();
    render();
  });

  /* ---------------------------------------------------------
     CARI, URUT, SEMBUNYIKAN TERJUAL
     --------------------------------------------------------- */
  const inputCari = el("cari");
  inputCari.addEventListener("input", () => {
    state.cari = inputCari.value;
    render();
  });

  el("urut").addEventListener("change", (e) => {
    state.urut = e.target.value;
    render();
  });

  el("sembunyikanTerjual").addEventListener("change", (e) => {
    state.sembunyikanTerjual = e.target.checked;
    render();
  });

  /* ---------------------------------------------------------
     KERANJANG
     --------------------------------------------------------- */
  const drawer = el("drawer");
  const overlay = el("overlay");
  const isiKeranjang = el("isiKeranjang");
  const jumlahKeranjang = el("jumlahKeranjang");
  const totalKeranjangEl = el("totalKeranjang");
  const tombolCheckout = el("checkout");

  function renderKeranjang() {
    const jumlah = keranjang.length;
    jumlahKeranjang.textContent = String(jumlah);
    jumlahKeranjang.hidden = jumlah === 0;

    if (jumlah === 0) {
      isiKeranjang.innerHTML = `
        <div class="drawer__empty">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3.5 5h2l2.2 9.5a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.5L20.5 8H6"/>
            <circle cx="10" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/>
          </svg>
          <span>Keranjang masih kosong. Pilih akun dulu di katalog.</span>
        </div>`;
    } else {
      isiKeranjang.innerHTML = keranjang
        .map((id) => {
          const a = akunById(id);
          if (!a) return "";
          const g = GAMES[a.game];
          return `
            <div class="item">
              <div class="item__thumb card__thumb--${g.kelas}">${g.singkat}</div>
              <div>
                <p class="item__name">${a.nama}</p>
                <p class="item__meta">${g.nama} · ${a.rank}</p>
              </div>
              <span class="item__price">${rp(a.harga)}</span>
              <button class="item__del" type="button" data-hapus="${a.id}">Hapus</button>
            </div>`;
        })
        .join("");
    }

    totalKeranjangEl.textContent = rp(totalKeranjang());
    tombolCheckout.disabled = jumlah === 0;
  }

  function bukaKeranjang() {
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add("is-open"));
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
  }

  function tutupKeranjang() {
    overlay.classList.remove("is-open");
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    setTimeout(() => {
      if (!overlay.classList.contains("is-open")) overlay.hidden = true;
    }, 300);
  }

  el("bukaKeranjang").addEventListener("click", bukaKeranjang);
  el("tutupKeranjang").addEventListener("click", tutupKeranjang);
  overlay.addEventListener("click", tutupKeranjang);

  function tambah(id) {
    const a = akunById(id);
    if (!a || a.terjual) return;
    if (keranjang.includes(id)) {
      toast("Akun ini sudah ada di keranjang.");
      return;
    }
    keranjang.push(id);
    simpanKeranjang();
    renderKeranjang();
    toast(`${a.nama} masuk keranjang.`);
  }

  isiKeranjang.addEventListener("click", (e) => {
    const tombol = e.target.closest("[data-hapus]");
    if (!tombol) return;
    keranjang = keranjang.filter((id) => id !== tombol.dataset.hapus);
    simpanKeranjang();
    renderKeranjang();
  });

  el("kosongkanKeranjang").addEventListener("click", () => {
    if (keranjang.length === 0) return;
    keranjang = [];
    simpanKeranjang();
    renderKeranjang();
    toast("Keranjang dikosongkan.");
  });

  /* ---------------------------------------------------------
     CHECKOUT
     --------------------------------------------------------- */
  tombolCheckout.addEventListener("click", () => {
    if (keranjang.length === 0) return;

    const baris = keranjang
      .map((id, i) => {
        const a = akunById(id);
        if (!a) return "";
        return `${i + 1}. ${a.nama}\n   ${GAMES[a.game].nama} · ${a.rank} · ${rp(a.harga)}`;
      })
      .filter(Boolean)
      .join("\n");

    const pesan =
      "Halo Yudstore Game!\n\n" +
      "Saya mau beli akun berikut:\n\n" +
      baris +
      "\n\n" +
      `Total: ${rp(totalKeranjang())}\n\n` +
      "Mohon dikonfirmasi stok dan cara pembayarannya. Terima kasih.";

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`, "_blank", "noopener");
    toast("Membuka WhatsApp untuk menyelesaikan pesanan.");
  });

  /* ---------------------------------------------------------
     MODAL DETAIL
     --------------------------------------------------------- */
  const modal = el("modal");
  const modalCard = el("modalCard");

  function bukaModal(id) {
    const a = akunById(id);
    if (!a) return;
    const g = GAMES[a.game];
    const label = a.label && LABEL_KELAS[a.label] ? a.label : "";

    modalCard.innerHTML = `
      <div class="mhead">
        <div class="mhead__thumb card__thumb--${g.kelas}">
          ${label ? `<span class="card__badge">${label}</span>` : ""}
          <span class="mark">${g.singkat}</span>
        </div>
        <button class="iconbtn mhead__close" type="button" data-tutup-modal aria-label="Tutup detail">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <div class="mbody">
        <h3>${a.nama}</h3>
        <div class="mbody__meta">
          <span class="rank">${a.rank}</span>
          <span>${g.nama}</span>
          <span>·</span>
          <span>${a.terjual ? "Sudah terjual" : "Masih tersedia"}</span>
        </div>
        <p class="mdesc">${a.desk}</p>

        <div class="mgrid">
          ${a.isi
            .map(
              (i) => `
            <div class="mgrid__cell">
              <span class="k">Isi akun</span>
              <span class="v">${i}</span>
            </div>`
            )
            .join("")}
          <div class="mgrid__cell">
            <span class="k">Metode login</span>
            <span class="v">${a.login}</span>
          </div>
        </div>

        <div class="mfoot">
          <span class="price">${rp(a.harga)}</span>
          <div class="mfoot__acts">
            <button class="btn btn--ghost" type="button" data-tutup-modal>Tutup</button>
            <button class="btn btn--primary" type="button" data-add="${a.id}" ${a.terjual ? "disabled" : ""}>
              ${a.terjual ? "Sudah terjual" : "Tambah ke keranjang"}
            </button>
          </div>
        </div>
      </div>`;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    modalCard.scrollTop = 0;
  }

  function tutupModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (!drawer.classList.contains("is-open")) document.body.classList.remove("is-locked");
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-tutup-modal]")) tutupModal();
  });

  /* ---------------------------------------------------------
     KLIK DI KARTU KATALOG
     --------------------------------------------------------- */
  grid.addEventListener("click", (e) => {
    const tambahBtn = e.target.closest("[data-add]");
    if (tambahBtn) {
      tambah(tambahBtn.dataset.add);
      return;
    }
    const detailBtn = e.target.closest("[data-detail]");
    if (detailBtn) {
      bukaModal(detailBtn.dataset.detail);
    }
  });

  /* Tombol tambah di dalam modal */
  modalCard.addEventListener("click", (e) => {
    const tambahBtn = e.target.closest("[data-add]");
    if (tambahBtn) {
      tambah(tambahBtn.dataset.add);
      tutupModal();
      bukaKeranjang();
    }
  });

  /* ---------------------------------------------------------
     PINTASAN PAPAN TIKUS
     --------------------------------------------------------- */
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (modal.classList.contains("is-open")) {
      tutupModal();
    } else if (drawer.classList.contains("is-open")) {
      tutupKeranjang();
    }
  });

  /* ---------------------------------------------------------
     FORM TANYA
     --------------------------------------------------------- */
  const form = el("formTanya");
  const formNote = el("formNote");

  if (form) {
    const setNote = (pesan, salah = false) => {
      if (!formNote) return;
      formNote.textContent = pesan;
      formNote.classList.toggle("is-error", salah);
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));

      if (!String(data.nama || "").trim()) return setNote("Mohon isi nama Anda.", true);
      if (!String(data.telepon || "").trim()) return setNote("Mohon isi nomor WhatsApp Anda.", true);
      if (!String(data.pesan || "").trim()) return setNote("Mohon tuliskan akun yang dicari.", true);

      const teks =
        "Halo Yudstore Game!\n\n" +
        `Nama: ${String(data.nama).trim()}\n` +
        `WhatsApp: ${String(data.telepon).trim()}\n\n` +
        `Yang dicari: ${String(data.pesan).trim()}`;

      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`, "_blank", "noopener");
      setNote("Terima kasih! Pesan Anda dibuka di WhatsApp untuk dikirim.");
      form.reset();
    });
  }

  /* ---------------------------------------------------------
     TAHUN
     --------------------------------------------------------- */
  const tahun = el("tahun");
  if (tahun) tahun.textContent = String(new Date().getFullYear());

  /* ---------------------------------------------------------
     MULAI
     --------------------------------------------------------- */
  renderChips();
  render();
  renderKeranjang();

  const statAkun = el("statAkun");
  if (statAkun) {
    const tersedia = AKUN.filter((a) => !a.terjual).length;
    statAkun.textContent = String(tersedia);
  }
})();
