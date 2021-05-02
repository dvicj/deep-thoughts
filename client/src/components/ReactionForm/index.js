import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_REACTION } from '../../utils/mutations';

const ReactionForm = ({ thoughtId }) => {

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            // add thought to database
            await addReaction({
            variables: { reactionBody, thoughtId }
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    const [addReaction, { error }] = useMutation(ADD_REACTION);

  return (
    <div>
      <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch">
        <textarea
            placeholder="Here's a new reaction..."
            value={reactionText}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactionForm;