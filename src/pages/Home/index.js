import React, {useState} from 'react';
import  {FiPlus} from 'react-icons/fi';

import './styles.css';
import Modal from '../../components/Modal';

export default function Home(){
    const [isShowing, setIsShowing]     = useState();

    return(
        <div className="all-lists-container">
            <section className="list">
                <div className="title-box">
                    <h1>To-Do Lists</h1>
                </div>
                <div className="actions-box">
                    <button 
                        className="button" 
                        id="register-button" 
                        type="button"
                        onClick={
                            ()=>setIsShowing(true)
                        }
                    >
                        <FiPlus size={24} color="#fff" />
                    </button>
                </div>
                
                <div className="lists-panel">
                    <ul>
                        <a href="/list">
                            <li>
                                <div className="list-content">
                                    <div className="list-name">
                                        <strong>Lista de Segunda</strong>
                                    </div>
                                    <div className="list-creator-box">
                                        <span>R</span>
                                        <p>Rodrigo</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
                
            </section>
            <Modal
                show={isShowing}
                close={()=>setIsShowing(false)}
            />
        </div>
        
    );
}