import React, { useState, useEffect } from "react";
import DetailedMessage from "./components/detailedMessage/DetailedMessage";
import Messages from "./components/messages/Messages";
import Searchbar from "./components/searchbar/Searchbar";
import UserInformation from "./components/userInformation/UserInformation";

const App = () => {
  const messagesArr = [
    {
      text: "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum",
      date: "6/11/2018",
      user_id: 1,
      picture: "http://dummyimage.com/170x146.png/ff4444/ffffff",
    },
    {
      text: "molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
      date: "8/1/2016",
      user_id: 2,
      picture: "http://dummyimage.com/122x151.png/5fa2dd/ffffff",
    },
    {
      text: "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio",
      date: "12/3/2015",
      user_id: 3,
      picture: "http://dummyimage.com/236x165.png/ff4444/ffffff",
    },
    {
      text: "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis",
      date: "28/3/2018",
      user_id: 4,
      picture: "http://dummyimage.com/117x213.png/dddddd/000000",
    },
    {
      text: "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede",
      date: "14/2/2017",
      user_id: 5,
      picture: "http://dummyimage.com/138x171.png/5fa2dd/ffffff",
    },
    {
      text: "lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu",
      date: "5/9/2018",
      user_id: 6,
      picture: "http://dummyimage.com/229x211.png/ff4444/ffffff",
    },
    {
      text: "amet diam in magna bibendum imperdiet nullam orci pede venenatis non",
      date: "26/8/2019",
      user_id: 7,
      picture: "http://dummyimage.com/128x101.png/cc0000/ffffff",
    },
    {
      text: "consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede",
      date: "12/5/2020",
      user_id: 8,
      picture: "http://dummyimage.com/232x228.png/cc0000/ffffff",
    },
    {
      text: "lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla",
      date: "12/4/2016",
      user_id: 9,
      picture: "http://dummyimage.com/115x138.png/dddddd/000000",
    },
    {
      text: "porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at",
      date: "29/6/2021",
      user_id: 10,
      picture: "http://dummyimage.com/123x217.png/cc0000/ffffff",
    },
  ];

  const users = [
    {
      id: 1,
      name: "Reine Tresise",
      handle: "rtresise0",
      city: "Concepción del Bermejo",
      joined: "5/6/2021",
      avatar: "http://dummyimage.com/145x100.png/dddddd/000000",
      bio: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    },
    {
      id: 2,
      name: "Dale Pioch",
      handle: "dpioch1",
      city: "Lérida",
      joined: "7/31/2021",
      avatar: "http://dummyimage.com/212x100.png/dddddd/000000",
      bio: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    },
    {
      id: 3,
      name: "Jesselyn Starie",
      handle: "jstarie2",
      city: "Vihāri",
      joined: "3/25/2021",
      avatar: "http://dummyimage.com/223x100.png/ff4444/ffffff",
      bio: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    },
    {
      id: 4,
      name: "Lewiss Yerrall",
      handle: "lyerrall3",
      city: "Salaspils",
      joined: "9/6/2021",
      avatar: "http://dummyimage.com/238x100.png/dddddd/000000",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus",
    },
    {
      id: 5,
      name: "Leicester Franciskiewicz",
      handle: "lfranciskiewicz4",
      city: "Al Marsá",
      joined: "8/19/2021",
      avatar: "http://dummyimage.com/133x100.png/ff4444/ffffff",
      bio: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    },
    {
      id: 6,
      name: "Ashla Rousel",
      handle: "arousel5",
      city: "Ekerö",
      joined: "8/27/2021",
      avatar: "http://dummyimage.com/149x100.png/cc0000/ffffff",
      bio: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    },
  ];

  return (
    <div class="container">
      <br></br>
      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <UserInformation users={users} />
        </div>
        <div class="col">
          <Searchbar />
          <Messages messages={messagesArr} />
        </div>
      </div>
    </div>
  );
};

export default App;
