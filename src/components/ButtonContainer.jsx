import React from 'react'
import styles from"./ButtonContainer.module.css"

function ButtonContainer({onButtonClick}) {
    const buttonName=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <div>
<div className={styles.buttonContainer}>
    {buttonName.map((buttonName )=><button className={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>)}

</div>
    </div>
  )
}

export default ButtonContainer
