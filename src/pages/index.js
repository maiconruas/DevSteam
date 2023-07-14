import Head from 'next/head'

import style from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipografhy/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'
import { useState } from 'react'

export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProducts = (info) => {
    setCart([...cart, info])
  }

  const handleRemoveProducts =(pos) => {
    setCart(cart.filter((odj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProducts}/>
        <Container>
          <div className={style.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={style.salecontainer}>
              <SaleCard 
                image={'league-of-legends.jpg'}
                discount='30%'
                fullprice='199,90'
                discountPrice='99,90' 
                onAdd={() => 
                  handleAddProducts({
                     name: 'Leeague of Legends', 
                     price: 99.9, 
                     image: 'league-of-legends.jpg'
                    })}
                />
              <SaleCard 
                image={'dota-2.jpg'} 
                discount='40%'
                fullprice='299,90'
                discountPrice='119,90'
                onAdd={() => 
                  handleAddProducts({
                     name: 'Dota 2', 
                     price: 109.9, 
                     image: 'dota-2.jpg'
                    })}
                />
              <SaleCard 
                image={'valorant.jpg'} 
                discount='50%'
                fullprice='399,90'
                discountPrice='199,90'
                onAdd={() => 
                  handleAddProducts({
                     name: 'Valorant', 
                     price: 119.9, 
                     image: 'valorant.jpg'
                    })}
              />
            </div>
          </div>
          <div className={style.session}>
            <Subtitle>Outros jogos</Subtitle>
            <div className={style.gamecontainer}>
              <GameCard 
                onAdd={() => 
                  handleAddProducts({
                     name: 'Counter Strike', 
                     price: 99.9, 
                     image: 'counter-strike.jpg'
                    })}
              />
            </div>
          </div> 
        </Container>
      </div>
    </>
  )
}
