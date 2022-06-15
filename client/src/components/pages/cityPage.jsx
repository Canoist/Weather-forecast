import React, { useState } from "react";
import { useFavWeather } from "../../hooks/useFavWeather";
import PropTypes from "prop-types";
import FavWeatherCardWithControl from "../favWeather components/favWeatherCardWithControl";
import FavCollapseThreeDays from "../favWeather components/favCollapseThreeDays";
import { Container, Typography } from "@mui/material";
import WindowLoader from "../windowLoader";

const CityPage = ({ favId }) => {
    const { favData } = useFavWeather();
    const [checked, setChecked] = useState(false);

    const handleChangeCheck = () => {
        setChecked((prev) => !prev);
    };

    return favData.length ? (
        <Container maxWidth="xl" sx={{ pb: "100px" }}>
            <Typography
                variant="h4"
                align="center"
                sx={{ mb: 2 }}
                component="p"
            >
                Погода в локации ({favData[favId].name})
            </Typography>
            <FavWeatherCardWithControl
                favData={favData[favId]}
                onClick={handleChangeCheck}
                checked={checked}
            />
            <FavCollapseThreeDays
                checked={checked}
                key={favData[favId].name}
                favData={favData[favId]}
            />
        </Container>
    ) : (
        <WindowLoader open={!!favData.length} />
    );
};

CityPage.propTypes = {
    favId: PropTypes.string
};

export default CityPage;
