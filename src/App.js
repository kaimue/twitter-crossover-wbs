import React, { useState, useEffect } from "react";
import Messages from "./components/messages/Messages";
import Searchbar from "./components/searchbar/Searchbar";
import UserInformation from "./components/userInformation/UserInformation";

const App = () => {
  const [messagesArr, setMessagesArr] = useState([]);
  const [displayedMessages, setDisplayedMessages] = useState([messagesArr]);
  const [usersArr, setUsersArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usersLoading, setUsersLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      const url = "https://mini-twitter-crossover.herokuapp.com/messages";
      try {
        setLoading(true);
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(`Nachrichten${data}`);
          setMessagesArr(data);
          console.log(messagesArr);
          setLoading(false);
        } else {
          console.error("Fetch error!");
          alert("Something went wrong");
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const url = "https://mini-twitter-crossover.herokuapp.com/users";
      try {
        setUsersLoading(true);
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUsersArr(data);
          setUsersLoading(false);
        } else {
          console.error("Fetch error!");
          alert("Something went wrong");
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchUsers();
  }, []);

  const searchMessages = (searchValue) => {
    console.log(searchValue);
    if (searchValue < 2) {
      setDisplayedMessages(messagesArr);
      // } else if ((searchValue = "")) {
      //   setMessagesArr(messagesArr);
    } else {
      const filtered = messagesArr.filter((element) =>
        element.text.includes(searchValue)
      );
      console.log(`gefiltert${filtered}`);
      setDisplayedMessages(filtered);
    }
  };

  return (
    <>
      <div class="container">
        <br></br>
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
            {usersLoading ? (
              <p>loading ...</p>
            ) : (
              <UserInformation users={usersArr} />
            )}
          </div>
          <div class="col">
            <Searchbar searchValueCallback={searchMessages} />

            {loading ? (
              <p>loading ...</p>
            ) : (
              <Messages messages={displayedMessages} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
