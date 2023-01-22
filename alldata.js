function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <div className="data-header-container">
        <h5>All Data in Store</h5>
      </div>
      <div className="json-data-container">{JSON.stringify(ctx)}</div>
      <br />
    </>
  );
}
