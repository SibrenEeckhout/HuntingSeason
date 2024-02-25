class SessionStore {
    static loadSessionToCache(title, gameId) {
        localStorage.setItem('sessionTitle', title);
        localStorage.setItem('sessionId', gameId);
    }

    static retrieveSessionFromCache() {
        const title = localStorage.getItem('sessionTitle');
        const gameId = localStorage.getItem('sessionId');
        return { title, gameId };
    }
}

export default SessionStore;
