import React from "react";
import { Card, Button } from "react-bootstrap";

const CardImage = ({imgArr, clickHandler}) => {

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgArr.urls.small} style={{maxHeight:'500px'}}/>
            <Card.Body>
                <Card.Title>{imgArr.alt_description.toUpperCase()}</Card.Title>
                <Card.Text>
                {imgArr.description || imgArr.alt_description}
                </Card.Text>
                <Button variant="primary" onClick={() => {clickHandler(imgArr.id)}}>Delete</Button>
            </Card.Body>
        </Card>
    )
}
export default CardImage;