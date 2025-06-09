export interface Client {
  id: string;
  name: string;
  phone: string;
  address: string;
}

export const CLIENTS: Client[] = [
  { id: '1', name: 'Daniel Monteiro Vasques', phone: '(11) 98765-4321', address: 'Avenida Monte Azul' },
  { id: '2', name: 'Helena Costa e Silva', phone: '(11) 98765-4321', address: 'Travessa Bela Vista' },
  { id: '3', name: 'Fernando Albuquerque Nogueira', phone: '(11) 98765-4321', address: 'Rua dos Ipês' },
  { id: '4', name: 'Amanda Freitas Moreira', phone: '(11) 98765-4321', address: 'Alameda Aurora' },
  { id: '5', name: 'Rafael Duarte Campos', phone: '(11) 98765-4321', address: 'Avenida Dom Pedro II' },
  { id: '6', name: 'Lucas Tavares de Mendonça', phone: '(11) 98765-4321', address: 'Rua das Rosas Brancas' },
  { id: '7', name: 'Beatriz Antunes Ferreira', phone: '(11) 98765-4321', address: 'Travessa Sol Nascente' },
  { id: '8', name: 'Isabela Fontes da Cunha', phone: '(11) 98765-4321', address: 'Rua José de Alencar' },
  { id: '9', name: 'Gabriela Luz Ribeiro', phone: '(11) 98765-4321', address: 'Avenida São Cristóvão' },
];