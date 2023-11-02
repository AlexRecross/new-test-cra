import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Input, Label, Button, Row, InputGroup,
} from 'reactstrap';

function createNewAuthor(authorName) {
  if (!/^[A-Z][A-Za-z]+\s+[A-Z][A-Za-z]/.test(authorName)) {
    return console.log('Please enter your FullName');
  }
  return { id: uuidv4(), name: authorName };
}

export default function AddNewAuthor({ addAuthorToList }) {
  // "Add New Author" functionality
  const [newAuthorName, setNewAuthorName] = useState('');

  const onChangeHandler = (event) => {
    setNewAuthorName(event.target.value);
  };
  function addNewAuthor() {
    const newAuthor = createNewAuthor(newAuthorName);
    setNewAuthorName('');
    addAuthorToList(newAuthor);
  }
  return (
    <Row xs="1" className="mt-1">
      <InputGroup>
        <Label
          className="mt-2"
          for="authorName"
        >
          <b>Add author:</b>
        </Label>
        <Input
          className="mt-1 mx-1"
          bsSize="sm"
          id="authorName"
          name="authorName"
          placeholder="Enter new author name"
          type="text"
          value={newAuthorName}
          onChange={onChangeHandler}
        />
        <Button
          className="mt-1 col-2 rounded-end-pill"
          color="warning"
          outline
          size="sm"
          type="button"
          onClick={addNewAuthor}
        >
          Add
        </Button>
      </InputGroup>
    </Row>
  );
}
