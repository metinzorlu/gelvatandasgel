// Örnek Ürün Veri Tabanı
const tumUrunler = [
    { id: 1, ad: "NUTUK", kategori: "kitap", altKategori: "Atatürk", fiyat: 300, resim: "resimler7/kitap1.jpg", etiket: "cok-satan", detay:"" },
    { id: 2, ad: "HIZLI ve YAVAŞ DÜŞÜNME", kategori: "kitap", altKategori: "Kişisel Gelişim", fiyat: 250, resim: "resimler7/kitap2.jpg", etiket:"firsat" },
    { id: 3, ad: "DEVLET ANA", kategori: "kitap", altKategori: "Türk Klasikleri", fiyat: 200, resim: "resimler7/kitap3.jpg" },
    { id: 4, ad: "ATATÜRK", kategori: "kitap", altKategori: "Atatürk", fiyat: 200, resim: "resimler7/kitap4.jpg",etiket:"ikinci-el" },
    { id: 5, ad: "RABITA", kategori: "kİTAP", altKategori: "Siyaset", fiyat: 150, resim: "resimler7/kitap5.jpg" },
    { id: 6, ad: "ALMANCA-TÜRKÇE SÖZLÜK", kategori: "kitap", altKategori: "Yabancı Dil", fiyat:100, resim: "resimler7/kitap6.jpg" },
    { id: 7, ad: "HARİTALAR ve YÖN BULMA", kategori: "kitap", altKategori: "Kişisel Gelişim", fiyat: 100, resim: "resimler7/kitap7.jpg" },
    { id: 8, ad: "AFET EĞİTİM SETİ", kategori: "kitap", altKategori: "Kişisel Gelişim", fiyat: 1000, resim: "resimler7/kitap8.jpg" },
    { id: 9, ad: "İş Sağlığı ve Güvenliği El Kitabı", kategori: "kitap", altKategori: "İş Sağlığı ve Güvenliği", fiyat: 250, resim: "resimler7/kitap9.jpg" },
    { id: 10, ad: "Makine Güvenliği Rehberi", kategori: "kitap", altKategori: "İş Sağlığı ve Güvenliği", fiyat: 200, resim: "resimler7/kitap10.jpg" },
    { id: 11, ad: "İş ve Sosyal Güvenlik Mevzuatı", kategori: "kitap", altKategori: "İş Sağlığı ve Güvenliği", fiyat: 100, resim: "resimler7/kitap11.jpg",etiket:"" },
    { id: 12, ad: "Orman İşlerinde İş Sağlığı ve Güvenliği", kategori: "kitap", altKategori: "İş Sağlığı ve Güvenliği", fiyat: 100, resim: "resimler7/kitap12.jpg" },
    { id: 13, ad: "ADR Cilt 1 ve Cilt 2", kategori: "kitap", altKategori: "İş Sağlığı ve Güvenliği", fiyat: 200, resim: "resimler7/kitap13.jpg" },
    { id: 14, ad: "İnşaatta Sağlık ve Güvenlik", kategori: "kitap", altKategori: "İş Sağlığı ve Güvenliği", fiyat: 100, resim: "resimler7/kitap14.jpg", etiket:"" },
    { id: 15, ad: "Yol Yapım Bakım ve Onarım Çalışmalarında İş Sağlığı ve Güvenliği Broşürü", kategori: "kitap", altKategori: "İş Sağlığı ve Güvenliği", fiyat: 150, resim: "resimler7/kitap15.jpg" },
    { id: 16, ad: "İleri Düzey Excel", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 300, resim: "resimler7/kitap16.jpg", etiket: "yeni" },
    { id: 17, ad: "PYTHON", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler7/kitap17.jpg", etiket: "yeni" },
    { id: 18, ad: "Herkes İçin Excel", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler7/kitap18.jpg", etiket: "yeni" },
    { id: 19, ad: "Excel Makro", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler7/kitap19.jpg", etiket: "yeni" },
    { id: 20, ad: "HTML5 CSS3", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler7/kitap20.jpg", etiket: "yeni" },
    { id: 21, ad: "HTML5 CSS3 JAVASCRIPT", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 250, resim: "resimler7/kitap21.jpg", etiket: "yeni" },
    { id: 22, ad: "Web Tasarımı ve Web Uygulama", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 300, resim: "resimler7/kitap22.jpg", etiket: "yeni" },
    { id: 23, ad: "Javascrıpt Programlama", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler7/kitap23.jpg", etiket: "yeni", detay:"Ürün yenidir." },
    { id: 24, ad: "WORDPRESS", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler7/kitap24.jpg", etiket: "ikinci-el", detay:"" },
    { id: 25, ad: "Wordpress Tema Tasarımı ve Programlama", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler7/kitap25.jpg", etiket: "yeni", detay:"Ürün yenidir." },
    { id: 26, ad: "Excel Power Query & Power Pıvot", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler1/kitap26.jpg", etiket: "yeni", detay:"Ürün yenidir." },
    { id: 27, ad: "PYTHON ", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler1/kitap27.jpg", etiket: "yeni", detay:"Ürün yenidir." },
    { id: 28, ad: "EXCEL VBA Programlama", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler1/kitap28.jpg", etiket: "yeni", detay:"Ürün yenidir." },
    { id: 29, ad: "DREAMWEAVER", kategori: "kitap", altKategori: "Bilgisayar", fiyat: 200, resim: "resimler2/kitap29.jpg", etiket: "yeni", detay:"Ürün yenidir." },
    { id: 30, ad: "OMRON Tansiyon Ölçme Aleti", kategori: "saglik", altKategori: "", fiyat: 500, resim: "resimler4/saglik1.jpg", etiket: "ikinci-el", detay:"" },
    { id: 31, ad: "HP Vıctus Bilgisayar", kategori: "bilgisayar", altKategori: "", fiyat: 10000, resim: "resimler5/bilgisayar1.jpg", etiket: "ikinci-el", detay:"" },
    { id: 32, ad: "Tablet Kılıfı", kategori: "bilgisayar", altKategori: "", fiyat: 150, resim: "resimler5/bilgisayar2.jpg", etiket: "ikinci-el", detay:"" },
    { id: 33, ad: "LENOVO Tablet", kategori: "bilgisayar", altKategori: "", fiyat: 1000, resim: "resimler5/bilgisayar3.jpg", etiket: "ikinci-el", detay:"" },
    { id: 34, ad: "CANON Yazıcı", kategori: "bilgisayar", altKategori: "", fiyat: 5000, resim: "resimler5/bilgisayar4.jpg", etiket: "ikinci-el", detay:"" },
    { id: 35, ad: "TOSHIBA 1 Tb Harddisk", kategori: "bilgisayar", altKategori: "", fiyat: 500, resim: "resimler5/bilgisayar5.jpg", etiket: "ikinci-el", detay:"" },
    { id: 36, ad: "Bilgisayar Toz Temizleyici", kategori: "bilgisayar", altKategori: "", fiyat: 50, resim: "resimler5/bilgisayar6.jpg", etiket: "ikinci-el", detay:"" },
    { id: 37, ad: "MAOS Ped", kategori: "bilgisayar", altKategori: "", fiyat: 50, resim: "resimler5/bilgisayar7.jpg", etiket: "ikinci-el", detay:"" },
    { id: 38, ad: "MAOS", kategori: "bilgisayar", altKategori: "", fiyat: 50, resim: "resimler5/bilgisayar8.jpg", etiket: "ikinci-el", detay:"" },
    { id: 39, ad: "HP Maos", kategori: "bilgisayar", altKategori: "", fiyat: 100, resim: "resimler5/bilgisayar9.jpg", etiket: "ikinci-el", detay:"" },
    { id: 40, ad: "Samsung Taşınabilir Cep Telefonu Şarj Cihazı", kategori: "cep telefonu", altKategori: "taşınabilir telefon Şarj Cihazı", fiyat: 200, resim: "resimler4/ceptel1.jpg", etiket: "ikinci-el", detay:"" },
    { id: 41, ad: "AURIS Şarj Cihazı Başlığı", kategori: "cep telefonu", altKategori: "telefon Şarj Cihazı", fiyat: 50, resim: "resimler4/ceptel2.jpg", etiket: "ikinci-el", detay:"" },
    { id: 42, ad: "Telefon Tutucu", kategori: "cep telefonu", altKategori: "telefon tutucu", fiyat: 100, resim: "resimler4/ceptel3.jpg", etiket: "ikinci-el", detay:"" },
    { id: 43, ad: "Taşınabilir Cep Telefonu Şarj Cihazı", kategori: "cep telefonu", altKategori: "taşınabilir telefon Şarj Cihazı", fiyat: 50, resim: "resimler4/ceptel4.jpg", etiket: "ikinci-el", detay:"" },
    { id: 44, ad: "HUAWEI WATCH GT 5-9D6 Akıllı Saat", kategori: "saat", altKategori: "", fiyat: 5000, resim: "resimler4/saat1.jpg", etiket: "ikinci-el", detay:"" },
    { id: 45, ad: "PUMA Saat", kategori: "saat", altKategori: "", fiyat: 1000, resim: "resimler4/saat2.jpg", etiket: "ikinci-el", detay:"" },
    { id: 46, ad: "2 Adet Keçeli Kalem Seti", kategori: "kırtasiye", altKategori: "keçeli kalem", fiyat: 250, resim: "resimler5/kirtasiye1.jpg", etiket: "yeni", detay:"" },
    { id: 47, ad: "CASIO Hesap Makinesi", kategori: "kırtasiye", altKategori: "hesap makinesi", fiyat: 500, resim: "resimler5/kirtasiye2.jpg", etiket: "yeni", detay:"" },
    { id: 48, ad: "CASIO Hesap Makinesi", kategori: "kırtasiye", altKategori: "hesap makinesi", fiyat: 250, resim: "resimler5/kirtasiye3.jpg", etiket: "yeni", detay:"" },
    { id: 49, ad: "Kalem Kutusu", kategori: "kırtasiye", altKategori: "kalem kutusu", fiyat: 75, resim: "resimler5/kirtasiye4.jpg", etiket: "ikinci el", detay:"" },
    { id: 50, ad: "İlkyardım Seti", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 200, resim: "resimler4/oto1.jpg", etiket: "ikinci el", detay:"" },
    { id: 51, ad: "Akü Tavviye Kablosu 2 Adet", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 500, resim: "resimler4/oto2.jpg", etiket: "yeni", detay:"" },
    { id: 52, ad: "Kareli Defter", kategori: "kırtasiye", altKategori: "kareli defter", fiyat: 150, resim: "resimler5/kirtasiye5.jpg", etiket: "yeni", detay:"" },
    { id: 53, ad: "Küçük Evrak Çantası", kategori: "kırtasiye", altKategori: "evrak çantası", fiyat: 100, resim: "resimler5/kirtasiye6.jpg", etiket: "", detay:"" },
    { id: 54, ad: "Lazer Kalemi", kategori: "kırtasiye", altKategori: "lazer kalemi", fiyat: 75, resim: "resimler5/kirtasiye7.jpg", etiket: "yeni", detay:"" },
    { id: 55, ad: "NOKİ Daksil", kategori: "kırtasiye", altKategori: "daksil", fiyat: 100, resim: "resimler5/kirtasiye8.jpg", etiket: "yeni", detay:"" },
    { id: 56, ad: "Tel Zımba", kategori: "kırtasiye", altKategori: "tel zımba", fiyat: 50, resim: "resimler5/kirtasiye9.jpg", etiket: "yeni", detay:"" },
    { id: 57, ad: "Delgeç", kategori: "kırtasiye", altKategori: "delgeç", fiyat: 100, resim: "resimler5/kirtasiye10.jpg", etiket: "yeni", detay:"" },
    { id: 58, ad: "Çelik Cetvel", kategori: "kırtasiye", altKategori: "cetvel", fiyat: 75, resim: "resimler5/kirtasiye11.jpg", etiket: "yeni", detay:"" },
    { id: 59, ad: "Tabanca Kılıfı", kategori: "guvenlik", altKategori: "", fiyat: 250, resim: "resimler3/guvenlik1.jpg", etiket: "yeni", detay:"" },
    { id: 60, ad: "Tabanca Bakım Seti", kategori: "guvenlik", altKategori: "", fiyat: 250, resim: "resimler3/guvenlik2.jpg", etiket: "yeni", detay:"" },
    { id: 61, ad: "Toz Maskesi", kategori: "is sagligi ve guvenligi", altKategori: "", fiyat: 30, resim: "resimler2/isg1.jpg", etiket: "yeni", detay:"" },
    { id: 62, ad: "Koruyucu Gözlük", kategori: "is sagligi ve guvenligi", altKategori: "", fiyat: 50, resim: "resimler2/isg2.jpg", etiket: "yeni", detay:"" },
    { id: 63, ad: "Yangın Söndürme Cihazı", kategori: "is sagligi ve guvenligi", altKategori: "", fiyat: 500, resim: "resimler2/isg3.jpg", etiket: "ikincel", detay:"" },
    { id: 64, ad: "Kulak Koruyucu", kategori: "is sagligi ve guvenligi", altKategori: "", fiyat: 100, resim: "resimler2/isg4.jpg", etiket: "yeni", detay:"" },
    { id: 65, ad: "Dijital Voltaj Kontrol Kalemi", kategori: "elektrik", altKategori: "", fiyat: 100, resim: "resimler3/elektrik1.jpg", etiket: "yeni", detay:"" },
    { id: 66, ad: "Kontrol Kalemi", kategori: "elektrik", altKategori: "", fiyat: 70, resim: "resimler3/elektrik2.jpg", etiket: "yeni", detay:"" },
    { id: 67, ad: "Kontrol Kalemi", kategori: "elektrik", altKategori: "", fiyat: 70, resim: "resimler3/elektrik2.jpg", etiket: "yeni", detay:"" },
    { id: 68, ad: "Duvar Saati", kategori: "ev esyasi", altKategori: "duvar saati", fiyat: 250, resim: "resimler3/ev1.jpg", etiket: "ikinci-el", detay:"" },
    { id: 69, ad: "FAKİR Çift Pervaneli Vantilatör", kategori: "ev esyasi", altKategori: "elektrik", fiyat: 3000, resim: "resimler3/ev2.jpg", etiket: "ikinci-el", detay:"" },
    { id: 70, ad: "Köpek Yeleği", kategori: "ev esyasi", altKategori: "ev hayvanı aksesuarı", fiyat: 100, resim: "resimler3/ev3.jpg", etiket: "ikinci-el", detay:"" },
    { id: 71, ad: "El Feneri", kategori: "ev esyasi", altKategori: "elektrik", fiyat: 100, resim: "resimler3/ev4.jpg", etiket: "ikinci-el", detay:"" },
    { id: 72, ad: "Masa Saati", kategori: "ev esyasi", altKategori: "masa saati", fiyat: 500, resim: "resimler3/ev5.jpg", etiket: "yeni", detay:"" },
    ,
    { id: 74, ad: "Plastik Su Terazisi", kategori: "is sagligi ve guvenligi", altKategori: "", fiyat: 200, resim: "resimler2/isg5.jpg", etiket: "yeni", detay:"" },
    { id: 75, ad: "Pusula", kategori: "guvenlik", altKategori: "", fiyat: 500, resim: "resimler3/guvenlik3.jpg", etiket: "yeni", detay:"" },
    { id: 76, ad: "Dürbün", kategori: "guvenlik", altKategori: "", fiyat: 100, resim: "resimler3/guvenlik4.jpg", etiket: "yeni", detay:"" },
    { id: 77, ad: "Tabanca Kılıfı", kategori: "guvenlik", altKategori: "", fiyat: 500, resim: "resimler3/guvenlik5.jpg", etiket: "yeni", detay:"" },
    { id: 78, ad: "Dürbün", kategori: "guvenlik", altKategori: "", fiyat: 1500, resim: "resimler3/guvenlik6.jpg", etiket: "yeni", detay:"" },
    { id: 79, ad: "Erkek Kişisel Bakım Seti", kategori: "kisisel bakim", altKategori: "", fiyat: 500, resim: "resimler2/bakim1.jpg", etiket: "yeni", detay:"" },
    { id: 80, ad: "İskemle 2 Adet", kategori: "ev esyasi", altKategori: "sandalye", fiyat: 500, resim: "resimler3/ev6.jpg", etiket: "ikinci-el", detay:"" },
    { id: 81, ad: "Oyun Kağıdı", kategori: "ev esyasi", altKategori: "oyun kağıdı", fiyat: 200, resim: "resimler3/ev7.jpg", etiket: "ikinci-el", detay:"" },
    { id: 82, ad: "Gayrimenkullerde Vergilendirme", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap30.jpg", etiket: "yeni", detay:"Anadolu Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 83, ad: "Emlak Yönetimi ve Pazarlaması", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap31.jpg", etiket: "yeni", detay:"Anadolu Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 84, ad: "Gayrimenkul Ekonomisi", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap32.jpg", etiket: "yeni", detay:"Anadolu Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 85, ad: "Belediye İmar ve Gayrimenkul Mevzuatı", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap33.jpg", etiket: "yeni", detay:"Anadolu Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 86, ad: "Bina ve Bakım Bilgisi", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap34.jpg", etiket: "yeni", detay:"Anadolu Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 87, ad: "İnşaat ve Gayrimenkul Muhasebesi", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap35.jpg", etiket: "yeni", detay:"Anadolu Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 88, ad: "Emlak Finans ve Emlak Değerleme", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap36.jpg", etiket: "yeni", detay:"Anadolu Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 89, ad: "Finans Matematiği", kategori: "kitap", altKategori: "açık öğretim", fiyat: 200, resim: "resimler2/kitap37.jpg", etiket: "yeni", detay:"Anadolu Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 90, ad: "Girişimcilik ve İş Kurma", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap38.jpg", etiket: "yeni", detay:"Anadolu Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 91, ad: "SCRACHT İle Programlama", kategori: "kitap", altKategori: "bilgisayar", fiyat: 200, resim: "resimler2/kitap39.jpg", etiket: "yeni", detay:""},
    { id: 92, ad: "İş Kanunu", kategori: "kitap", altKategori: "iş Sağlığı ve Güvenliği", fiyat: 100, resim: "resimler2/kitap40.jpg", etiket: "ikinci-el", detay:"" },
    { id: 93, ad: "Eğitim Kurumlarında İş Sağlığı ve Güvenliği El Kitabı", kategori: "kitap", altKategori: "İş Sağlığı ve Güvenliği", fiyat: 100, resim: "resimler2/kitap41.jpg", etiket: "yeni", detay:"" },
    { id: 94, ad: "Elektrik Bakım Arıza Bulma ve Güvenlik", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap42.jpg", etiket: "yeni", detay:"" },
    { id: 95, ad: "Kimya ve Biyoloji Sektöründe İş Sağlığı ve Güvenliği", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap43.jpg", etiket: "yeni", detay:"" },
    { id: 96, ad: "Coğrafi Bilgi Sistemleri", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler2/kitap44.jpg", etiket: "yeni", detay:"" },
    { id: 97, ad: "İşveren ve İşveren Vekilinin İş Sağlığı ve Güvenliği Eğitimi", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap45.jpg", etiket: "yeni", detay:"" },
    { id: 98, ad: "Mesleki Yazışmalar", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap46.jpg", etiket: "yeni", detay:"" },
    { id: 99, ad: "Dosyalama Arşivleme", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap47.jpg", etiket: "yeni", detay:"" },
    { id: 100, ad: "Yan Keski", kategori: "alet edevat", altKategori: "", fiyat: 75, resim: "resimler3/alet1.jpg", etiket: "ikinci-el", detay:"" },
    { id: 101, ad: "Bilgisayar Klavyesi", kategori: "bilgisayar", altKategori: "", fiyat: 500, resim: "resimler5/bilgisayar10.jpg", etiket: "yeni", detay:"" },
    { id: 102, ad: "Aayarlanabilir Anahtar (Kurbağacık)", kategori: "alet edevat", altKategori: "", fiyat: 250, resim: "resimler2/alet2.jpg", etiket: "yeni", detay:"" },
    { id: 103, ad: "SAMSUNG Tablet", kategori: "bilgisayar", altKategori: "", fiyat: 3000, resim: "resimler5/bilgisayar11.jpg", etiket: "yeni", detay:"" },
    { id: 104, ad: "Gayrimenkul Mevzuatı", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap48.jpg", etiket: "yeni", detay:"Atatürk Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 105, ad: "İnşaat Muhasebesi", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap49.jpg", etiket: "yeni", detay:"Atatürk Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 106, ad: "Tapu ve Kadastro Bilgisi", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap50.jpg", etiket: "yeni", detay:"Atatürk Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 107, ad: "Şehircilik", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap51.jpg", etiket: "yeni", detay:"Atatürk Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 108, ad: "Bina ve Yapım Bilgisi", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap52.jpg", etiket: "yeni", detay:"Atatürk Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 109, ad: "Emlak Komisyonculuğu Teknikleri", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap53.jpg", etiket: "yeni", detay:"Atatürk Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 110, ad: "İmar Hukuku", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap54.jpg", etiket: "yeni", detay:"Atatürk Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 111, ad: "Ticaret Hukuku", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap55.jpg", etiket: "yeni", detay:"Atatürk Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 112, ad: "Gayrimenkul Değerleme İlkeleri", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap56.jpg", etiket: "yeni", detay:"Atatürk Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 113, ad: "Bina Yönetimi ve Site İşletmeciliği", kategori: "kitap", altKategori: "açık öğretim", fiyat: 150, resim: "resimler6/kitap57.jpg", etiket: "yeni", detay:"Atatürk Üniversitesi Açık Öğretim Fakültesi 'Emlak ve Emlak Yönetimi' Önlisans Bölümü Kitabı" },
    { id: 114, ad: "Araç numaratör", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 100, resim: "resimler4/oto3.jpg", etiket: "ikinci el", detay:"" },
    { id: 115, ad: "Sırt Çantası", kategori: "kirtasiye", altKategori: "sırt çantası", fiyat: 100, resim: "resimler5/kirtasiye13.jpg", etiket: "ikinci-el", detay:"" },
    { id: 116, ad: "Flash Bellek", kategori: "bilgisayar", altKategori: "", fiyat: 100, resim: "resimler5/bilgisayar12.jpg", etiket: "yeni", detay:"" },
    { id: 117, ad: "Erkek Kişisel Bakım Seti", kategori: "kisisel bakim", altKategori: "", fiyat: 200, resim: "resimler2/bakim2.jpg", etiket: "yeni", detay:"" },
    { id: 118, ad: "Bayan Ayna", kategori: "kisisel bakim", altKategori: "", fiyat: 50, resim: "resimler2/bakim3.jpg", etiket: "yeni", detay:"" },
    { id: 119, ad: "A4 Kağıdı 500' lük", kategori: "kirtasiye", altKategori: "a4 kağıdı", fiyat: 500, resim: "resimler5/kirtasiye12.jpg", etiket: "yeni", detay:"" },
    { id: 120, ad: "Yıldız Tornavida", kategori: "alet edevat", altKategori: "", fiyat: 50, resim: "resimler3/alet3.jpg", etiket: "ikinci-el", detay:"" },
    { id: 121, ad: "Düz Tornavida", kategori: "alet edevat", altKategori: "", fiyat: 50, resim: "resimler3/alet4.jpg", etiket: "ikinci-el", detay:"" },
    { id: 122, ad: "Allen Anahtar Seti", kategori: "alet edevat", altKategori: "", fiyat: 200, resim: "resimler3/alet5.jpg", etiket: "yeni", detay:"" },
    { id: 123, ad: "Pense", kategori: "alet edevat", altKategori: "", fiyat: 200, resim: "resimler3/alet6.jpg", etiket: "ikinci-el", detay:"" },
    { id: 124, ad: "YUMA Asma Kilit", kategori: "alet edevat", altKategori: "", fiyat: 800, resim: "resimler2/alet7.jpg", etiket: "yeni", detay:"" },
    { id: 125, ad: "İlkyardım Bröşürü", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 20, resim: "resimler6/kitap58.jpg", etiket: "yeni", detay:"" },
    { id: 126, ad: "Elektrikle Çalışmalarda İş Sağlığı ve Güvenliği", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 100, resim: "resimler6/kitap59.jpg", etiket: "yeni", detay:"" },
    { id: 127, ad: "İlkyardım El Kitabı", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 100, resim: "resimler6/kitap60.jpg", etiket: "yeni", detay:"" },
    { id: 128, ad: "Çağdaş Görgü Kuralları ve Protokol", kategori: "kitap", altKategori: "yaşam", fiyat: 100, resim: "resimler6/kitap61.jpg", etiket: "ikinci-el", detay:"" },
    { id: 129, ad: "Arama Kurtarma", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 100, resim: "resimler6/kitap62.jpg", etiket: "yeni", detay:"" },
    { id: 130, ad: "İş Sağlığı ve Güvenliği Mevzuatı", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler6/kitap63.jpg", etiket: "yeni", detay:"" },
    { id: 131, ad: "Yüksekte Çalışmalarda İş Sağlığı ve Güvenliği", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler6/kitap64.jpg", etiket: "yeni", detay:"" },
    { id: 132, ad: "Medeni Bilgiler El Kitabı", kategori: "kitap", altKategori: "atatürk", fiyat: 300, resim: "resimler6/kitap65.jpg", etiket: "yeni", detay:"" },
    { id: 133, ad: "Döküm Sektörü İş Sağlığı ve Güvenliği Rehberi", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 150, resim: "resimler6/kitap66.jpg", etiket: "yeni", detay:"" },
    { id: 134, ad: "Türkiye Yangından Korunma Yönetmeliği", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler6/kitap67.jpg", etiket: "yeni", detay:"" },
    { id: 135, ad: "Yangın Söndürme Sistemleri Uygulama El Kitabı", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 100, resim: "resimler6/kitap68.jpg", etiket: "yeni", detay:"" },
    { id: 136, ad: "ADR SINAVI SORU ÇÖZME KLAVUZU", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 100, resim: "resimler1/kitap69.jpg", etiket: "yeni", detay:"" },
    { id: 137, ad: "Tehlikeli Maddeleri Tanıma Rehberi", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler1/kitap70.jpg", etiket: "yeni", detay:"" },
    { id: 138, ad: "Tehlikeli Madde Lojistiği ve İş Güvenliği", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler1/kitap71.jpg", etiket: "yeni", detay:"" },
    { id: 139, ad: "Güneş Gözlüğü", kategori: "kisisel bakim", altKategori: "", fiyat: 500, resim: "resimler2/bakim4.jpg", etiket: "yeni", detay:"" },
    { id: 140, ad: "Bisiklet Kilidi", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 300, resim: "resimler4/oto5.jpg", etiket: "yeni", detay:"" },
    { id: 141, ad: "Bisiklet Eldiveni", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 250, resim: "resimler4/oto6.jpg", etiket: "yeni", detay:"" },
    { id: 142, ad: "Bisiklet Kilidi", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 100, resim: "resimler4/oto7.jpg", etiket: "yeni", detay:"" },
    { id: 143, ad: "Bisiklet Fren Balatası", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 100, resim: "resimler4/oto8.jpg", etiket: "yeni", detay:"" },
    { id: 144, ad: "Bisiklet Arka Far 2 Adet", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 100, resim: "resimler3/oto9.jpg", etiket: "yeni", detay:"" },
    { id: 145, ad: "Bisiklet Kilidi", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 300, resim: "resimler4/oto10.jpg", etiket: "yeni", detay:"" },
    { id: 146, ad: "Bisiklet Kilidi", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 200, resim: "resimler4/oto11.jpg", etiket: "yeni", detay:"" },
    { id: 147, ad: "Metre", kategori: "alet edevat", altKategori: "", fiyat: 200, resim: "resimler3/alet8.jpg", etiket: "yeni", detay:"" },
    { id: 148, ad: "Bisiklet Arka Far 1 Adet", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 20, resim: "resimler4/oto12.jpg", etiket: "yeni", detay:"" },
    { id: 149, ad: "Bisiklet Eldiveni", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 100, resim: "resimler4/oto13.jpg", etiket: "", detay:"" },
    { id: 150, ad: "Otomobil Ön/Arka Cam Güneşliği", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 150, resim: "resimler4/oto14.jpg", etiket: "yeni", detay:"" },
    { id: 151, ad: "Motor Temizleyici Sprey", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 100, resim: "resimler4/oto15.jpg", etiket: "yeni", detay:"" },
    { id: 152, ad: "Kriko", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 200, resim: "resimler4/oto16.jpg", etiket: "ikinci-el", detay:"" },
    { id: 153, ad: "Katlanabilir Şemsiye Tip Ön Cam Güneşliği", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 200, resim: "resimler4/oto17.jpg", etiket: "yeni", detay:"" },
    { id: 154, ad: "Trafik Dubası", kategori: "otomobil/bisiklet", altKategori: "", fiyat: 250, resim: "resimler4/oto18.jpg", etiket: "yeni", detay:"" },
    { id: 155, ad: "Asbest Söküm Uzmanlığı Eğitimi Ders Notları", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler1/kitap72.jpg", etiket: "ikinci-el", detay:"" },
    { id: 156, ad: "RID-Eğitimcilerin Eğitimi Programı Ders Notları ", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler1/kitap73.jpg", etiket: "ikinci-el", detay:"" },
    { id: 157, ad: "ADR-Eğitimcilerin Eğitimi Programı Ders Notları ", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler1/kitap74.jpg", etiket: "ikinci-el", detay:"" },
    { id: 158, ad: "İş Sağlığı ve Güvenliği Uygulamalı El Kitabı ", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler1/kitap75.jpg", etiket: "yeni", detay:"" },
    
    { id: 160, ad: "İSG Ders Notları ", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler1/kitap77.jpg", etiket: "ikinci-el", detay:"" },
    { id: 161, ad: "Tehlikeli Madde Lojistiği ve İş Güvenliği", kategori: "kitap", altKategori: "iş sağlığı ve güvenliği", fiyat: 200, resim: "resimler1/kitap78.jpg", etiket: "yeni", detay:"" },
    { id: 162, ad: "KALE Şifreli Asma Kilit", kategori: "ev esyasi", altKategori: "", fiyat: 200, resim: "resimler3/ev8.jpg", etiket: "yeni", detay:"" },
    { id: 163, ad: "15 Adet Mum", kategori: "ev esyasi", altKategori: "iş sağlığı ve güvenliği", fiyat: 100, resim: "resimler3/ev9.jpg", etiket: "yeni", detay:"" },
    

];

// Alt Kategoriler Ağacı
const kategoriAgaci = {
    "Kitap": [
        "Tarih", "EKPSS", "YKS", "KPSS", "Sosyoloji", "Yaşam",
        "Açık Öğretim", "Dünya Klasikleri", "Türk Klasikleri", 
        "Sağlık", "İş Sağlığı ve Güvenliği", "Yabancı Dil", 
        "Atatürk", "Kurtuluş Savaşı","Kişisel Gelişim", "Siyaset", "Bilgisayar", 
    ],
    "Kırtasiye": [
        "Kareli Defter", "Düz Çizgili Defter", "Çizgisiz Defter", "Keçeli Kalem", "Hesap Makinesi",
        "Siyah Kurşun Kalem", "Kırmızı Kuru Kalem", "Ataç", "Kalem Kutusu","lazer Kalemi",
        "Yapıştırma Bantı", "Koli Bantı", "Kırmızı Tükenmez Kalem", "Tel Zımba", "Delgeç",
        "Mavi Tükenmez Kalem", "Siyah Tükenmez Kalem", "Pergel", "Daksil",
        "Cetvel", "Gönye", "Kalemtraş", "Silgi", "Sırt Çantası", "A4 Kağıdı",
        "Kuru Kalem Seti", "Fosforlu Kalem Seti", "Kalem Kutusu", "Evrak Çantası"
    ],
    "Cep Telefonu": ["Taşınabilir Telefon Şarj Cihazı","Telefon Şarj Cihazı","Telefon Tutucu",

    ],
    "Ev Esyasi": ["Ev Hayvanı Aksesuarı","Duvar Saati", "Masa Saati","Elektrik", "Sandalye", "Oyun Kağıdı", "Kilit",

    ],
};

// Sepet ve Favori Listeleri
let sepet = [];
let favoriler = [];

window.onload = function() {
    urunleriGoster(tumUrunler);
};

function urunleriGoster(liste) {
    const listeDiv = document.getElementById('urunlerListesi');
    listeDiv.innerHTML = "";

    if (liste.length === 0) {
        listeDiv.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #777;'>Aradığınız kriterlere uygun ürün bulunamadı.</p>";
        return;
    }

    liste.forEach(urun => {
        const kart = document.createElement('div');
        kart.className = 'urun-karti';
        
        let etiketHTML = "";
        if (urun.etiket === "cok-satan") {
            etiketHTML = `<div class="urun-etiket cok-satan-etiket">ÇOK SATAN</div>`;
        } else if (urun.etiket === "yeni") {
            etiketHTML = `<div class="urun-etiket yeni-etiket">YENİ</div>`;
        } else if (urun.etiket === "ikinci-el") {
            etiketHTML = `<div class="urun-etiket ikinci-el-etiket">İKİNCİ EL</div>`;
        } else if (urun.etiket === "firsat") {
            etiketHTML = `<div class="urun-etiket firsat-etiket">FIRSAT</div>`;
        }

        let resimIcerigi = urun.resim 
            ? `<img src="${urun.resim}" alt="${urun.ad}" style="width: 100%; height: 100%; object-fit: contain;">` 
            : `Ürün Görseli`;

        kart.innerHTML = `
            <div class="urun-resim" style="position: relative;">
                ${etiketHTML}
                ${resimIcerigi}
                
                <!-- Göz İkonlu İncele Butonu -->
                <button class="incele-overlay-btn" onclick="urunuIncele(${urun.id})" title="Ürünü İncele">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align: middle;">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    İncele
                </button>
            </div>
            <div class="urun-bilgi">
                <div>
                    <div class="urun-kategori-etiket">${urun.kategori} ${urun.altKategori ? ' / ' + urun.altKategori : ''}</div>
                    <div class="urun-baslik">${urun.ad}</div>
                </div>
                <div>
                    <div class="urun-fiyat">${urun.fiyat} TL</div>
                    <div class="urun-butonlar">
                        <button class="islem-btn sepete-ekle-btn" onclick="sepeteEkle(${urun.id})">Sepete Ekle</button>
                        <button class="islem-btn favori-ekle-btn" onclick="favoriyeEkle(${urun.id})">Favori</button>
                    </div>
                </div>
            </div>
        `;
        listeDiv.appendChild(kart);
    });
}

// Kategoriye Göre Filtreleme (Düz Butonlar İçin)
function kategoriFiltrele(kategoriAdi, event) {
    document.querySelectorAll('.kategori-btn').forEach(btn => btn.classList.remove('aktif'));
    if (event && event.target) {
        event.target.classList.add('aktif');
    }
    document.getElementById('altKategoriContainer').style.display = "none";

    if (kategoriAdi === 'hepsi') {
        urunleriGoster(tumUrunler);
    } else {
        const filtrelenmis = tumUrunler.filter(u => u.kategori.toLowerCase() === kategoriAdi.toLowerCase());
        urunleriGoster(filtrelenmis);
    }
}

// Alt Kategorileri Açan Fonksiyon (Kitap ve Kırtasiye İçin)
function altKategorileriGoster(kategoriAdi, event) {
    document.querySelectorAll('.kategori-btn').forEach(btn => btn.classList.remove('aktif'));
    if (event && event.target) {
        event.target.classList.add('aktif');
    }

    const arananKategori = kategoriAdi.toLocaleLowerCase('tr');
    const filtrelenmis = tumUrunler.filter(u => u.kategori.toLocaleLowerCase('tr') === arananKategori);
    urunleriGoster(filtrelenmis);

    const container = document.getElementById('altKategoriContainer');
    container.innerHTML = "";
    
    const agacAnahtari = Object.keys(kategoriAgaci).find(key => key.toLocaleLowerCase('tr') === arananKategori);

    if (agacAnahtari && kategoriAgaci[agacAnahtari]) {
        kategoriAgaci[agacAnahtari].forEach(altKategori => {
            const kutu = document.createElement('div');
            kutu.className = 'alt-kategori-kutusu';
            kutu.innerText = altKategori;
            
            kutu.onclick = function() {
                const altFiltre = tumUrunler.filter(u => u.altKategori.toLocaleLowerCase('tr') === altKategori.toLocaleLowerCase('tr'));
                urunleriGoster(altFiltre);
            };
            
            container.appendChild(kutu);
        });
        container.style.display = "flex";
    } else {
        container.style.display = "none";
    }
}

// Sepete Ekle
function sepeteEkle(id) {
    const urun = tumUrunler.find(u => u.id === id);
    if (urun) {
        sepet.push(urun);
        document.getElementById('sepetSayisi').innerText = sepet.length;
        alert(urun.ad + " sepete eklendi!");
    }
}

// Favoriye Ekle
function favoriyeEkle(id) {
    const urun = tumUrunler.find(u => u.id === id);
    if (urun && !favoriler.includes(urun)) {
        favoriler.push(urun);
        document.getElementById('favoriSayisi').innerText = favoriler.length;
        alert(urun.ad + " favorilere eklendi!");
    } else {
        alert("Bu ürün zaten favorilerinizde.");
    }
}


// Sepet butonuna basıldığında modalı aç
function sepetiAc() {
    const modal = document.getElementById('sepetModal');
    const sepetListesiDiv = document.getElementById('sepetUrunleriListesi');
    const toplamTabela = document.getElementById('toplamFiyatTabela');
    
    sepetListesiDiv.innerHTML = "";

    if (sepet.length === 0) {
        sepetListesiDiv.innerHTML = "<p style='text-align: center; color: #777;'>Sepetiniz boş.</p>";
        toplamTabela.innerText = "0";
        document.getElementById('odemeFormuBolumu').style.display = "none";
        document.getElementById('modalButonlar').style.display = "none";
    } else {
        let toplamFiyat = 0;
        sepet.forEach((urun, index) => {
            toplamFiyat += urun.fiyat;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'sepet-item';
            itemDiv.innerHTML = `
                <span>${urun.ad}</span>
                <strong>${urun.fiyat} TL</strong>
            `;
            sepetListesiDiv.appendChild(itemDiv);
        });
        toplamTabela.innerText = toplamFiyat;
        document.getElementById('modalButonlar').style.display = "block";
    }

    modal.style.display = "flex";
}

// Modalı Kapat
function sepetiKapat() {
    document.getElementById('sepetModal').style.display = "none";
    document.getElementById('odemeFormuBolumu').style.display = "none";
}

// Ödeme Formunu Aç
function odemeEkraniniAc() {
    if (sepet.length === 0) {
        alert("Sepetinizde ürün bulunmamaktadır.");
        return;
    }
    document.getElementById('odemeFormuBolumu').style.display = "block";
    document.getElementById('modalButonlar').style.display = "none";
}

// Siparişi Tamamlama İşlemi
function siparişiTamamla(event) {
    event.preventDefault();
    const adSoyad = document.getElementById('adSoyad').value;
    
    alert(`Tebrikler ${adSoyad}! Siparişiniz başarıyla alınmıştır. En kısa sürede kargoya verilecektir.`);
    
    // Sepeti sıfırla ve kapat
    sepet = [];
    document.getElementById('sepetSayisi').innerText = "0";
    sepetiKapat();
}

// Favorileri Aç
function favorileriAc() {
    if (favoriler.length === 0) {
        alert("Favori listeniz boş.");
    } else {
        let urunIsimleri = favoriler.map(u => `- ${u.ad} (${u.fiyat} TL)`).join("\n");
        alert("FAVORİLERİNİZ:\n\n" + urunIsimleri);
    }
}

// Canlı Arama
function urunAra() {
    const aramaMetni = document.getElementById('searchInput').value.toLowerCase();
    const filtrelenmis = tumUrunler.filter(u => 
        u.ad.toLowerCase().includes(aramaMetni) || 
        u.kategori.toLowerCase().includes(aramaMetni)
    );
    urunleriGoster(filtrelenmis);
}

// Sıralama
function urunleriSirala(tur) {
    let listeKopyasi = [...tumUrunler];
    if (tur === 'fiyat-artan') listeKopyasi.sort((a, b) => a.fiyat - b.fiyat);
    else if (tur === 'fiyat-azalan') listeKopyasi.sort((a, b) => b.fiyat - a.fiyat);
    else if (tur === 'alfabetik') listeKopyasi.sort((a, b) => a.ad.localeCompare(b.ad, 'tr'));
    urunleriGoster(listeKopyasi);
}
// Hakkımızda, İletişim vb. Bilgi Modallarını Açma
function bilgiModaliniAc(tur) {
    const modal = document.getElementById('bilgiModal');
    const baslik = document.getElementById('bilgiBaslik');
    const icerik = document.getElementById('bilgiIcerikMetni');

    if (tur === 'hakkimizda') {
        baslik.innerText = "Hakkımızda";
        icerik.innerHTML = `
            <p><strong>GelVatandaşGel</strong> e-ticaret platformu; kitaplardan kırtasiyeye, bilgisayar donanımlarından iş sağlığı ve güvenliği ekipmanlarına kadar geniş bir ürün yelpazesini kullanıcılarla buluşturmak amacıyla kurulmuştur.</p>
            <p style="margin-top: 10px;">Yenilikçi, güvenilir ve kullanıcı dostu arayüzümüzle en iyi alışveriş deneyimini sunmayı hedefliyoruz.</p>
        `;
    } else if (tur === 'iletisim') {
        baslik.innerText = "İletişim Bilgileri";
        icerik.innerHTML = `
            <p>Sorularınız, önerileriniz veya destek talepleriniz için bizimle aşağıdaki kanallardan 7/24 iletişime geçebilirsiniz:</p>
            <ul style="margin-top: 10px; list-style: disc; padding-left: 20px;">
                <li><strong>E-Posta:</strong>metinzorlu599@gmail.com</li>
                <li><strong>Telefon:</strong> 0506 531 57 88</li>
                <li><strong>Adres:</strong>Alaaddin Mah. Ortapazar Cad. No:6 Kat:3 D: 7 Osmangazi/BURSA</li>
            </ul>
        `;
    } else if (tur === 'gizlilik') {
        baslik.innerText = "Gizlilik Politikası";
        icerik.innerHTML = `
            <p>Kullanıcılarımızın kişisel verilerinin gizliliği bizim için en üst düzeyde önem taşır. Sitemiz üzerinden paylaştığınız bilgiler hiçbir şekilde üçüncü şahıslarla paylaşılmaz ve güvenli altyapımızda saklanır.</p>
        `;
    } else if (tur === 'sartlar') {
        baslik.innerText = "Kullanım Koşulları";
        icerik.innerHTML = `
            <p>Bu web sitesini kullanarak site içerisinde yer alan tüm kuralları ve kullanım şartlarını kabul etmiş sayılırsınız. Site üzerindeki tüm görseller ve metinler GelVatandaşGel'e aittir.</p>
        `;
    } else if (tur === 'iade') {
        baslik.innerText = "İptal ve İade Koşulları";
        icerik.innerHTML = `
            <p>Satın aldığınız ürünleri, teslim tarihinden itibaren 14 gün içerisinde kullanılmamış ve orijinal ambalajında olmak şartıyla kolayca iade edebilir veya değiştirebilirsiniz.</p>
        `;
    } else if (tur === 'kargo') {
        baslik.innerText = "Kargo ve Teslimat";
        icerik.innerHTML = `
            <p>Siparişleriniz en geç 1-3 iş günü içerisinde anlaşmalı kargo şirketlerine teslim edilir. Kargo takip numaranız sipariş onayından sonra tarafınıza iletilir.</p>
        `;
    }

    modal.style.display = "flex";
}

// Bilgi Modalını Kapat
function bilgiModaliniKapat() {
    document.getElementById('bilgiModal').style.display = "none";
}
function urunuIncele(id) {
    const urun = tumUrunler.find(u => u.id === id);
    if (urun) {
        alert("ÜRÜN DETAYI:\n\nÜrün Adı: " + urun.ad + "\nKategori: " + urun.kategori + (urun.altKategori ? ' / ' + urun.altKategori : '') + "\nFiyat: " + urun.fiyat + " TL");
    }
}
function urunuIncele(id) {
    const urun = tumUrunler.find(u => u.id === id);
    if (urun) {
        alert("ÜRÜN DETAYI:\n\n" +
              "Ürün Adı: " + urun.ad + "\n" +
              "Kategori: " + urun.kategori + (urun.altKategori ? ' / ' + urun.altKategori : '') + "\n" +
              "Fiyat: " + urun.fiyat + " TL\n\n" +
              "Açıklama / Detay:\n" + (urun.detay ? urun.detay : "Bu ürün için henüz detay girilmemiş."));
    }
}

