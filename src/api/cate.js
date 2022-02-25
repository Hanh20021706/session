/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import instance from "./instance";

export const getAll = () => {
    const url = "/categories";
    return instance.get(url);
};
