# فروشگاه آنلاین - قالب HTML/CSS/Bootstrap RTL

یک قالب فروشگاهی مدرن و کاملاً ریسپانسیو با طراحی RTL و فونت فارسی Vazirmatn

## ویژگی‌ها

### 🎨 طراحی و ظاهر
- **طراحی مدرن و مینیمال** با ترکیب رنگ‌های نارنجی و سفید
- **پشتیبانی کامل از RTL** برای زبان فارسی
- **فونت فارسی Vazirmatn** برای خوانایی بهتر
- **ریسپانسیو کامل** برای تمام دستگاه‌ها (موبایل، تبلت، دسکتاپ)
- **انیمیشن‌ها و افکت‌های جذاب** برای تجربه کاربری بهتر
- **تصاویر واقعی محصولات** از Unsplash

### 🛍️ صفحات موجود
- **صفحه اصلی** (`index.html`) - نمایش محصولات ویژه و دسته‌بندی‌ها
- **صفحه محصول** (`product.html`) - جزئیات کامل محصول با گالری تصاویر
- **لیست محصولات** (`products.html`) - فیلترها، مرتب‌سازی و نمایش محصولات
- **سبد خرید** (`cart.html`) - مدیریت محصولات و محاسبه قیمت
- **ورود و ثبت نام** (`auth.html`) - فرم‌های احراز هویت

### 🎯 تکنولوژی‌ها
- **HTML5** - ساختار معنایی و بهینه
- **CSS3** - استایل‌های پیشرفته با متغیرهای CSS
- **Bootstrap 5.3 RTL** - فریمورک ریسپانسیو
- **Bootstrap Icons** - آیکون‌های زیبا
- **JavaScript** - تعاملات کاربری

## نصب و راه‌اندازی

### پیش‌نیازها
- مرورگر وب مدرن
- سرور محلی (اختیاری)

### مراحل نصب
1. فایل‌ها را در پوشه پروژه کپی کنید
2. فایل `index.html` را در مرورگر باز کنید
3. برای استفاده از سرور محلی:
   ```bash
   # با Python
   python -m http.server 8000
   
   # با Node.js
   npx serve .
   
   # با PHP
   php -S localhost:8000
   ```

## ساختار فایل‌ها

```
shop/
├── index.html          # صفحه اصلی
├── product.html        # صفحه محصول
├── products.html       # لیست محصولات
├── cart.html          # سبد خرید
├── auth.html          # ورود و ثبت نام
├── style.css          # فایل استایل اصلی
└── README.md          # مستندات
```

## سفارشی‌سازی

### تغییر رنگ‌ها
در فایل `style.css` متغیرهای CSS را ویرایش کنید:

```css
:root {
    --primary-color: #FF6B35;      /* رنگ اصلی نارنجی */
    --primary-dark: #E55A2B;       /* نارنجی تیره */
    --primary-light: #FF8A65;      /* نارنجی روشن */
    --secondary-color: #FF6B35;    /* رنگ ثانویه */
    --accent-color: #FF6B35;       /* رنگ تاکیدی */
    --success-color: #28a745;      /* رنگ موفقیت */
    --warning-color: #ffc107;      /* رنگ هشدار */
    --danger-color: #dc3545;       /* رنگ خطا */
}
```

### اضافه کردن محصولات جدید
در صفحات محصولات، ساختار HTML زیر را تکرار کنید:

```html
<div class="col-lg-3 col-md-6">
    <div class="product-card">
        <div class="product-image">
            <img src="https://images.unsplash.com/photo-XXXXX?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                 class="img-fluid" 
                 alt="نام محصول"
                 loading="lazy">
            <div class="product-overlay">
                <a href="product.html" class="btn btn-primary">مشاهده</a>
            </div>
        </div>
        <div class="product-info">
            <h5 class="product-title">نام محصول</h5>
            <div class="product-price">
                <span class="current-price">قیمت فعلی</span>
                <span class="old-price">قیمت قبلی</span>
            </div>
            <div class="product-rating">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star text-warning"></i>
                <span class="ms-2">(4.0)</span>
            </div>
        </div>
    </div>
</div>
```

## ویژگی‌های ریسپانسیو

### نقاط شکست (Breakpoints)
- **موبایل**: کمتر از 576px
- **تبلت کوچک**: 576px - 768px
- **تبلت**: 768px - 992px
- **دسکتاپ کوچک**: 992px - 1200px
- **دسکتاپ**: بیشتر از 1200px

### بهینه‌سازی‌های موبایل
- منوی همبرگری برای موبایل
- تصاویر بهینه‌شده با lazy loading
- دکمه‌های بزرگ‌تر برای لمس
- فاصله‌گذاری مناسب
- منوی ناوبری با فضای بیشتر در سایزهای بزرگ

## مرورگرهای پشتیبانی شده

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

## ویژگی‌های قابل توسعه

### اضافه کردن صفحات جدید
1. فایل HTML جدید ایجاد کنید
2. ساختار header و footer را کپی کنید
3. محتوای اصلی را اضافه کنید
4. لینک‌های ناوبری را به‌روزرسانی کنید

### اضافه کردن کامپوننت‌های جدید
در فایل `style.css` کلاس‌های جدید اضافه کنید:

```css
.my-component {
    /* استایل‌های کامپوننت */
}
```

### اضافه کردن انیمیشن‌های جدید
```css
@keyframes myAnimation {
    from { /* حالت شروع */ }
    to { /* حالت پایان */ }
}

.my-animation {
    animation: myAnimation 1s ease-in-out;
}
```

## نکات بهینه‌سازی

### عملکرد
- تصاویر را بهینه کنید (WebP, AVIF)
- از CDN برای فونت‌ها استفاده کنید
- CSS و JS را minify کنید
- از lazy loading استفاده کنید

### SEO
- تگ‌های meta را به‌روزرسانی کنید
- alt text برای تصاویر اضافه کنید
- ساختار HTML معنایی استفاده کنید
- Schema markup اضافه کنید

## لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

## تغییرات

### نسخه 1.1.0
- **بهبود منوی ناوبری**: فضای بیشتر برای لینک‌ها در سایزهای بزرگ
- **تصاویر واقعی محصولات**: جایگزینی placeholder ها با تصاویر Unsplash
- **بهبود محصولات مشابه**: تصاویر واقعی در صفحه محصول
- **بهبود محصولات پیشنهادی**: تصاویر واقعی در سبد خرید
- **بهینه‌سازی CSS**: بهبود تراز عمودی منو و فاصله‌گذاری

### نسخه 1.0.0
- انتشار اولیه
- 5 صفحه اصلی
- طراحی RTL کامل
- ریسپانسیو کامل
- فونت فارسی Vazirmatn

---

**توسعه‌دهنده**: فروشگاه آنلاین  
**تاریخ**: 2024  
**نسخه**: 1.1.0
