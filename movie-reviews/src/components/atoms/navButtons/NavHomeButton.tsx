import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function NavHomeButton() {

    return (
        <Link to={"/reviews"} style={{ textDecoration: "none" }}>
            <Button sx={{ color: '#C4A48A', fontSize: 19, padding: 2, textTransform: 'lowercase', fontFamily: 'Sen, sans-serif' }}>
                Home
            </Button>
        </Link>
    );
}

export default NavHomeButton;