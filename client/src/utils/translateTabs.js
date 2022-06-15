export function translateTab(name) {
    switch (name) {
        case "Main":
            return "Поиск";
        case "Favorites":
            return "Избранное";
        case "Profile":
            return "Профиль";
        case "Logout":
            return "Выйти";
        case "Login":
            return "Войти";
        default:
            break;
    }
}
