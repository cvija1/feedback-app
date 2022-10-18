import React, { useState, useEffect, useContext } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [firstRender, setfirstRender] = useState(true);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (!firstRender) {
      if (text === "") {
        setMessage("");
        setDisabled(true);
      } else if (text !== "" && text.trim().length < 10) {
        setDisabled(true);
        setMessage("Text must be at least 10 characters");
      } else {
        setMessage("");
        setDisabled(false);
      }
    } else {
      setfirstRender(false);
    }
  }, [text]);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, {
          text,
          rating,
        });
      } else {
        addFeedback({ text, rating });
      }

      setText("");
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            value={text}
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
          />

          <Button type="submit" version="primary" isDisabled={disabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
