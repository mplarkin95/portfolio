import React from 'react';
import proPic from '../resources/pro_pic.png'

class Sidebar extends React.Component{

	constructor(props) {
		super(props);
		this.state={
			showMailTip: false,
			notification: ''
		}

		this.toolTipShow = this.toolTipShow.bind(this);
		this.toolTipHide = this.toolTipHide.bind(this);	
		this.emailClick = this.emailClick.bind(this)	
		
	}


	toolTipShow(){

		this.setState({showMailTip: true});
	}

	toolTipHide(){
		this.setState({showMailTip: false});
	}

	emailClick(e){
		var textField = document.createElement('textarea');
	    textField.innerText = 'mplarkin95@gmail.com';
	    document.body.appendChild(textField);
	    textField.select();
	    const copySuccess = document.execCommand('copy');
	    textField.remove()
	    this.displayNotification(copySuccess);
	    e.preventDefault();
	}


	displayNotification(success){
		if(success){
			this.setState({notification: 'Email Copied to Clipboard!'})
			setTimeout(() => this.setState({notification: ''}), 1500)
		}else{
			this.setState({notification: 'Your browser does not support this function. Copy: mplarkin95@gmail.com'})
			setTimeout(() => this.setState({notification: ''}), 3000)
		}
	}

	render(){

		const activeMail = this.state.showMailTip?'':'hidden';
		const notification = this.state.notification; 
		return(
			<div className="offset-md-1 col-md-3 side" >
				<p className='notification'> {notification} </p>
				<div className="col-md-10 offset-md-1 mb-3 text-center">
					<img src={proPic} className='img-fluid  rounded-circle'/>
					<h2> Matthew Larkin </h2>
					<h3> Porfolio Website </h3>
					<div className="row text-center " >
						
						<div className="col-md-4">
							<a href="https://www.linkedin.com/in/matthew-larkin-920358117/">
								<i className="fa fa-linkedin-square" aria-hidden="true"></i>
							</a>
						</div>
						<div className="col-md-4">
							<a href="https://github.com/mplarkin95">
								<i className="fa fa-github-square " aria-hidden="true"></i>
							</a>
						</div>
						<div className="col-md-4">
							<div className={'helper '+ activeMail} >Click here to copy my Email to your clipboard</div>
							<a href='' onMouseEnter={this.toolTipShow} onMouseLeave={this.toolTipHide} onClick={this.emailClick} >
								<i className="fa fa-envelope" aria-hidden="true"></i>
							</a>
						</div>
					</div>

				</div>
				<NavButton name="About" selected={this.props.selected} handleClick={this.props.handleClick("About")} />
				<NavButton name="Projects" selected={this.props.selected} handleClick={this.props.handleClick("Projects")} />
				<NavButton name="Resume" selected={this.props.selected} handleClick={this.props.handleClick("Resume")} />
				
			</div>

			)




	}
}



class NavButton extends React.Component{

	render(){
		const name = this.props.name;
		var btnName = "btn btn-large btn-block " + ((this.props.selected === name) ? 'btn-primary' : 'btn-secondary')
		return (<button className={btnName} onClick={this.props.handleClick}> {name} </button>)


	}



}

export default Sidebar;



