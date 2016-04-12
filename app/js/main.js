
import React from 'react';
import ReactDOM from 'react-dom';
import career from './contents/career';

class Experiences extends React.Component{
  render(){
    console.log(this.props.experiences);
    var experiences = [];
    this.props.experiences.map(({jobTitle,during,company,detail},id)=>{
      experiences.push(
        <div className="item" key={id}>
            <div className="meta">
                <div className="upper-row">
                    <h3 className="job-title">{jobTitle}</h3>
                    <div className="time">{during}</div>
                </div>
                <div className="company">{company}</div>
            </div>
            <div className="details">
              {detail}
            </div>
        </div>
      );
    });
    return(
      <section className="section summary-section">
        <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
        {experiences}
      </section>
    );
  }
}
class Career extends React.Component{
  render(){
    return(
      <section className="section summary-section">
          <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
          <div className="summary">
              <p>{this.props.profile}</p>
          </div>
      </section>
    );
  }
}
ReactDOM.render(
  <div>
    <Career profile={career.profile}/>
    <Experiences experiences={career.experiences}/>
  </div>
  ,
  document.getElementById('main')
);
