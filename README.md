# TickTrack

TickTrack, modern ve kullanıcı bazlı bir yapılacaklar (ToDo) uygulamasıdır. Bu uygulama, bireysel kullanıcıların görevlerini kolaylıkla yönetmesine yardımcı olur. Kullanıcı dostu arayüzü ve güçlü altyapısıyla görevlerinizi planlayabilir, düzenleyebilir ve önceliklendirebilirsiniz.

---

## Özellikler

- **Kullanıcı Yönetimi**: Kayıt olma, giriş yapma, şifre sıfırlama ve profil düzenleme.
- **Görev Yönetimi**:
  - Görev ekleme, düzenleme, tamamlama ve silme.
  - Görevler için kategoriler ve öncelik seviyeleri belirleme.
- **Responsive Tasarım**: Tüm cihazlarda uyumlu bir kullanıcı arayüzü.

---

## Teknoloji Yığını

TickTrack aşağıdaki teknolojilerle geliştirilmiştir:

### **Backend**

- **Node.js** ve **Express.js**: Hızlı ve ölçeklenebilir bir sunucu altyapısı.
- **Prisma**: PostgreSQL veritabanı yönetimi için ORM.
- **tRPC**: Tip güvenli API iletişimi.

### **Frontend**

- **Next.js**: Performanslı ve SEO uyumlu frontend framework.
- **TailwindCSS**: Hızlı ve modern UI tasarımı için CSS framework.
- **TypeScript**: Tip güvenli geliştirme deneyimi.

### **DevOps**

- **Docker Compose**: Geliştirme ve dağıtım için konteyner yönetimi.
- **PostgreSQL**: Güçlü ve ölçeklenebilir bir veritabanı.

---

## Kurulum

TickTrack'i yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edin:

### Gerekli Araçlar

- Node.js (v18+)
- Docker ve Docker Compose
- Git

### Adımlar

1. **Proje deposunu klonlayın**:

   ```bash
   git clone https://github.com/your-username/ticktrack.git
   cd ticktrack
   ```

2. **Çevresel Değişkenleri Ayarlayın**:

   - `.env.example` dosyasını kopyalayarak `.env` dosyasını oluşturun ve gerekli bilgileri doldurun:
     ```bash
     cp .env.example .env
     ```

3. **Docker Compose ile Çalıştırın**:

   ```bash
   docker-compose up --build
   ```

4. **Frontend ve Backend'i Çalıştırın**:

   - Backend için:
     ```bash
     cd backend
     npm install
     npm run dev
     ```
   - Frontend için:
     ```bash
     cd frontend
     npm install
     npm run dev
     ```

5. **Uygulamayı Açın**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:4000](http://localhost:4000)

---

## Kullanım

1. **Kayıt Olun veya Giriş Yapın**: Kullanıcı hesabınızı oluşturun veya mevcut hesabınızla giriş yapın.
2. **Görevlerinizi Yönetin**: Görev ekleyin, düzenleyin ve tamamladığınız görevleri işaretleyin.
3. **Profilinizi Düzenleyin**: Hesap bilgilerinizi güncelleyin.

---

## Katkıda Bulunun

TickTrack açık kaynaklı bir projedir ve katkılarınızı bekliyor! Katkıda bulunmak için:

1. Depoyu forklayın.
2. Yeni bir özellik eklemek veya hata düzeltmek için bir branch oluşturun.
3. Değişikliklerinizi yapın ve commit edin.
4. Bir pull request açın.

---

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.

---

## İletişim

Herhangi bir sorunuz veya öneriniz varsa bizimle iletişime geçmekten çekinmeyin:

- **Email**: support@ticktrack.com
- **GitHub**: [https://github.com/your-username/ticktrack](https://github.com/your-username/ticktrack)
