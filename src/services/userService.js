import axios from "axios";

export default class userService {
  userGetAll() {
    return axios.get('http://localhost:8080/api/users/getall');
  }

  loginAuth(username, password) {
    return axios.get(`http://localhost:8080/api/users/loginAuth?username=${username}&password=${password}`);
  }

  async addSolvedQuestion(userID, questionID) {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/users/addSolvedQuestion?userId=${userID}&questionId=${questionID}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
  
      return response.data;
    } catch (error) {
      console.error('Error in addSolvedQuestion:', error);
      throw new Error('Adding Failed');
    }
  }

  async incrementUserPoints(userID, questionLevel) {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/users/incrementUserPoints?userId=${userID}&questionLevel=${questionLevel}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
  
      return response.data;
    } catch (error) {
      console.error('Error in addSolvedQuestion:', error);
      throw new Error('Adding Failed');
    }
  }

  async registerUser(email, userName, password) {
    try {
      const response = await axios.post('http://localhost:8080/api/users/registration', {
        email: email,
        userName: userName,
        password: password
      });
      return response.data;
    } catch (error) {
      throw new Error('Registration Failed');
    }
  }

  getUserByID(userID) {
    return axios.get(`http://localhost:8080/api/users/getById?userId=${userID}`)
}
}
