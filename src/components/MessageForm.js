import React from "react";
import Attachment from "./svg/Attachment";

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  return (
    <form className="message_form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button className="btn">Send</button>
      </div>
    </form>
  );
};

export default MessageForm;
