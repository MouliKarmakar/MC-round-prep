'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

interface DataProps{
    id:Number,
    comp_name:String,
    path_params:String
    desc?:String,
}
interface TextCardProps {
    data: DataProps;
}
function TextCard({data}:TextCardProps) {
    const route=useRouter();
    const handleClick=()=>{
        route.push(`/features/${data.path_params}`);
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{data.comp_name}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
         {data?.desc}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>
          Feature display
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TextCard;