# Bayrak Savaşları — Google Play'de Yayınlama Rehberi

## 0) Bir kez yapılacaklar
1. **Google Play Console** hesabı aç (tek seferlik 25 $): https://play.google.com/console
   - Yeni kişisel hesaplarda Google, üretime çıkmadan önce **kapalı test** ister: en az **12 test kullanıcısı**, **14 gün** boyunca. (Arkadaşların, ailen.)
2. GitHub deposunu **Private** (gizli) yapman önerilir (Settings → General → Danger Zone → Change visibility). İmza anahtarın orada üretilecek.
3. **İmza anahtarı oluştur:** Actions → "1) Google Play imza anahtari olustur" → Run workflow. Bitince Artifacts'tan `IMZA-ANAHTARI-GIZLI-SAKLA` dosyasını indir. İçinde `upload.jks`, `KEYSTORE_BASE64.txt` ve `SIFRELER.txt` var. **Bunları güvenli bir yerde sakla** (Google Drive'da gizli klasör gibi).
4. Depoda **Settings → Secrets and variables → Actions → New repository secret** ile 4 gizli değer ekle:
   - `KEYSTORE_BASE64` → KEYSTORE_BASE64.txt içeriğinin tamamı
   - `KEYSTORE_PASSWORD` → SIFRELER.txt'deki şifre
   - `KEY_PASSWORD` → aynı şifre
   - `KEY_ALIAS` → `bayrak`
5. **gizlilik.html** içindeki e-posta adresini kendi adresinle değiştir. Bu sayfa şu adreste yayında olur: `https://KULLANICIADIN.github.io/DEPOADI/gizlilik.html` (Play bunu ister).

## 1) Her sürümde
1. Değişiklikleri depoya yükle (Commit). "Derle" iş akışı kendiliğinden çalışır.
2. Bitince Artifacts'tan **BayrakSavaslari-GooglePlay-AAB** dosyasını indir (içinde `.aab`).
3. Play Console → Uygulaman → Test (önce Kapalı test, sonra Üretim) → Yeni sürüm oluştur → `.aab` dosyasını yükle → Kaydet → İncelemeye gönder.
   - Sürüm numarası her derlemede otomatik artar; aynı dosyayı iki kez yüklemene gerek kalmaz.

## 2) Mağaza bilgileri (Play Console → Mağaza girişi)
- **Uygulama adı:** Bayrak Savaşları: Dünya Stratejisi
- **Kısa açıklama (TR):** Ülkeni seç, dünyayı yönet! Arkadaşlarınla online strateji, diplomasi ve savaş.
- **Uzun açıklama (TR):** `magaza/aciklama_tr.txt`
- **İngilizce:** `magaza/description_en.txt`
- **Kategori:** Oyun → Strateji · **Etiketler:** strateji, çok oyunculu, harita
- **Görseller:** `www/icon-512.png` (simge), `magaza/one_cikan_gorsel_1024x500.png` (öne çıkan görsel), en az 2 ekran görüntüsü (telefonundan oyun içi ekran görüntüsü al).

## 3) Formlar (Play Console → Uygulama içeriği)
- **Gizlilik politikası:** yukarıdaki gizlilik.html adresi.
- **Reklamlar:** Hayır, reklam yok.
- **Uygulama erişimi:** Tüm işlevler kısıtlama olmadan kullanılabilir.
- **İçerik derecelendirmesi (IARC):** Kategori "Oyun". Şiddet: *gerçekçi olmayan / çizgi film tarzı karakterlere yönelik şiddet* → Evet; kan → Hayır; kullanıcılar arası etkileşim → Evet (oyuncular takma ad ve hamle paylaşır, sohbet yok). Beklenen sonuç: **PEGI 12 / Genç (Teen)**.
- **Hedef kitle:** 13+ seç (çocuklara yönelik seçme; Aile politikası ek kurallar getirir).
- **Veri güvenliği:** "Uygulama kullanıcı verisi toplamıyor veya paylaşmıyor" (hesap yok, reklam yok, analiz yok; kayıtlar cihazda kalıyor). Bağlantı aktarımı şifreli (WebRTC).
- **Haber uygulaması mı?** Hayır. **Devlet uygulaması mı?** Hayır.

