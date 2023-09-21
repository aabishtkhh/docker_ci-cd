import Paper from "@mui/material/Paper";
import DeleteButton from "../atoms/adminButtons/DeleteButton";
import { ReviewProp } from "../service/ReviewProp";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import PostButton from "../atoms/adminButtons/PostButton";
import PutButton from "../atoms/adminButtons/PutButton";

interface PaperProps {
  reviews: ReviewProp[];
}

const CRUDOperator = ({ reviews }: PaperProps) => {
  return (
    <>
      {reviews.map((review: ReviewProp) => (
        <Link to={`/reviews/admin`}>
          <Box sx={{ margin: 10, flexGrow: 1, overflow: 'hidden', px: 2 }}>
            <Paper variant="outlined"
              sx={{
                my: 1,
                mx: 'auto',
                p: 5,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{padding: '0 1rem' }} className="reviewName">{review.movieReviewId}</div>
              <div style={{flex: 2 }} className="reviewName">{review.name}</div>
              <DeleteButton reviewId={review.movieReviewId} />
              <PutButton reviewId={review.movieReviewId} />
              </Box>
              <PostButton />
            </Paper>
          </Box>
        </Link>
      ))}
    </>
  );
};

export default CRUDOperator;