import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function CloseUpdateButton() {
    return (
        <Link to={"/reviews/admin"} style={{ textDecoration: "none" }}>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ color: '#C4A48A' }}
            >
                <CloseIcon sx={{ fontSize: 40, color: "#CE6A85" }} />
            </IconButton>
        </Link>
    );
}

export default CloseUpdateButton;