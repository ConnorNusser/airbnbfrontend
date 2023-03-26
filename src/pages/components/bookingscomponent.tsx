import Link from 'next/link'
import {Button, Nav} from 'react-bootstrap';

import CardGroup from 'react-bootstrap/CardGroup';
import {handleBookingReservation} from '../api/handleBookings'
const BookingsComponent = () => {
    let list1  = ["https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg",
                    "https://media.cntraveler.com/photos/5e18e330ac1cea00092e91d2/master/pass/airbnb-beach-dominican-6939168.jpeg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtV97zxNrWpUzPtvFxrzhWtAFVMdD592l6TA&usqp=CAU",
                "https://i0.wp.com/files.tripstodiscover.com/files/2021/08/be6c5f51-51cb-4a0e-a23b-fd50534f29b7.jpg?resize=784%2C470"]
  return (
    <>
    <CardGroup>
        {list1.map((object, i) => <BookComponent urlImage={object} roomName={i.toString()} />)}
    </CardGroup>
    </>
  );
}
const BookComponent = ({roomName, urlImage}: {roomName: string, urlImage: string}) => {
    return (
    <div className="card">
  <img className="card-img-top" src={urlImage} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{roomName}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Button variant = "primary" onClick={() => handleBookingReservation({roomNumber:roomName})}>Book Room</Button>
  </div>
</div>
    )
}
export default BookingsComponent;