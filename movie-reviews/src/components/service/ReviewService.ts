//CRUD Operationen:
import { defaultAxiosInstance as api } from "./Api";
import { ReviewProp, ReviewPropCreate } from "./ReviewProp";

const ReviewService = { 

  /**
   * in postman + website
   */

  getlimitedReviews : async () => { 
    const data = await api.get(`/reviews?_limit=20`);
    return data["data"];
  },

  getAllReviews : async () => { 
    const data = await api.get(`/reviews`);
    return data["data"];
  },

  getReviewByID : async (id : number) => {
    const data = await api.get(`/reviews/${id}`);
    console.log(data.data)
    return data["data"];
  },

  postReview : async (review: ReviewPropCreate) => {  
    const data = await api.post("reviews", review); 
    return data["data"];
  },

  putReview : async (id: number, review: ReviewProp) => {
    const data = await api.put(`/reviews/${id}`, review); 
    return data["data"];
  },
  
  delReview : async (id : number) => {
    const response = await api.delete(`/reviews/${id}`);
    return response["data"];
  }
};

export default ReviewService;