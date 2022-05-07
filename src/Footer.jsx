import { Card, CardFooter } from "reactstrap";

function Footer() {

    return (<div className="footer">
        <Card>
            <CardFooter>
                <p>ayshan @{new Date().getFullYear()}</p>
            </CardFooter>
        </Card>
    </div>
    );
}
export default Footer;
