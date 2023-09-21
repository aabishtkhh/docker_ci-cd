import Button from "@mui/material/Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from "react-router-dom";

/* ReviewPropCreate */
function PostButton() {
  return (
      <Link to={"/reviews/admin/create-review"} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            position: "absolute", left: "85px", top: "110px",
          }}>
          <AddCircleOutlineIcon sx={{ fontSize: 40, color: "#CE6A85", }} />
        </Button>
      </Link>
  );
}

export default PostButton;