## 4) Telif ve hassas içerik — dikkat edilenler
- Oyunun adında ve mağaza metinlerinde **"Countryball" / "Polandball" kelimeleri kullanılmıyor**; ülke-topu çizim tarzı bir topluluk tarzıdır, ama marka gibi kullanmamak en güvenlisi.
- Karakter çizimleri senin ürettiğin görseller. Hangi araçla ürettiysen o aracın **ticari kullanım koşullarını** kontrol et ve başkasına ait çizim/fan art kullanma.
- Bayraklar genel olarak serbesttir; ama arma, mühür, resmî imza (ör. Atatürk imzası) ve kurum logoları (NATO, AB yıldızları vb.) **kullanılmıyor**; oyunda yalnızca isimleri metin olarak geçiyor.
- Gerçek liderlerin adı ya da fotoğrafı yok. İlk açılışta "Bu oyun kurgu ve hicivdir" uyarısı gösteriliyor.
- Atom bombası **varsayılan olarak kapalı** (lobide Gelişmiş ayarlardan açılabilir). Google'ın "hassas olaylar" politikası nedeniyle bu ayar böyle kalsın.
- Tartışmalı bölgeler (KKTC, Tayvan, Filistin vb.) bazı ülkelerde inceleme sorununa yol açabilir; Play Console'da ilk sürümde yayın ülkelerini Türkiye + seçtiğin ülkelerle sınırlayabilirsin.
- Ben avukat değilim; büyük bir lansman öncesi bir fikri mülkiyet avukatına danışmak en sağlıklısı.

## 5) Online oyun nasıl çalışıyor?
- Oyun dosyaları uygulamanın içinde; GitHub Pages ise web sürümünü ve gizlilik sayfasını yayınlar.
- Çok oyunculu bağlantı **PeerJS** ile kurulur: bir telefon "Oyunu Kur" der, 4 haneli kod çıkar; diğerleri "Oyuna Katıl" ile kodu girer. Veriler cihazlar arasında doğrudan akar, sunucu kiralamana gerek yok.
- PeerJS'in ücretsiz bulut sunucusu küçük oyunlar için yeterlidir ama garanti vermez. Oyuncu sayısı büyürse kendi PeerJS sunucunu (ör. Render/Fly.io ücretsiz katman) kurup adresini oyuna yazmak gerekir.


## 6) Reklam ve Mağaza (para kazanma)
**Oyunda hazır olanlar:**
- **Ara reklam (interstitial):** Her 3 günün sonunda bir, ilk 2 gün yok, iki reklam arası en az 4 dakika. "Reklamları Kaldır" alındıysa hiç gösterilmez.
- **Ödüllü reklam:** İsteğe bağlı "📺 Reklam izle → +8 altın", günde 1 kez. En iyi kazandıran ve oyuncuyu rahatsız etmeyen türdür.
- **Mağaza ürünleri (tek seferlik):** `reklamsiz` (Reklamları Kaldır), `senaryo_paketi` (Zombi, Salgın, Darbeler senaryoları), `parsomen_tema` (Parşömen harita).
- Web sürümünde reklam yoktur ve her şey ücretsizdir; mağaza sadece Google Play uygulamasında çalışır.

**Senin yapacakların:**
1. https://admob.google.com → Uygulama ekle (Android, "Bayrak Savaşları") → bir **Ara reklam** ve bir **Ödüllü reklam** birimi oluştur.
2. AdMob **uygulama kimliğini** (ca-app-pub-…~…) GitHub'da `ADMOB_APP_ID` adlı gizli değer (secret) olarak ekle.
3. Reklam birimi kimliklerini (ca-app-pub-…/…) bana gönder ya da `www/index.html` içinde `MONCFG` satırındaki `inter:` ve `reward:` değerlerine yaz. Şu an Google'ın **test reklamları** ayarlı; gerçek kimlik girilmeden para kazanılmaz.
4. Play Console → Para kazanma → Ürünler → **Uygulama içi ürünler**: `reklamsiz`, `senaryo_paketi`, `parsomen_tema` kimlikleriyle 3 ürün oluştur, fiyat ver, etkinleştir. (Bunun için Play Console'da bir **ödeme profili** gerekir.)
5. **Form güncellemeleri:** Uygulama içeriği → Reklamlar: **Evet, reklam içeriyor**. Veri güvenliği: "Cihaz veya diğer kimlikler" ve "Yaklaşık konum" verilerinin **reklam amacıyla** toplandığını ve **paylaşıldığını** (AdMob) işaretle. Gizlilik politikası güncellendi.
6. Kendi telefonunda test ederken kendi reklamlarına tıklama; AdMob hesabın kapanabilir. Test için Google'ın test kimlikleri kullanılır (şu an ayarlı olanlar).
