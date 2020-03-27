import React from 'react';
import  {FiPlus} from 'react-icons/fi';

import './styles.css';

export default function Home(){
    return(
        <div className="all-lists-container">
            <section className="list">
                <div className="title-box">
                    <h1>To-Do Lists</h1>
                </div>
                <div className="actions-box">
                    <button className="button" type="button">
                        <FiPlus size={16} color="#ccc" />
                    </button>
                </div>
                <div className="lists-panel">
                    <ul>
                        <li>
                            <strong>Lista de Segunda</strong>
                            <div className="list-creater-box">
                                <span>R</span>
                                <p>Rodrigo</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}