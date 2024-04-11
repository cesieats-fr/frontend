import { Box, Container, Divider, Rating, Stack, Typography, keyframes, styled } from "@mui/material";
import CesiEatsBanner from "../../assets/CesiEatsBanner";
import PizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import KebabDiningIcon from '@mui/icons-material/KebabDining';

function Home() {
    const largeBanner = {
        width: "auto",
        height: "5em",
      };
    const floatAnimation = keyframes`
    0%, 100% {
      transform: translate(0, 0) rotate(0deg) scale(1);
      color: #ff6347;
    }
    25% {
      transform: translate(-30px, -20px) rotate(360deg) scale(1.2);
      color: #ffcc00;
    }
    50% {
      transform: translate(30px, 0) rotate(-360deg) scale(1);
      color: #1e90ff;
    }
    75% {
      transform: translate(-30px, 20px) rotate(360deg) scale(1.2);
      color: #32cd32;
    }
  `;
    
    // Styled component pour l'icône
    const FloatingPizza = styled(PizzaIcon)`
  animation: ${floatAnimation} 8s ease-in-out infinite;
  font-size: 80px; // Taille de l'icône
  color: #ff6347; // Couleur de l'icône
    `;
    const FloatingBurger = styled(KebabDiningIcon)`
    animation: ${floatAnimation} 8s ease-in-out infinite;
    font-size: 80px; // Taille de l'icône
  color: #ff6347; // Couleur de l'icône
    `;
    const FloatingBrochettes = styled(LunchDiningIcon)`
    animation: ${floatAnimation} 8s ease-in-out infinite;
    font-size: 80px; // Taille de l'icône
  color: #ff6347; // Couleur de l'icône
    `;
    return (
        <Stack>
            <CesiEatsBanner fontSize="large" style={largeBanner} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', marginBottom:'30px' }}>
                <FloatingPizza />
                <FloatingBurger />
                <FloatingBrochettes />
            </Box>
            <Container>
            <Divider variant="middle" />
            <Rating name="" value={5} readOnly sx={{ marginTop:'5px'}}/>
            <Typography variant="h6">La meilleure appli du marché</Typography>
            <Typography variant="body1">Louison LEIDINGER</Typography>
            <Typography variant="caption">Ma nourriture est arrivée en 5 minutes, alors que le restaurant se trouve à 3 heures de chez moi</Typography>
            <Divider variant="middle" />
            <Rating name="" value={5} readOnly sx={{ marginTop:'5px'}}/>
            <Typography variant="h6">C'EST QUOI CE POULET</Typography>
            <Typography variant="body1">Matt MAILLE</Typography>
            <Typography variant="caption">Livraison au top, en plus les frais sont vraiment insignifiants comparés à la concurrence</Typography>
            <Divider variant="middle" />
            <Rating name="" value={4} readOnly sx={{ marginTop:'5px'}}/>
            <Typography variant="h6">Vrai concurrent à Deliveroo</Typography>
            <Typography variant="body1">Dara KHOSROWSHAHI (CEO d'Uber)</Typography>
            <Typography variant="caption">Livraison rapide, pas besoin d'aller au Burger King car la commande est jamais arrivé</Typography>
            </Container>
        </Stack>
    );
}

export default Home;