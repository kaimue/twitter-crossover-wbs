import React from "react";

const Messages = ({ messages }) => {
  console.log(messages);
  return (
    <>
      <ul class="list-group">
        {messages.map((item) => (
          <li class="list-group-item" key={item.user_id}>
            <p>{item.text}</p>
            <p>{item.date}</p>
            <img src={item.picture} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Messages;
