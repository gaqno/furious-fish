export interface App {
  darkMode: boolean,
  loading: boolean,
  cookiesConcent: boolean,
  logged: boolean,
  client: {
    user: {
      [key: string]: any
    }
  },
  sidebar: {
    template: string,
    show: boolean,
    data: {
      [key: string]: any
    }
  }
  slide: {
    show: boolean,
    template: string
    data: {
      [key: string]: any
    }
  },
  toast: {
    show: boolean,
    type: string,
    title: string,
    message: string,
    icon: string
    data: {
      [key: string]: any
    }
  },
  modal: {
    show: boolean,
    template: string,
    title: string,
    description: string,
    data: {
      [key: string]: any
    }
  }
}