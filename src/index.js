import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import "./styles.css";

const webServers = [
  {
    value: "0.0.0.1.3",
    label: "east coast"
  },
  {
    value: "0.0.0.1.4",
    label: "west coast"
  },
  {
    value: "0.0.0.1.5",
    label: "central"
  }
];

const servers = [
  { value: "server 1", label: "server 1" },
  { value: "server 2", label: "server 2" },
  { value: "server 3", label: "server 3" }
];

const facilities = [
  { value: "teapot hospital", label: "teapot hospital" },
  { value: "hospital jon", label: "hospital jon" },
  { value: "foo", label: "foo" },
  { value: "bar", label: "bar" },
  { value: "hospital mike", label: "hospital mike" }
];

class App extends React.Component {
  state = {
    selectedWebServer: null,
    selectedServer: null,
    selectedFacilities: null
  };
  handleChangeWebServer = selectedWebServer => {
    this.setState({ selectedWebServer });
  };
  handleChangeServer = selectedServer => {
    this.setState({ selectedServer });
  };
  handleChangeFacilities = selectedFacilities => {
    this.setState({ selectedFacilities });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("SUBMITED SELECTION: ", this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Select
            value={this.state.selectedWebServer}
            onChange={this.handleChangeWebServer}
            options={webServers}
            isSearchable={true}
            placeholder="webServers"
          />
          <Select
            value={this.state.selectedServer}
            onChange={this.handleChangeServer}
            options={servers}
            placeholder="servers"
          />
          <Select
            value={this.state.selectedFacilities}
            onChange={this.handleChangeFacilities}
            options={facilities}
            isMulti={true}
            isSearchable={true}
            placeholder="facilities"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
