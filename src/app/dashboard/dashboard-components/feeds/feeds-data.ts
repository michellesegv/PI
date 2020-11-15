export interface Feed {
  class: string,
  icon: string,
  task: string,
  time: string
}

export const Feeds: Feed[] = [

  {
    class: 'bg-info',
    icon: 'far fa-bell',
    task: 'Recibiste 10 soles',
    time: 'Justo ahora'
  },
  {
    class: 'bg-success',
    icon: 'ti-server',
    task: 'Tu saldo ha sido actualizado',
    time: 'Hace 2 horas'
  },
  {
    class: 'bg-warning',
    icon: 'ti-shopping-cart',
    task: 'Realizaste un compra en Promart',
    time: '31 de Octubre'
  },
  {
    class: 'bg-danger',
    icon: 'ti-user',
    task: 'Registra tus datos faltantes',
    time: '30 de Octubre'
  },
  // {
  //     class: 'bg-primary',
  //     icon: 'far fa-user',
  //     task: 'You have new password.',
  //     time: '21 May'
  // },
]
