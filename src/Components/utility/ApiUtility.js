// const instaAccessToken = 'IGAAYLqBTyQydBZAFBEdDB5QmVpMGxYTWFpTEhTX3NMU0tuS0d0eG1oUFZAzU1BQVDRiRUdvQ0tYWXVXdkY3S2RJX2hJY04yWXdBeFpDeDlneTNtZA01XNy1oSjB5ZA3BRbndSRW1WY0xoNXJmVzBjd09XczM2NF9tbHc0MW80YWg0YwZDZD';
// const instUserId = '17841452739077003'; //instagram userId
// const youtubeApiKey = "AIzaSyAzSHUO0MtJh96T1j8qzakMJGT1KzdzzOE"; // Replace with your API Key
// const youtubeChannelId = "UCicFA-BUCZMdwlzhTPpGa-Q"; // Replace with your YouTube Channel ID


const instaAccessToken = process.env.REACT_APP_INSTA_ACCESS_TOKEN;
const instUserId = process.env.REACT_APP_INSTA_USER_ID;
const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const youtubeChannelId = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;


class ApiUtility {

    static async fetchInstagramData(url =null ,fields = 'id,caption,media_url,media_type,permalink,timestamp') {
        console.log(`access code` + instaAccessToken);
        try {
        const apiUrl = url || `https://graph.instagram.com/${instUserId}/media?fields=${fields}&access_token=${instaAccessToken}`;
        // const url = `https://graph.instagram.com/17841452739077003/media?fields=id,caption,media_type,permalink,timestamp,media_url&access_token=IGAAYLqBTyQydBZAFBEdDB5QmVpMGxYTWFpTEhTX3NMU0tuS0d0eG1oUFZAzU1BQVDRiRUdvQ0tYWXVXdkY3S2RJX2hJY04yWXdBeFpDeDlneTNtZA01XNy1oSjB5ZA3BRbndSRW1WY0xoNXJmVzBjd09XczM2NF9tbHc0MW80YWg0YwZDZD`;
          const response = await fetch(apiUrl);
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
      
          if (!data || typeof data !== 'object') {
            throw new Error('Invalid API response: Expected an object but received something else.');
          }
      
          if (data.error) {
            throw new Error(`API Error: ${data.error.message} (Code: ${data.error.code})`);
          }
      
          if (!data.data || !Array.isArray(data.data)) {
            throw new Error('Invalid API response: "data" is missing or not an array.');
          }
      
          return data; // Return the full response, including "paging" info
        } catch (error) {
          console.error('Error fetching Instagram data:', error);
          throw error;
        }
      }
      
      static async fetchYouTubeData(maxResults = 10) {
        try {
          const url = `https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&channelId=${youtubeChannelId}&part=snippet,id&order=date&maxResults=${maxResults}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          return data.items;
        } catch (error) {
          console.error('Error fetching YouTube data:', error);
          throw error;
        }
      }
    }
  
  export default ApiUtility;