import React, { Component } from "react";
import "./Table-style.css";
class Tables extends Component {
  data = [
    {
      name: "Aditya Singh",
      skill: 15,
      patience: 16,
      time: 10,
      avail: 12,
      cs: 18,
      level: 2
    },
    {
      name: "Ishika Singla",
      skill: 15,
      patience: 16,
      time: 10,
      avail: 12,
      cs: 18,
      level: 2
    },
    {
      name: "Siddhartha Sankar",
      skill: 15,
      patience: 16,
      time: 10,
      avail: 12,
      cs: 18,
      level: 2
    },
    {
      name: "Bhavuk Garg",
      skill: 15,
      patience: 16,
      time: 10,
      avail: 12,
      cs: 18,
      level: 2
    },
    {
      name: "Saloni",
      skill: 15,
      patience: 16,
      time: 10,
      avail: 12,
      cs: 18,
      level: 2
    }
  ];
  columns = [
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Skill",
      accessor: "skill"
    },
    {
      Header: "Patience",
      accessor: "patience"
    },
    {
      Header: "Time",
      accessor: "time"
    },
    {
      Header: "Availability",
      accessor: "avail"
    },
    {
      Header: "Conversational Skills",
      accessor: "cs"
    },
    {
      Header: "Level",
      accessor: "level"
    }
  ];

  render() {
    return (
      <div className="container-fluid">
        <table>
          <tr>
            <th>Name</th> <th>Skill</th>
            <th>Patience</th>
            <th>Time</th>
            <th>Availability</th>
            <th>Conversational Skills</th>
            <th>Level</th>
          </tr>
          <tr>
            <td>{this.data[0].name}</td>
            <td>{this.data[0].skill}</td>
            <td>{this.data[0].patience}</td>
            <td>{this.data[0].time}</td>
            <td>{this.data[0].avail}</td>
            <td>{this.data[0].cs}</td>
            <td>{this.data[0].level}</td>
          </tr>
          <tr>
            <td>{this.data[1].name}</td>
            <td>{this.data[1].skill}</td>
            <td>{this.data[1].patience}</td>
            <td>{this.data[1].time}</td>
            <td>{this.data[1].avail}</td>
            <td>{this.data[1].cs}</td>
            <td>{this.data[1].level}</td>
          </tr>
          <tr>
            <td>{this.data[2].name}</td>
            <td>{this.data[2].skill}</td>
            <td>{this.data[2].patience}</td>
            <td>{this.data[2].time}</td>
            <td>{this.data[2].avail}</td>
            <td>{this.data[2].cs}</td>
            <td>{this.data[2].level}</td>
          </tr>
          <tr>
            <td>{this.data[3].name}</td>
            <td>{this.data[3].skill}</td>
            <td>{this.data[3].patience}</td>
            <td>{this.data[3].time}</td>
            <td>{this.data[3].avail}</td>
            <td>{this.data[3].cs}</td>
            <td>{this.data[3].level}</td>
          </tr>
          <tr>
            <td>{this.data[4].name}</td>
            <td>{this.data[4].skill}</td>
            <td>{this.data[4].patience}</td>
            <td>{this.data[4].time}</td>
            <td>{this.data[4].avail}</td>
            <td>{this.data[4].cs}</td>
            <td>{this.data[4].level}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Tables;
