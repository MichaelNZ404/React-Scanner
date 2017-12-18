import React, { Component } from "react";

export default class Timer extends Component {
  let myVar = setInterval(myTimer, 1000);
  render() {
    const { children } = this.props;

    return (
      <div style={styles.header}>
        <div style={styles.title}>{children}</div>
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: "skyblue",
    padding: 15
  },
  title: {
    textAlign: "center",
    color: "white"
  }
};
