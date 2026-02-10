# Deploy MoneySprout — cashwisekids.com (DreamWebHosting)

Domen: **cashwisekids.com**  
DNS / hosting: **dreamwebhosting.net** (cPanel)

Aplikacija se hostuje na **Vercel**; domen ostaje kod DreamWebHosting-a, samo DNS zapise usmeriš na Vercel.

---

## 1. Push koda na GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TVOJ_USER/CashWiseKids.git
git push -u origin main
```

---

## 2. Deploy na Vercel

1. [vercel.com](https://vercel.com) → uloguj se (npr. preko GitHub-a).
2. **Add New** → **Project** → **Import** repo **CashWiseKids**.
3. **Environment Variables** (pre Deploy):
   - **NEXTAUTH_URL** = `https://cashwisekids.com` (bez `/` na kraju)
   - **NEXTAUTH_SECRET** = jedan jak string (npr. iz terminala: `openssl rand -base64 32`)
4. **Deploy** → dobijaš URL tipa `cashwisekids-xxx.vercel.app`. Proveri da sajt radi na tom URL-u.

---

## 3. Dodaj domen u Vercel

1. U projektu: **Settings** → **Domains**.
2. **Add**:
   - `cashwisekids.com`
   - `www.cashwisekids.com`
3. Vercel će prikazati koje DNS zapise treba da podesiš (ispod su tipične vrednosti).

---

## 4. DNS na DreamWebHosting (dreamwebhosting.net)

Uloguj se na DreamWebHosting, otvori **cPanel** (ili **Manage Websites** → **DNS Settings** za domen **cashwisekids.com**).

Dodaj ili izmeni sledeće zapise. Ako već postoje A/CNAME za `@` ili `www`, izmeni ih da budu ovakvi:

### Za **cashwisekids.com** (root, bez www)

| Type | Name / Host | Value / Points to |
|------|-------------|--------------------|
| **A** | `@` | `76.76.21.21` |

*(„Name“ može biti i prazno ili `cashwisekids.com` – zavisno od panela; cilj je root domen.)*

### Za **www.cashwisekids.com**

| Type   | Name / Host | Value / Points to        |
|--------|-------------|---------------------------|
| **CNAME** | `www`   | `cname.vercel-dns.com` |

Sačuvaj izmene. Ako imaš i A zapis za `www`, obriši ga ili zameni ovim CNAME (za www Vercel traži CNAME).

---

## 5. Čekanje i provera

- DNS propagacija: obično 5–30 minuta, retko do 24–48 h.
- U Vercel **Domains** status za `cashwisekids.com` i `www.cashwisekids.com` treba da pređe u „Valid“ / zelenu kvačicu. Tada Vercel automatski izda SSL (HTTPS).
- Proveri u browseru:
  - `https://cashwisekids.com`
  - `https://www.cashwisekids.com`
- Testiraj login (npr. `parent@test.com` / bilo koja lozinka).

---

## 6. Ako nešto ne radi

- **Login preusmerava na localhost:** u Vercel → Project → **Settings** → **Environment Variables** proveri da je **NEXTAUTH_URL** tačno `https://cashwisekids.com` (Production), pa **Redeploy**.
- **Domen ne resolvuje / 404:** sačekaj još malo DNS; proveri da su A i CNAME tačno uneti u DreamWebHosting DNS za `cashwisekids.com` i `www`.
- **SSL greška:** dok Vercel ne prikaže domen kao „Valid“, SSL se još ne izdaje – obično se reši kad DNS bude ispravan.
