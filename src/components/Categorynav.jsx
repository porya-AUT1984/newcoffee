import { useState, useRef } from "react";

function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState("shakes");
  const scrollRef = useRef(null);

  const menuData = {
    shakes: {
      title: "🥤 شیک‌ها",
      items: [
        { id: 1, name: "شیک وانيل", price: "180" },
        { id: 2, name: "شیك شكلاتی", price: "190" },
        { id: 3, name: "شیک توت فرنگی", price: "190" },
        { id: 4, name: "شیک بيسكویتی", price: "180" },
        { id: 5, name: "شیک كافی", price: "240" },
        { id: 6, name: "شیک لوتوس", price: "200" },
        { id: 7, name: "شیک نسکافه ای", price: "180" },
        { id: 8, name: "شیک براونی", price: "220" },
        { id: 9, name: "شیک M&M", price: "200" },
        { id: 10, name: "شیک کوکی", price: "190" },
        { id: 11, name: "شیک مخصوص", price: "280" },
        { id: 12, name: "فراپه تیرامیسو ", price: "280" },
        { id: 13, name: "دالگونا توت فرنگی", price: "200" },
        { id: 14, name: "دالگونا اورئو", price: "200" },

        { id: 15, name: "دالگونا چی پف", price: "200" },
        { id: 16, name: "آیس دالگونا چی پف", price: "200" },
      ],
    },
    smoothies: {
      title: "🍹 اسموتی و ماکتیل",
      items: [
        { id: 17, name: "موهیتو", price: "190" },
        { id: 18, name: "بلک موهیتو", price: "220" },
        { id: 19, name: "لیموناد", price: "180" },
        { id: 20, name: "لیموناد برزیلی", price: "200" },

        { id: 21, name: "مارگاریتا ", price: "200" },
        { id: 22, name: "بمب انرژی", price: "230" },

        { id: 23, name: "نوشیدنی بهشتی", price: "240" },

        { id: 24, name: "اسموتی توت فرنگی و موز", price: "220" },

        { id: 25, name: "اسموتی آناناس و موز", price: "230" },
        { id: 26, name: "آب پرتقال", price: "140" },
        { id: 27, name: "آب آلبالو", price: "140" },
        { id: 28, name: "معجون مخصوص سنتی", price: "300" },
        { id: 29, name: "معجون شکلاتی", price: "300" },
      ],
    },
    cakes: {
      title: "🍰 کیک‌ها",
      items: [
        { id: 30, name: "كوكى", price: "90" },
        { id: 31, name: "  كيك بستنى وانیلی", price: "230" },
        { id: 32, name: "  كيك بستنى شکلاتی", price: "230" },
        { id: 33, name: "  كيك بستنى توت فرنگی", price: "240" },
        { id: 34, name: "كيك خيس شکلاتي", price: "150" },
      ],
    },
    breakfast: {
      title: "🍳 صبحانه",
      items: [
        { id: 35, name: "بشقاب نیمرو", price: "200" },
        { id: 36, name: "صبحانه ایرانی", price: "240" },
        { id: 37, name: "صبحانه اسپانیایی", price: "250" },
        { id: 38, name: "صبحانه انگلیسی", price: "300" },
      ],
    },
    snacks: {
      title: "🍟پیش غذا",
      items: [
        { id: 39, name: "اسنک پنینی", price: "150" },
        { id: 40, name: "چیپس پنیری", price: "130" },
        { id: 41, name: "چیپس پنیری مخصوص", price: "180" },

        { id: 42, name: "سیب سرخ شده", price: "150" },
        { id: 43, name: "سیب سرخ شده مخصوص", price: "240" },
      ],
    },
    hookah: {
      title: "😮‍💨 قلیان‌ها",
      items: [
        { id: 44, name: "قلیان با سرویس", price: "550" },
        { id: 45, name: "قلیان بدون سرویس", price: "300" },
      ],
    },
    coffee: {
      title: "☕ قهوه‌ها",
      items: [
        { id: 46, name: "اسپرسو تونیک", price: "190" },
        { id: 47, name: "اسپرسو دوبل", price: "120" },
        { id: 48, name: "اسپرسو تک", price: "100" },

        { id: 49, name: "آمریکانو", price: "130" },
        { id: 50, name: "کاپوچینو", price: "150" },
        { id: 51, name: "اسپرسو کن پانا", price: "150" },
        { id: 52, name: "وایت کافی چاکلت", price: "150" },
        { id: 53, name: "لاته", price: "170" },
        { id: 54, name: "بلک لاته", price: "180" },
        { id: 55, name: "آیس لاته", price: "170" },
        { id: 56, name: "آیریشن لاته", price: "180" },
        { id: 57, name: "موکا (ماکیاتو)", price: "190" },
        { id: 58, name: "آیس موکا ترک", price: "190" },
        { id: 59, name: "آیس موکا فرانسه", price: "150" },
        { id: 60, name: "افوگاتو", price: "180" },
        { id: 61, name: "هات چاکلت", price: "150" },
        { id: 62, name: "چی پف چاکلت", price: "170" },
        { id: 63, name: "لاته ماچا", price: "170" },
        { id: 64, name: "ماچا توت فرنگی", price: "200" },
        { id: 65, name: "ماچا نارگیل", price: "200" },
        { id: 66, name: "ماچا کارامل", price: "200" },
        { id: 67, name: "ماچا ماکیاتو", price: "240" },
        { id: 68, name: "آیس هانی لاته", price: "190" },
        { id: 69, name: "لاته عسل و دارچین", price: "180" },
        { id: 70, name: "آیس کوکی & کرم", price: "190" },
        { id: 71, name: "آیس قهوه نارگیلی", price: "170" },
        { id: 72, name: "آیس تیرامیسو", price: "200" },
        { id: 73, name: "لاته شیر موز", price: "200" },
        { id: 74, name: "دارک چاکلت ", price: "160" },
        { id: 75, name: "آیس دارک چاکلت", price: "160" },
        { id: 76, name: "آیس وانیل", price: "220" },
        { id: 77, name: "آیس شکلات", price: "200" },
        { id: 78, name: "کافی میلک شیک", price: "190" },
        { id: 79, name: "آیس کافی نسکافه ای با بستنی ", price: "240" },
        { id: 80, name: "آیس کافی موز و شکلات", price: "250" },
        { id: 81, name: "لاته توت فرنگی", price: "190" },
      ],
    },
    tea: {
      title: "🍵 چای و دمنوش",
      items: [
        { id: 82, name: "چای سیاه", price: "90" },
        { id: 83, name: "چای سیاه و توت فرنگی", price: "90" },
        { id: 84, name: "چای سیاه و آلبالو", price: "90" },

        { id: 85, name: "چای سبز", price: "100" },

        { id: 86, name: "چای ترش", price: "140" },
        { id: 87, name: "چای انگلیسی", price: "120" },
        { id: 88, name: "چای ماسالا", price: "150" },
        { id: 89, name: "دمنوش گل گاوزبان", price: "100" },
        { id: 90, name: "دمنوش بهار نارنج", price: "100" },
        { id: 91, name: "دمنوش آویشن", price: "100" },

        { id: 92, name: "دمنوش آرامش", price: "100" },
      ],
    },
  };

  const categories = [
    { id: "shakes", label: "🥤 شیک" },
    { id: "smoothies", label: "🍹 اسموتی" },
    { id: "cakes", label: "🍰 کیک" },
    { id: "breakfast", label: "🍳 صبحانه" },
    { id: "snacks", label: "🍟 پیش غذا" },
    { id: "hookah", label: "💨 قلیان" },
    { id: "coffee", label: "☕ قهوه" },
    { id: "tea", label: "🍵 چای" },
  ];

  const currentItems = menuData[activeCategory]?.items || [];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section id="menu" className="py-5" style={{ backgroundColor: "#0a0a0a",}}>
      <div className="container ">
        <h2
          className="text-center display-4 fw-bold mb-3"
          style={{ color: "#d4a0e0" }}
        >
          منوی کافه اشوان
        </h2>
        <p className="text-center text-light opacity-75 fs-5 mb-5">
          انتخاب کنید از میان طعم‌های خاص
        </p>

        <div className="mb-4 ">
          <button
            className="btn btn-light shadow-sm start-0 top-50 translate-middle-y z-1"
            onClick={scrollLeft}
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              opacity: 0.8,
            }}
          >
            ◀
          </button>

          <div
            ref={scrollRef}
            className="d-flex gap-3 overflow-auto py-3 px-4 rounded-3 shadow-sm"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "thin",
              msOverflowStyle: "none",
              background: "linear-gradient(135deg, #1a0a2e, #2c0a3e, #1a0a2e)",
              
            }}
          >
            {categories.map((cat) => (
              <>
                <button
                  key={cat.id}
                  className={`btn ${
                    activeCategory === cat.id
                      ? "btn-purple"
                      : "btn-outline-light"
                  } px-4 py-2 fw-bold flex-shrink-0`}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{ borderRadius: "50px", whiteSpace: "nowrap" }}
                >
                  {cat.label}
                </button>
                <p>{cat.desc}</p>
              </>
            ))}
          </div>

          <button
            className="btn btn-light shadow-sm position-absolute end-0 top-50 translate-middle-y z-1"
            onClick={scrollRight}
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              opacity: 0.8,
            }}
          >
            ▶
          </button>
        </div>

        <div
          className="rounded-3 shadow-sm p-4"
          style={{
            background: "linear-gradient(135deg, #1a0a2e, #2c0a3e, #1a0a2e)",
          }}
        >
          <h3 className="mb-4 fw-bold" style={{ color: "#d4a0e0" }}>
            {menuData[activeCategory]?.title || "منو"}
          </h3>

          <div className="row g-4">
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-4">
                  <div
                    className="card h-100 border-0 shadow-sm hover-card"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: "white",
                      backdropFilter: "blur(10px)",
                     
                    }}
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start">
                        <h5 className="card-title fw-bold">{item.name}</h5>
                        <span
                          className="badge fs-6 p-2"
                          style={{
                            background:
                              "linear-gradient(135deg, #8e44ad, #6c3483)",
                            color: "white",
                          }}
                        >
                          {item.price === "۰" ? "---" : `${item.price} تومان`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p className="text-light opacity-75 fs-5">
                  هیچ آیتمی در این دسته وجود ندارد
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryNav;
