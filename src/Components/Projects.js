import React from 'react';
import ProjectList from '../resources/ProjectList.json';

class Projects extends React.Component{
	constructor(props) {
		super(props);
		const data = ProjectList.Projects ;
		this.state = {data: data, modalExpanded: false, modalKey: null};

	}

	expandModal(index){
		this.setState({modalExpanded: true, modalKey: index})
	}

	closeModal(){
		this.setState({modalExpanded: false, modalKey:null})
	}

	render(){
		const projs = this.state.data.map((item,key)=> (<div className='col-md-5 mb-2'><Project key={key} handleExpand={this.expandModal.bind(this,key)} data={item} /></div>));
		const overlayClass = this.state.modalExpanded?'show':'';
		const expanded = this.state.modalExpanded?(<ProjectModal handleClose={this.closeModal.bind(this)} data={this.state.data[this.state.modalKey]} />): ''
		return(
			<div>
			
			<div className={'overlay '+ overlayClass} >{expanded} </div>
			<div className='row'>
			{projs}
			</div>
			</div>
			)
	}


}



class Project extends React.Component{



	render(){
		const thumbnailSrc = require('../resources/projectImages/'+this.props.data.Images[0])
		return(
			<div className='card' >
				<div className='card-header'>
					<h2 >{this.props.data.Name}</h2>
				</div>
				<div className='card-block'>
					<div className="card-img" >
						<img src={thumbnailSrc} className='img-fluid' />
					</div>
				</div>
				<div className='card-block'>
					<h5>{this.props.data.Role}</h5>
					<p className="card-text">{this.props.data.BriefDescription}</p>
				</div>
				<div className='card-block'>
					<div className='row'>
						<div className='col-md-8'>
							<h6> Technologies used: </h6>
							<ul> 
								{this.props.data.Technologies.map((item) => (<li> {item} </li>))}
							</ul>
						</div>

						<div className='col-md-4 mt-4'>
							<button onClick={this.props.handleExpand} className='btn btn-primary' >More </button>
						</div>
					</div>
				</div>

				</div>
					
				
						
		)
	}
}

class ProjectModal extends React.Component{
	constructor(props) {
		super(props);
		const imgArray = this.props.data.Images.map((img) => (require('../resources/projectImages/'+ img)));
		this.state={imgArray: imgArray, imgIndex: 0 }

		this.picturePrev= this.picturePrev.bind(this);
		this.pictureNext= this.pictureNext.bind(this);
	}

	picturePrev(e){
		const newIndex = this.state.imgIndex -1;
		this.setState({imgIndex: newIndex});
		e.preventDefault();
	}

	pictureNext(e){
		const newIndex = this.state.imgIndex +1;
		this.setState({imgIndex: newIndex});
		e.preventDefault();
	}





	render(){
		const imgSrc = this.state.imgArray[this.state.imgIndex];
		const prevHidden = (this.state.imgIndex===0)?'hidden':'';
		const nextHidden = (this.state.imgIndex +1 === this.state.imgArray.length)?'hidden':''
		const imgCaption = (this.props.data.ImageCaptions[this.state.imgIndex])
		return(
			<div className='col-md-12 my-modal'> 
				<div className='col-md-10 offset-md-1 mt-4'>
					
					<h1> {this.props.data.Name} </h1>
					<div className='row mt-3 mb-2'>
						<div className='col-md-10 '>
						  <div className={"carousel-control-prev "+ prevHidden}  onClick={this.picturePrev} >
						    <span className="carousel-control-prev-icon"  aria-hidden="true"></span>
						  </div>
						  	<div className={"carousel-control-next "+ nextHidden}  onClick={this.pictureNext} >
						    <span className="carousel-control-next-icon"  aria-hidden="true"></span>
						  </div>
						<img className='img-fluid' src={imgSrc} />
						</div>

						<div className='col-md-2 '>

							<h3>{this.props.data.Role}</h3>
							<hr />
							<h5>Technologies used: </h5>
							<ul > 
								{this.props.data.Technologies.map((item) => (<li> {item} </li>))}
							</ul>
							<hr className='mb-5' />

							{imgCaption?(<i>{imgCaption}</i>):''}

						</div>

					</div>

					<div className='col-md-10'>
						<h2>About {this.props.data.Name}</h2>
						<ul>
							{this.props.data.LongerDescription.map((item) => (<li> {item} </li>))}
						</ul>
						{this.props.data.WebsiteLink!==''?(<p>Check this project out: <a href={this.props.data.WebsiteLink}>{this.props.data.WebsiteLink}</a></p>):''}
						{this.props.data.github?(<p> Source code: <a href={'https://github.com/mplarkin95/'+this.props.data.github}>Github page </a></p>):''}
					</div>

					
					<button className='btn btn-block' onClick={this.props.handleClose}> Close </button>
				</div>
			</div>
		)
	}

}

export default Projects;