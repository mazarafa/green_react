import React from 'react';
import { IonMenuToggle, IonItem, IonIcon, IonLabel, IonMenu, IonContent, IonList, IonListHeader, IonAvatar} from '@ionic/react';
import './Menu.css'


const routes = {
    appPages: [
        {
            title: "Feed",
            path: "/feed",
            icon:'Home'
           
        },
        {
            title: "Notas",
            path: "/notas",
            icon:'create'
        },
        {
            title: "Horarios",
            path: "/Horarios"

        },
        {
            title: "Material Didatico",
            path: "/Material"
        },
        {
            title: "Mensagem CCR",
            path: "/Mensagem"
        },
        {
            title: "Biblioteca",
            path: "/biblioteca"
        },
        
        {
            title: "Ru",
            path: "/ru"
        },
        {
            title: "Info UFFS",
            path: "/Info"
        },
        {
            title: "Configuracao",
            path: "/Configuracao"
        },
        

    ]
}

interface Pages {
    title: string,
    path: string,
    routerDirection?: string
}


const Menu: React.FC = () => {

    return (
        <IonMenu contentId="main">
            <IonContent>
                <IonList lines="none" className="menu-header">
                    <IonListHeader color="primary">
                        <IonLabel className="header-text">
                            <IonAvatar>
                                <img src="assets/img/maria.jpg" />
                            </IonAvatar>
                            <h1>Maria.julia</h1>
                            <h3>Campus Chapecó</h3>
                        </IonLabel>
                    </IonListHeader>
                    {
                        routes.appPages
                        .map(p => (
                            <IonMenuToggle auto-hide="false" key={p.title}>
                                <IonItem  routerLink={p.path} routerDirection="none">
                                    <IonLabel>{p.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        ))
                    }
                </IonList>
            </IonContent>
        </IonMenu>
    );
}


export default Menu