import Link from 'next/link'
import Image from 'next/image'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ShowCard = ({card}) => {
  const { srcImg, title, text, btnTxt, btnLink } = card
  // console.log(card);
  return (
    <div className='row'>
      <div className="col-md-12 text-right">
      <Card>
        {/* <CardImg top width="10%" src={src} alt="Card image cap" /> */}
        <div>
          <Image layout='responsive' height={120} priority src={srcImg} />
        </div>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>{text}</CardText>
          <Link href={btnLink}><a className='btn btn-secondary' target="_blank">{btnTxt}</a></Link>
        </CardBody>
      </Card>
      </div>
    </div>
  );
}

export default ShowCard