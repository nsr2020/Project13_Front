export const handleClickPlatform = (platformName, navigate) => {
  navigate(`/movies/${platformName}`, {state:{demo:"demo"}});
};
