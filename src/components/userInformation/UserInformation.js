import React from "react";

const userInformation = ({ users }) => {
  return (
    <>
      <ul class="list-group">
        {users.map(
          (item) =>
            item.handle === "rtresise0" && (
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
