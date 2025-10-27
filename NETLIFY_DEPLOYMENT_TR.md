# 🚀 Netlify Deployment Rehberi (Türkçe)

## ✅ Sorun Çözüldü!

Artık hem `main` hem `master` branch'leriniz var ve `netlify.toml` konfigürasyonu eklendi.

---

## 📋 Netlify'da Deploy Adımları

### Yöntem 1: Netlify Web Arayüzü (Tavsiye Edilen)

1. **Netlify'a gidin:** https://app.netlify.com/

2. **"Add new site" → "Import an existing project"**

3. **GitHub'ı seçin**
   - Zaten bağlıysa, repository listenizi göreceksiniz

4. **Repository'yi seçin:**
   - `muammer-eren/SphereDSP-Website` 

5. **Branch seçimi:**
   - **Branch to deploy:** `main` (veya dropdown'dan `master` seçebilirsiniz)
   - ⚠️ **MANUEL OLARAK YAZIN:** Eğer dropdown boşsa, manuel olarak `main` yazın

6. **Build ayarları:**
   ```
   Build command: pnpm install && pnpm build
   Publish directory: .next
   ```

7. **Advanced build settings (opsiyonel):**
   - Environment variables ekleyebilirsiniz (şu an gerekmez)

8. **"Deploy site"** butonuna basın

⏱️ **Build süresi:** ~3-5 dakika

---

## ⚠️ "No Branch Found" Hatası Çözümleri

### Çözüm 1: Manuel Branch Girişi
Branch dropdown'ı görmüyorsanız:
- Branch to deploy alanına **manuel olarak** `main` yazın
- Veya `master` yazın

### Çözüm 2: Repository İzinlerini Yenile
1. Netlify'da: **User Settings → Applications**
2. GitHub'ı bulun ve **"Configure"**
3. Repository access'i kontrol edin
4. `SphereDSP-Website` repository'sine erişim olduğundan emin olun
5. Sayfayı yenileyin ve tekrar deneyin

### Çözüm 3: Repository'yi Yeniden Bağla
1. Netlify'dan GitHub bağlantısını kaldırın
2. Tekrar bağlayın
3. Tüm repository'lere erişim verin
4. Deploy'u tekrar deneyin

---

## 🔧 Build Ayarları Detayları

Netlify otomatik olarak `netlify.toml` dosyasını okuyacak, ama manuel girmek isterseniz:

```toml
[build]
  command = "pnpm install && pnpm build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
```

**Eğer pnpm yoksa alternatif:**
```
Build command: npm install && npm run build
Publish directory: .next
```

---

## 📦 Mevcut Durumunuz

✅ **Repository:** https://github.com/muammer-eren/SphereDSP-Website  
✅ **Branch'ler:** `main` ve `master` (her ikisi de GitHub'da)  
✅ **Netlify Config:** `netlify.toml` eklendi  
✅ **Dosyalar:** 83 dosya, 11,755 satır kod  

---

## 🌐 Deploy Sonrası

Site başarıyla deploy olunca:

1. **Site URL'niz:**
   - Otomatik: `https://random-name-123456.netlify.app`
   - Değiştirebilirsiniz: Site settings → Change site name

2. **Custom Domain Eklemek:**
   - Site settings → Domain management
   - `spheredsp.com` ekleyin
   - DNS kayıtlarını güncelleyin

3. **Otomatik Deploy:**
   - Her `git push` ile otomatik yeniden deploy olur
   - Branch: `main` (veya seçtiğiniz branch)

---

## 🔄 Netlify vs Vercel Karşılaştırması

| Özellik | Netlify | Vercel |
|---------|---------|--------|
| Next.js Desteği | ✅ (Plugin gerekli) | ✅ (Native, optimize) |
| Bedava Plan | ✅ 100GB bandwidth | ✅ 100GB bandwidth |
| Build Süresi | ~5 dakika | ~2-3 dakika |
| Edge Functions | ✅ | ✅ |
| Auto Deploy | ✅ | ✅ |

**Tavsiye:** Next.js için **Vercel daha optimize**. Netlify de çalışır ama Vercel Next.js'i geliştiren firma.

---

## 🎯 Vercel Alternatifi (Daha Hızlı)

Eğer Netlify'da sorun devam ederse Vercel'i deneyin:

### Vercel ile Deploy (2 dakika):

1. **Git:** https://vercel.com/new
2. **GitHub ile giriş yap**
3. **Import repository:** `muammer-eren/SphereDSP-Website`
4. **Deploy'a bas** (tüm ayarlar otomatik)
5. **Bitti!** 🎉

Site: `https://sphere-dsp-website.vercel.app`

---

## 🐛 Debug: Branch Kontrol

Terminal'de kontrol:

```bash
# Tüm branch'leri gör
git branch -a

# Çıktı şu olmalı:
# * main
#   master
#   remotes/origin/main
#   remotes/origin/master
```

GitHub'da kontrol:
https://github.com/muammer-eren/SphereDSP-Website/branches

Her iki branch de orada olmalı.

---

## 📞 Hala Sorun mu Var?

### Adım 1: Branch'leri doğrula
```bash
cd /Users/muammereren/Desktop/SphereDSP
git branch -a
```

### Adım 2: Force push (gerekirse)
```bash
git push -f origin main
git push -f origin master
```

### Adım 3: Netlify cache temizle
- Netlify dashboard → Deploys
- Options → Clear cache and retry deploy

### Adım 4: Screenshot gönder
Hata mesajının screenshot'unu gönderin, daha detaylı yardımcı olabilirim.

---

## ✅ Başarı Kontrol Listesi

Deploy başarılı olduğunda:

- [ ] Build succeeded (yeşil ✓)
- [ ] Site preview linki çalışıyor
- [ ] Tüm sayfalar yükleniyor (Home, About, Products, etc.)
- [ ] Görseller görünüyor
- [ ] Responsive mobilde çalışıyor
- [ ] Form'lar çalışıyor

---

## 🎨 Site İçeriği

Deploy edilen site şunları içeriyor:

- ✅ Ana sayfa (hero, özellikler, ürünler, takım, **roadmap**)
- ✅ Hakkımızda (takım grid, journey timeline)
- ✅ Ürünler (EQ, Compressor, Suite)
- ✅ Teknoloji sayfası
- ✅ İletişim formu
- ✅ Yasal sayfalar

---

## 🚀 Hızlı Özet

```bash
# Durum kontrolü
git status

# Branch'leri gör
git branch -a

# Son commit
git log --oneline -1
```

**Şu anki durum:**
- ✅ `main` branch: GitHub'da
- ✅ `master` branch: GitHub'da  
- ✅ `netlify.toml`: Eklendi
- ✅ Tüm dosyalar: Push edildi

**Şimdi yapın:**
1. Netlify'da repository'yi import edin
2. Branch olarak `main` yazın (manuel)
3. Build command: `pnpm install && pnpm build`
4. Publish directory: `.next`
5. Deploy'a basın!

---

## 💡 Pro İpuçları

1. **Build hataları:** Netlify deploy log'larını okuyun
2. **Yavaş build:** Vercel'e geçin (Next.js için optimize)
3. **Environment variables:** Şimdilik gerekmez, API entegrasyonunda eklersiniz
4. **Custom domain:** Deploy'dan sonra ekleyin

---

**Hazırlandı:** 27 Ekim 2025  
**Durum:** ✅ Deploy için hazır

İyi şanslar! 🚀

