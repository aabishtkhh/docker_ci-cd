export type ReviewProp = { /*we can also export this object seperately*/
    movieReviewId : number;
    name: string;    
    rating : number; 
    description : string;
    lengthOfMovie : number;
    image_url : string;
    ghibli : boolean;
    disney : boolean;
    personalOpinion : string;
}
/* exactly like the ReviewProp, but the movieReviewId is different/ is not within the type*/
export type ReviewPropCreate = Omit < ReviewProp, "movieReviewId" >;

function ReviewProp(props: ReviewProp) {
    return (
        <>
        <div>{props.movieReviewId}</div>
        <div>{props.name}</div>
        <div>{props.rating}</div>
        <div>{props.description}</div>
        <div>{props.lengthOfMovie}</div>
        <div>{props.image_url}</div>
        <div>{props.ghibli}</div>
        <div>{props.disney}</div>
        <div>{props.personalOpinion}</div>
      </>
    );
}

export default ReviewProp;