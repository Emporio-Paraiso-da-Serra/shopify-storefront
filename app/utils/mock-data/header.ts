import { STORE_BASE_URL } from '~/constants/store'
import type { HeaderType } from '~/types/header'

export const MOCK_HEADER: HeaderType = {
  shop: {
    id: 'gid://shopify/Shop/1',
    name: 'Store',
    description: 'A mock store for testing',
    primaryDomain: { url: STORE_BASE_URL },
    brand: { logo: { image: { url: `${STORE_BASE_URL}/layout/logo.svg` } } },
  },
  menu: {
    id: 'gid://shopify/Menu/main-menu',
    items: [
      {
        id: 'gid://shopify/MenuItem/area-gourmet',
        title: 'Área Gourmet',
        url: `${STORE_BASE_URL}/categoria/area-gourmet`,
        items: [
          {
            id: 'gid://shopify/MenuItem/bancadas',
            title: 'Bancadas',
            url: `${STORE_BASE_URL}/categoria/area-gourmet/bancadas`,
          },
          {
            id: 'gid://shopify/MenuItem/bancos-e-banquetas',
            title: 'Bancos e Banquetas',
            url: `${STORE_BASE_URL}/categoria/area-gourmet/bancos-e-banquetas`,
          },
          {
            id: 'gid://shopify/MenuItem/carrinhos',
            title: 'Carrinhos',
            url: `${STORE_BASE_URL}/categoria/area-gourmet/carrinhos`,
          },
          {
            id: 'gid://shopify/MenuItem/mesas',
            title: 'Mesas',
            url: `${STORE_BASE_URL}/categoria/area-gourmet/mesas`,
          },
        ],
      },
      {
        id: 'gid://shopify/MenuItem/sala',
        title: 'Sala',
        url: `${STORE_BASE_URL}/categoria/sala`,
        items: [
          {
            id: 'gid://shopify/MenuItem/balcoes',
            title: 'Balcões',
            url: `${STORE_BASE_URL}/categoria/sala/balcoes`,
          },
          {
            id: 'gid://shopify/MenuItem/mesas-de-centro',
            title: 'Mesas de centro',
            url: `${STORE_BASE_URL}/categoria/sala/mesas-de-centro`,
          },
          {
            id: 'gid://shopify/MenuItem/racks',
            title: 'Racks',
            url: `${STORE_BASE_URL}/categoria/sala/racks`,
          },
        ],
      },
      {
        id: 'gid://shopify/MenuItem/quarto',
        title: 'Quarto',
        url: `${STORE_BASE_URL}/categoria/quarto`,
        items: [
          {
            id: 'gid://shopify/MenuItem/armarios',
            title: 'Armários',
            url: `${STORE_BASE_URL}/categoria/quarto/armarios`,
          },
          {
            id: 'gid://shopify/MenuItem/baus',
            title: 'Baús',
            url: `${STORE_BASE_URL}/categoria/quarto/baus`,
          },
          {
            id: 'gid://shopify/MenuItem/beliches',
            title: 'Beliches',
            url: `${STORE_BASE_URL}/categoria/quarto/beliches`,
          },
          {
            id: 'gid://shopify/MenuItem/cabeceiras',
            title: 'Cabeceiras',
            url: `${STORE_BASE_URL}/categoria/quarto/cabeceiras`,
          },
          {
            id: 'gid://shopify/MenuItem/camas',
            title: 'Camas',
            url: `${STORE_BASE_URL}/categoria/quarto/camas`,
          },
          {
            id: 'gid://shopify/MenuItem/comodas',
            title: 'Cômodas',
            url: `${STORE_BASE_URL}/categoria/quarto/comodas`,
          },
          {
            id: 'gid://shopify/MenuItem/mesas-cabeceira',
            title: 'Mesa cabeceira',
            url: `${STORE_BASE_URL}/categoria/quarto/mesas-cabeceira`,
          },
        ],
      },
      {
        id: 'gid://shopify/MenuItem/sala-de-jantar',
        title: 'Sala de Jantar',
        url: `${STORE_BASE_URL}/categoria/sala-de-jantar`,
        items: [
          {
            id: 'gid://shopify/MenuItem/balcoes',
            title: 'Balcões',
            url: `${STORE_BASE_URL}/categoria/sala-de-jantar/balcoes`,
          },
          {
            id: 'gid://shopify/MenuItem/32',
            title: 'Cadeiras',
            url: `${STORE_BASE_URL}/categoria/sala-de-jantar/cadeiras`,
          },
          {
            id: 'gid://shopify/MenuItem/cristaleiras',
            title: 'Cristaleiras',
            url: `${STORE_BASE_URL}/categoria/sala-de-jantar/cristaleiras`,
          },
          {
            id: 'gid://shopify/MenuItem/mesas',
            title: 'Mesas',
            url: `${STORE_BASE_URL}/categoria/sala-de-jantar/mesas`,
          },
        ],
      },
      {
        id: 'gid://shopify/MenuItem/4',
        title: 'Categorias',
        url: `${STORE_BASE_URL}/categorias`,
        items: [],
      },
    ],
  },
}
