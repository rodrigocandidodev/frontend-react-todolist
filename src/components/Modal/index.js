import React, {useState} from 'react';
import  {FiX} from 'react-icons/fi';
import './style.css';
import api from '../../services/api';

export default function Modal(props){
    const [listName, setListName] = useState('');
    const [userName, setUserName] = useState('');
    function handleRegister(e){
        e.preventDefault();
        const data = {listName, userName};
        try{
            const response = await api.post('list',data);
            alert(`Lista ${response.data.listName} cadastrada com sucesso!`);
        }catch(error){
            alert('Erro ao cadastrar lista!');
        }
    }
    return(
        <div 
            className="modal" 
            style={{
            opacity: props.show?'1':'0',
            zIndex: props.show?'1000':'-1000'
        }}>
            <div className="modal-content">
                <div class="modal-header">
                    <h3>Nova Lista</h3>
                    <span 
                        title="Fechar"
                        onClick={props.close}
                    >
                        <FiX size={16} color="rgb(98, 29, 162)"></FiX>
                    </span>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <div className="form-row">
                                <input 
                                type="text" 
                                value={listName}
                                onChange={e=>setListName(e.target.value)}
                                placeholder="Nome da lista"/>
                            </div>
                            <div className="form-row">
                                <input 
                                type="text" 
                                value={userName}
                                onChange={e=>setUserName(e.target.value)}
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