import React,{useState} from 'react';
import  {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import ModalUpdateTask from '../../components/ModalUpdateTask';

export default function List(){
    const [isShowing, setIsShowing]     = useState();
    return(
        <div className="list-container">
            <section className="list">
                <div className="title-box">
                    <h1>To-Do List</h1>
                </div>
                <div className="actions-box">
                    <a href="/"><FiArrowLeft/>Voltar</a>
                </div>
            </section>
            <div className="list-panel">
                <div className="list-box">
                    <div className="list-header">
                        <h3 className="list-title">Lista de Segunda</h3>
                    </div>
                    <div className="list-body">
                        <ul>
                            <li onClick={
                                ()=>setIsShowing(true)
                            }>Item</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ModalUpdateTask
                data={{name:'Lista'}}
                show={isShowing}
                close={()=>setIsShowing(false)}
            />
        </div>
    );
}