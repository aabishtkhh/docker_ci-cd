import ReturnButton from "../../atoms/adminButtons/ReturnButton";
import { Field, ErrorMessage, Formik, Form } from "formik";
import ReviewService from "../../service/ReviewService";
import { useNavigate } from "react-router";
import { Paper } from "@mui/material";

const PostAuthor = () => {
    const navigate = useNavigate();

    return (
        <>
            <Formik
                initialValues={{
                    name: "fill in",
                    rating: 0,
                    description: "whats it about?",
                    lengthOfMovie: 0,
                    image_url: "add an image of the film",
                    ghibli: false,
                    disney: false,
                    personalOpinion: "do you like it or..",
                }}

                validate={(values) => {
                    const errors: { name?: string; rating?: string; description?: string; lengthOfMovie?: string; image_url?: string; ghibli?: string; disney?: string; personalOpinion?: string } = {};

                    if (!values.name) {
                        errors.name = "Required";
                    }
                    if (!values.rating) {
                        errors.rating = "Required";
                    }
                    if (!values.description) {
                        errors.description = "Required";
                    }
                    if (!values.lengthOfMovie) {
                        errors.lengthOfMovie = "Required";
                    }
                    if (!values.image_url) {
                        errors.image_url = "Required";
                    }
                    if (!values.personalOpinion) {
                        errors.personalOpinion = "Required";
                    }

                    // Checking for invalid rating and movie length
                    if (!isNaN(values.rating)) {
                        if (values.rating < 0 || values.rating > 5) {
                            errors.rating = "Rating must be between 0 and 5";
                        }
                    } else {
                        errors.rating = "Invalid Rating";
                    }

                    if (!isNaN(values.lengthOfMovie)) {
                        if (values.lengthOfMovie <= 0) {
                            errors.lengthOfMovie = "Movie length must be a positive number";
                        }
                    } else {
                        errors.lengthOfMovie = "Invalid Movie Length";
                    }
                    return errors;
                }}

                onSubmit={(values) => {
                    console.log(values)

                    ReviewService.postReview(values).then(response => (navigate(`/reviews/admin/${response.id}`, { replace: true }))).catch();
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form>
                        <ReturnButton />
                        <Paper variant="outlined"
                            sx={{
                                maxWidth: 800,
                                margin: "0 auto",
                                padding: 5,
                                height: 650,
                                marginY: 10,
                                textAlign: "center",
                                boxShadow: "0px px 0px 2px #CE6A85",
                                fontFamily: 'Barriecito'
                            }}
                        >
                            <label htmlFor="name">
                                <br />
                                <br />
                                Name of Movie:
                                <br />
                            </label>
                            <Field type="name" name="name" />
                            <ErrorMessage name="name" component="div" />

                            <label htmlFor="rating">
                                <br />
                                <br />
                                Rating Out of Five:
                                <br />
                            </label>
                            <Field type="rating" name="rating" />
                            <ErrorMessage name="rating" component="div" />

                            <label htmlFor="description">
                                <br />
                                <br />
                                Description:
                                <br />
                            </label>
                            <Field type="description" name="description" />
                            <ErrorMessage name="description" component="div" />

                            <label htmlFor="lengthOfMovie">
                                <br />
                                <br />
                                Length of Movie:
                                <br />
                            </label>
                            <Field type="lengthOfMovie" name="lengthOfMovie" />
                            <ErrorMessage name="lengthOfMovie" component="div" />

                            <label htmlFor="image_url">
                                <br />
                                <br />
                                Image URL:
                                <br />
                            </label>
                            <Field type="image_url" name="image_url" />
                            <ErrorMessage name="image_url" component="div" />

                            <label htmlFor="ghibli">
                                <br />
                                <br />
                                Is it Ghibli:
                                <br />
                            </label>
                            <Field type="ghibli" name="ghibli" />
                            <ErrorMessage name="ghibli" component="div" />

                            <label htmlFor="disney">
                                <br />
                                <br />
                                Is it Disney:
                                <br />
                            </label>
                            <Field type="disney" name="disney" />
                            <ErrorMessage name="disney" component="div" />

                            <label htmlFor="personalOpinion">
                                <br />
                                <br />
                                Personal Opinion:
                                <br />
                            </label>
                            <Field type="personalOpinion" name="personalOpinion" />
                            <ErrorMessage name="personalOpinion" component="div" />
                            <br />
                            <div className="Buttons" style={{ marginTop: 20, alignItems: "justifyContent" }}>
                                <button className="submitName" type="submit" disabled={isSubmitting || !isValid}>
                                    Submit
                                </button>
                            </div>
                        </Paper>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default PostAuthor;
