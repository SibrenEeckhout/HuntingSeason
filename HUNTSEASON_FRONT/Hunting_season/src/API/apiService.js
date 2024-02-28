class ApiService {
  async get(url, body = null, accessToken = null) {
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      if (accessToken) {
        options.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async post(url, data = {}) {
    try {
      console.log(url);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (Object.keys(data).length !== 0) {
            requestOptions.body = JSON.stringify(data);
        }

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}


}

export default new ApiService();
