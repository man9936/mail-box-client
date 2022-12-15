import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialEmailstate = {
  showInbox: false,
  data: [],
  error: null,
};

// const [showInbox, setInbox] = useState(false);

// const [data, setData] = useState([]);
// const [error, setError] = useState(null);

const emailSlice = createSlice({
  name: "email",
  initialState: initialEmailstate,
  reducers: {
    async fetchHandler(state) {
      state.showInbox = true;
      state.error = null;
      console.log(1);
      try {
        const response = await fetch(
          "https://auth-react-b1ea2-default-rtdb.firebaseio.com/email.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong...retrying");
        }

        const newData = await response.json();

        const transformedData = [];

        for (const key in newData) {
          transformedData.push({
            id: key,
            subject: newData[key].subject,
            email: newData[key].email,
          });
        }
        state.data = transformedData;
      } catch (error) {
        state.error = error.message;
      }
    },
  },
});

export default emailSlice.reducer;
export const emailActions = emailSlice.actions;
