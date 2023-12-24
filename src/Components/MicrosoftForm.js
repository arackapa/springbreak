export default function MicrosoftForm() {
  return (
    <div>
      <h2>Microsoft Forms Embedded</h2>
      <div className="google-forms">
        <iframe
          title="Microsoft Forms"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=oazanZ84sUyhEwgb5swl_L6XCYXwm39BqZKud20RjfhUNkZWSjdNNlZQOEFLTlRYOVZUVlRWT0JGWC4u&embed=true"
          width="100%"
          height="100%"
          style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
          allowFullScreen
          webkitAllowFullScreen
          mozAllowFullScreen
          msAllowFullScreen
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
}
