class Auth {

    isUserSignedIn = () => {
        if(localStorage.getItem('user') !== null)
            return true
    
        return false
    }
    
}

export default new Auth();
