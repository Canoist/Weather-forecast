import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoritePage from "../components/pages/favoritePage";
import FavWeatherProvider from "../hooks/useFavWeather";
import { getIsLoggedIn } from "../store/users";
import CityPage from "../components/pages/cityPage";

const Favorites = () => {
    const params = useParams();
    const { favId } = params;
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        isLoggedIn && (
            <FavWeatherProvider>
                {favId ? <CityPage favId={favId} /> : <FavoritePage />}
            </FavWeatherProvider>
        )
    );
};
export default Favorites;
