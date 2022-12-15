import { Button } from "react-bootstrap";

import Inbox from "../components/mailbox/Inbox";
import { emailActions } from "../store/EmailFunction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const InboxPage = () => {
  //   const [showInbox, setInbox] = useState(false);

  //   const [data, setData] = useState([]);
  //   const [error, setError] = useState(null);

  //   const fetchDataHandler = async () => {
  //     setInbox(true);
  //     setError(null);
  //     console.log(1);
  //     try {
  //       const response = await fetch(
  //         "https://auth-react-b1ea2-default-rtdb.firebaseio.com/email.json"
  //       );

  //       if (!response.ok) {
  //         throw new Error("Something went wrong...retrying");
  //       }

  //       const data = await response.json();

  //       const transformedData = [];

  //       for (const key in data) {
  //         transformedData.push({
  //           id: key,
  //           subject: data[key].subject,
  //           email: data[key].email,
  //         });
  //       }
  //       setData(transformedData);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  var Inboxdata, showInboxState;
  useEffect(() => {
    async () => {
      Inboxdata = await useSelector((state) => state.email.data);
      showInboxState = await useSelector((state) => state.email.showInbox);
    };
  }, []);

  return (
    <main>
      {showInboxState && (
        <ul>
          {Inboxdata.map((item) => (
            <Inbox
              key={item.id}
              id={item.id}
              subject={item.subject}
              email={item.email}
            ></Inbox>
          ))}
        </ul>
      )}
    </main>
  );
};

export default InboxPage;
