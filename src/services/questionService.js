import axios from "axios"

export default class questionService {
    getQuestionAll() {
        return axios.get(`http://localhost:8080/api/questions/getall`)
    }

    getQuestionByLevel(level,userID) {
        return axios.get(`http://localhost:8080/api/questions/getByLevel?questionLevel=${level}&userId=${userID}`)
    }

}