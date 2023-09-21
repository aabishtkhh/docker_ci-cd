import { Box, Button, Paper, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ReviewProp } from "../service/ReviewProp";

interface PaperProps {
  reviews: ReviewProp[];
}

const PaperReviews = ({ reviews }: PaperProps) => {

  const truncate = function (str: string) {
    return str.length > 10 ? str.substring(0, 7) + "..." : str;
  }

  return (
    <>
      {reviews.map((review : ReviewProp) => (
        <Link to={`/reviews/${review.movieReviewId}`} key={review.movieReviewId}>
          <Box sx={{ marginTop: 10 }}>
            <Button>
              <Paper variant="outlined" square sx={{
                width: 250,
                height: 390,
                textTransform: "capitalize"
              }}>
                <Box sx={{ marginTop: 1 }}>
                  <img src={review.image_url} width={225} height={295} />
                  <Typography variant="subtitle1">
                    <div className="reviewName">{review.name}</div>
                  </Typography>
                  <Typography variant="caption">
                    <div className="otherInformation">
                    <Rating name="half-rating-read" value={review.rating} precision={0.5} readOnly /> <br />
                      {truncate(review.description)} {/* truncate shortens the text */}
                    </div>
                  </Typography>
                </Box>
              </Paper>
            </Button>
          </Box>
        </Link>
      ))}
    </>
  );
};

export default PaperReviews;