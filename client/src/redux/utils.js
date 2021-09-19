export const BASE_URL = "http://localhost:5000/api"
export const ADD = "ADD"
export const EDIT = "EDIT"
export const DELETE = "DELETE"
export const STATUS_CHANGE = "STATUS_CHANGE"

export function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }