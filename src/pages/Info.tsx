import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import Header from '../components/Header';
import './Info.css'



const Info: React.FC = () => {
  return (
    <IonPage>
      <Header pageName="Info"/>
      <IonContent>

        <img className="img-responsive" src="assets/img/UFFS.jpg" alt="image"></img>
          <p className='text-center'>A Universidade Federal da Fronteira Sul é uma instituição de ensino superior 
            pública brasileira sediada na cidade de Chapecó, em Santa Catarina, e com 
            campi nas cidades de Cerro Largo, Erechim, Laranjeiras do Sul, Passo Fundo e Realeza.
        </p>


        <img className="img-responsive2" src="assets/img/logo_fronteira.png" alt="image"></img>

        <p className='text-center2'>Aplicativo desenvolvido pela empresa junior, conhecida como fronteiratec que 
            atua desde 2014 na universidade.
        </p>
        
      
   
      </IonContent>
    </IonPage>
  );
};

export default Info;