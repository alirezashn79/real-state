import React from "react";

const Features = () => {
  return (
    <div className="featurs">
      <div className="featur">
        <svg className="featur__icon">
          <use href="/img/sprite.svg#icon-global"></use>
        </svg>
        <h4 className="u-heading--dark">بهترین خانه های لوکس جهان</h4>
        <p className="u-paragraph">
          نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان
          وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد
          کردند
        </p>
      </div>

      <div className="featur">
        <svg className="featur__icon">
          <use href="/img/sprite.svg#icon-map-pin"></use>
        </svg>
        <h4 className="u-heading--dark">همه خانه ها در مکان های برتر</h4>
        <p className="u-paragraph">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
      </div>
      <div className="featur">
        <svg className="featur__icon">
          <use href="/img/sprite.svg#icon-key"></use>
        </svg>
        <h4 className="u-heading--dark">خانه جدید در یک هفته</h4>
        <p className="u-paragraph">
          ز آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان
          معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما نشان
          دهند که قالب طراحی شده
        </p>
      </div>
      <div className="featur">
        <svg className="featur__icon">
          <use href="/img/sprite.svg#icon-presentation"></use>
        </svg>
        <h4 className="u-heading--dark">فقط بهترین خواص</h4>
        <p className="u-paragraph">
          تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه
          متن در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در
          نظر گرفته شده است.
        </p>
      </div>
      <div className="featur">
        <svg className="featur__icon">
          <use href="/img/sprite.svg#icon-lock"></use>
        </svg>
        <h4 className="u-heading--dark">پرداخت های ایمن در بعدی</h4>
        <p className="u-paragraph">
          ر نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال
          متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان
          بر خواهد بود.
        </p>
      </div>
      <div className="featur">
        <svg className="featur__icon">
          <use href="/img/sprite.svg#icon-trophy"></use>
        </svg>
        <h4 className="u-heading--dark">1% مشاوران املاک برتر</h4>
        <p className="u-paragraph">
          همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد
          طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
        </p>
      </div>
    </div>
  );
};

export default Features;
