import React from 'react';
import  {FiX} from 'react-icons/fi';
import './style.css';

export default function ModalUpdateTask(props){
    return(
        <div 
            className="modal" 
            style={{
            opacity: props.show?'1':'0',
            zIndex: props.show?'1000':'-1000'
        }}>
            <div className="modal-content">
                <div class="modal-header">
                    <h3>Lista</h3>
                    <span 
                        title="Fechar"
                        onClick={props.close}
                    >
                        <FiX size={16} color="rgb(98, 29, 162)"></FiX>
                    </span>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <div className="form-row">
                                <input 
                                type="text" 
                                placeholder="Nome da lista"/>
                            </div>
                            <div className="form-row">
                                <input 
                                type="text" 
                                placeholder="Nome do criador"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button 
                        title="Cancelar" 
                        type="button"
                        onClick={props.close}
                    >Cancelar</button>
                    <button 
                        title="Salvar" 
                        type="submit"
                    >Salvar</button>
                </div>
            </div>
        </div>
    );
}