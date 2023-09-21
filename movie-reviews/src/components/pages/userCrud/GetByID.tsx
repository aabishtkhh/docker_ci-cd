import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReviewProp } from "../../service/ReviewProp";
import ReviewService from "../../service/ReviewService";
import { Box, Paper, Rating, Typography } from "@mui/material";
import NavigationBar from "../../organisms/NavigationBar";

function GetByID() {
  const { id } = useParams()
  const [review, setReview] = useState<ReviewProp>();

  useEffect(() => {
    if (!id) {
      return;
    }

    ReviewService.getReviewByID(Number(id))
      .then((reviewData) => {
        setReview(reviewData)
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {review && (
        <div>
          <NavigationBar />
          <Paper
            sx={{
              maxWidth: 800,
              margin: "0 auto",
              padding: 5,
              height: 680,
              marginY: 12,
            }}
          >
            <Typography component="div" sx={{ fontSize: 15, }}>
              <div>{review.movieReviewId}</div>
            </Typography>
            <Typography component="div" sx={{ fontSize: 30, color: '#4E598C', textAlign: 'center', fontWeight: 500, marginBottom: 2 }}>
              <div>{review.name}</div>
            </Typography>
            <img src={review.image_url} width={225} height={295} />
            <Typography variant="subtitle1" sx={{ marginTop: 2, lineHeight: 2 }}>
              <div>
                <Rating name="half-rating-read" value={review.rating} precision={0.5} readOnly /> <br />
                {review.description} <br />
                <b>Length of the Movie:</b>{review.lengthOfMovie} <br />
                <b>my opinion on the movie:</b><br />{review.personalOpinion} <br />
              </div>
            </Typography>
             <Box>
            </Box>
          </Paper>
        </div>
      )}

    </>
  );
};

export default GetByID;