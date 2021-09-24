import styled from 'styled-components'



const Containercabe = styled.div`
display: flex;
flex-direction:column;
margin: 0px;
background-color: black;
color: white;
header {
    display:flex;
    justify-content: flex-end;
    margin: 10px;
    font-family: 'Roboto';
    
}

header > div {
    display: flex;
    flex-direction: row;
    margin-top: initial;
}

.Filho > div {
    margin-left: 6px;
}

.Filho {

    margin-left: 12em;

}
.Containercabe{
    margin-top: initial;
    color: black;
}

.sub-cabecalho> div {
    margin-left: 5em;

}

`
export { Containercabe }