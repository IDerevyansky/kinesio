import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './text-box.css';

class TextBox extends Component {

    render(){

        

        return(
            <div className="container m-auto container-text-box">
                <div className={ this.props.orientation == 'y'?'content-text-box-column':'content-text-box-row' }>
                    <div className={ this.props.orientation == 'y'?'title-text-box-column':'title-text-box-row' }>
                        <h2>Что нужно знать о кинезиологии</h2>
                    </div>
                    <div className= { this.props.orientation == 'y'?'textBody-text-box-column':'textBody-text-box-row' } >
                        <p>
                        Он вкалывал все эти десять лет не для того, чтобы теперь замедлить ход к уже близкой победе. 
                        Я хочу поздравить вас всех с успешным завершением нашего дела – проект «Хинни и Смит» закончился 
                        очень удачно для всех нас. Теперь мы можем сами доставлять товары во все уголки страны, сокращая 
                        расходы и увеличивая прибыль. – Рик поднял бокал с шампанским. – За замечательную команду с блестящим 
                        будущим! Он сделал глоток из бокала под гул всеобщего одобрения.<br/><br/>

                        Его взгляд снова скользнул к отчужденной, но удивительно милой незнакомке. Девушка все так же стояла 
                        в дверях, наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно исправить. Мужчина 
                        опять потер подбородок. Следующей задачей было слияние с компанией «Спорта Ко» и удвоение объема продаж 
                        их спортивного оборудования. Разумеется, было весьма рискованно предпринимать этот шаг так быстро, 
                        но Рик не мог ждать.
                        </p>
                            <div className="m24-t">
                                <Link to="" className="more"><p>Подробнее</p></Link>
                            </div>
                    </div>
                </div>    

            </div>
        )
    }
}

export default TextBox;