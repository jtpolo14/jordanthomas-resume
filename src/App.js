import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LoggerInner from './LoggerInner';
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResumeHeader name="Jordan Thomas" /> 
        {/*<ResumeNav /> */}
        <Dashboard />
      </div>
    );
  }
}

export default App;

class ResumeHeader extends React.Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Jordan Thomas</h1>
          <p class="lead">Bloomington, IL | <a href="https://github.com/jtpolo14">Github</a> | <a href="mailto:jordanthomas91@live.com">jordanthomas91@live.com</a> | <a href="https://www.linkedin.com/in/jordan-thomas-56787851">LinkedIn</a></p>
        </div>
      </div>
    )
  }
}

function NavLink(props) {
  return (
    <a class="nav-link active" href="#" onClick={() => { props.UpdateNavGroup(props.name) }}>
      {props.name}
    </a>
  );
}

const navItemListObjective = [
  { id: 1, header: 'Objective', title: 'Summary', content: 'Result oriented thinker, with strong focus on excelling in team cultures aimed at rapid innovation, knowledge sharing, positive ROI and overall client satisfaction.' }
];
const navItemListEducation = [
  { id: 2, header: 'Education', title: 'Bachelors in Management Information Systems', content: 'Lamar University - Beaumont, Texas, US' }
];
const navItemListExperience = [
  {
    "id": 3,
    "header": "Experience",
    "title": "DXC Technology • Bloomington, IL • Jan 2014 – Present",
    "contentList": [
      "Served as lead developer for middleware application rewrite using .Net Framework(C#)",
      "Drive product upgrades involving external vendors/stakeholders and technical/functional business partners",
      "Implemented SharePoint solution to report Agile project health metrics, track deliverables and communicate across functional teams",
      "Utilized data analytics to propose/implement solution to reduce mainframe CPU usage by 17%",
      "Automated over 25% of test cases by implementing selenium automation scripts",
      "Led 6-member team responsible for managed service support of full stack application suite consisting of cross-platform technologies, cloud infrastructure, ESBs and Soap/REST Web Services",
      "Designed/Coordinated complete validation phase w/ more than 50+ active stakeholders",
      "Utilized technical background to influence and enable business partners, developers and QA to do their best work by facilitating discussion, decision making, and conflict resolution",
      "Maintained effective working relationship with key clients to facilitate new business opportunities"
    ]
  },
  {
    "id": 4,
    "header": "Experience",
    "title": "Open Source Classroom LLC • Bloomington, IL • Nov 2014 – Present",
    "contentList": [
      "Designed technical educational curriculum targeting grades 5 – 12",
      "Instruct courses focused on developing the student’s skills in Computer-\nAided Design, Programming and 3D Printing",
      "Create/Publish open-source visual content for educational purposes",
      "Responsible for maintaining technical systems related to business processes"
    ]
  }
];

const navItemListSkills = [
  {
    "id": 5,
    "header": "Skills/Projects",
    "title": "Requirements Gathering",
    "contentList": [
      "The art of documenting all rules and functionality needed to provide a service/product."
    ]
  },
  {
    "id": 6,
    "header": "Skills/Projects",
    "title": "Solution Design",
    "contentList": [
      "Ability to draft workflows by integrating available technology and business rules for a given requirement."
    ]
  }
];

class ResumeNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: navItemListObjective };
  }

  componentDidMount() {
    this.currentNavMember = 'Objective';
  }

  componentWillUnmount() {
    this.currentNavMember = 'Objective';
  }

  UpdateNavGroup = (newNavMember) => {
    var i = [];
    switch (newNavMember) {
      case 'Objective':
        i = navItemListObjective;
        break;
      case 'Experience':
        i = navItemListExperience;
        break;
      case 'Education':
        i = navItemListEducation;
        break;
      case 'Skills':
        i = navItemListSkills;
        break;
      default:
        i = [
          { id: 0, header: 'uninit', title: 'n/a', content: 'null' }
        ];
        break;
    }
    this.setState({
      items: i
    });
  }

  render() {
    return (
      <div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#" onClick={() => this.UpdateNavGroup('Objective')}>Objective</a>
          </li>
          <li class="nav-item">
            <NavLink name="Experience" UpdateNavGroup={this.UpdateNavGroup} />
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" onClick={() => this.UpdateNavGroup('Education')}>Education</a>
          </li>
          <li class="nav-item">
            <NavLink name="Skills" UpdateNavGroup={this.UpdateNavGroup} />
          </li>
        </ul>

        <ResumeNavGroup items={this.state.items} />
      </div>
    )
  }
}


function ResumeNavGroup(props) {

  return (
    <div id="nav-item-group" class="card-group shadow p-3 mb-5 bg-white rounded">

      <ResumeNavGroupBuilder items={props.items} />

    </div>
  );
}

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li class="list-group-item">{props.value}</li>;
}

function ContentList(props) {
  const contentList = props.content;
  const listItems = contentList.map((content) =>
    // Correct! Key should be specified inside the array.
    <ListItem value={content} />

  );
  return (
    <ul class="list-group list-group-flush">
      {listItems}
    </ul>
  );
}

function ResumeNavGroupBuilder(props) {

  const content = props.items.map((item) =>
    <div class="card text-black bg-light" key={item.id}>
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.content}</p>
      </div>
      {item.contentList &&
        <ContentList content={item.contentList} />
      }
    </div>
  );

  return (
    <div>
      {content}
    </div>
  );
}

class ResumeNavItem extends React.Component {
  render() {
    return (
      <div class="card text-white bg-primary">
        <div class="card-header">{this.props.itemName}</div>
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    )
  }
}