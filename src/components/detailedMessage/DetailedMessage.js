import React from "react";

const DetailedMessage = ({ messages, users }) => {
  return (
    <>
      <ul class="list-group">
        {messages.map((item) => (
          <li class="list-group-item" key={item._id}>
            <p>{item.text}</p>
            <p>{item.date}</p>
            <img src={item.picture} />
          </li>
        ))}
      </ul>
      <ul class="list-group">
        {users.map(
          (item) =>
            item._id === "622c69ea83c9e48a3e08c593" && (
              <li class="list-group-item">
                <p>{item.name}</p>
                <p>{item.city}</p>
                <p>{item.joined}</p>
                <img src={item.avatar} />
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default DetailedMessage;
