# Bayrak Savaşları 🌍

Ball'lu Avrupa strateji oyunu: 136 ülke, 499 şehir, bütün dünya, NATO/AB/KGAÖ, nükleer onay sistemi, BALL HABER 24.

## Kurulum
1. GitHub'da yeni bir repo aç, bu klasördeki her şeyi yükle (`.github` klasörü dahil).
2. **Settings → Pages → Source: GitHub Actions** seç (iPhone/web sürümü için).
3. **Actions** sekmesinde "Derle (APK + iPhone + Web)" çalışır (her `main` gönderiminde otomatik, ya da **Run workflow**).

## Çıktılar
- **Android:** Actions → son çalışma → `BayrakSavaslari-APK` indir, telefona kur (bilinmeyen kaynaklara izin ver).
- **iPhone (en kolay):** Pages adresini Safari'de aç → Paylaş → **Ana Ekrana Ekle**. Uygulama gibi tam ekran açılır.
- **iPhone (.ipa):** `BayrakSavaslari-iOS` imzasızdır; Sideloadly/AltStore ile kendi Apple hesabınla imzalayıp kurabilirsin.

## Çok oyunculu (Claude hesabı gerekmez)
GitHub Pages, APK ve iPhone sürümünde telefonlar **oda koduyla** bağlanır:
1. Bilgisayarda Pages adresini aç → **Oyunu Kur**. Sağ üstte 4 haneli **oda kodu** çıkar.
2. Telefonlarda aynı adresi (ya da APK'yı) aç → **Oyuna Katıl** → kodu yaz → **Bağlan**.
Bağlantı internet üzerinden (PeerJS) kurulur; herkesin internete bağlı olması yeterli.
