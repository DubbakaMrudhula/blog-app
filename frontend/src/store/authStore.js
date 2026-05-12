import { create } from "zustand";
import axios from "axios";
import { getBackendUrl } from "../utils/url";

const extractError = (err, defaultMsg) => {
  let msg = err.response?.data?.message || err.response?.data?.error || err.message || defaultMsg;
  if (typeof msg === 'object') {
    return msg.message || JSON.stringify(msg);
  }
  return msg;
};

export const useAuth = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,
  login: async (userCred) => {
    // const { role, ...userCredObj } = userCredWithRole;
    try {
      //set loading true
      set({ loading: true, currentUser: null, isAuthenticated: false, error: null });
      //make api call
      let res = await axios.post(`${getBackendUrl()}/auth/login`, userCred, {
        withCredentials: true,
      });
      //update state
      if (res.status === 200) {
        set({
          currentUser: res.data?.payload,
          loading: false,
          isAuthenticated: true,
          error: null,
        });
      }
    } catch (err) {
      console.log("err is ", err);
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        //error: err,
        error: extractError(err, "Login failed"),
      });
    }
  },
  logout: async () => {
    try {
      //set loading state
      //make logout api req
      let res = await axios.get(`${getBackendUrl()}/auth/logout`, {
        withCredentials: true,
      });
      //update state
      if (res.status === 200) {
        set({
          currentUser: null,
          isAuthenticated: false,
          error: null,
          loading: false,
        });
      }
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: extractError(err, "Logout failed"),
      });
    }
  },
  // restore login
  checkAuth: async () => {
    try {
      const res = await axios.get(`${getBackendUrl()}/auth/check-auth`, { withCredentials: true });

      // Validate that response has actual user data
      if (res.data?.payload && res.data?.message === "authenticated") {
        set({
          currentUser: res.data.payload,
          isAuthenticated: true,
          loading: false,
        });
      } else {
        set({ currentUser: null, isAuthenticated: false, loading: false });
      }
    } catch (err) {
      // If user is not logged in → do nothing
      if (err.response?.status === 401) {
        set({
          currentUser: null,
          isAuthenticated: false,
          loading: false,
        });
        return;
      }

      // other errors
      console.error("Auth check failed:", err);
      set({ loading: false, isAuthenticated: false, currentUser: null });
    }
  },
}));
