import {ListGroup, ListGroupItem} from "reactstrap";


function SocialIcons(props) {
    return (
        <div className="social-icons">
            <ListGroup horizontal>
                <ListGroupItem>{props.iconOne}</ListGroupItem>
                <ListGroupItem>{props.iconTwo}</ListGroupItem>
                <ListGroupItem>{props.iconThree}</ListGroupItem>
                <ListGroupItem>{props.iconFour}</ListGroupItem>
            </ListGroup>
        </div>
    );
}
export default SocialIcons;
