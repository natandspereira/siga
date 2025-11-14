import * as Style from './RegisterTask.style';
import { GlobalStyle } from '../../../components/DefaultStyle/Default.style';

import Div from '../../../components/Div/Div';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Logo from '../../../assets/img/logo/logo.svg';

import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

// STYLE SELECT
const customStyleSelect = {
    control: (base) => ({
        ...base,
        backgroundColor: '#333',
        borderRadius: '10px',
        height: '40px',
        cursor: 'pointer',
    }),

    singleValue: (base) => ({
        ...base,
        color: '#fff',
        textAlign: 'center',
        width: '100%',
    }),

    placeholder: (base) => ({
        ...base,
        color: '#fff',
        textAlign: 'center',
        width: '100%',
    }),

    menu: (base) => ({
        ...base,
        backgroundColor: '#333',
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
    })
}


export default function RegisterTask() {
    // FORMULÁRIO
    const [tarefa, setTarefa] = useState('');
    const [prioridade, setPrioridade] = useState(null);
    const [statu, setStatu] = useState(null);
    const [prazo, setPrazo] = useState(null);

    // FEEDBACK / CONTROLE
    const [loadingCadastro, setLoadingCadastro] = useState(false);
    const [errorCadastro, setErrorCadastro] = useState(null);
    const [tarefas, setTarefas] = useState([]);
    const [mensagemSucesso, setMensagemSucesso] = useState('');

    // OPÇÕES
    const prioridades = [
        { value: 'Alta', label: 'Alta' },
        { value: 'Média', label: 'Média' },
        { value: 'Baixa', label: 'Baixa' },
    ]

    const status = [
        { value: 'Pendente', label: 'Pendente' },
        { value: 'Em andamento', label: 'Em andamento' },
        { value: 'Concluida', label: 'Concluída' }
    ]

    // REMOVER MENSAGEM DE ERRO
    useEffect(()=>{
            let tempo;

            if(errorCadastro) tempo = setTimeout(()=>setErrorCadastro(null), 3000);

            return () => clearTimeout(tempo);
        }, [errorCadastro]);

    // REMOVER MENSAGEM DE SUCESSO
    useEffect(()=>{
        let tempo;

        if(mensagemSucesso) tempo = setTimeout(()=>setMensagemSucesso(null), 3000);

        return () => clearTimeout(tempo);
    }, [mensagemSucesso]);

    // FUNÇÃO CADASTRO
    async function cadastrarTarefas(e) {
        e.preventDefault();

        if (
            !tarefa.trim() ||
            !prioridade ||
            !statu ||
            !prazo
        ) {
            setErrorCadastro('Por favor, preencha todos os campos!');
            return;
        };

        setErrorCadastro(null);
        setMensagemSucesso('');
        setLoadingCadastro(true);

        const controller = new AbortController();
        const signal = controller.signal;

        setLoadingCadastro(true);
        setErrorCadastro(null);

        try {
            const resp = await axios.post(
                'http://localhost:5000/criar',
                {
                    tarefa,
                    prioridade: prioridade?.value,
                    status: statu?.value,
                    prazo
                },
                { signal }
            );

            console.log('Tarefa cadastrada:', resp.data);
            setTarefas((prev) => [...prev, resp.data]);
            setTarefa('');
            setPrioridade(null);
            setStatu(null);
            setPrazo('');

            setMensagemSucesso('Cadastro feito com sucesso!');
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Cadastro cancelado');
            } else {
                console.error('Erro ao cadastrar tarefa', error)
                setErrorCadastro('Erro ao cadastrar tarefa!');
            }
        } finally {
            setLoadingCadastro(false);
        }
    }
    return (
        <Style.Container>
            <GlobalStyle />
            <Div
                width={'400px'}
                height={'400px'}
            >
                <Style.Form onSubmit={cadastrarTarefas}>
                    <Style.DivLogoForm>
                        <Style.LogoForm src={Logo} alt="Logo" />
                    </Style.DivLogoForm>

                    <Input
                        type={'text'}
                        txtPlaceholder={'nome'}
                        colorPlaceholder={'#fff'}
                        width={'250px'}
                        height={'40px'}
                        backgroundColor={'#333'}
                        value={tarefa}
                        name={'tarefa'}
                        id={'tarefa'}
                        onChange={(e) => setTarefa(e.target.value)}
                    />
                    <Select
                        options={prioridades}
                        value={prioridade}
                        onChange={(opcao) => setPrioridade(opcao)}
                        styles={customStyleSelect}
                        placeholder={'Prioridade'}
                    />
                    <Select
                        options={status}
                        value={statu}
                        onChange={(opcao) => setStatu(opcao)}
                        styles={customStyleSelect}
                        placeholder={'Status'}
                    />
                    <Input
                        type={'date'}
                        txtPlaceholder={'nome'}
                        color={'#fff'}
                        width={'250px'}
                        height={'40px'}
                        backgroundColor={'#333'}
                        value={prazo}
                        name={'prazo'}
                        id={'prazo'}
                        onChange={(e) => setPrazo(e.target.value)}
                    />
                    <Button
                        type={'submit'}
                        width={'250px'}
                        height={'40px'}
                        backgroundColor={'#333'}
                        color={'#fff'}
                        txt={loadingCadastro ? 'Cadastrando...' : 'Cadastrar'}
                    />
                </Style.Form>
            </Div>

            {/* DIV ERRO */}
            {(errorCadastro) && (
                <Style.DivError>{errorCadastro}</Style.DivError>
            )}

            {/* DIV SUCESSO */}
            {(mensagemSucesso) && (
                <Style.DivSucesso>{mensagemSucesso}</Style.DivSucesso>
            )}
        </Style.Container>
    )
}