import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonActionSheet } from '@ionic/react';

import React, { useState } from 'react';

import Header from '../components/Header';



const Horarios: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  return (
    <IonPage>
      <Header pageName="Horarios"/>
      <IonContent>
        <IonButton className="but-onibus"  onClick={() => setShowActionSheet(true)} expand="block">Aulas</IonButton>
        <IonButton className="but-onibus"  onClick={() => setShowActionSheet(true)} expand="block">Onibus</IonButton>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[{
            text: 'Delete',
            role: 'destructive',
            handler: () => {
              console.log('Delete clicked');
            }
          }, {
            text: 'Share',
            handler: () => {
              console.log('Share clicked');
            }
          }, {
            text: 'Play (open modal)',
            
            handler: () => {
              console.log('Play clicked');
            }
          }, {
            text: 'Favorite',
            
            handler: () => {
              console.log('Favorite clicked');
            }
          }, {
            text: 'Cancel',
            
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]}
        >

        </IonActionSheet>
        
      </IonContent>
    </IonPage>
  );
};

export default Horarios;


