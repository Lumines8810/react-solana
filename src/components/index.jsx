"use client";
import React from "react";

function MainComponent({
  sectionTitle,
  mainVisual,
  features,
  testimonials,
  logos,
  cta,
}) {
  return (
    <div className="font-roboto">
      <header className="p-4 flex justify-between items-center bg-[#f8f9fa]">
        <div className="text-2xl">サービスロゴ</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                サービス紹介
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                価格
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ブログ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="text-center p-8 bg-[#e9ecef]">
        <h1 className="text-4xl">{sectionTitle.hero}</h1>
        <img
          src={mainVisual.url}
          alt="サービスのメインビジュアル"
          className="mx-auto my-4 w-[600px] h-[400px] object-cover"
        />
        <button className="p-2 bg-[#007bff] text-white rounded">
          無料トライアル
        </button>
      </section>

      <section className="p-8 bg-white">
        <h2 className="text-3xl mb-4">{sectionTitle.features}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#f8f9fa] p-4 rounded">
              <img
                src={feature.img}
                alt={`機能の説明画像 ${index + 1}`}
                className="w-full h-[200px] object-cover mb-4"
              />
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-[#e9ecef] text-center">
        <h2 className="text-3xl mb-4">{sectionTitle.testimonials}</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded mb-4">
            <p className="italic">"{testimonial.quote}"</p>
            <div className="mt-4 flex items-center justify-center">
              <img
                src={testimonial.img}
                alt={`顧客の顔写真 ${index + 1}`}
                className="w-16 h-16 rounded-full mr-2"
              />
              <p>{testimonial.name}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl mb-4">{sectionTitle.logos}</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.img}
              alt={`ユーザー企業のロゴ ${index + 1}`}
              className="mb-4 w-[150px]"
            />
          ))}
        </div>
      </section>

      <section className="p-8 bg-[#e9ecef] text-center">
        <h2 className="text-3xl mb-4">{sectionTitle.cta}</h2>
        <button className="p-2 bg-[#007bff] text-white rounded">{cta}</button>
      </section>

      <footer className="p-4 bg-[#343a40] text-white">
        <p>© 2023 会社名. All rights reserved.</p>
        <p>会社の名称、住所、電話番号、メールアドレス</p>
        <div className="mt-2">
          <a href="#" className="hover:underline">
            プライバシーポリシー
          </a>{" "}
          |
          <a href="#" className="hover:underline ml-2">
            利用規約
          </a>
        </div>
        <div className="mt-2 flex space-x-2">
          <a href="#" className="fab fa-facebook"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
        </div>
      </footer>
    </div>
  );
}

function StoryComponent() {
  const sectionTitle = {
    hero: "洗練されたモダンなデザイン",
    features: "主要な機能",
    testimonials: "顧客の声",
    logos: "ユーザー企業ロゴ",
    cta: "サービス登録/無料トライアル",
  };

  const mainVisual = {
    url: "assets/images/main-visual.jpg",
  };

  const features = [
    { img: "assets/images/feature1.jpg", description: "機能1の詳細" },
    { img: "assets/images/feature2.jpg", description: "機能2の詳細" },
    { img: "assets/images/feature3.jpg", description: "機能3の詳細" },
  ];

  const testimonials = [
    {
      quote: "素晴らしいサービスです",
      img: "assets/images/customer1.jpg",
      name: "顧客1",
    },
    {
      quote: "とても満足しています",
      img: "assets/images/customer2.jpg",
      name: "顧客2",
    },
  ];

  const logos = [
    { img: "assets/images/logo1.png" },
    { img: "assets/images/logo2.png" },
    { img: "assets/images/logo3.png" },
  ];

  const cta = "無料トライアルを開始";

  return (
    <MainComponent
      sectionTitle={sectionTitle}
      mainVisual={mainVisual}
      features={features}
      testimonials={testimonials}
      logos={logos}
      cta={cta}
    />
  );
}

export default MainComponent;