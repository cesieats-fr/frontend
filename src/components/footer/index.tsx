import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { Box } from "@mui/material";

const largeIcon = {
    height: 40, 
    width: 40,
}

function Footer() {
    return (
        <Box component="footer" className="w-full bg-neutralClassic text-blackClassic p-5 flex-shrink-0">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" className="text-primaryClassic" gutterBottom>
                        À propos de Cesieats
                        </Typography>
                        <Typography variant="body2">
                        Cesieats, votre solution de livraison de repas méditerranéens préférée. 
                        Des saveurs authentiques livrées directement chez vous, rapidement et avec soin.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" className="text-primaryClassic" gutterBottom>
                        Nous contacter
                        </Typography>
                        <Typography variant="body2">
                        1 rue des cristalleries, 54000 Nancy
                        </Typography>
                        <Typography variant="body2">
                        Email: keanu.harrell@apple.fr
                        </Typography>
                        <Typography variant="body2">
                        Phone: +33 6 29 60 80 70
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" className="text-primaryClassic" gutterBottom>
                        Nous suivre
                        </Typography>
                        <Link href="https://www.linkedin.com/in/tolgabeylik" color="inherit"><LinkedIn sx={largeIcon} /></Link>
                        <Link href="https://github.com/cesieats-fr" color="inherit"><GitHub sx={largeIcon} /></Link>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://cesieats.fr/">
                        Cesieats 
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
