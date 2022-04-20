import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useFavWeather } from "../../hooks/useFavWeather";
import FavCardWeather from "../favWeather components/favCardWeather";
import WindowLoader from "../windowLoader";

const FavoritePage = () => {
    const { favData, isLoaded } = useFavWeather();

    return isLoaded ? (
        <WindowLoader open={isLoaded} />
    ) : (
        <Container maxWidth="xl" sx={{ pb: "100px" }}>
            <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                Любимые города
            </Typography>
            {favData.length ? (
                favData.map((item, index) => (
                    <div
                        key={item.name}
                        style={{
                            width: "360px",
                            display: "inline-block"
                        }}
                    >
                        <FavCardWeather favData={item} />
                        <div
                            style={{
                                marginTop: "14px",
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <Link
                                style={{
                                    textDecoration: "none"
                                }}
                                to={`favorites/${index}`}
                            >
                                <Button sx={{}} variant="outlined">
                                    {" "}
                                    Подробнее
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <Typography variant="h3">Нет избранных городов</Typography>
            )}
        </Container>
    );
};
export default FavoritePage;
