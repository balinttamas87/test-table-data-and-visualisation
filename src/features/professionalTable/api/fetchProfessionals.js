import request from "../../../helpers/api/request";

const getProfessionals = async () => await request("./MOCK_DATA.json");

export default getProfessionals;