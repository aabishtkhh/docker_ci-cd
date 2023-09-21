import { Link } from "react-router-dom";
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import Button from "@mui/material/Button";

interface PutButtonProps {
    reviewId: number;
}

const PutButton = ({ reviewId }: PutButtonProps) => {
  return (
    <Link to={`/reviews/admin/update-review/${reviewId}`}>
      <Button
      >
        <BorderColorTwoToneIcon sx={{ fontSize: 30, color: "#4E598C" }} />
      </Button>
    </Link>
  );
};

export default PutButton;