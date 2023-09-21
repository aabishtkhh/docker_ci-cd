import NavigationBar from "../organisms/NavigationBar";
import { Box, Typography } from "@mui/material";

function ContactMe() {

    return (
        <>
            <NavigationBar />
            <Typography className="contact" sx={{ marginTop: 2, marginLeft: 2, lineHeight: 2 }}>
                Hi i am Aabish, dont take my opinions to serious.
                Incase you get offended, here is my favorite animal to calm you down!
                <Box sx={{ marginLeft: 2, }}>
                    <img src={'https://i.pinimg.com/originals/8b/bf/9e/8bbf9e19f3b67ec17d2eb362846fe864.jpg'} width={250} height={250} />
                </Box>
                <p><b>E-Mail:</b> aabish.tariqkhan@noseryoung.com</p>
                <p><b>Telefon:</b> +41 31 917 53 80</p>
            </Typography>
        </>
    )
}

export default ContactMe;