const ErrorView = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <fieldset className="fieldSet">
        <legend>404</legend>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '4rem',
          }}
        >
          OOP's Nothing here.
        </h1>
        <p style={{ textAlign: 'center' }}>
          Please navigate back by using the navigation at the top.
        </p>
      </fieldset>
    </div>
  );
};

export default ErrorView;
