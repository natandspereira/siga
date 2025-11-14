import * as Style from './DashBoardUser.style';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Select from 'react-select';

// LOGO
import Logo from '../../../assets/img/logo/logo.svg';
//

// COMPONENTS
import Div from '../../../components/Div/Div';
import { GlobalStyle } from '../../../components/DefaultStyle/Default.style';
import Input from '../../../components/Input/Input';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
//

// ICONS
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineAddBox, MdOutlineDeleteForever } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
//

// STYLE SELECT
const customStyleSelect = {
    control: (base) => ({
        ...base,
        backgroundColor: '#333',
        borderRadius: '5px',
        height: '30px',
        cursor: 'pointer',
        width: '250px',
        margin:'10px 0'
    }),
    singleValue: (base) => ({
        ...base,
        color: '#fff',
        textAlign: 'center',
        fontSize: '.8rem'
    }),
    placeholder: (base) => ({
        ...base,
        color: '#fff',
        textAlign: 'center',
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: '#333',
        textAlign: 'center',
        fontSize: '.8rem'
    }),
    option: (base, state) => ({
        ...base,
        color: '#fff',
        backgroundColor: state.isSelected
            ? '#00bfff'
            : state.isFocused
                ? '#444'
                : '#222',
        cursor: 'pointer',
    }),
};
//
export default function DashBoardUser() {
    // FORMULARIO
    const handleForm = () => {
        window.open("/criar", "__blank", "noopener,noreferrer");
    };
    //

    // ESTADOS
    const [tarefas, setTarefas] = useState([]);
    const [errorTarefas, setErrorTarefas] = useState(null);
    const [loadingTarefas, setLoadingTarefas] = useState(true);
    const [errorDeletarTarefas, setErrorDeletarTarefas] = useState(null);
    const [mensagem, setMensagem] = useState('');
    const [pesquisar, setPesquisar] = useState('');
    const [erroEditar, setErroEditar] = useState('');
    const [tarefaSelecionada, setTarefaSelecionada] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);
    //

    // OPÇÕES SELECT
    const prioridades = [
        { value: 'Alta', label: 'Alta' },
        { value: 'Média', label: 'Média' },
        { value: 'Baixa', label: 'Baixa' },
    ];

    const status = [
        { value: 'Pendente', label: 'Pendente' },
        { value: 'Em andamento', label: 'Em andamento' },
        { value: 'Concluída', label: 'Concluída' },
    ];
    //

    // CARREGAR TAREFAS
    const carregarTarefas = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/tarefas');
            setTarefas(resp.data);
            setErrorTarefas(null);
        } catch (error) {
            console.error('Erro ao buscar tarefas', error);
            setErrorTarefas('Erro ao carregar tarefas!');
        } finally {
            setLoadingTarefas(false);
        }
    };

    useEffect(() => {
        carregarTarefas();
    }, []);
    //

    // DELETAR TAREFA
    const handleDeletarTarefa = async (id) => {
        if (!id) {
            setErrorDeletarTarefas('ID da tarefa não informado!');
            return;
        }

        try {
            const resp = await axios.delete(`http://localhost:5000/deletar/${id}`);
            setMensagem(resp.data.message || 'Tarefa deletada com sucesso!');
            setTarefas((prev) => prev.filter((t) => t.id !== id));
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
            setErrorDeletarTarefas('Erro ao deletar tarefa!');
        }
    };
    //

    // EDITAR TAREFA
    const handleEditarTarefa = async () => {
        if (!tarefaSelecionada?.id) {
            setErroEditar('ID da tarefa é obrigatório!');
            return;
        }

        const { id, tarefa, prioridade, status: stat, prazo } = tarefaSelecionada;

        try {
            const resp = await axios.patch('http://localhost:5000/editar', {
                id,
                tarefa,
                prioridade,
                status: stat,
                prazo,
            });

            setMensagem(resp.data.message || 'Tarefa atualizada com sucesso!');
            carregarTarefas();
            setMostrarModal(false);
        } catch (error) {
            console.error('Erro ao editar tarefa:', error);
            setErroEditar('Erro ao editar tarefa!');
        }
    };
    //

    // ABRIR MODAL
    const abrirModalEditar = (tarefa) => {
        setTarefaSelecionada({ ...tarefa });
        setMostrarModal(true);
        setMensagem('');
        setErroEditar('');
    };
    //

    if (loadingTarefas) return <p>Carregando tarefas...</p>;

    return (
        <>
            <GlobalStyle />
            {/* HEADER */}
            <Div
                width="100vw"
                height="50px"
                padding="10px 0"
                backgroundColor="#333"
                display="flex"
                justifyContent="space-between"
                borderRadius={'0'}
            >
                <Style.Img src={Logo} alt="Logo" />
                <Style.DivIconUser>
                    <FaRegUserCircle size={40} color="#fff" />
                </Style.DivIconUser>
            </Div>

            {/* MENU */}
            <Div
                display="grid"
                gridTemplateColumns="20% 10% 10% 10% 25% 25%"
                alignItems="center"
                height="50px"
                padding="10px 20px"
                fontWeight="500"
                borderRadius={'0'}
            >
                <p>Minhas tarefas</p>
                <p>Prioridade</p>
                <p>Status</p>
                <p>Prazo</p>

                <Style.LabelIcons>
                    <MdOutlineAddBox size={20} color="#05AB41" onClick={handleForm} />
                    <p>Adicionar</p>
                    <MdOutlineDeleteForever size={20} color="#FD0A0A" />
                    <p>Remover</p>
                    <BiEditAlt size={20} color="#007BFF" />
                    <p>Editar</p>
                    <FaCalendarAlt size={20} color="#F59E0B" />
                    <p>Calendário</p>
                </Style.LabelIcons>

                <Style.LabelInput>
                    <Input
                        type="text"
                        txtPlaceholder="Pesquisar atividade"
                        width="200px"
                        height="40px"
                        border="2px solid #333"
                        value={pesquisar}
                        onChange={(e) => setPesquisar(e.target.value)}
                    />
                    <AiOutlineSearch size={20} color="#000" />
                </Style.LabelInput>
            </Div>

            {/* MAIN */}
            <Div
                display="grid"
                gridTemplateColumns="20% 10% 10% 10% 25% 25%"
                padding="10px 20px"
                margin="5px 0"
                borderRadius={'0'}
            >
                <Style.DivMain>
                    {tarefas.map((tarefa) => (
                        <Style.DivTarefa key={tarefa.id}>
                            <span>{tarefa.tarefa}</span>
                            <span>{tarefa.prioridade}</span>
                            <span>{tarefa.status}</span>
                            <span>{new Date(tarefa.prazo).toLocaleDateString('pt-BR')}</span>
                            <Style.LabelMain>
                                <MdOutlineAddBox size={20} color="#05AB41" onClick={handleForm} />
                                <MdOutlineDeleteForever size={20} color="#FD0A0A" onClick={() => handleDeletarTarefa(tarefa.id)} />
                                <BiEditAlt size={20} color="#007BFF" onClick={() => abrirModalEditar(tarefa)} />
                                <FaCalendarAlt size={20} color="#F59E0B" />
                            </Style.LabelMain>
                        </Style.DivTarefa>
                    ))}
                </Style.DivMain>
            </Div>

            {/* ERROS */}
            {(errorTarefas || errorDeletarTarefas) && (
                <Style.DivError>{errorTarefas || errorDeletarTarefas}</Style.DivError>
            )}

            {/* MODAL */}
            {mostrarModal && (
                <Modal
                    isOpen={mostrarModal}
                    widthOverlay="100vw"
                    heightOverlay="100vh"
                    widthBody="300px"
                    heightBody="310px"
                    flexDirectionBody="column"
                    onClose={() => setMostrarModal(false)}
                >
                    <Style.LogoModal src={Logo} alt="Logo" />
                    <Input
                        type="text"
                        value={tarefaSelecionada?.tarefa || ''}
                        onChange={(e) => setTarefaSelecionada((prev) => ({ ...prev, tarefa: e.target.value }))}
                        width="250px"
                        height="30px"
                        backgroundColor="#333"
                        color="#fff"
                        borderRadius="5px"
                        margin="10px 0"
                    />

                    <Select
                        options={prioridades}
                        value={prioridades.find((p) => p.value === tarefaSelecionada?.prioridade)}
                        onChange={(opt) => setTarefaSelecionada((prev) => ({ ...prev, prioridade: opt.value }))}
                        styles={customStyleSelect}
                        placeholder="Prioridade"
                    />

                    <Select
                        options={status}
                        value={status.find((s) => s.value === tarefaSelecionada?.status)}
                        onChange={(opt) => setTarefaSelecionada((prev) => ({ ...prev, status: opt.value }))}
                        styles={customStyleSelect}
                        placeholder="Status"
                    />

                    <Input
                        type="date"
                        value={tarefaSelecionada?.prazo?.split('T')[0] || ''}
                        onChange={(e) => setTarefaSelecionada((prev) => ({ ...prev, prazo: e.target.value }))}
                        width="250px"
                        height="30px"
                        backgroundColor="#333"
                        color="#fff"
                        borderRadius="5px"
                        margin="10px 0"
                    />

                    <Button
                        txt="Atualizar"
                        width="200px"
                        height="30px"
                        backgroundColor="#333"
                        color="#fff"
                        borderRadius="20px"
                        onClick={handleEditarTarefa}
                    />
                </Modal>
            )}
        </>
    );
}
