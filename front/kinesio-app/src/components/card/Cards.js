import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Card from "./Card";
import './Card.css';

const url = "https://iderevyansky.github.io/kinesio/back/pageStorage.json";

class Cards extends Component {

    constructor(props){
        super(props);
        this.state = {
            section_three_title:"",
            section_three_content:[],
            link_more_ru:"",
            appointment:""
        }
    }


    componentDidMount = async () => {

        // const respons = fetch(url, {method:"GET"}).then(res => res.json()).then(data => data.pages);
        const respons = await fetch(url).then(pages => pages.json());
        this.setState({
          section_three_title:respons.pages.main.section.Body.section_three.section_three_title,
          section_three_content:respons.pages.main.section.Body.section_three.content,
          link_more_ru:respons.pages.main.section.options.link_more_ru,
          appointment:respons.pages.main.section.options.appointment
        });
        // console.log(this.state.section_three_content[0].title);
      }

    render(){

        let Cards=this.state.section_three_content.map(
            
            (Cards, i)=>{
      
             return(
              <Card
                key={i}
                title={Cards.title}
                text_body={Cards.text_body}
                statusPopUp={this.props.statusPopUp}
                appointment={this.state.appointment} 
              />
             )
      
            });

        return(

            <div className="section-content three">

                      <div className="section-title title-margin m24-b" dangerouslySetInnerHTML={{__html: this.state.section_three_title}}></div>


                          <div className="section-three__card">

                            {Cards}

                          </div>


                      <div className="center-text-in-block">
                        <Link  to={'/product'} rel="noopener noreferrer" ><p className="more">{this.state.link_more_ru}</p></Link>
                      </div>

            </div>

        )
    }
}

export default Cards;