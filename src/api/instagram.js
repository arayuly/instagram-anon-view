import axios from "axios";

export const getInstagramProfile = async (username) => {
    const res = await axios.post(
        "http://localhost:3001/api/instagram/profile",
        { username }
    );
    return res.data;
};
