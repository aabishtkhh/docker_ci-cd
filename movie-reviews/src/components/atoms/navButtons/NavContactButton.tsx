import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function NavContactButton() {
    
    return (
        <Link to={"/reviews/contact"} style={{ textDecoration: "none" }}>
            <Button sx={{ color: '#C4A48A', fontSize: 19, padding: 2, textTransform: 'lowercase', fontFamily: 'Sen, sans-serif' }}>
                Contact
            </Button>
        </Link>
    );
}

export default NavContactButton;