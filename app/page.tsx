"use client";

import { useEffect, useState } from "./components/reacts";

export default function Home() {
  const [isAuthed, setIsAuthed] = useState(false);

  // try {
  //   if (localStorage.getItem("authToken") === null) {
  //     setIsAuthed(false);
  //   }
  // } catch {
  //   console.log("Something went wrong");
  // }

  return (
    <main id="mainel">
      <div id="loginBox">
        {!isAuthed && (
          <div className="toast">
            <div className="alert alert-info">
              <span>New message arrived.</span>
            </div>
          </div>
        )}
        <div className="font-mono font-bold text-2xl">
          <p>This is a test</p>
        </div>
      </div>
    </main>
  );
}
