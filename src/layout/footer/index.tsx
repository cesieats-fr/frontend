import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

function Footer(props: any) {
    return (
        <Box component="footer" className="w-full bg-neutralClassic p-5 flex-shrink-0">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                        About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        We are CesiEats company, dedicated to providing the best service to our
                        customers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                        Contact Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        1 rue des cristalleries, 54000 Nancy
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Email: keanu.harrell@apple.fr
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Phone: +33 6 29 60 80 70
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                        Follow Us
                        </Typography>
                        <Link href="https://www.facebook.com/" color="inherit">
                        <Facebook />
                        </Link>
                        <Link
                        href="https://www.instagram.com/"
                        color="inherit"
                        sx={{ pl: 1, pr: 1 }}
                        >
                        <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit">
                        <Twitter />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://cesiEats.com/}">
                        CesiEats 
                        </Link>
                        {" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
