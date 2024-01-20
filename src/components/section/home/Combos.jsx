import React, { useEffect, useState } from 'react'
import './combos.css'
import axios from 'axios'
const Combos = () => {
    const [combo , setCombo]=useState([])

    useEffect(()=>{
        axios.get('https://easy-red-moth-ring.cyclic.app/combo')
        .then((res)=>setCombo(res.data))
        .catch((err)=>console.log(err))
    },[])
  return (
    <>
    <div className="combos">
        <div className="combo-container">
                {
                    combo.map((item)=>{
                        return(
                            <div className="combo-image">
                                <img src={item.img} alt="" />
                            </div>
                        )
                    })
                }
        </div>
    </div>
    </>
  )
}

export default Combos