import Response from "../helpers/response";
export default {
  index: (req, res) => {
    const response = new Response();
    response.setMessage("Welcome to RESTfull with Express");
    res.json(response);
  }
};
