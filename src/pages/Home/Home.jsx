import React from 'react'
import Hero from '../../components/hero/Hero'
import Header from '../../layout/Header/Header'
import {
    Box
} from "@mui/material"
export const Home = () => {


    return (
        <>
            <Box sx={{
                position: 'relative',
            }}  >
                <Header />
                <Hero />
            </Box>

        </>
    )
}
