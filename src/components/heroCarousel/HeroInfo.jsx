import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const HeroInfo = ({ movie }) => {
    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${movie.imgUrl})`,
            backgroundSize:"cover",
            backgroundRepeat: "no-repeat",
            paddingTop: "60px",
            position: "relative",
            zIndex: "-2"
        }}>
            <Box sx={{
                textAlign: "left",
                zIndex: "99",
                padding: "60px"
            }}   >

                <Typography variant="h2" sx={{
                    color: "white",
                    fontSize: "36px",
                    fontWeight: "bold",
                    zIndex: "99"

                }}  >
                    {movie.name}
                </Typography>

                <Typography variant='h4' sx={{
                    color: "white",
                    maxWidth: "400px",
                    fontSize: "16px",
                    marginBottom: "14px",
                }}>
                    {movie.description}
                </Typography>
                <div className="box flex gap-2 items-center">
                    <Button variant="outlined" LinkComponent={Link} to={movie.link}  >Watch trailer</Button>
                    <Button variant="contained" sx={{
                        backgroundColor: "yellow",
                        color: "white",

                    }}      >Watch now</Button>
                </div>
            </Box>

            <div className='absolute  top-0 left-0 w-[100%] h-[100%] bg-[#00000096] ' style={{
                zIndex: "-1"
            }}  > </div>
        </Box>
    )
}
