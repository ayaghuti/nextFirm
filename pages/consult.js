import { Container } from 'reactstrap'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm';

const Consult = () => {
  return (
    <>
      <Layout>
        <Container>
          <h2 className="display5 text-right py-4">جهت اخذ مشاوره در زمینه های ثبت شرکت، برند، اختراع و سایر موارد از این دست، می توانید فرم موجود در این بخش را پر کنید تا در اسرع وقت با شما تماس گرفته شود
          </h2>
          <ContactForm />
        </Container>
      </Layout>
    </>
  );
}
 
export default Consult;