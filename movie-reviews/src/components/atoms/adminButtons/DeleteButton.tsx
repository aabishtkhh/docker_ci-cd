import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import ReviewService from "../../service/ReviewService";

interface DeleteButtonProps {
    reviewId: number;
}

const DeleteButton =  ({ reviewId }: DeleteButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    ReviewService.delReview(reviewId).then(() => (navigate(
      "/reviews/admin",{replace:true} ))).catch();
  }

  return (
      <Link to={`/reviews/delete-review/${reviewId}`}>
      <Button onClick={handleClick}>
        <DeleteIcon sx={{ fontSize: 40, color: "#F2B880", }} />
      </Button>
    </Link>
  );
};

export default DeleteButton;