# GitHub: kako da push-uješ kada traži username/password

GitHub **ne prihvata lozinku naloga** za Git (push/pull). Moraš koristiti **Personal Access Token** ili **SSH**.

---

## Opcija A: Personal Access Token (najbrže)

### 1. Kreiraj token na GitHub-u

1. Uloguj se na [github.com](https://github.com).
2. Klikni na **svoj avatar** (gore desno) → **Settings**.
3. U levom meniju skroz dole: **Developer settings**.
4. **Personal access tokens** → **Tokens (classic)**.
5. **Generate new token** → **Generate new token (classic)**.
6. **Note:** npr. `CashWiseKids push`.
7. **Expiration:** npr. 90 days ili No expiration.
8. Štikliraj: **repo** (pun pristup repozitorijumima).
9. Klikni **Generate token**.
10. **Kopiraj token odmah** (videti ćeš ga samo jednom; izgleda kao `ghp_xxxxxxxxxxxx`).

### 2. Push sa tokenom umesto lozinke

U terminalu (iz foldera projekta):

```bash
git push -u origin main
```

Kada zatraži:
- **Username:** tvoje GitHub korisničko ime (npr. `markodunjic`).
- **Password:** **nalepi token** (onaj `ghp_...`), ne lozinku od naloga.

Ako opet traži lozinku pri sledećem push-u, možeš da sačuvaš kredencijale:

```bash
git config --global credential.helper store
```

Sledeći put kad uneseš username + token, Git će ih zapamtiti (pa ne moraš opet).

---

## Opcija B: SSH ključ (jednom podesiš, pa bez tokena)

### 1. Proveri da li već imaš SSH ključ

```bash
ls -la ~/.ssh
```

Ako vidiš `id_ed25519` i `id_ed25519.pub` (ili `id_rsa` / `id_rsa.pub`), imaš ključ. Preskoči na korak 3.

### 2. Kreiraj novi SSH ključ

```bash
ssh-keygen -t ed25519 -C "tvoj-email@example.com"
```

Enter tri puta (default lokacija, prazna passphrase ako ne želiš da unosiš).

### 3. Dodaj javni ključ na GitHub

```bash
cat ~/.ssh/id_ed25519.pub
```

Kopiraj ceo output (počinje sa `ssh-ed25519 ...`).

Na GitHub: **Settings** → **SSH and GPG keys** → **New SSH key** → Title: `Mac` ili `Laptop` → Key: nalepi kopirani tekst → **Add SSH key**.

### 4. Podesi remote na SSH i push

```bash
cd /Users/markodunjic/Documents/CashWiseKids
git remote set-url origin git@github.com:TVOJ_GITHUB_USERNAME/CashWiseKids.git
git push -u origin main
```

Zameni `TVOJ_GITHUB_USERNAME` svojim GitHub username-om. Posle toga ne treba ni username ni password – koristi se SSH ključ.
