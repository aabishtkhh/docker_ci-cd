import { useEffect, useState } from "react";
import { ReviewProp } from "../service/ReviewProp";
import { Box, Grid } from "@mui/material";
import NavigationBar from "../organisms/NavigationBar";
import PaperReviews from "../molecules/PaperReviews";
import ReviewService from "../service/ReviewService";

function HomePage() {
  const [reviews, setReviews] = useState<ReviewProp[]>([]); 

  useEffect(() => { 
    ReviewService.getAllReviews()
    .then(reviewData => setReviews(reviewData))
    .catch(error => console.log(error))
  }, []); 

  return (
    <>
      <div className="homePage">
        <NavigationBar />
        <Box>
        <Grid container spacing={2}>
          {reviews.map((review) => (
            <Grid item xs={3} key={review.movieReviewId}>
              <PaperReviews reviews={[review]} key={review.movieReviewId} />
            </Grid>
          ))}
        </Grid>
        </Box>
      </div>
    </>
  );
}

export default HomePage;