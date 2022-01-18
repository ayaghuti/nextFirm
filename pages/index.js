import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'reactstrap';
import Layout from '../components/Layout'
import majid from '../public/majid.jpg';
import styles from '../styles/Home.module.css'
import CarouselComp from '../components/CarouselComp';
import Cards from '../components/Cards';

const Index = () => {
  const [values, setValues] = useState({
    error: false
  })

  const { error } = values

  return (
    <>
      <Layout>
        <Container fluid id="homePosition" className="text-center bg-info">
          <h1 className="display-3 text-white py-3">به سایت <span>آفرینش فکری فراز</span>خوش آمدید</h1>
          <h3 className='py-3'>دارای بیش از یک دهه سابقه در <span><em>ثبت شرکت، برند و اختراع</em></span>&nbsp;در ایران و کشورهای هدف صادرات</h3>
        </Container>
        <CarouselComp />
        <section>
          <Container>
            <div className="row">
              <div className="col-md-4">
                <Image layout='responsive' src={majid} alt="photo of the owner" className='my-4'/>
              </div>
              <div className='col-md-8'>
                <h2 className="display-2 text-center text-success my-4">آفرینش فکری فراز</h2>
                <br />
                <h2 className="display-5 text-right">با مدیریت <em> مجید یاقوتی </em>بیش از یک دهه سابقه، پیشرو در زمینه ثبت شرکت، برند و اختراع، در خدمت شما عزیزان است. با
        استفاده از دانش و تجربه بدست آمده طی این سال ها می توانید برای انجام
        نیازهای ثبتی خود در حداقل زمان و هزینه روی ما حساب کنید</h2>
              </div>
            </div>
            <br />
            <hr />
            <div className="row">
              <div className="col md-12">
                <h3 className="display-4 lead text-right">
              گوشه ای از افتخارات آفرینش فکری فراز  
                </h3>
                <br />
                <ul className={styles.listStyle}>
                  <li>ثبت بیش از 1000 نام و علامت تجاری</li>
                  <li>مشاوره به بیش از دهها شخص حقیقی و حقوقی برای حمایت از بازارهای داخلی و بین المللی کسب و کار آنها</li>
                  <li>ثبت علائم تجاری در کشورهایی نظیر عراق، افغانستان، ثبت مادرید و</li>
                  <li>...</li>
                </ul>
                <br />
              </div>
            </div>
          </Container>
        </section>
        <hr />
        <section>
          <Container>
            <h2 className="display-5 text-info text-right">در خصوص آنچه که تخصص ماست بیشتر بدانید</h2>
            <br />
            <br />
            <Cards />
          </Container>
        </section>
        <br />
        <div className='text-center'>
          <Link href="#homePosition"><a className='btn btn-primary'>بازگشت به ابتدای صفحه</a></Link>
        </div>
        <br />
      </Layout>
    </>
  );
}
 
export default Index;