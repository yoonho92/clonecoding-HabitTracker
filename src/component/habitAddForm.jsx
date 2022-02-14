import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };
  return (
    <form className="add-form" onSubmit={onSubmit} ref={formRef}>
      <input
        type="text"
        className="add-input"
        placeholder="Habit"
        ref={inputRef}
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
