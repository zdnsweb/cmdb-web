const inMemoryJWTManager = () => {    
    let inMemoryJWT = localStorage.getItem('jwt') || null;

    const getToken = () => inMemoryJWT;

    const setToken = (token) => {
        inMemoryJWT = token;
        localStorage.setItem('jwt', token);
        return true;
    };

    const ereaseToken = () => {
        inMemoryJWT = null;
        localStorage.removeItem('jwt');
        return true;
    }

    return {
        ereaseToken,
        getToken,
        setToken,
    }
};

export default inMemoryJWTManager();