import React from 'react';

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState("loading");

    React.useEffect(() => {
        fetch('/api/me/profile')
        .then(res => res.json())
        .then(data => {
            if(data) {
                setCurrentUser(data);
                setStatus("idle");
            }
        })
        .catch(err => console.log('Error: ', err));
    }, []);

    return (
      <CurrentUserContext.Provider value={{ currentUser, status }}>
        {children}
      </CurrentUserContext.Provider>
    );
};