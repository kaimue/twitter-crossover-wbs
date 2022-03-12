import React from "react";

const userInformation = ({ users }) => {
  return (
    <>
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

export default userInformation;
