import './Bio.css';
import { Links } from './Links';
import { Contato } from './Contato';
import { Footer } from './Footer';

export function Bio () {
    return (
    <>


 <div >
       <div className='profile-container'>
         <img className="profile" src="../assets/img/marcosmourao.jpeg" alt="Foto de Marcos Mourão" />
       </div>
        
        <h1>Olá, sou Marcos Mourão</h1>
        <p>Estou atualmente focado em aprofundar meus conhecimentos em desenvolvimento Frontend e Full Stack, e registrando cada etapa do meu aprendizado<a href="https://blog.mourao.info"> AQUI no meu blog</a> e futuramente em um portifólio.</p>
        <p>Te convido a vir aqui mais vezes. Pois este espaço está em constante desenvolvimento. Um forte abraço.</p>
        <hr/>

</div>




       
    </>
    );

}