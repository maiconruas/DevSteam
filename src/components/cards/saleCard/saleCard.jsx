import Image from 'next/image'
import style from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullprice, discountPrice, onAdd }){
    return(
        <div className={style.salecard}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300} />
            <div className={style.info}>
                <h3 className={style.title}>Ofertas exclusivas</h3>
                <div className={style.pricecard}>
                    <div className={style.percent}>-{discount}</div>
                    <div className={style.price}>
                        <p className={style.fullprice}>R${fullprice}</p>
                        <h4 className={style.discountprice}>R${discountPrice}</h4>
                    </div>
                </div>
                <Button fullWidth onClick={onAdd} >Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}