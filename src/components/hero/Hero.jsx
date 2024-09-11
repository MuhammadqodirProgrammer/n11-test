import { Box } from '@mui/material'
import heroBg from "../../assets/images/bg.jpg"
import HeroCarousel from '../heroCarousel/heroCarousel'
const Hero = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${heroBg})`,
            objectFit: "cover",
            height: "100vh",
            width: "100%",
            position: "absolute",
            top: 0,
            zIndex: "-1",
        }}>


            <Box sx={{
                position: "relative"
            }}  >


                <HeroCarousel />

            </Box>


        </Box>
    )
}

export default Hero
