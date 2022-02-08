/** @format */

function hello({ username, clickHandler }) {
  return (
    <div>
      Hello
      <h1>{username}</h1>
      <button type="button" onClick={() => clickHandler("50")}>
        clickHandler
      </button>
    </div>
  );
}

export default hello;
