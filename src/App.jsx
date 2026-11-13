import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Article from "./components/Article/Article";

import "./App.css";

function App() {
  const articles = [
    {
      title: "ساخت اولین پروژه رزومه‌ای با پایتون: قدم‌به‌قدم تا موفقیت",
      author: "سعیدی‌راد",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      title: "ساخت اولین پروژه رزومه‌ای با React: قدم‌به‌قدم تا موفقیت",
      author: "قدیر یلمه",
      img: "/images/snowy.jpg",
    },
    {
      title: "توسعه کامپوننت های اصولی برای React",
      author: "سعیدی‌راد",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      title: "5 نکته مهم و تجربی برای React",
      author: "عبادی",
      img: "/images/snowy.jpg",
    },
    {
      title: "برنامه نویسی در عصر هوش مصنوعی",
      author: "خندقی",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      title: "پرسونال برندینگ برای برنامه نویسان",
      author: "سعیدی‌راد",
      img: "/images/snowy.jpg",
    },
    {
      title: "ساخت وبلاگ ساده با جاوا اسکریپت",
      author: "سعیدی‌راد",
      img: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
    },
    {
      title: "شبکه سازی حرفه‌ای برای برنامه نویسان",
      author: "عبادی",
      img: "/images/snowy.jpg",
    },
  ];

  return (
    <div>
      <Header />

      <main>
        <section
          id="hero-section"
          className="container flex items-center justify-between"
        >
          <div id="headline">
            <h1 id="title">سبزبلاگ؛ مرجع آموزش و پروژه‌های برنامه‌نویسی</h1>
            <p id="caption">
              سبزبلاگ فضایی برای یادگیری برنامه‌نویسی و به‌اشتراک‌گذاری دانش
              است. اینجا مقالات آموزشی، نکات کاربردی و پروژه‌های رزومه‌ای
              برنامه‌نویسی با زبانی ساده و حرفه‌ای ارائه می‌شه. هدف ما کمک به
              شماست تا مهارت‌هاتون رو تقویت کنید و رزومه‌ای قوی با پروژه‌های
              جذاب بسازید!
            </p>
            <div id="hero-btns" className="gap-2">
              <button className="btn primary-btn">خواندن مقالات</button>
              <button className="btn secondary-btn">تهیه اشتراک</button>
            </div>
          </div>
          <div id="image-container">
            <img src="./public/images/hero-illustrator.png" />
          </div>
        </section>
        <section id="articles-section">
          <div id="articles-header" className="container flex justify-between">
            <h2 id="section-title">مقالات اخیر</h2>
            <a href="#" className="read-more">
              {" "}
              بیشتر بخوانید{" "}
            </a>
          </div>

          <div id="items" className="container">

            {articles.map((item, index) => (
              <Article {...item}/>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
