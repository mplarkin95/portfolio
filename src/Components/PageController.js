import React from 'react';
import resume from './Matt_Larkin_resume.svg'
import About from './About'
import Projects from './Projects'

class PageController extends React.Component{
	constructor(props) {
		super(props);
		
	}
	render(){
			let pageRendered = '';
		if(this.props.selected === "About"){
			pageRendered = (<About />);
		}else if(this.props.selected === "Projects"){
			pageRendered =( <Projects />);
		}else {
			pageRendered =( <div className='col-md-7'> <img src={resume} className="row justify-center resume"  alt="resume" /> </div>);
			
		}

		return(
			<div className="col-md-7 ">
				{pageRendered}
			</div>

			)



	}

}










export default PageController;