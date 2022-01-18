import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// import linkToLinkedin from 'https://www.linkedin.com/in/majid-yaghuti-969675229/'


const Contact = () => {
  return ( 
    <>
      <Layout>
        <div className="container">
          <h2 className="text-center display-3 lead text-secondary py-4">تماس با ما</h2>
          <h3 className="text-right display-5 text-secondary py-4">
            راه های ارتباط با ما عبارتند از
          </h3>
          <br />
          <div className="row py-4 text-left">
            <div className="col-md-4 py-4">
              <ul className={styles.contactLst}>
                <li>
                  <FontAwesomeIcon icon={faMobileAlt} />
                  <i className="text-info"> +989153083449</i>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <i className='text-info px-2'>afarinesh@gmail.com</i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-left py-4">
              <ul className={styles.contactLst}>
                <li>
                <FontAwesomeIcon icon={faTelegram} className='text-info'/>
                  <i className='text-info px-1'>@Naadddeeeerrrrr</i></li>
                <li><FontAwesomeIcon icon={faWhatsapp} className='text-success' /><i className='text-info px-2'>+989153083449</i></li>
              </ul>
            </div>
            <div className="col-md-4 text-left py-4">
              <ul className={styles.contactLst}>
                <li><Link href="https://www.instagram.com/mjd.yaghooti/"><a target="_blank"><FontAwesomeIcon icon={faInstagram} className='text-danger' /><i className='px-2'>MJD.yaghooti</i></a></Link></li>
                <li><Link href="https://www.linkedin.com/in/majid-yaghuti-969675229/"><a target="_blank"><FontAwesomeIcon icon={faLinkedin} /><i className='px-2'>LinkedIn</i></a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
   );
}
 
export default Contact;