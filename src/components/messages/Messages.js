import React from "react";

const Messages = ({ messages }) => {
  console.log(messages);
  return (
    <>
      <ul class="list-group">
        {messages.map((item) => (
          <li class="list-group-item" key={item._id}>
            <p>{item.text}</p>
            <img src={item.picture} />

            <p>Posted at: {item.createdAt}</p>
            <p>Posted by: {item.user_handle}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Messages;
