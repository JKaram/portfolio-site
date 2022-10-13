import React from "react";
import shatzen from "../../public/Portfolio/shatzen.png";
import mvp from "../../public/posts/shatzen-mvp.png";
import figma from "../../public/posts/shatzen-figma.png";

import Image from "next/image";
function Post() {
  return (
    <article className="post">
      <h1>Shatzen</h1>
      <div>WebSockets, React, Next.JS, Tailwind</div>

      <Image src={shatzen} alt="shatzen app" />

      <h2>Why Scrum poker?</h2>

      <blockquote>
        My old scrum team would rely on <a href="https://hatjitsu.toolforge.org/">hatjitsu</a> for estimating stories,
        but it was would lose connection quite often. So I took the oppertunity to create a new one using websockets.
      </blockquote>

      <h2>MVP</h2>
      <ul>
        <li>Create Room</li>
        <li>Enter a name</li>
        <li>Estimate stories</li>
      </ul>

      <h2>Designing the app</h2>
      <div>
        Starting with a sketch, and transfering into Figma. I do not like to write any code until I have a solid idea of
        what to it will look like. Its simple but for the MVP it works.
      </div>

      <Image src={mvp} alt="rough app design on graph paper" />
      <Image src={figma} alt="figma screenshot" />

      <h2>Web Sockets</h2>
      <div>
        Teams estimate in real time, so websockets are a must. This was my first time diving in. I really enjoyed the
        Socket.IO API. It took some trial and error firguring out what should the server and client should handle. For
        the most part the server stores a room object with the room status <code>estimating | revealing</code> and name.
        And the user object which has the name, colour, room and estimate. Socket.IO handles the connection and knows
        which sockets are in each room but its up to the developer to store everything else.
      </div>

      <h2>Client</h2>
      <div>
        I wrap the app in a global context with a couple of peices of state. I then made a useSocket hook to manage any
        actions a user makes to the server. I used Next.JS and tailwindcss, which is my go to tech stack. I love the
        built in router of Next.JS, it just makes sense and the file structure stays simple. I added an animated page
        transition with Framer Motion
      </div>

      <h2>Future considerations</h2>
      <div>
        As of today, I hit the MVP state. It works, and looks okay. BUT, I have a lot of plans.
        <ul>
          <li>
            A database : At the moment the server handles the rooms and users in a couple of arrays. This works for now,
            but wont scale for a large amount of users. I would like to add a database with a couple of tables that
            would handle a large scale.
          </li>
          <li>
            Better desgin: Im not exactly a designer. I took insperation from dribbble and cobled something together.
            But I would love to work with a UI/UX designer and really make it pop.
          </li>
          <li></li>
        </ul>
      </div>
    </article>
  );
}

export default Post;
