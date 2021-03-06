import ShowCard from "./ShowCard";
import infoImgInvent from '../public/invent-reg.jpg'
import infoImgBrand from '../public/brand2.jpg'
import infoImgIndustry from '../public/industry.jpg'
import infoImgReg from '../public/firmReg.jpg'

const Cards = (props) => {
  const infoCards = [
    { 
      srcImg: infoImgIndustry,
      title: 'ثبت طرح صنعتی',
      text: 'در بازاری که رقابت و نوآوری و کالاهای جدید حرف اول را در کسب سهم بیشتر بازار می زند، حفظ مالکیت ایده های جدید بسیار مهم است. وقتی ایده ای قابل پیاه سازی و عرضه به بازار می باشد، اولین اقدام گرفتن مالکیت به نام خودتان می باشد. وقتی محصولی را تولید کرده اید که دارای نوآوری می باشد و با کالاهای موجود در بازار تفاوت و برتری محسوسی دارد می توانید از دولت درخواست حمایت و ثبت کنید. یکی از خدمات ثبت آفرینش فکری فراز، در کنار ثبت شرکت، ثبت اختراع و ثبت برند، فعالیت در زمینه ثبت طرح صنعتی می باشد که در این زمینه مشتریان نام آشنایی دارد. با ثبت طرح صنعتی انحصار آن در اختیارتان قرار می گیرد و هیچ کدام از رقبایتان مجاز به کپی برداری و تولید محصول شما نخواهند بود البته به شرطی که اصول ثبتی در آن رعایت شده باشد. طرح صنعتی جنبه زیبایی شناختی محصول و ظاهر و بسته بندی کالاهای شما را شامل می شود و با این نو ثبت شما میتوانید نسبت به ظاهر کالا و بسته بندی حمایت های قانونی لازم را جهت جلوگیری از سواستفاده رقبا داشته باشید وهمچنین موجب افزایش سهم بازار و موفقیت بیشتر می شود.',
      btnTxt: 'مرکز مالکیت معنوی',
      btnLink: 'http://iripo.ssaa.ir'
    },
    {
      srcImg: infoImgReg,
      title: 'ثبت شرکت',
      text: 'با توجه به ایجاد سیستم جدید اینترنتی سامانه ی ثبت شرکت ها و موسسات غیر تجاری، از این پس متقاضیان می توانند مراحل ثبت شرکت را به جای مراجعه ی حضوری به اداره ی کل ثبت شرکت ها و موسسات غیر تجاری از طریق سامانه ی اینترنتی http://sherkat.ssaa.ir شروع و دنبال نمایند. در این راستا، حتی ثبت صورتجلسه ی تغییرات شرکت ها نیز اینترنتی شده است و آخرین اطلاعات مربوط به چگونگی تنظیم درخواست ها و همچنین آخرین وضعیت صورت جلسه ی ابرازی، مدارک مورد لزوم بخشنامه ها و شیوه نامه ی اجرایی ثبت شرکت ها و اطلاع رسانی های آنی و پیگیری پاسخ درخواست ثبت شرکت ها از طریق سامانه ی فوق به راحتی قابل دسترس است. علاوه بر این، موارد راهنمای انجام فرآیند پذیرش درخواست های انواع ثبت تاسیس و تغییر و... شرکت ها و موسسات غیر تجاری نیز درهمین سامانه ی اینترنتی قابل دسترسی می باشد.',
      btnTxt: 'اداره ی کل ثبت شرکت ها و موسسات غیر تجاری',
      btnLink: 'http://sherkat.ssaa.ir'
    },
    {
      srcImg: infoImgInvent,
      title: 'ثبت اختراع',
      text: 'اختراع حاصل و ثمره تلاش فکری و تراوش ذهنی مخترع است که در قالب یک محصول صنعتی یا فرایند صنعتی متبلور می شود. اما از اختراع در قوانین مختلف کشورها زمانی حمایت می شود که این اختراعات طبق تشریفات خارجه آن کشور در موعد و زمان مقرر به ثبت رسیده باشد و شرایط استفاده از این حق ثبت آن در نزد مرجع ذیصلاح (اداره ثبت اختراعات) می باشد. نوآورانی که استراتژی ثبت اختراع آنها بر این است که اختراع خود را در ایران مورد حمایت قرار دهند می توانند اظهارنامه ی ثبت سازمان ثبت اسناد و املاک کشور، زیر مجموعه ی قوه قضاییه ارائه دهند.',
      btnTxt: 'مرکز مالکیت معنوی',
      btnLink: 'http://iripo.ssaa.ir'
    },
    {
      srcImg: infoImgBrand,
      title: 'ثبت برند یا علامت تجاری',
      text: 'نام تجاری رشته ای از بازاریابی است که در قرن نوزدهم با ورود محصولات بسته بندی شده به وجود آمد. شکل منحصر به فرد بطری های شرکت کوکاکولا(Coca-cola) آرم دایره ای شکل آبی و سفید رنگ اتومبیل بی ام دبلیو و سیب رنگارنگ و گاز زده شده ی شرکت اپل ،همگی نمونه های بارز از مارک های تجاری ای هستند که به خاطر آرم خود فوراَ شناسایی می گردند.در واقع،برای این که محصولات صنعتی و تجارتی هر تجارتخانه مشخص و معلوم گردد،تجار علامتی اختیار و اجناس خود را تحت آن علامت رواج می دهند.فایده ی آن این است که مشتری به محض ملاحظه ی علامت می داند که این محصول متعلق به تجارتخانه یا کارخانه ای است که مورد اعتماد او می باشد. استعمال علائم تجاری به قدری رواج دارد که مشتری فقط با ملاحظه ی مارک مبادرت به خرید می نماید بدون اینکه سازنده ی آن و یا تاجری که علامت متعلق به او است را بشناسد.',
      btnTxt: 'سازمان ثبت اختراعات و علامت تجاري',
      btnLink: 'http://iripo.ssaa.ir'
    },
  ]

  return (
    <>
      {infoCards.map((c, i) => {
        return (
          <>
            <ShowCard key={i} card={c} />
            <br />
          </>
        )
      })}
    </>
  )

};

export default Cards;