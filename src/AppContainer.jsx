import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BEMHelper from 'react-bem-helper';

import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
//import 'bootstrap/dist/css/bootstrap';
//import 'bootstrap/dist/css/bootstrap-theme';

require('./styles/index.scss');


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {

  render() {
    const classes = BEMHelper('root');

    return (
    <div >

    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
        {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">OHDSI</a>
            </div>

            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a className="page-scroll" href="#guideline">TARGETED USES CASES</a>
                    </li>
                   <li>
                        <a className="page-scroll" href="#portfolio">METHODS PORTFOLIO</a>
                    </li>
                </ul>
            </div>
            {/*<!-- /.navbar-collapse -->*/}
        </div>
        {/*<!-- /.container-fluid -->*/}
    </nav>

    <header style={{height:'600px'}}>
        <div className="header-content">
            <div className="header-content-inner">
                <h1 id="homeHeading">OHDSI Evidence Explorer</h1>
                <hr/>
                <p>The OHDSI Evidence Explorer is designed to help you find relevant, high-quality information to support your analytical needs. To begin, tell us more about you.</p>
                <a href="#guideline" className="btn btn-primary btn-xl page-scroll">I RECOMMEND CLINICAL GUIDELINES.</a>
                <a href="#researcher" className="btn btn-primary btn-xl page-scroll">I WORK IN A CLINICAL RESEARCH.</a>
            </div>
        </div>
    </header>

    <section className="bg-primary" id="guideline">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">As I develop guidelines, I want to...</h2>
                   <div className="col-lg-3 col-rt-6 text-center">
                    <div className="service-box">
                       <h3>Use Case #1: Drug Exploration</h3>
                        <p className="text-muted">I want to evaluate a drug profile with:<br/>
- 2 years on the market<br/>
- Initial reports of comparable or better outcomes than older drugs<br/>
- Recommend as alternative or additional line of treatment</p>
                    </div>
                </div>
                <div className="col-lg-3 col-rt-6 text-center">
                    <div className="service-box">
                        <h3>Use Case #2: Drug Recall/Warning</h3>
                        <p className="text-muted">I want to evaluate a drug profile with:<br/>
- 2 years on the market<br/>
- Initial reports of excessive side affects<br/>
- Recommend drug recall or additional consideration to guidelines<br/>
</p>
                    </div>
                </div>
            </div>
            <a href="#portfolio" className="btn btn-primary btn-xl page-scroll">NEXT &gt;&gt; </a>
        </div>
        </div>
    </section>

    <section id="researcher">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">As I work in clinical research, I want to...</h2>
                    <hr className="primary"/>
                </div>
            </div>
        </div>
        <div className="container">
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <h3>Use Case #3: Consideration of a Drug for a Study</h3>
                        <p className="text-muted">Evaluating a new drug with:<br/>
- 2 years on the market in an adult population<br/>
- Initial reports of comparable or better outcomes than older drugs and reduced side affects<br/>
- Consider for a randomized trial in pediatric population</p>

                        <a href="#portfolio" className="btn btn-primary btn-xl page-scroll">NEXT &gt;&gt; </a>
                    </div>
                </div>
        </div>
    </section>

<section id="portfolio">
	<div className="container">
		<div className="row">
			<div className="col-lg-8 col-lg-offset-2 text-center">
        <h2 className="section-heading">Methods Portfolio Overview</h2>
      </div>
      <hr className="primary"/>
    </div>
  </div>
	<div style={{clear:'both'}}>
		<label style={{float:'left'}}>Category:  </label>
		<select>
		  <option value="Diabetes">Psychiatric</option>
		  <option value="Depression">Depression</option>
		  <option value="Metabolic">Metabolic</option>
		  <option value="Neurological">Neurological</option>
		  <option value="Cardiovascular">Cardiovascular</option>
		  <option value="Oncology">Oncology</option>
		</select>
	</div>
	
	<div style={{clear:'both'}}>
		<label style={{float:'left'}}>Phenotype:  </label>
		<select>
		  <option value="Diabetes">Diabetes</option>
		  <option value="Depression">Depression</option>
		  <option value="Bi-Polar">Bi-Polar</option>
		  <option value="Schizophrenia">Schizophrenia</option>
		</select>
	</div>
	
	<h3>Summary</h3>
       <a href="#expectations" className="btn btn-primary btn-xl page-scroll">NEXT &gt;&gt; </a>

</section>
<section id="expectations">
	<div className="container">
		<div className="row">
			<div className="col-lg-8 col-lg-offset-2 text-center">
    </div>
		<h2>Expectations</h2>
		<h3>Source Data</h3>
			Source:  Truven Commercial Claims and Encounters<br/>
			Type:  Claims<br/>
			Number of Patients: <br/>
			Demographics: <br/>
			Time Span: <br/>
			Terminologies: <br/>
	</div>
	
	<div>
		<h3>Data Model</h3>
			Name:  OMOP CDM<br/>
			Version:  <br/>
			Link:  <br/>
	</div>
	
	<div>
		<h3>ETL</h3>
			Platform:  <br/>
			Source Code:  <br/> 
	</div>
	
	<div>
		<h3>Analytical Methods</h3>
				Name:  <br/>
				Study Design:  <br/>
						Controls:  <br/>
						Inclusion/ Exclusion:  <br/>
						Confidence Interval Calibrations:  <br/>
				Implementation:  <br/>
				Literature References:  <br/>
	</div>
	
	<div id="author" style={{clear:'both',minHeight:'400px'}}>
		<h3>Author</h3>
		<div style={{float:'left',width:'10%'}}>
			<img src="img\schuemie.jpg" height="200px"/>
		</div>
		<div style={{float:'left',width:'87%',paddingLeft:'3%'}}>
			<h4>Martijn Schuemie, PhD</h4>
			<h5>Director, Epidemiology Analytics</h5>
			<h5>Janssen Research and Development</h5>
			<p>Dr. Martijn Schuemie received his Master's degree in Economics with a major in Information Management. He completed his PhD in Computer Science on the topic of human-computer interaction in virtual reality systems for phobia treatment. In the past, he was employed as an assistant professor at the Erasmus University Medical Center of Rotterdam, where he started by researching the application of text-mining the scientific literature in support of molecular biology. He later moved to pharmacoepidemiology, and was one of the lead investigators in the EU-ADR project tasked with building a prototype drug safety signal detection system using population-level observational data. In 2012 he received a one-year fellowship of the FDA and became an active OMOP investigator.</p>

			<p>In 2013 Martijn joined Janssen Research and Development, where he continued his research in OMOP and later in OHDSI. He is working on methods for estimating average effect sizes in observational, calibration of effect size estimates, and patient level prediction, as well as supporting the conversion of databases to the OMOP CDM. Within OHDSI, Martijn has developed the White Rabbit and Rabbit in a Hat tools, and is contributing to the OHDSI Methods Library. Martijn is heading the OHDSI Population-Level Methods workgroup together with Marc Suchard.
			</p>
		</div>
	</div>
  <a href="http://ec2-54-70-205-229.us-west-2.compute.amazonaws.com:3485/?outcome=Insomnia" className="btn btn-primary btn-xl page-scroll" target="_blank">NEXT &gt;&gt; </a>
  </div>
</section>
<section className="bg-primary" id="feedback">
	<div className="container">
	<div className="row">
	
	<h2>Related Research</h2>
	<p>For more information about this phenotype checkout the content below.</p>
	
	<ul>
		<li>Additional Reserach Link 1</li>
		<li>Additional Reserach Link 2</li>
		<li>Additional Reserach Link 3</li>
	</ul>
	
	<hr/>
	
	<h2>Questions or Comments?</h2>
	<p>Contact the author of this study by completing the form below.</p>

	<form action="mailto:someone@example.com" method="post" encType="text/plain">
	First Name:<br/>
	<input type="text" name="name"/><br/>

	Last Name:<br/>
	<input type="text" name="name"/><br/>

	E-mail:<br/>
	<input type="text" name="mail"/><br/>

	Comment:<br/>
	<input type="text" name="comment" size="50"/><br/><br/>
	<input type="submit" value="Send"/>
	<input type="reset" value="Reset"/>
	</form>
</div>
</div>
</section>

    </div>
    );
  }
}

function mapStateToProps(state) {

  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

/*
    */
