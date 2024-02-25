class UserStore {
  // Function to load token to cache
  static loadTokenToCache(token) {
      localStorage.setItem('userToken', token); // Assuming you're using localStorage for caching
  }

  // Function to retrieve token from cache
  static retrieveTokenFromCache() {
      return localStorage.getItem('userToken'); // Assuming you're using localStorage for caching
  }

  static loadIdToCache(id) {
    localStorage.setItem('userId', id); // Assuming you're using localStorage for caching
  } 

  // Function to retrieve token from cache
  static retrieveIdFromCache() {
    return localStorage.getItem('userId'); // Assuming you're using localStorage for caching
  }
}

// Exporting the class to make it accessible from other files
export default UserStore;
