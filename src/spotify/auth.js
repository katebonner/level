const Auth = () => {
    return{
        CLIENT_ID:'545605ad511f4995ac8c5097099e56e6',
        // REDIRECT_URI: 'http://localhost:3000',
        REDIRECT_URI: 'https://boiling-retreat-31003.herokuapp.com/',
        AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
        RESPONSE_TYPE: 'token',
        SCOPE:'user-top-read user-read-email'
    };
};

export default Auth;
