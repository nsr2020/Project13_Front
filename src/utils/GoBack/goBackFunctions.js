export const handleGoBack = (goTo, navigate) => {
    
    navigate(`${goTo}`,{state:{demo:'demo'}});
    
};