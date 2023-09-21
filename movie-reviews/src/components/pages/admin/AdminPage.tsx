import { Box, Grid } from "@mui/material";
import NavigationBar from "../../organisms/NavigationBar";
import {ReviewProp} from "../../service/ReviewProp";
import { useEffect, useState } from "react";
import ReviewService from "../../service/ReviewService";
import CRUDOperator from "../../molecules/CRUDOperator";

function AdminPage() {
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
        <Box sx={{marginLeft: 20, marginRight: 20}}>
        <Grid item xs={6}>
          {reviews.map((review) => (
            <CRUDOperator reviews={[review]} key={review.movieReviewId} />
          ))}
        </Grid>
        </Box>
      </div>
    </>
    );
  };

export default AdminPage;