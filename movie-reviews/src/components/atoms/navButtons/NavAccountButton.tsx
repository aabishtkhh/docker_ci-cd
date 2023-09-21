import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function ReturnPageButton() {
    return (
        <Link to={"/reviews/sign-in"} style={{ textDecoration: "none" }}>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 6, color: '#C4A48A' }}
            >
                <PersonOutlineIcon />
            </IconButton>
        </Link>
    );
}

export default ReturnPageButton;